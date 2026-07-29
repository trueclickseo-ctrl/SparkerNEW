import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ShieldCheck } from 'lucide-react';
import { SeoEntityModel } from '@/types/programmatic-seo';

interface IntroBlockProps {
  data: SeoEntityModel;
}

export default function IntroBlock({ data }: IntroBlockProps) {
  const readingTime = Math.max(1, Math.round(data.introduction.split(/\s+/).length / 200)) + ' min read';

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 items-center justify-center sm:justify-start">
        <Badge variant="play" className="uppercase tracking-wider text-[10px]">
          {data.contentType} Mode
        </Badge>
        {data.difficulty && (
          <Badge variant="outline" className="capitalize text-[10px]">
            ⚡ {data.difficulty}
          </Badge>
        )}
        {data.playerCount && (
          <Badge variant="outline" className="text-[10px]">
            👥 {data.playerCount}
          </Badge>
        )}
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
        {data.h1}
      </h1>

      {/* EEAT Header Meta */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-4">
        <span className="flex items-center gap-1">
          <User className="w-3.5 h-3.5 text-indigo-500" /> By {data.author.name}
        </span>
        {data.reviewedBy && (
          <>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Reviewed by {data.reviewedBy.name}
            </span>
          </>
        )}
        <span>•</span>
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" /> Updated {data.lastUpdated}
        </span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> {readingTime}
        </span>
      </div>

      {/* Quick Facts Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
        <div>
          <span className="block text-[10px] font-black uppercase text-slate-400">Players</span>
          <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{data.playerCount || '2+'}</span>
        </div>
        <div>
          <span className="block text-[10px] font-black uppercase text-slate-400">Duration</span>
          <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{data.duration || '15-45m'}</span>
        </div>
        <div>
          <span className="block text-[10px] font-black uppercase text-slate-400">Equipment</span>
          <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{data.equipmentNeeded || 'None'}</span>
        </div>
        <div>
          <span className="block text-[10px] font-black uppercase text-slate-400">Skill Level</span>
          <span className="text-sm font-bold text-slate-800 dark:text-slate-200 capitalize">{data.skillLevel || 'Beginner'}</span>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed text-base">
        {data.introduction}
      </div>
    </div>
  );
}
