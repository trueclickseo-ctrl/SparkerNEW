'use client';

import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export function PlayFilters({
  activeAudience,
  searchQuery,
  onAudienceChange,
  onSearchChange,
}: {
  activeAudience: string;
  searchQuery: string;
  onAudienceChange: (aud: string) => void;
  onSearchChange: (q: string) => void;
}) {
  const audiences = [
    { id: 'all', label: 'All Games' },
    { id: 'party', label: 'Party & Friends' },
    { id: 'teens', label: 'Teens' },
    { id: 'kids', label: 'Kids & Family' },
    { id: 'office', label: 'Office Teams' },
    { id: 'drinking', label: 'Drinking (21+)' },
    { id: 'large-groups', label: 'Large Groups (8+)' },
    { id: 'small-groups', label: 'Small Groups (2-4)' },
  ];

  return (
    <div className="space-y-4 mb-8">
      {/* Search Input Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter games by keyword..."
          className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
        />
      </div>

      {/* Audience Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {audiences.map((aud) => {
          const isActive = activeAudience === aud.id;
          return (
            <button
              key={aud.id}
              onClick={() => onAudienceChange(aud.id)}
              className={cn(
                'px-3 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer',
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              )}
            >
              {aud.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
