import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

// Everyone, including AI search crawlers, may read the public pages.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/api/' }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
