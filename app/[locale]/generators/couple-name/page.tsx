'use client';

import * as React from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sliders, Sparkles, Copy, Check } from 'lucide-react';

export default function CoupleNameGeneratorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams.locale;

  const [name1, setName1] = React.useState('');
  const [name2, setName2] = React.useState('');
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const generateNames = () => {
    if (!name1 || !name2) return [];
    const n1 = name1.trim();
    const n2 = name2.trim();

    const part1A = n1.slice(0, Math.ceil(n1.length / 2));
    const part1B = n1.slice(Math.floor(n1.length / 2));
    const part2A = n2.slice(0, Math.ceil(n2.length / 2));
    const part2B = n2.slice(Math.floor(n2.length / 2));

    return [
      `${part1A}${part2B.toLowerCase()}`,
      `${part2A}${part1B.toLowerCase()}`,
      `${n1.slice(0, 3)}${n2.slice(-3).toLowerCase()}`,
      `${n2.slice(0, 3)}${n1.slice(-3).toLowerCase()}`,
      `${n1.toUpperCase()}&${n2.toUpperCase()}`,
    ];
  };

  const blendedNames = generateNames();

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Generators', url: `/${locale}/quizzes` },
          { name: 'Couple Name Generator', url: `/${locale}/generators/couple-name` },
        ]}
      />

      <main className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="amber" className="px-3 py-1">
            <Sliders className="w-3.5 h-3.5" /> Couple Nickname Utility
          </Badge>
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
            Couple Name Generator
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Combine your names to create cute ship names and fun hashtags!
          </p>
        </div>

        <Card variant="default" className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                First Partner Name
              </label>
              <input
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                placeholder="e.g. Alex"
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                Second Partner Name
              </label>
              <input
                type="text"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                placeholder="e.g. Taylor"
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </Card>

        {blendedNames.length > 0 && (
          <Card variant="glass" className="p-6 space-y-4">
            <CardHeader className="p-0">
              <CardTitle className="text-lg flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" /> Blended Nicknames
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              {blendedNames.map((name, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700"
                >
                  <span className="font-bold text-slate-900 dark:text-white text-base">{name}</span>
                  <button
                    onClick={() => handleCopy(name, idx)}
                    className="p-2 text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
