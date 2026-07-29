'use client';

import * as React from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sliders, Sparkles, Copy, Check } from 'lucide-react';

export default function CoupleNameClient({ locale }: { locale: string }) {
  const [name1, setName1] = React.useState('');
  const [name2, setName2] = React.useState('');
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const generateNames = () => {
    if (!name1.trim() || !name2.trim()) return [];
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
    navigator.clipboard.writeText(text).catch(() => {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    });
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Generators', url: `/${locale}/quizzes` },
          { name: 'Couple Name Generator', url: `/${locale}/generators/couple-name` },
        ]}
      />

      <div className="max-w-xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <Badge variant="couples" className="px-3 py-1">
            <Sparkles className="w-3.5 h-3.5" /> Couple Nickname Mixer
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
            Couple Name Generator
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Combine your names to create unique, cute, and funny couple nicknames instantly.
          </p>
        </div>

        <Card variant="default">
          <CardHeader>
            <CardTitle className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-purple-600" /> Enter Partner Names
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">First Name</label>
                <input
                  type="text"
                  placeholder="e.g. Romeo"
                  value={name1}
                  onChange={(e) => setName1(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">Second Name</label>
                <input
                  type="text"
                  placeholder="e.g. Juliet"
                  value={name2}
                  onChange={(e) => setName2(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {blendedNames.length > 0 && (
          <Card variant="couples" className="space-y-4">
            <CardHeader>
              <CardTitle className="text-base font-bold text-slate-900 dark:text-white">Blended Couple Names</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {blendedNames.map((name, idx) => (
                <div
                  key={idx}
                  onClick={() => handleCopy(name, idx)}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-purple-100 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all cursor-pointer group"
                >
                  <span className="font-heading font-extrabold text-base text-slate-800 dark:text-slate-200">{name}</span>
                  <button className="text-slate-400 group-hover:text-purple-600 transition-colors">
                    {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}
