import * as React from 'react';
import { Accordion } from '@/components/ui/accordion';
import { SeoFAQ } from '@/types/programmatic-seo';

interface FaqBlockProps {
  faqs: SeoFAQ[];
}

export default function FaqBlock({ faqs }: FaqBlockProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">
        Frequently Asked Questions
      </h2>
      <Accordion
        items={faqs.map((faq, idx) => ({
          id: `faq-${idx}`,
          title: faq.question,
          content: faq.answer,
        }))}
        defaultOpenId="faq-0"
      />
    </div>
  );
}
