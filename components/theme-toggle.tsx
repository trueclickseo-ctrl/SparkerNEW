'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setThemeState] = React.useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    // Check initial document state or localStorage
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      setThemeState('dark');
    } else {
      const stored = localStorage.getItem('sparkers-theme');
      if (stored === 'dark') {
        document.documentElement.classList.add('dark');
        setThemeState('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('sparkers-theme', nextTheme);
    setThemeState(nextTheme);
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-emerald-100/50 border border-emerald-200" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 text-slate-700 border border-slate-200/80 hover:bg-slate-200 dark:bg-slate-800 dark:text-amber-400 dark:border-slate-700 dark:hover:bg-slate-750 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
      aria-label="Toggle Theme"
      id="theme-toggle-btn"
    >
      {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
    </button>
  );
}
