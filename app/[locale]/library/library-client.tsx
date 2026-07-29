'use client';

import * as React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { QUESTION_DATABASE } from '@/lib/data/question-database';
import { Search, Library, Gamepad2 } from 'lucide-react';
import { Locale } from '@/lib/i18n/config';

export default function LibraryClientPage({
  locale,
}: {
  locale: Locale;
}) {
  const [query, setQuery] = React.useState('');
  const [selectedCat, setSelectedCat] = React.useState('all');

  const categories = ['all', ...Array.from(new Set(QUESTION_DATABASE.map((g) => g.category)))];

  const filteredGames = QUESTION_DATABASE.filter((game) => {
    const matchesCat = selectedCat === 'all' || game.category === selectedCat;
    const matchesSearch =
      game.name.toLowerCase().includes(query.toLowerCase()) ||
      game.description.toLowerCase().includes(query.toLowerCase()) ||
      game.prompts.some((p) => p.toLowerCase().includes(query.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Games Library', url: `/${locale}/library` },
        ]}
      />

      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
          <Library className="w-3.5 h-3.5" /> Central Question Database
        </div>

        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
          Sparkers Games Library & Prompt Bank
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Browse our complete library of Truth or Dare, Never Have I Ever, Would You Rather, 21 Questions, and Icebreakers.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="space-y-4 max-w-xl mx-auto">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search across 2,500+ game prompts & rules..."
            className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                selectedCat === cat
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Categories' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Library Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {filteredGames.map((game) => (
          <Card key={game.id} variant="default" className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="default">{game.category}</Badge>
                <span className="text-[11px] font-semibold text-slate-400">
                  {game.cardCount} Prompts
                </span>
              </div>
              <CardTitle className="mt-3">{game.name}</CardTitle>
              <CardDescription>{game.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                Sample Prompts:
              </span>
              <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                {game.prompts.slice(0, 2).map((p, idx) => (
                  <li key={idx} className="italic truncate">
                    &quot;{p}&quot;
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Link href={`/${locale}/play/${game.slug}/`} className="w-full">
                <Button variant="default" size="sm" className="w-full">
                  <Gamepad2 className="w-4 h-4" /> Launch Deck
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
