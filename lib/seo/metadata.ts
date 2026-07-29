import { Metadata } from 'next';
import { BaseMetadataInput } from '@/types/seo';

const SITE_NAME = 'Sparkers Games';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sparkersgames.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;
const TWITTER_HANDLE = '@SparkersGames';

export function constructMetadata({
  title,
  description,
  path,
  keywords = ['couples games', 'party games', 'icebreaker questions', 'truth or dare', 'would you rather'],
  ogType = 'website',
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
  locale = 'en',
  author = 'Sparkers Games',
  publisher = 'Sparkers Games',
  themeColor = '#7c3aed',
  ogImageSlug,
}: BaseMetadataInput): Metadata {
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  
  // Use pre-built static SVG or fallback to default
  const ogImageUrl = ogImageSlug 
    ? `${SITE_URL}/og/${ogImageSlug}.svg`
    : DEFAULT_OG_IMAGE;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    metadataBase: new URL(SITE_URL),
    authors: [{ name: author }],
    publisher: publisher,
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    alternates: {
      canonical: url,
      languages: {
        'en-US': `${SITE_URL}/en${path}`,
        'x-default': `${SITE_URL}/en${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: locale === 'en' ? 'en_US' : locale,
      type: ogType,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImageUrl],
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
