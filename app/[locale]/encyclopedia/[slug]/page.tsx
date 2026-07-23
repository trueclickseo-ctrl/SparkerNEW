import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Alert } from '@/components/ui/alert';
import { Accordion } from '@/components/ui/accordion';
import { ENCYCLOPEDIA_ARTICLES } from '@/lib/data/encyclopedia-articles';
import { getHowToSchema, getFAQSchema } from '@/lib/seo/jsonld';
import { BookOpen, ShieldCheck, History, Brain, ExternalLink, Link2 } from 'lucide-react';

export async function generateStaticParams() {
  return ENCYCLOPEDIA_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function EncyclopediaDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const article = ENCYCLOPEDIA_ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) notFound();

  const howToSchema = getHowToSchema({
    name: `How to Play ${article.title}`,
    description: article.aeoDefinition,
    steps: article.rules.map((r, idx) => ({
      name: `Rule Step ${idx + 1}`,
      text: r,
    })),
  });

  const faqSchema = getFAQSchema(article.faqs);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.aeoDefinition,
    author: {
      '@id': 'https://sparkers.games/#organization',
    },
    publisher: {
      '@id': 'https://sparkers.games/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://sparkers.games/${resolvedParams.locale}/encyclopedia/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${resolvedParams.locale}` },
          { name: 'Encyclopedia', url: `/${resolvedParams.locale}/encyclopedia` },
          { name: article.title, url: `/${resolvedParams.locale}/encyclopedia/${article.slug}` },
        ]}
      />

      
        {/* Header Title */}
        <div className="space-y-4">
          <Badge variant="default" className="w-max">
            <BookOpen className="w-3.5 h-3.5" /> Encyclopedia Reference
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
            {article.title}
          </h1>

          {/* 1. AEO Direct Featured Snippet Section */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-slate-800 shadow-xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Featured Snippet / Quick Definition
            </span>
            <p className="text-slate-800 dark:text-slate-200 text-base leading-relaxed font-medium">
              {article.aeoDefinition}
            </p>
          </div>
        </div>

        {/* 2. Definition */}
        <section className="space-y-3">
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
            Definition & Overview
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {article.definition}
          </p>
        </section>

        {/* 3. History & Origins */}
        <section className="space-y-3 p-6 rounded-2xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <History className="w-5 h-5 text-emerald-600" /> History & Origins
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {article.history}
          </p>
        </section>

        {/* 4. Official Rules */}
        <section className="space-y-4">
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
            Official Step-by-Step Rules
          </h2>
          <div className="space-y-3">
            {article.rules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Variations */}
        <section className="space-y-4">
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
            Popular Game Variations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {article.variations.map((v, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">{v.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Psychology */}
        <section className="space-y-3 p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-950/40">
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-600" /> Social & Group Psychology
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {article.psychology}
          </p>
        </section>

        {/* 7. Safety */}
        <Alert variant="info" title="Safety & Consent Framework">
          <div className="flex items-center gap-1 font-semibold mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Player Ground Rules
          </div>
          {article.safety}
        </Alert>

        {/* 8. FAQ Block */}
        <section className="space-y-4">
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <Accordion
            items={article.faqs.map((f, idx) => ({
              id: `faq-${idx}`,
              title: f.question,
              content: f.answer,
            }))}
            defaultOpenId="faq-0"
          />
        </section>

        {/* 9. Sources */}
        <section className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-6 text-xs text-slate-500">
          <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px]">
            Sources & Verified References
          </h4>
          <ul className="space-y-1">
            {article.sources.map((s, idx) => (
              <li key={idx}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" /> {s.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* 10. Contextual Internal Links */}
        <section className="space-y-3 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <Link2 className="w-4 h-4 text-emerald-600" /> Related Games & Cluster Pages
          </h3>
          <div className="flex flex-wrap gap-2">
            {article.relatedGames.map((rg, idx) => (
              <Link key={idx} href={`/${resolvedParams.locale}${rg.url}`}>
                <Badge variant="outline" className="hover:bg-emerald-50 dark:hover:bg-slate-800">
                  {rg.title}
                </Badge>
              </Link>
            ))}
          </div>
        </section>
      
    </>
  );
}
