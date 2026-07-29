import { constructMetadata } from '@/lib/seo/metadata';
import TruthOrDareHubClient from './hub-client';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  return constructMetadata({
    title: '555+ Best Truth or Dare Questions & Dares Hub',
    description: 'The ultimate categorized directory of 555+ funny, deep, flirty, Gen Z, and adult 18+ after dark Truth or Dare prompts.',
    path: '/truth-or-dare-questions/',
    locale: resolvedParams.locale,
    ogImageSlug: 'tod-index',
    keywords: ['truth or dare', 'truth or dare questions', 'party games', 'icebreakers'],
  });
}

export default async function TruthOrDareMasterPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <TruthOrDareHubClient locale={resolvedParams.locale} />;
}
