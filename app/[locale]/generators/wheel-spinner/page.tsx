import { constructMetadata } from '@/lib/seo/metadata';
import WheelSpinnerClient from './wheel-client';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  return constructMetadata({
    title: 'Free Random Wheel Spinner — HTML5 Decision Wheel',
    description: 'Spin the customizable party wheel spinner to decide game turns, choose dares, or make random selections instantly.',
    path: '/generators/wheel-spinner/',
    locale: resolvedParams.locale,
    ogImageSlug: 'generators-wheel-spinner',
    keywords: ['wheel spinner', 'random name picker', 'decision wheel', 'party game spinner'],
  });
}

export default async function WheelSpinnerPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <WheelSpinnerClient locale={resolvedParams.locale} />;
}
