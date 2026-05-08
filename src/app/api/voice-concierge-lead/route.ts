import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { normalizePhoneToE164 } from '@/lib/phone';
import { vapiCreateOutboundCall } from '@/lib/vapi-outbound';

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/** Comma- or semicolon-separated addresses in CONTACT_EMAIL_BCC */
function parseBccEnv(raw: string | undefined): string | string[] | undefined {
  if (!raw?.trim()) return undefined;
  const parts = raw
    .split(/[,;]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .filter((s) => isValidEmail(s));
  if (parts.length === 0) return undefined;
  return parts.length === 1 ? parts[0] : parts;
}

function assistantIdForSource(source: string | undefined): string | undefined {
  if (source === 'voice-concierge') {
    return process.env.NEXT_PUBLIC_VAPI_GENERAL_ASSISTANT_ID?.trim();
  }
  if (source === 'voice-agent') {
    return process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID?.trim();
  }
  return undefined;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, source } = body as {
      name?: string;
      email?: string;
      company?: string;
      phone?: string;
      source?: string;
    };

    const sourceLabel =
      source === 'voice-concierge'
        ? '/'
        : source === 'voice-agent'
          ? '/voice-agent-for-manufacturers'
          : source || 'unknown';

    if (!name?.trim() || !email?.trim() || !company?.trim()) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, company' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email.trim())) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const phoneRaw = phone?.trim() ?? '';
    const e164 = phoneRaw ? normalizePhoneToE164(phoneRaw) : null;
    if (phoneRaw && !e164) {
      return NextResponse.json(
        {
          error:
            'Invalid phone number. Use international format with country code, e.g. +85292903426.',
        },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS in .env');
      return NextResponse.json(
        { error: 'Email service not configured.' },
        { status: 503 }
      );
    }

    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
    const bcc = parseBccEnv(process.env.CONTACT_EMAIL_BCC);
    const subject = `[Convertree] Concierge demo lead (${sourceLabel}) — ${name.trim()}`;

    const phoneLine = phoneRaw ? `Phone: ${phoneRaw}${e164 ? ` (normalized ${e164})` : ''}` : 'Phone: (not provided)';

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: toEmail,
      ...(bcc ? { bcc } : {}),
      replyTo: email.trim(),
      subject,
      text: `
New concierge demo opt-in:

Page: ${sourceLabel}
Name: ${name.trim()}
Email: ${email.trim()}
Company: ${company.trim()}
${phoneLine}

---
Sent from Convertree concierge lead form
      `.trim(),
      html: `
        <h2>Concierge demo lead</h2>
        <p><strong>Page:</strong> ${escapeHtml(sourceLabel)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></p>
        <p><strong>Company:</strong> ${escapeHtml(company.trim())}</p>
        <p><strong>Phone:</strong> ${phoneRaw ? escapeHtml(phoneRaw) : '(not provided)'}</p>
        <hr>
        <p><small>Sent from Convertree concierge lead form</small></p>
      `,
    });

    let outboundInitiated = false;
    let outboundSkippedReason:
      | 'not_configured'
      | 'no_phone'
      | 'api_error'
      | undefined;

    /** Only returned when developing or VAPI_DEBUG_CLIENT=1 — never full raw body in prod by default */
    let outboundVapi:
      | {
          callId?: string;
          status?: string;
          type?: string;
          endedReason?: string;
        }
      | undefined;

    const vapiKey = process.env.VAPI_API_KEY?.trim();
    const phoneNumberId = process.env.VAPI_PHONE_NUMBER_ID?.trim();
    const assistantId = assistantIdForSource(source);

    if (!e164) {
      outboundSkippedReason = 'no_phone';
    } else if (!vapiKey || !phoneNumberId || !assistantId) {
      outboundSkippedReason = 'not_configured';
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          '[voice-concierge-lead] Outbound skipped: set VAPI_API_KEY, VAPI_PHONE_NUMBER_ID, and assistant env for this source.'
        );
      }
    } else {
      const result = await vapiCreateOutboundCall(vapiKey, {
        assistantId,
        phoneNumberId,
        customerNumber: e164,
      });
      if (result.ok) {
        outboundInitiated = true;
        console.info('[voice-concierge-lead] Vapi create call OK:', {
          callId: result.debug.callId,
          status: result.debug.status,
          type: result.debug.type,
          endedReason: result.debug.endedReason,
          rawPreview: result.debug.rawPreview?.slice(0, 1200),
        });
        const exposeClientDebug =
          process.env.NODE_ENV === 'development' ||
          process.env.VAPI_DEBUG_CLIENT === '1';
        if (exposeClientDebug) {
          outboundVapi = {
            callId: result.debug.callId,
            status: result.debug.status,
            type: result.debug.type,
            endedReason: result.debug.endedReason,
          };
        }
      } else {
        outboundSkippedReason = 'api_error';
        console.error('[voice-concierge-lead] Vapi outbound failed:', {
          message: result.message,
          httpStatus: result.httpStatus,
          details: result.details,
        });
      }
    }

    return NextResponse.json({
      success: true,
      outboundInitiated,
      outboundSkippedReason,
      ...(outboundVapi ? { outboundVapi } : {}),
    });
  } catch (error) {
    console.error('Voice concierge lead error:', error);
    return NextResponse.json(
      { error: 'Failed to send. Please try again.' },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
