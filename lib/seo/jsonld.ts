import { FAQItem, HowToStep } from '@/types/seo';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sparkers.games';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Sparkers Games',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://twitter.com/SparkersGames',
      'https://instagram.com/SparkersGames',
      'https://facebook.com/SparkersGames',
    ],
    description: 'Premier destination for engaging party games, couples conversation starters, icebreakers, and interactive game generators.',
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Sparkers Games',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url.startsWith('/') ? item.url : `/${item.url}`}`,
    })),
  };
}

export function getFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getGameSchema({
  name,
  description,
  url,
  numberOfPlayers,
  genre,
}: {
  name: string;
  description: string;
  url: string;
  numberOfPlayers?: string;
  genre?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Game',
    name,
    description,
    url: `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`,
    numberOfPlayers: numberOfPlayers || '2+',
    genre: genre || 'Party / Card Game',
    author: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}

export function getHowToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: HowToStep[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: s.name,
      text: s.text,
      ...(s.url && { url: `${SITE_URL}${s.url}` }),
      ...(s.image && { image: s.image }),
    })),
  };
}
