'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Shuffle, Star, Sparkles } from 'lucide-react';
import { useGameSession } from '@/hooks/use-game-session';
import { cn } from '@/lib/utils';

export function CardDeckPlayer({
  gameId,
  title,
  prompts,
  variant = 'play',
}: {
  gameId: string;
  title: string;
  prompts: string[];
  variant?: 'play' | 'couples';
}) {
  const {
    currentPrompt,
    currentIndex,
    totalCards,
    isFlipped,
    setIsFlipped,
    nextCard,
    prevCard,
    shuffle,
    favorites,
    toggleFavorite,
  } = useGameSession(gameId, prompts);

  const isFav = favorites.includes(currentPrompt);
  const progressPercent = totalCards > 0 ? Math.round(((currentIndex + 1) / totalCards) * 100) : 0;

  if (!prompts || prompts.length === 0) {
    return (
      <div className="w-full max-w-xl mx-auto p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center text-slate-500">
        No prompts available for this game.
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      {/* Progress & Deck Status Bar */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Card <strong>{currentIndex + 1}</strong> of <strong>{totalCards}</strong></span>
        <span>{progressPercent}% Completed</span>
      </div>

      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <div
          className={cn(
            'h-full transition-all duration-300',
            variant === 'couples' ? 'bg-rose-500' : 'bg-indigo-600'
          )}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 3D Flippable Digital Card */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="group relative w-full h-80 sm:h-96 rounded-3xl cursor-pointer [perspective:1000px]"
      >
        <div
          className={cn(
            'relative w-full h-full rounded-3xl transition-transform duration-500 [transform-style:preserve-3d] shadow-2xl border p-8 flex flex-col justify-between select-none',
            isFlipped ? '[transform:rotateY(180deg)]' : '',
            variant === 'couples'
              ? 'bg-gradient-to-br from-white via-rose-50/50 to-rose-100/40 dark:from-slate-900 dark:to-rose-950/40 border-rose-200/80 dark:border-rose-900/60'
              : 'bg-gradient-to-br from-white via-indigo-50/50 to-indigo-100/40 dark:from-slate-900 dark:to-indigo-950/40 border-indigo-200/80 dark:border-indigo-900/60'
          )}
        >
          {/* Card Top Row */}
          <div className="flex items-center justify-between">
            <span className={cn(
              'text-xs font-bold uppercase tracking-wider',
              variant === 'couples' ? 'text-rose-600 dark:text-rose-400' : 'text-indigo-600 dark:text-indigo-400'
            )}>
              {title}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(currentPrompt);
              }}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Bookmark prompt"
            >
              <Star
                className={cn(
                  'w-5 h-5 transition-colors',
                  isFav ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-600'
                )}
              />
            </button>
          </div>

          {/* Card Center Prompt Text */}
          <div className="py-6 text-center space-y-4">
            <p className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white leading-relaxed">
              &quot;{currentPrompt}&quot;
            </p>
          </div>

          {/* Card Bottom Hint */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Tap card or button to reveal / advance
          </div>
        </div>
      </div>

      {/* Deck Controls Action Bar */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <Button variant="outline" size="md" onClick={prevCard} aria-label="Previous card">
          <ChevronLeft className="w-5 h-5" /> Prev
        </Button>

        <Button
          variant="outline"
          size="md"
          onClick={shuffle}
          className="hover:bg-amber-50 dark:hover:bg-amber-950/40"
        >
          <Shuffle className="w-4 h-4 text-amber-500" /> Shuffle
        </Button>

        <Button
          variant={variant === 'couples' ? 'couples' : 'play'}
          size="md"
          onClick={nextCard}
          aria-label="Next card"
        >
          Next <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
