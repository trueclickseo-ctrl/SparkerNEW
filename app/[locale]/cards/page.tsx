import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import CardsClientPage from './cards-client';
import { Locale } from '@/lib/i18n/config';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return constructMetadata({
    title: 'Physical Boxed Card Decks — Sparkers Games Shop',
    description: 'Browse premium boxed conversation decks for date nights, party games, and team icebreakers. Available to order on Amazon.',
    path: '/cards/',
    locale: resolvedParams.locale,
    ogImageSlug: 'cards',
  });
}

export default async function CardsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  return <CardsClientPage locale={locale} />;
}
