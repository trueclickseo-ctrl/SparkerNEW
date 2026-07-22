import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Use Web3Forms free API service for zero-config email forwarding
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: '00000000-0000-0000-0000-000000000000', // fallback key or FormSubmit
        name,
        email,
        subject: `Message from Sparkers Games - ${subject || 'New Contact Form Submission'}`,
        message: `Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`,
        to_email: 'trueclickseo@gmail.com',
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Failed to send message' }, { status: 500 });
  }
}
