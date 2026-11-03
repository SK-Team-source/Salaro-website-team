import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Notification to Salaro
    await resend.emails.send({
      from: 'Salaro Contact Form <team@salaro.com>',
      to: 'sal@salaro.com',
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` · ${company}` : ''}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Confirmation to the sender
    await resend.emails.send({
      from: 'Salaro <team@salaro.com>',
      to: email,
      subject: `We've received your message — Salaro`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for getting in touch. We've received your message and will reply within one morning.</p>
        <hr style="border:none;border-top:1px solid #ddd;margin:24px 0"/>
        <p style="color:#666;font-size:13px"><strong>Your message:</strong></p>
        ${company ? `<p style="color:#666;font-size:13px"><strong>Company:</strong> ${company}</p>` : ''}
        <p style="color:#666;font-size:13px">${message.replace(/\n/g, '<br>')}</p>
        <hr style="border:none;border-top:1px solid #ddd;margin:24px 0"/>
        <p style="color:#999;font-size:12px">Salaro · Build · Migrate · Advise · <a href="https://www.salaro.com">salaro.com</a></p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
