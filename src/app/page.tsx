import MainComponentLayout from '@/components/layouts/MainComponentLayout';
import LandingPage from '@/components/LandingPage';
import { faqJsonLd } from '@/data/structuredData';

export default function Home() {
  return (
    <MainComponentLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <LandingPage />
    </MainComponentLayout>
  );
}
