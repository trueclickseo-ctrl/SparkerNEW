import { constructMetadata } from '@/lib/seo/metadata';
import LoveLanguageQuizClient from './quiz-client';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  return constructMetadata({
    title: 'Free Love Language Quiz — Discover Your Love Style',
    description: 'Find out your primary relationship style (Words, Time, Gifts, Service, Touch) with our interactive assessment.',
    path: '/quizzes/love-language/',
    locale: resolvedParams.locale,
    ogImageSlug: 'quizzes-love-language',
    keywords: ['love language quiz', 'five love languages', 'couples quiz', 'relationship style'],
  });
}

export default async function LoveLanguageQuizPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <LoveLanguageQuizClient locale={resolvedParams.locale} />;
}
