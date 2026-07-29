import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import EncyclopediaHubClientPage from './encyclopedia-client';
import { Locale } from '@/lib/i18n/config';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return constructMetadata({
    title: 'Games Encyclopedia — Rules, Etymology & Psychology',
    description: 'Learn the history, official rules, variations, and group dynamics of classic parlor and party card games.',
    path: '/encyclopedia/',
    locale: resolvedParams.locale,
    ogImageSlug: 'encyclopedia',
  });
}

export default async function EncyclopediaHubPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  return <EncyclopediaHubClientPage locale={locale} />;
}
