import { constructMetadata } from '@/lib/seo/metadata';
import CoupleNameClient from './name-client';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  return constructMetadata({
    title: 'Free Couple Name Generator — Unique Nickname Mixer',
    description: 'Combine partner names to create adorable, funny, and unique couple nicknames and ship names instantly.',
    path: '/generators/couple-name/',
    locale: resolvedParams.locale,
    ogImageSlug: 'generators-couple-name',
    keywords: ['couple name generator', 'ship name generator', 'name combiner', 'cute couple nicknames'],
  });
}

export default async function CoupleNameGeneratorPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <CoupleNameClient locale={resolvedParams.locale} />;
}
