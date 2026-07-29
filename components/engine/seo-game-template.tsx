import * as React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Alert } from '@/components/ui/alert';
import { CardDeckPlayer } from '@/components/engine/card-deck-player';
import { Users, Clock, Flame, Zap, ArrowLeft } from 'lucide-react';
import { getFAQSchema, getGameSchema, getHowToSchema } from '@/lib/seo/jsonld';

interface RelatedLink {
  title: string;
  url: string;
}

interface SeoGameTemplateProps {
  title: string;
  description: string;
  category: string;
  badge?: string;
  players: string;
  duration: string;
  difficulty: string;
  prompts: string[];
  rules: string[];
  faqs: { question: string; answer: string }[];
  locale: string;
  path: string;
  relatedLinks?: RelatedLink[];
  parentLink?: RelatedLink;
  siblingLinks?: RelatedLink[];
  childLinks?: RelatedLink[];
}

export default function SeoGameTemplate({
  title,
  description,
  category,
  badge,
  players,
  duration,
  difficulty,
  prompts,
  rules,
  faqs,
  locale,
  path,
  relatedLinks = [],
  parentLink,
  siblingLinks = [],
  childLinks = [],
}: SeoGameTemplateProps) {
  
  const gameSchema = getGameSchema({
    name: title,
    description,
    url: `/${locale}${path}`,
    numberOfPlayers: players,
    genre: category,
  });

  const howToSchema = getHowToSchema({
    name: `How to Play ${title}`,
    description: `Official step-by-step game rules for ${title}.`,
    steps: rules.map((r, idx) => ({
      name: `Step ${idx + 1}`,
      text: r,
    })),
  });

  const faqSchema = getFAQSchema(faqs);

  const breadcrumbs = [
    { name: 'Home', url: `/${locale}` },
    { name: 'Games Platform', url: `/${locale}/games` },
  ];

  if (parentLink) {
    breadcrumbs.push({ name: parentLink.title, url: parentLink.url });
  }
  breadcrumbs.push({ name: title, url: `/${locale}${path}` });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-8">
        {/* Header Metadata */}
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Badge variant="play">{category}</Badge>
            {badge && <Badge variant="amber">{badge}</Badge>}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            {title}
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-950/60 shadow-sm text-xs font-medium text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-indigo-500" /> {players}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-indigo-500" /> {duration}</span>
            <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-amber-500" /> {difficulty}</span>
            <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold">
              🃏 {prompts.length} Digital Cards
            </span>
          </div>
        </div>

        {/* Live Interactive Card Player */}
        <CardDeckPlayer
          gameId={title.replace(/\s+/g, '-').toLowerCase()}
          title={title}
          prompts={prompts}
          variant="play"
        />

        {/* Rules */}
        <div className="space-y-4 pt-4 border-t border-slate-200/60 dark:border-slate-800">
          <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
            Official Rules &amp; Game Guide
          </h2>
          <div className="space-y-3">
            {rules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Link Graph / Category Hubs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          {parentLink && (
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-slate-400">Parent Category</h3>
              <Link href={parentLink.url} className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" /> {parentLink.title}
              </Link>
            </div>
          )}

          {childLinks.length > 0 && (
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-slate-400">Sub-categories</h3>
              <div className="flex flex-wrap gap-2">
                {childLinks.map((link) => (
                  <Link key={link.url} href={link.url}>
                    <Badge variant="outline" className="hover:bg-indigo-50 dark:hover:bg-slate-800">{link.title}</Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {siblingLinks.length > 0 && (
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-slate-400">Related Games</h3>
              <div className="flex flex-wrap gap-2">
                {siblingLinks.map((link) => (
                  <Link key={link.url} href={link.url}>
                    <Badge variant="outline" className="hover:bg-indigo-50 dark:hover:bg-slate-800">{link.title}</Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <Alert variant="info" title="Sparkers Games Quality Verified">
          No sign-ups or downloads required. This deck runs entirely locally on your browser.
        </Alert>
      </div>
    </>
  );
}
