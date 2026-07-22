'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
}

export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = React.useState<string | null>(defaultOpenId || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 overflow-hidden transition-colors"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-4 text-left font-medium text-slate-900 dark:text-white hover:bg-emerald-50/50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
            >
              <span>{item.title}</span>
              <ChevronDown
                className={cn(
                  'w-4 h-4 text-slate-400 transition-transform duration-200',
                  isOpen && 'transform rotate-180 text-emerald-600'
                )}
              />
            </button>
            {isOpen && (
              <div className="p-4 pt-0 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/60 mt-1">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
