import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postmark = require('postmark');

  if (req.method === 'POST') {
    const { name, email } = req.body;

    try {
      const client = new postmark.ServerClient(
        process.env.NEXT_PUBLIC_POSTMARK_API_KEY
      );
      await client.sendEmail({
        From: 'info@webcafe.africa',
        To: `${email}`,
        Subject: `Thank you for your inquiry, ${name}`,
        TextBody: `
          Hi ${name},

          Thank you for reaching out to us. We have received your inquiry and will get back to you as soon as possible.

          For further inquiries, please feel free to contact us
          Email: info@webcafe.africa
          Phone: +254 768 372 439
          
          Best regards,
          Webcafe Africa
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
