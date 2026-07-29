'use client';

import * as React from 'react';
import { SeoPrompt } from '@/types/programmatic-seo';
import { Copy, Check, Sparkles } from 'lucide-react';

interface ExamplesBlockProps {
  prompts: SeoPrompt[];
  title: string;
}

export default function ExamplesBlock({ prompts, title }: ExamplesBlockProps) {
  const [copiedIdx, setCopiedIdx] = React.useState<number | null>(null);

  if (!prompts || prompts.length === 0) return null;

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text).catch(() => {
      // fallback
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    });
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-500 animate-pulse" /> Sample Cards &amp; Prompts
        </h2>
        <span className="text-xs text-slate-400 font-semibold">Click cards to copy text</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prompts.map((prompt, idx) => (
          <div
            key={idx}
            onClick={() => handleCopy(prompt.text, idx)}
            className="group relative p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-800 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between min-h-[100px]"
          >
            <div className="space-y-1.5 pr-6">
              {prompt.context && (
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {prompt.context}
                </span>
              )}
              <p className="text-sm font-semibold text-slate-850 dark:text-slate-200 leading-relaxed">
                {prompt.text}
              </p>
            </div>
            
            <button className="absolute right-4 bottom-4 text-slate-400 group-hover:text-indigo-500 transition-colors">
              {copiedIdx === idx ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
