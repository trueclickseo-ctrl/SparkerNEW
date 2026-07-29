import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Hero } from '@/components/home/hero';
import { AudienceSelector } from '@/components/home/audience-selector';
import { FeaturedGames } from '@/components/home/featured-games';
import { FeaturedQuizzes } from '@/components/home/featured-quizzes';
import { Testimonials } from '@/components/home/testimonials';
import { Newsletter } from '@/components/home/newsletter';
import { FAQSection } from '@/components/home/faq-section';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return constructMetadata({
    title: 'Sparkers Games — Ultimate Couples & Party Games Hub',
    description: 'Discover interactive party games, icebreaker questions, couples intimacy card decks, and relationship quizzes.',
    path: '/',
    locale: resolvedParams.locale,
    ogImageSlug: 'index',
  });
}

// The [locale]/layout.tsx already wraps this in <Header>, <main>, and <Footer>.
// This page only provides the page content — no extra wrapper needed.
export default async function LocalizedHomePage({
  params,
}: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', url: `/${locale}` }]} />
      <Hero locale={locale} dict={dict} />
      <AudienceSelector locale={locale} />
      <FeaturedGames locale={locale} />
      <FeaturedQuizzes locale={locale} />
      <Testimonials />
      <Newsletter />
      <FAQSection />
    </>
  );
}
