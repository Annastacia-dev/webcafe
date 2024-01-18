import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'webcafe africa',
  description: 'Building web solutions',
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
        <meta property="og:title" content={(metadata?.title as string) ?? ''} />
        <meta property="og:description" content={metadata?.description ?? ''} />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content={(metadata?.title as string) ?? ''}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@webcafe" />
        <meta
          name="twitter:title"
          content={(metadata?.title as string) ?? ''}
        />
        <meta name="twitter:description" content={metadata.description ?? ''} />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content="web development, web design, responsive design, web custom web development, mobile responsive design, e-commerce websites, website company, nairobi website, website company nairobi, website company kenya, website company africa, webcafe africa"
        />
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

      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
