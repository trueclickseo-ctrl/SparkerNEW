import * as React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, TrendingUp, Grid, Sparkles } from 'lucide-react';
import { SeoEntityModel, SeoRelatedLink } from '@/types/programmatic-seo';

interface LinkingBlockProps {
  data: SeoEntityModel;
  locale: string;
  parentLink?: SeoRelatedLink;
  siblingLinks?: SeoRelatedLink[];
  childLinks?: SeoRelatedLink[];
  trendingLinks?: SeoRelatedLink[];
}

export default function LinkingBlock({
  data,
  locale,
  parentLink,
  siblingLinks = [],
  childLinks = [],
  trendingLinks = [],
}: LinkingBlockProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* 1. Parent Links */}
      {parentLink && (
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/65 dark:border-slate-800 space-y-2">
          <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" /> Parent Category
          </span>
          <Link
            href={parentLink.url}
            className="block text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            {parentLink.title}
          </Link>
        </div>
      )}

      {/* 2. Children / Subtopics */}
      {childLinks.length > 0 && (
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/65 dark:border-slate-800 space-y-3">
          <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider flex items-center gap-1">
            <Grid className="w-3 h-3" /> Subtopics &amp; Variations
          </span>
          <div className="flex flex-wrap gap-2">
            {childLinks.map((link) => (
              <Link key={link.url} href={link.url}>
                <Badge variant="outline" className="hover:bg-indigo-50 dark:hover:bg-slate-800 text-[11px] font-bold">
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 3. Siblings / Slices */}
      {siblingLinks.length > 0 && (
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/65 dark:border-slate-800 space-y-3">
          <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Related Game Decks
          </span>
          <div className="flex flex-wrap gap-2">
            {siblingLinks.map((link) => (
              <Link key={link.url} href={link.url}>
                <Badge variant="outline" className="hover:bg-indigo-50 dark:hover:bg-slate-800 text-[11px] font-bold">
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 4. Trending / Popular pages in slot */}
      {trendingLinks.length > 0 && (
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/65 dark:border-slate-800 space-y-2.5 md:col-span-3">
          <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Popular &amp; Trending
          </span>
          <div className="flex flex-wrap gap-3">
            {trendingLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 underline decoration-indigo-200 dark:decoration-indigo-850 decoration-2"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
