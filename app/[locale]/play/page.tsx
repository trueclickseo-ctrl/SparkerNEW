import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import PlayClientPage from './play-client';
import { Locale } from '@/lib/i18n/config';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return constructMetadata({
    title: 'Instant Digital Party Card Decks — Play Free Online',
    description: 'Play Truth or Dare, Never Have I Ever, Would You Rather, Charades, and Mafia directly in your browser. No downloads or sign-ups required.',
    path: '/play/',
    locale: resolvedParams.locale,
    ogImageSlug: 'play',
  });
}

export default async function PlayPlatformPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  return <PlayClientPage locale={locale} />;
}
