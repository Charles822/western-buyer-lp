import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, url } = body;

    if (!name || !email || !url) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, url' },
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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: toEmail,
      replyTo: email,
      subject: `7-Signal Analysis Request from ${name}`,
      text: `
New 7-Signal Analysis request:

Name: ${name}
Email: ${email}
Landing Page URL: ${url}

---
Sent from Western Buyer LP form
      `.trim(),
      html: `
        <h2>New 7-Signal Analysis Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Landing Page URL:</strong> <a href="${url}">${url}</a></p>
        <hr>
        <p><small>Sent from Western Buyer LP form</small></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
