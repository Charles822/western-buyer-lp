import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, source } = body as {
      name?: string;
      email?: string;
      company?: string;
      source?: string;
    };

    const sourceLabel =
      source === 'voice-concierge'
        ? '/'
        : source === 'voice-agent'
          ? '/voice-agent-for-manufacturers'
          : source || 'unknown';

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email.trim())) {
      return NextResponse.json(
        { error: 'Invalid email address' },
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

    const companyTrimmed = company?.trim() ?? '';
    const companyLine = companyTrimmed
      ? `Company: ${companyTrimmed}`
      : 'Company: (not provided)';

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
${companyLine}

---
Sent from Convertree concierge lead form
      `.trim(),
      html: `
        <h2>Concierge demo lead</h2>
        <p><strong>Page:</strong> ${escapeHtml(sourceLabel)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></p>
        <p><strong>Company:</strong> ${companyTrimmed ? escapeHtml(companyTrimmed) : '(not provided)'}</p>
        <hr>
        <p><small>Sent from Convertree concierge lead form</small></p>
      `,
    });

    return NextResponse.json({ success: true });
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
