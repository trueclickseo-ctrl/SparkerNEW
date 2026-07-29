import * as React from 'react';
import { Lightbulb } from 'lucide-react';

interface TipsBlockProps {
  tips: string[];
}

export default function TipsBlock({ tips }: TipsBlockProps) {
  if (!tips || tips.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
        <Lightbulb className="w-5 h-5 text-amber-500" /> Strategies &amp; Pro Tips
      </h2>
      <div className="grid grid-cols-1 gap-3">
        {tips.map((tip, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
          >
            {tip}
          </div>
        ))}
      </div>
    </div>
  );
}
