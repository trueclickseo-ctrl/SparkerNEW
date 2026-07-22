'use client';

import { cn } from '@/lib/utils';

export function CouplesFilters({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}) {
  const categories = [
    { id: 'all', label: 'All Decks' },
    { id: 'deep', label: 'Deep Intimacy' },
    { id: 'romantic', label: 'Romantic' },
    { id: 'flirty', label: 'Flirty & Spicy' },
    { id: 'long-distance', label: 'Long Distance' },
    { id: 'marriage', label: 'Marriage' },
    { id: 'date-night', label: 'Date Night' },
    { id: 'new-couples', label: 'New Couples' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={cn(
              'px-3 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer',
              isActive
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            )}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
