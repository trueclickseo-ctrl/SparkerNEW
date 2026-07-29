import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { Alert } from '@/components/ui/alert';

interface RulesBlockProps {
  rules: string[];
  title: string;
}

export default function RulesBlock({ rules, title }: RulesBlockProps) {
  if (!rules || rules.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">
        Official How to Play Guide: {title}
      </h2>
      <div className="space-y-3">
        {rules.map((rule, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs"
          >
            <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-black flex items-center justify-center shrink-0">
              {idx + 1}
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {rule}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
