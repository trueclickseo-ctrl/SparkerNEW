import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import LibraryClientPage from './library-client';
import { Locale } from '@/lib/i18n/config';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return constructMetadata({
    title: 'Games Library & Prompt Bank — 2,500+ Questions',
    description: 'Explore our complete central prompt bank containing Truth or Dare, Icebreakers, and Would You Rather card prompts.',
    path: '/library/',
    locale: resolvedParams.locale,
    ogImageSlug: 'library',
  });
}

export default async function LibraryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  return <LibraryClientPage locale={locale} />;
}
