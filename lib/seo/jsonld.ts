import { FAQItem, HowToStep } from '@/types/seo';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sparkersgames.com';

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
    description: 'Free interactive party and couples card games — Truth or Dare, Would You Rather, Never Have I Ever, and 89+ more. No download or sign-up needed.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
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
      ...(s.url && { url: `${SITE_URL}${s.url.startsWith('/') ? s.url : `/${s.url}`}` }),
      ...(s.image && { image: s.image }),
    })),
  };
}

export function getWebPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}#webpage`,
    url: `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`,
    name,
    description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    breadcrumb: {
      '@id': `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}#breadcrumb`,
    },
  };
}

export function getCollectionPageSchema({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string; description?: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}#collectionpage`,
    url: `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`,
    name,
    description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: `${SITE_URL}${item.url.startsWith('/') ? item.url : `/${item.url}`}`,
        ...(item.description && { description: item.description }),
      })),
    },
  };
}

export function getSearchActionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/en/play/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  };
}

export function getArticleSchema({
  title,
  description,
  url,
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  url: string;
  publishedTime?: string;
  modifiedTime?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`,
    },
    author: {
      '@type': 'Organization',
      name: 'Sparkers Games',
      '@id': `${SITE_URL}/#organization`,
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
  };
}

