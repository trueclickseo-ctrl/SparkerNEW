import { FAQItem, HowToStep } from '@/types/seo';

const RAW_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sparkersgames.com';
export const SITE_URL = RAW_SITE_URL.replace(/^https?:\/\/(?!www\.)/, 'https://www.').replace(/\/$/, '');

export function formatCanonicalUrl(path: string, locale: string = 'en'): string {
  if (!path) return `${SITE_URL}/${locale}/`;
  
  if (path.startsWith('http://') || path.startsWith('https://')) {
    let fullUrl = path.replace(/^https?:\/\/(?!www\.)sparkersgames\.com/, 'https://www.sparkersgames.com');
    if (!fullUrl.endsWith('/') && !fullUrl.includes('?') && !fullUrl.includes('#') && !fullUrl.split('/').pop()?.includes('.')) {
      fullUrl += '/';
    }
    return fullUrl;
  }

  let cleanPath = path;
  const knownLocales = ['en', 'es', 'fr', 'de', 'ar'];
  for (const loc of knownLocales) {
    if (cleanPath.startsWith(`/${loc}/`)) {
      cleanPath = cleanPath.substring(loc.length + 1);
      break;
    } else if (cleanPath === `/${loc}` || cleanPath === `/${loc}/`) {
      cleanPath = '/';
      break;
    }
  }

  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }

  if (cleanPath !== '/' && !cleanPath.endsWith('/') && !cleanPath.includes('.')) {
    cleanPath = cleanPath + '/';
  }

  if (cleanPath === '/') {
    return `${SITE_URL}/${locale}/`;
  }

  return `${SITE_URL}/${locale}${cleanPath}`;
}

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

export function getBreadcrumbSchema(
  items: { name: string; url: string }[],
  currentUrl?: string,
  locale: string = 'en'
) {
  if (!items || items.length === 0) {
    return null;
  }

  const validItems = items.filter((item) => item && item.name && item.url);
  if (validItems.length === 0) {
    return null;
  }

  const targetCurrentUrl = currentUrl || validItems[validItems.length - 1].url;
  const canonicalPageUrl = formatCanonicalUrl(targetCurrentUrl, locale);

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${canonicalPageUrl}#breadcrumb`,
    itemListElement: validItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: formatCanonicalUrl(item.url, locale),
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
  locale = 'en',
}: {
  name: string;
  description: string;
  url: string;
  numberOfPlayers?: string;
  genre?: string;
  locale?: string;
}) {
  const canonicalUrl = formatCanonicalUrl(url, locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'Game',
    name,
    description,
    url: canonicalUrl,
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
  locale = 'en',
}: {
  name: string;
  description: string;
  steps: HowToStep[];
  locale?: string;
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
      ...(s.url && { url: formatCanonicalUrl(s.url, locale) }),
      ...(s.image && { image: s.image }),
    })),
  };
}

export function getWebPageSchema({
  name,
  description,
  url,
  locale = 'en',
}: {
  name: string;
  description: string;
  url: string;
  locale?: string;
}) {
  const canonicalUrl = formatCanonicalUrl(url, locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name,
    description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    breadcrumb: {
      '@id': `${canonicalUrl}#breadcrumb`,
    },
  };
}

export function getCollectionPageSchema({
  name,
  description,
  url,
  items,
  locale = 'en',
}: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string; description?: string }[];
  locale?: string;
}) {
  const canonicalUrl = formatCanonicalUrl(url, locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${canonicalUrl}#collectionpage`,
    url: canonicalUrl,
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
        url: formatCanonicalUrl(item.url, locale),
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
  locale = 'en',
}: {
  title: string;
  description: string;
  url: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
}) {
  const canonicalUrl = formatCanonicalUrl(url, locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: canonicalUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
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
