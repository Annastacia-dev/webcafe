// Minimal client for Brevo's transactional email API.
// https://developers.brevo.com/reference/sendtransacemail

interface Recipient {
  email: string;
  name?: string;
}

interface Email {
  to: Recipient[];
  subject: string;
  text: string;
  replyTo?: Recipient;
}

export const sender = (): Recipient => ({
  email: process.env.INQUIRY_FROM_EMAIL ?? 'info@webcafe.africa',
  name: 'webcafe.africa',
});

export async function sendEmail({ to, subject, text, replyTo }: Email) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error('BREVO_API_KEY is not set');
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify({
      sender: sender(),
      to,
      replyTo,
      subject,
      textContent: text,
    }),
  });

  if (!response.ok) {
    throw new Error(`Brevo ${response.status}: ${await response.text()}`);
  }
}
