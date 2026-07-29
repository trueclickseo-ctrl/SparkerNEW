'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Printer, Download } from 'lucide-react';
import { SeoPrompt } from '@/types/programmatic-seo';

interface PrintableBlockProps {
  title: string;
  prompts: SeoPrompt[];
}

export default function PrintableBlock({ title, prompts }: PrintableBlockProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 border-2 border-indigo-200 dark:border-indigo-900/50 shadow-md space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 dark:text-white">
          Free Printable {title} Cards PDF
        </h2>
        <p className="text-sm text-slate-650 dark:text-slate-400">
          Want a physical card deck? You can print out our custom card set directly in your browser. Perfect for road trips, school classrooms, or party nights.
        </p>
      </div>

      {/* Sheet Mockup */}
      <div className="p-4 rounded-xl border border-dashed border-indigo-300 dark:border-indigo-850 bg-white dark:bg-slate-950 grid grid-cols-2 gap-3 max-h-[220px] overflow-hidden select-none relative opacity-70">
        {prompts.slice(0, 4).map((p, idx) => (
          <div key={idx} className="p-3 rounded-lg border border-slate-200 text-center flex flex-col justify-center min-h-[80px]">
            <span className="text-[8px] font-bold text-indigo-500 uppercase">SPARKERS</span>
            <p className="text-[10px] font-medium text-slate-600 line-clamp-2 mt-1">{p.text}</p>
          </div>
        ))}
        {/* Overlay fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-slate-950" />
      </div>

      <div className="flex flex-wrap gap-3">
        <Button variant="play" size="sm" onClick={handlePrint} className="cursor-pointer">
          <Printer className="w-4 h-4" /> Print Cards Sheet
        </Button>
        <Button variant="outline" size="sm" onClick={handlePrint} className="cursor-pointer">
          <Download className="w-4 h-4" /> Save as PDF
        </Button>
      </div>
    </div>
  );
}
