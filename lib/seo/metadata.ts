import { Metadata } from 'next';
import { BaseMetadataInput } from '@/types/seo';

const SITE_NAME = 'Sparkers Games';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sparkers.games';
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
}: BaseMetadataInput): Metadata {
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        'en-US': `${SITE_URL}/en${path}`,
        'es-ES': `${SITE_URL}/es${path}`,
        'fr-FR': `${SITE_URL}/fr${path}`,
        'de-DE': `${SITE_URL}/de${path}`,
        'ar-SA': `${SITE_URL}/ar${path}`,
        'x-default': `${SITE_URL}${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
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
      images: [DEFAULT_OG_IMAGE],
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
