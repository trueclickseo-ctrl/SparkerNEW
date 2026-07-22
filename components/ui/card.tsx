import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'play' | 'couples' | 'glass';
}

export function Card({ className, variant = 'default', ...props }: CardProps) {
  const variants = {
    default:
      'bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow',
    play:
      'bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-950/60 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:-translate-y-0.5',
    couples:
      'bg-white dark:bg-slate-900 border border-rose-100 dark:border-rose-950/60 shadow-sm hover:border-rose-300 dark:hover:border-rose-700 transition-all hover:-translate-y-0.5',
    glass:
      'bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/40 dark:border-slate-800/40 shadow-lg',
  };

  return (
    <div
      className={cn('rounded-2xl p-6 text-slate-900 dark:text-slate-100', variants[variant], className)}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col space-y-1.5 mb-4', className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('font-heading text-xl font-bold tracking-tight text-slate-900 dark:text-white', className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm text-slate-500 dark:text-slate-400', className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('space-y-3', className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex items-center pt-4 border-t border-slate-100 dark:border-slate-800 mt-4', className)} {...props} />;
}
