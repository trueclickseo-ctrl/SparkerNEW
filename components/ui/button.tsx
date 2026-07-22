import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'play' | 'couples' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-[0.98]';

    const variants = {
      default:
        'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 shadow-md shadow-emerald-600/20 dark:bg-emerald-600 dark:hover:bg-emerald-500',
      play:
        'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-md shadow-indigo-600/20 dark:bg-indigo-600 dark:hover:bg-indigo-500',
      couples:
        'bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-500 shadow-md shadow-rose-600/20 dark:bg-rose-600 dark:hover:bg-rose-500',
      outline:
        'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800',
      ghost:
        'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 focus:ring-emerald-500',
      link:
        'text-emerald-700 dark:text-emerald-400 underline-offset-4 hover:underline p-0 focus:ring-0',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2.5 gap-2',
      lg: 'text-base px-6 py-3 gap-2.5',
      xl: 'text-lg px-8 py-4 gap-3 font-semibold rounded-2xl',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
