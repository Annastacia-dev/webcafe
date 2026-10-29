import type { Metadata } from 'next';
import MainComponentLayout from '@/components/layouts/MainComponentLayout';
import { portfolioJsonLd } from '@/data/structuredData';
import { site } from '@/data/site';
import Portfolio from './Portfolio';

const description =
  'Websites and web apps designed and built by webcafe.africa, including TableNest, a restaurant management platform, and Spotlit, a creator portfolio and media kit.';

export const metadata: Metadata = {
  title: 'Our work',
  description,
  alternates: { canonical: '/portfolio' },
  // Next replaces (doesn't merge) these objects, so repeat the site-wide fields.
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_KE',
    title: `Our work · ${site.name}`,
    description,
    url: '/portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    site: site.twitter,
    creator: site.twitter,
    title: `Our work · ${site.name}`,
    description,
  },
};

export default function PortfolioPage() {
  return (
    <MainComponentLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <Portfolio />
    </MainComponentLayout>
  );
}
