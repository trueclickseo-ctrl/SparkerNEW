import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck } from 'lucide-react';
import { SeoEntityModel } from '@/types/programmatic-seo';

interface AuthorBlockProps {
  data: SeoEntityModel;
}

export default function AuthorBlock({ data }: AuthorBlockProps) {
  return (
    <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        {/* Author Details */}
        <div className="space-y-2 flex-grow">
          <Badge variant="outline" className="text-[10px]">Author Profile</Badge>
          <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white">
            {data.author.name}
          </h3>
          <span className="block text-xs font-bold text-indigo-600 dark:text-indigo-400">{data.author.role}</span>
          {data.author.bio && (
            <p className="text-xs text-slate-600 dark:text-slate-450 leading-relaxed pt-1">
              {data.author.bio}
            </p>
          )}
        </div>
        
        {/* Reviewer Details */}
        {data.reviewedBy && (
          <div className="space-y-2 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-800 pt-4 sm:pt-0 sm:pl-4 min-w-[200px] flex-grow">
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-3 h-3" /> Fact-Checked By
            </span>
            <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
              {data.reviewedBy.name}
            </h4>
            <span className="block text-[10px] text-slate-500">{data.reviewedBy.role}</span>
            {data.reviewedBy.bio && (
              <p className="text-[10px] text-slate-600 dark:text-slate-450 leading-normal pt-1">
                {data.reviewedBy.bio}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Editorial Policy Citation */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-4 text-[10px] text-slate-450 flex flex-wrap gap-x-4 gap-y-1">
        <span>Editorial Policy: Sparkers Games maintains strict standards of originality, inclusivity, and family safety.</span>
        {data.sources && data.sources.length > 0 && (
          <span className="font-bold">
            Sources &amp; References: {data.sources.map((s, idx) => (
              <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-500 mr-2">
                {s.title}
              </a>
            ))}
          </span>
        )}
      </div>
    </div>
  );
}
