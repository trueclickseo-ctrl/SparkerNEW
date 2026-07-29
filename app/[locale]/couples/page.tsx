import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import CouplesClientPage from './couples-client';
import { Locale } from '@/lib/i18n/config';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return constructMetadata({
    title: 'Couples Hub — Romantic Relationship & Conversation Decks',
    description: 'Foster deep emotional intimacy, flirty chemistry, and lore-building with our 89 Intimacy Framework card decks.',
    path: '/couples/',
    locale: resolvedParams.locale,
    ogImageSlug: 'couples',
  });
}

export default async function CouplesHubPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  return <CouplesClientPage locale={locale} />;
}
