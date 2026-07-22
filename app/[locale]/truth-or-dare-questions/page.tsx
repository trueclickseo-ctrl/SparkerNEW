'use client';

import * as React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CardDeckPlayer } from '@/components/engine/card-deck-player';
import { TRUTH_OR_DARE_MASTER_555 } from '@/lib/data/truth-or-dare-master-555';
import { Flame, Sparkles, Shuffle, ShieldCheck, Copy, Check, Filter, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TruthOrDareMasterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams.locale;

  const [activeCategory, setActiveCategory] = React.useState('party-icebreakers');
  const [activeTab, setActiveTab] = React.useState<'all' | 'truths' | 'dares'>('all');
  const [copiedText, setCopiedText] = React.useState<string | null>(null);

  const selectedCategory = TRUTH_OR_DARE_MASTER_555.find((c) => c.id === activeCategory) || TRUTH_OR_DARE_MASTER_555[0];

  // Calculate totals across all 8 master categories
  const totalTruths = TRUTH_OR_DARE_MASTER_555.reduce((sum, c) => sum + c.truths.length, 0);
  const totalDares = TRUTH_OR_DARE_MASTER_555.reduce((sum, c) => sum + c.dares.length, 0);
  const grandTotal = totalTruths + totalDares;

  const combinedPrompts = React.useMemo(() => {
    const tList = selectedCategory.truths.map((t) => `TRUTH: ${t}`);
    const dList = selectedCategory.dares.map((d) => `DARE: ${d}`);
    if (activeTab === 'truths') return tList;
    if (activeTab === 'dares') return dList;
    // Interleave Truths and Dares
    const mixed: string[] = [];
    const maxLen = Math.max(tList.length, dList.length);
    for (let i = 0; i < maxLen; i++) {
      if (i < tList.length) mixed.push(tList[i]);
      if (i < dList.length) mixed.push(dList[i]);
    }
    return mixed;
  }, [selectedCategory, activeTab]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Encyclopedia', url: `/${locale}/encyclopedia` },
          { name: 'Truth or Dare 555+ Questions Hub', url: `/${locale}/truth-or-dare-questions` },
        ]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-12">
        {/* Hero Banner */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-300 text-xs font-black uppercase tracking-wider shadow-xs">
            <Flame className="w-4 h-4 text-orange-500 animate-pulse" /> Ultimate 555+ Truth or Dare Collection
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-gradient-funky tracking-tight">
            555+ Best Truth or Dare Questions &amp; Dares
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Categorized for party hosts, couples, Gen Z vibe checks, double entendre 2-way meanings, adult 18+ after dark, and family game nights.
          </p>

          {/* Quick Stats Bar */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <span className="px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/50 text-purple-900 dark:text-purple-300 text-xs font-extrabold">
              🎯 {grandTotal}+ Total Prompts
            </span>
            <span className="px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/50 text-pink-900 dark:text-pink-300 text-xs font-extrabold">
              💭 {totalTruths}+ Deep &amp; Funny Truths
            </span>
            <span className="px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-900 dark:text-amber-300 text-xs font-extrabold">
              🔥 {totalDares}+ Wild Dares
            </span>
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-300 text-xs font-extrabold">
              📂 8 Specialized Categories
            </span>
          </div>
        </div>

        {/* Category Selection Tabs Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white flex items-center gap-2">
              <Filter className="w-5 h-5 text-purple-600" /> Select Game Category ({TRUTH_OR_DARE_MASTER_555.length})
            </h2>
            <span className="text-xs text-purple-600 font-bold">Showing {selectedCategory.name}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {TRUTH_OR_DARE_MASTER_555.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'p-3 rounded-2xl border-2 text-center transition-all cursor-pointer flex flex-col items-center justify-between gap-2 hover:-translate-y-0.5',
                    isActive
                      ? 'bg-gradient-to-b from-purple-600 to-indigo-600 text-white border-purple-400 shadow-lg shadow-purple-500/25 ring-2 ring-purple-300'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-purple-100 dark:border-slate-800 hover:bg-purple-50 dark:hover:bg-slate-800'
                  )}
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="text-[11px] font-extrabold leading-tight line-clamp-2">{cat.name}</span>
                  <span className={cn('text-[9px] font-bold px-2 py-0.5 rounded-full', isActive ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-900 dark:bg-slate-800 dark:text-purple-300')}>
                    {cat.truths.length + cat.dares.length} Prompts
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Header Info & Interactive Card Deck Player */}
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-900/50 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-purple-100 dark:border-slate-800 pb-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-black bg-purple-100 text-purple-900 dark:bg-purple-950/60 dark:text-purple-300">
                  {selectedCategory.badge}
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white mt-2">
                  {selectedCategory.name} Deck
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  {selectedCategory.description}
                </p>
              </div>

              {/* Sub-filter: All / Truths Only / Dares Only */}
              <div className="flex p-1 rounded-xl bg-purple-50 dark:bg-slate-800 border border-purple-200/60 dark:border-slate-700/60 gap-1">
                {(['all', 'truths', 'dares'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      'px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer capitalize',
                      activeTab === tab
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'text-purple-900 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-slate-700'
                    )}
                  >
                    {tab} ({tab === 'all' ? selectedCategory.truths.length + selectedCategory.dares.length : tab === 'truths' ? selectedCategory.truths.length : selectedCategory.dares.length})
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Digital Card Deck Engine */}
            <CardDeckPlayer
              gameId={`tod-555-${selectedCategory.id}-${activeTab}`}
              title={`${selectedCategory.name} (${activeTab.toUpperCase()})`}
              prompts={combinedPrompts}
              variant="play"
            />
          </div>
        </div>

        {/* Master Questions Bank List View for Easy Copying */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" /> Full Questions List: {selectedCategory.name}
            </h3>
            <span className="text-xs text-slate-400">Click any prompt to copy text</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Truths Column */}
            {(activeTab === 'all' || activeTab === 'truths') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-950 dark:text-purple-200 border border-purple-200 dark:border-purple-800">
                  <h4 className="font-heading font-extrabold text-sm flex items-center gap-2">
                    <span>💭 Truths ({selectedCategory.truths.length})</span>
                  </h4>
                </div>

                <div className="space-y-2.5">
                  {selectedCategory.truths.map((truth, idx) => (
                    <div
                      key={idx}
                      onClick={() => copyToClipboard(`TRUTH: ${truth}`)}
                      className="group p-4 rounded-2xl bg-white dark:bg-slate-900 border border-purple-100 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-start justify-between gap-3"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-black flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                          {truth}
                        </p>
                      </div>
                      <button className="text-slate-400 group-hover:text-purple-600 transition-colors shrink-0">
                        {copiedText === `TRUTH: ${truth}` ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dares Column */}
            {(activeTab === 'all' || activeTab === 'dares') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-rose-100 dark:bg-rose-950/60 text-rose-950 dark:text-rose-200 border border-rose-200 dark:border-rose-800">
                  <h4 className="font-heading font-extrabold text-sm flex items-center gap-2">
                    <span>🔥 Dares ({selectedCategory.dares.length})</span>
                  </h4>
                </div>

                <div className="space-y-2.5">
                  {selectedCategory.dares.map((dare, idx) => (
                    <div
                      key={idx}
                      onClick={() => copyToClipboard(`DARE: ${dare}`)}
                      className="group p-4 rounded-2xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-700 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-start justify-between gap-3"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-xs font-black flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                          {dare}
                        </p>
                      </div>
                      <button className="text-slate-400 group-hover:text-rose-600 transition-colors shrink-0">
                        {copiedText === `DARE: ${dare}` ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Explore Related Guides & Articles Section (Matching User Screenshots) */}
        <div className="space-y-8 border-t-2 border-purple-200/80 dark:border-purple-900/50 pt-12">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-100 dark:bg-purple-950/60 text-purple-900 dark:text-purple-300">
              EXPLORE TRUTH OR DARE GUIDES &amp; IDEAS
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Essential Truth or Dare Game Strategy &amp; Rules
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Guide Card 1 */}
            <Link
              href={`/${locale}/encyclopedia/truth-or-dare`}
              className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-900/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-pink-100 text-pink-900 dark:bg-pink-950/60 dark:text-pink-300">
                  COUPLES DECK GUIDE
                </span>
                <h4 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors leading-tight">
                  110+ Truth or Dare Questions for Couples (Flirty, Funny &amp; Spicy)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Discover romantic prompts, flirty dare ideas, and deep intimacy questions designed specifically for date nights.
                </p>
              </div>
              <span className="text-xs font-extrabold text-purple-600 dark:text-purple-400 group-hover:underline flex items-center gap-1">
                Read Guide &rarr;
              </span>
            </Link>

            {/* Guide Card 2 */}
            <Link
              href={`/${locale}/encyclopedia/truth-or-dare`}
              className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-900/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300">
                  PARTY GAME TIPS
                </span>
                <h4 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors leading-tight">
                  100+ Funny Dare Ideas to Make Your Next Party Unforgettable
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Hilarious, non-awkward dare challenges, acting prompts, and party games for groups of all sizes.
                </p>
              </div>
              <span className="text-xs font-extrabold text-purple-600 dark:text-purple-400 group-hover:underline flex items-center gap-1">
                Explore Party Dares &rarr;
              </span>
            </Link>

            {/* Guide Card 3 */}
            <Link
              href={`/${locale}/encyclopedia/truth-or-dare`}
              className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-900/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-900 dark:bg-indigo-950/60 dark:text-indigo-300">
                  GAME HISTORY
                </span>
                <h4 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors leading-tight">
                  The Secret History of Truth or Dare: From Ancient Commands to Party Classic
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Learn how Truth or Dare evolved over centuries into the world’s most famous social conversation game.
                </p>
              </div>
              <span className="text-xs font-extrabold text-purple-600 dark:text-purple-400 group-hover:underline flex items-center gap-1">
                Read History Article &rarr;
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
