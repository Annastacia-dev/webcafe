import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postmark = require('postmark');

  if (req.method === 'POST') {
    const {
      name,
      email,
      phoneNumber,
      projectTitle,
      goalsAndObjectives,
      timeline,
      budget,
    } = req.body;

    try {
      const client = new postmark.ServerClient(
        process.env.NEXT_PUBLIC_POSTMARK_API_KEY
      );
      await client.sendEmail({
        From: 'info@webcafe.africa', // Sender address
        To: 'info@webcafe.africa', // Recipient address
        Subject: `New Inquiry: ${email}`,
        TextBody: `
          Name: ${name}

          Email: ${email}

          Phone Number: ${phoneNumber}

          Project Title: ${projectTitle}/n

          Goals and Objectives
          ${goalsAndObjectives}

          Timeline: ${timeline}/n

          Budget: ${budget}/n
        `,
      });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
