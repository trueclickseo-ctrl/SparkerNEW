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
        'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 focus:ring-purple-500 shadow-md shadow-purple-500/25 border border-purple-400/30',
      play:
        'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-700 hover:to-violet-700 focus:ring-indigo-500 shadow-md shadow-indigo-500/25 border border-indigo-400/30',
      couples:
        'bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-600 hover:to-rose-700 focus:ring-rose-500 shadow-md shadow-rose-500/25 border border-pink-400/30',
      outline:
        'border-2 border-purple-200 bg-white/90 text-purple-950 hover:bg-purple-50 hover:border-purple-300 focus:ring-purple-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 shadow-xs',
      ghost:
        'text-purple-900 hover:bg-purple-100/60 dark:text-slate-300 dark:hover:bg-slate-800 focus:ring-purple-500 font-bold',
      link:
        'text-purple-700 dark:text-purple-400 underline-offset-4 hover:underline p-0 focus:ring-0 font-bold',
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
