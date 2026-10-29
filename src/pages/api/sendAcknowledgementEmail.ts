import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '@/lib/brevo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email } = req.body ?? {};
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    await sendEmail({
      to: [{ email, name }],
      subject: `Thank you for your inquiry, ${name}`,
      text: [
        `Hi ${name},`,
        '',
        'Thank you for reaching out to us. We have received your inquiry and will get back to you as soon as possible.',
        '',
        'For further inquiries, please feel free to contact us',
        'Email: info@webcafe.africa',
        'Phone: +254 768 372 439',
        '',
        'Best regards,',
        'webcafe.africa',
      ].join('\n'),
    });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
}
