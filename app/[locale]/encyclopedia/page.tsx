'use client';

import * as React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ENCYCLOPEDIA_ARTICLES } from '@/lib/data/encyclopedia-articles';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function EncyclopediaHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams.locale;

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {ENCYCLOPEDIA_ARTICLES.map((article) => (
            <Card key={article.slug} variant="default" className="flex flex-col justify-between">
              <CardHeader>
                <Badge variant="default" className="w-max">Encyclopedia Article</Badge>
                <CardTitle className="mt-3 text-xl">{article.title}</CardTitle>
                <CardDescription className="line-clamp-2">{article.aeoDefinition}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/${locale}/encyclopedia/${article.slug}`} className="w-full">
                  <Button variant="default" size="sm" className="w-full">
                    Read Complete Guide <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      
    </>
  );
}
