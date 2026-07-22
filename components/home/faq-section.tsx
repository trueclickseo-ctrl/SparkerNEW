import { Accordion } from '@/components/ui/accordion';
import { getFAQSchema } from '@/lib/seo/jsonld';

export function FAQSection() {
  const faqs = [
    {
      id: 'faq-1',
      title: 'What makes Sparkers Games different from standard card decks?',
      content: 'Sparkers Games combines digital-first instant play with expert-crafted prompts, topic silos, 27-language localization, and dynamic room session sync for remote players.',
    },
    {
      id: 'faq-2',
      title: 'How do couples play long-distance or remote games?',
      content: 'Simply select any couples deck on /couples, start a session room, and share the link or room code with your partner to draw synced cards in real-time.',
    },
    {
      id: 'faq-3',
      title: 'Is Sparkers Games safe for family and classroom settings?',
      content: 'Yes! All party decks feature strict age and audience filters (Kids, Teens, Office, 21+) to ensure content comfort levels for any group setting.',
    },
    {
      id: 'faq-4',
      title: 'Do I need to install an app to play?',
      content: 'No installation required! Sparkers Games is fully web-native and works on all mobile browsers, iPhones, Android devices, tablets, and desktops.',
    },
  ];

  const faqSchema = getFAQSchema(
    faqs.map((f) => ({ question: f.title, answer: f.content as string }))
  );

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center space-y-2 mb-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Everything you need to know about Sparkers digital game decks.
        </p>
      </div>

      <Accordion
        items={faqs.map((f) => ({ id: f.id, title: f.title, content: f.content }))}
        defaultOpenId="faq-1"
      />
    </section>
  );
}
