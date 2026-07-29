import { notFound } from 'next/navigation';
import { TRUTH_OR_DARE_MASTER_555 } from '@/lib/data/truth-or-dare-master-555';
import { getFAQSchema } from '@/lib/seo/jsonld';
import { constructMetadata } from '@/lib/seo/metadata';
import TruthOrDareCategoryClient from './category-client';

interface PageProps {
  params: Promise<{ locale: string; category: string }>;
}

export async function generateStaticParams() {
  return TRUTH_OR_DARE_MASTER_555.map((cat) => ({
    category: cat.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const category = TRUTH_OR_DARE_MASTER_555.find((c) => c.id === resolvedParams.category);
  if (!category) return {};
  return constructMetadata({
    title: `${category.name} Questions & Dares`,
    description: category.description,
    path: `/truth-or-dare-questions/${category.id}/`,
    locale: resolvedParams.locale,
    ogImageSlug: `tod-${category.id}`,
    keywords: [category.name.toLowerCase(), 'truth or dare', 'party prompts', 'game category'],
  });
}

export default async function TruthOrDareCategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const category = TRUTH_OR_DARE_MASTER_555.find((c) => c.id === resolvedParams.category);

  if (!category) {
    notFound();
  }

  // Pre-generate FAQ schema for Google Rich Snippets
  const faqSchema = getFAQSchema([
    {
      question: `What are some good examples of ${category.name}?`,
      answer: `Here are some popular prompts from our ${category.name} deck: ${category.truths.slice(0, 3).join(', ')}...`,
    },
    {
      question: `How many questions are in the ${category.name} deck?`,
      answer: `The deck contains ${category.truths.length} truth questions and ${category.dares.length} dares, making a total of ${category.truths.length + category.dares.length} interactive cards.`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TruthOrDareCategoryClient category={category} locale={resolvedParams.locale} />
    </>
  );
}
