import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'play' | 'couples' | 'amber' | 'outline';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default:
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60',
    play:
      'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60',
    couples:
      'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200/60 dark:border-rose-800/60',
    amber:
      'bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60',
    outline:
      'bg-transparent border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full transition-colors',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
