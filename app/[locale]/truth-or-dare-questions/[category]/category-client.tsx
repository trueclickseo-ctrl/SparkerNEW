'use client';

import * as React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { CardDeckPlayer } from '@/components/engine/card-deck-player';
import { Flame, Copy, Check, Zap, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryClientProps {
  category: {
    id: string;
    name: string;
    badge: string;
    description: string;
    icon: string;
    color: string;
    truths: string[];
    dares: string[];
  };
  locale: string;
}

export default function TruthOrDareCategoryClient({ category, locale }: CategoryClientProps) {
  const [activeTab, setActiveTab] = React.useState<'all' | 'truths' | 'dares'>('all');
  const [copiedText, setCopiedText] = React.useState<string | null>(null);

  const combinedPrompts = React.useMemo(() => {
    const tList = category.truths.map((t) => `TRUTH: ${t}`);
    const dList = category.dares.map((d) => `DARE: ${d}`);
    if (activeTab === 'truths') return tList;
    if (activeTab === 'dares') return dList;
    
    const mixed: string[] = [];
    const maxLen = Math.max(tList.length, dList.length);
    for (let i = 0; i < maxLen; i++) {
      if (i < tList.length) mixed.push(tList[i]);
      if (i < dList.length) mixed.push(dList[i]);
    }
    return mixed;
  }, [category, activeTab]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const schemaBreadcrumbs = [
    { name: 'Home', url: `/${locale}` },
    { name: 'Truth or Dare Hub', url: `/${locale}/truth-or-dare-questions` },
    { name: category.name, url: `/${locale}/truth-or-dare-questions/${category.id}` }
  ];

  return (
    <>
      <Breadcrumbs items={schemaBreadcrumbs} />

      
        {/* Hero Banner */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <Link href={`/${locale}/truth-or-dare-questions`} className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 hover:underline mb-2">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Categories
          </Link>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-300 text-xs font-black uppercase tracking-wider shadow-xs">
            <Flame className="w-4 h-4 text-orange-500 animate-pulse" /> {category.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-gradient-funky tracking-tight">
            {category.name} Questions &amp; Dares
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {category.description}
          </p>

          {/* Quick Stats Bar */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <span className="px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/50 text-purple-900 dark:text-purple-300 text-xs font-extrabold">
              🎯 {category.truths.length + category.dares.length}+ Prompts
            </span>
            <span className="px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/50 text-pink-900 dark:text-pink-300 text-xs font-extrabold">
              💭 {category.truths.length} Truths
            </span>
            <span className="px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-900 dark:text-amber-300 text-xs font-extrabold">
              🔥 {category.dares.length} Dares
            </span>
          </div>
        </div>

        {/* Selected Category Header Info & Interactive Card Deck Player */}
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-900/50 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-purple-100 dark:border-slate-800 pb-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-black bg-purple-100 text-purple-900 dark:bg-purple-950/60 dark:text-purple-300">
                  {category.badge}
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white mt-2">
                  {category.name} Deck
                </h3>
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
                    {tab} ({tab === 'all' ? category.truths.length + category.dares.length : tab === 'truths' ? category.truths.length : category.dares.length})
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Digital Card Deck Engine */}
            <CardDeckPlayer
              gameId={`tod-555-${category.id}-${activeTab}`}
              title={`${category.name} (${activeTab.toUpperCase()})`}
              prompts={combinedPrompts}
              variant="play"
            />
          </div>
        </div>

        {/* Master Questions Bank List View for Easy Copying */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" /> Full Questions List: {category.name}
            </h3>
            <span className="text-xs text-slate-400">Click any prompt to copy text</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Truths Column */}
            {(activeTab === 'all' || activeTab === 'truths') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-950 dark:text-purple-200 border border-purple-200 dark:border-purple-800">
                  <h4 className="font-heading font-extrabold text-sm flex items-center gap-2">
                    <span>💭 Truths ({category.truths.length})</span>
                  </h4>
                </div>

                <div className="space-y-2.5">
                  {category.truths.map((truth, idx) => (
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
                    <span>🔥 Dares ({category.dares.length})</span>
                  </h4>
                </div>

                <div className="space-y-2.5">
                  {category.dares.map((dare, idx) => (
                    <div
                      key={idx}
                      onClick={() => copyToClipboard(`DARE: ${dare}`)}
                      className="group p-4 rounded-2xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-rose-800 hover:border-rose-300 dark:hover:border-rose-700 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-start justify-between gap-3"
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
      
    </>
  );
}
