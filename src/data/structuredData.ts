// schema.org JSON-LD describing the business, the site and its FAQs.
import { site } from './site';
import { faqs } from './faq';
import { projects } from './projects';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#organization`,
  name: site.name,
  alternateName: 'webcafe africa',
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/opengraph-image.png`,
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressCountry: site.country,
  },
  areaServed: ['Kenya', 'Africa', 'Worldwide'],
  sameAs: site.socials,
  knowsAbout: [
    'Web development',
    'Web design',
    'E-commerce',
    'CRM software',
    'ERP software',
    'Point of sale systems',
    'Payment integration',
    'Tax e-invoicing integration',
    'API integration',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: site.services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
      },
    })),
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: site.email,
    telephone: site.phone,
    availableLanguage: ['English'],
  },
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  name: site.name,
  url: site.url,
  description: site.description,
  publisher: { '@id': `${site.url}/#organization` },
  inLanguage: 'en',
};

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export const portfolioJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: `Our work · ${site.name}`,
  url: `${site.url}/portfolio`,
  isPartOf: { '@id': `${site.url}/#website` },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        url: project.link,
        genre: project.category,
        creator: { '@id': `${site.url}/#organization` },
      },
    })),
  },
};
