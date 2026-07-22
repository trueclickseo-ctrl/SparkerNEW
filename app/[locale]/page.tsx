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

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumbs items={[{ name: 'Home', url: `/${locale}` }]} />
      <main className="flex-grow">
        <Hero locale={locale} dict={dict} />
        <AudienceSelector locale={locale} />
        <FeaturedGames locale={locale} />
        <FeaturedQuizzes locale={locale} />
        <Testimonials />
        <Newsletter />
        <FAQSection />
      </main>
    </div>
  );
}
