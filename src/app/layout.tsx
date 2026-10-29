import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'webcafe.africa · Built to move.',
  description:
    'Websites, web apps and integrations that move your business forward.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata?.description ?? ''} />
        <meta
          name="keywords"
          content="web development, web design, web apps, custom software, crm, erp, point of sale, events software, e-commerce websites, portfolio websites, payment integration, tax integration, api integration, website company nairobi, website company kenya, website company africa, webcafe africa"
        />
        <meta name="author" content="webcafe africa" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="referrer" content="always" />

        <meta
          property="og:site_name"
          content={(metadata?.title as string) ?? ''}
        />
        <meta property="og:title" content={(metadata?.title as string) ?? ''} />
        <meta property="og:description" content={metadata?.description ?? ''} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://webcafe.africa/og.png" />
        <meta property="og:url" content="https://webcafe.africa" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@webcafe_africa" />
        <meta
          name="twitter:title"
          content={(metadata?.title as string) ?? ''}
        />
        <meta name="twitter:description" content={metadata.description ?? ''} />
        <meta name="twitter:image" content="https://webcafe.africa/og.png" />
        <meta name="twitter:creator" content="@webcafe_africa" />
        <meta name="twitter:url" content="https://webcafe.africa" />
        <meta name="theme-color" content="#0F3A26" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.google.co.ke" />
        <link rel="canonical" href="https://webcafe.africa" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="512x512" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      <body className="bg-soft font-sans text-move antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
