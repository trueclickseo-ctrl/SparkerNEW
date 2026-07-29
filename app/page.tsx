import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CookieBanner } from '@/components/ui/cookie-banner';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Hero } from '@/components/home/hero';
import { AudienceSelector } from '@/components/home/audience-selector';
import { FeaturedGames } from '@/components/home/featured-games';
import { FeaturedQuizzes } from '@/components/home/featured-quizzes';
import { Testimonials } from '@/components/home/testimonials';
import { Newsletter } from '@/components/home/newsletter';
import { FAQSection } from '@/components/home/faq-section';
import { getDictionary } from '@/lib/i18n/dictionaries';

// Root page: outside [locale] layout so we include Header/Footer directly.
// This page serves the "/" path (Hostinger static export root).
export default function Home() {
  const dict = getDictionary('en');

  return (
    <>
      <Header locale="en" />
      <Breadcrumbs items={[{ name: 'Home', url: '/en' }]} />
      <main className="flex-grow">
        <Hero locale="en" dict={dict} />
        <AudienceSelector locale="en" />
        <FeaturedGames locale="en" />
        <FeaturedQuizzes locale="en" />
        <Testimonials />
        <Newsletter />
        <FAQSection />
      </main>
      <Footer locale="en" />
      <CookieBanner />
    </>
  );
}
