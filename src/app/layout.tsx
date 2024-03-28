import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'webcafe africa',
  description: 'Building web solutions for your business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata?.description ?? ''} />
        <meta
          name="keywords"
          content="web development, web design, responsive design, web custom web development, mobile responsive design, e-commerce websites, website company, nairobi website, website company nairobi, website company kenya, website company africa, webcafe africa"
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
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dlahz5ciz/image/upload/v1711612428/webcafeafrica_kgeth5.png"
        />
        <meta property="og:url" content="https://webcafe.africa" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@webcafe_africa" />
        <meta
          name="twitter:title"
          content={(metadata?.title as string) ?? ''}
        />
        <meta name="twitter:description" content={metadata.description ?? ''} />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dlahz5ciz/image/upload/v1711612428/webcafeafrica_kgeth5.png"
        />
        <meta name="twitter:creator" content="@webcafe_africa" />
        <meta name="twitter:url" content="https://webcafe.africa" />
        <meta name="theme-color" content="#000000" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.google.co.ke" />
        <link rel="canonical" href="https://webcafe.africa" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://webcafe.africa",
              "@type": "Organization",
              "name": "webcafe africa",
              "url": "https://webcafe.africa",
              "logo": "/logo.png",
              "contactPoint": [
                { "@type": "ContactPoint",
                  "telephone": "+254 768 372 439",
                  "contactType": "customer service"
                }
              ]
            }
          `}
        </script>
      </Head>

      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
