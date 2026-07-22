import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Send form submission using FormSubmit endpoint (routes to trueclickseo@gmail.com without API keys)
    const response = await fetch('https://formsubmit.co/ajax/trueclickseo@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `Message from Sparkers Games: ${subject || 'New Feedback'}`,
        _replyto: email,
        _template: 'table',
        name,
        email,
        subject,
        message,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: 'Failed to send' }, { status: 400 });
    }
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
