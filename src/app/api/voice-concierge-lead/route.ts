import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone } = body as {
      name?: string;
      email?: string;
      company?: string;
      phone?: string;
    };

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
    const subject = `[Convertree] Concierge demo lead — ${name.trim()}`;

    const phoneLine = phone?.trim() ? `Phone: ${phone.trim()}` : 'Phone: (not provided)';

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: toEmail,
      replyTo: email.trim(),
      subject,
      text: `
New concierge demo opt-in (voice-agent page):

Name: ${name.trim()}
Email: ${email.trim()}
Company: ${company.trim()}
${phoneLine}

---
Sent from /voice-agent concierge form
      `.trim(),
      html: `
        <h2>Concierge demo lead</h2>
        <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></p>
        <p><strong>Company:</strong> ${escapeHtml(company.trim())}</p>
        <p><strong>Phone:</strong> ${phone?.trim() ? escapeHtml(phone.trim()) : '(not provided)'}</p>
        <hr>
        <p><small>Sent from /voice-agent</small></p>
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
