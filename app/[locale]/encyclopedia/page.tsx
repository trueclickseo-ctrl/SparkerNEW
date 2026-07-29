'use client';

import * as React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ENCYCLOPEDIA_ARTICLES } from '@/lib/data/encyclopedia-articles';
import { PROGRAMMATIC_SEO_GAMES } from '@/lib/data/programmatic-seo-games';
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react';

export default function EncyclopediaHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams.locale;

  // Filter for top-level pillar pages (no parentSlug)
  const pillarPages = PROGRAMMATIC_SEO_GAMES.filter((game) => !game.parentSlug);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Encyclopedia', url: `/${locale}/encyclopedia` },
        ]}
      />

      
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="default" className="px-3 py-1">
            <BookOpen className="w-3.5 h-3.5" /> Official Game Guides & Etymology
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
            Sparkers Games Encyclopedia
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Deep dive into the origins, rules, variations, psychology, and safety guidelines for world-famous card and parlor games.
          </p>
        </div>

        {/* Section 1: Detailed Encyclopedia Reference Articles */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            Historical Research & Deep Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENCYCLOPEDIA_ARTICLES.map((article) => (
              <Card key={article.slug} variant="default" className="flex flex-col justify-between">
                <CardHeader>
                  <Badge variant="default" className="w-max">Encyclopedia Article</Badge>
                  <CardTitle className="mt-3 text-xl">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{article.aeoDefinition}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={`/${locale}/encyclopedia/${article.slug}/`} className="w-full">
                    <Button variant="default" size="sm" className="w-full">
                      Read Complete Guide <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 2: Interactive Deck Resource Pages (Links all programmatic pillars!) */}
        <div className="space-y-4 pt-8">
          <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" /> Interactive Play Decks, Rules & Variations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillarPages.map((pillar) => (
              <Link key={pillar.id} href={`/${locale}${pillar.path}`}>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between h-full">
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {pillar.description}
                    </p>
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-3 flex items-center gap-1">
                    View Resource <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      
    </>
  );
}
