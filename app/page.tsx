import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Hero } from '@/components/home/hero';
import { AudienceSelector } from '@/components/home/audience-selector';
import { FeaturedGames } from '@/components/home/featured-games';
import { FeaturedQuizzes } from '@/components/home/featured-quizzes';
import { Testimonials } from '@/components/home/testimonials';
import { Newsletter } from '@/components/home/newsletter';
import { FAQSection } from '@/components/home/faq-section';
import { getDictionary } from '@/lib/i18n/dictionaries';

export default function Home() {
  const dict = getDictionary('en');

  return (
    <div className="flex flex-col min-h-screen">
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
    </div>
  );
}
