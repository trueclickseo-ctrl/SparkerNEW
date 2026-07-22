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
    { id: 'all', label: '✨ All Decks' },
    { id: 'gen-z', label: '🔥 Gen Z & Vibe Check' },
    { id: 'romantic-stories', label: '📖 Love Stories & Lore' },
    { id: 'romantic', label: '💕 Romantic Decks' },
    { id: 'spicy-teasers', label: '🌶️ Spicy & After Dark' },
    { id: 'deep', label: '🔮 Deep Intimacy' },
    { id: 'flirty', label: '💋 Flirty Questions' },
    { id: 'compatibility', label: '🎯 Life Goals & Vision' },
    { id: 'long-distance', label: '✈️ Long Distance' },
    { id: 'marriage', label: '💍 Marriage & Milestones' },
    { id: 'date-night', label: '🥂 Date Night' },
    { id: 'new-couples', label: '🌱 New Couples' },
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
              'px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer shadow-xs hover:scale-105',
              isActive
                ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md shadow-rose-500/25 ring-2 ring-rose-400/50'
                : 'bg-white/90 dark:bg-slate-900 text-purple-950 dark:text-purple-300 border border-purple-200/80 dark:border-slate-800 hover:bg-purple-50 dark:hover:bg-slate-800'
            )}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
