import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '@/lib/brevo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const {
    name,
    email,
    phoneNumber,
    projectTitle,
    goalsAndObjectives,
    timeline,
    budget,
  } = req.body ?? {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const recipient = process.env.INQUIRY_TO_EMAIL;
  if (!recipient) {
    console.error('INQUIRY_TO_EMAIL is not set');
    return res.status(500).json({ error: 'Error sending email' });
  }

  try {
    await sendEmail({
      to: [{ email: recipient }],
      replyTo: { email, name },
      subject: `New Inquiry: ${name} (${email})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone Number: ${phoneNumber}`,
        `Project: ${projectTitle}`,
        '',
        'Goals and Objectives:',
        goalsAndObjectives,
        '',
        `Timeline: ${timeline}`,
        `Budget (USD): ${budget}`,
      ].join('\n'),
    });
    res.status(200).json({ message: 'Inquiry sent. We’ll be in touch soon.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
}
