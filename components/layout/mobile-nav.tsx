'use client';

import * as React from 'react';
import Link from 'next/link';
import { X, Search, Gamepad2, Heart, Sparkles, BookOpen, FileText } from 'lucide-react';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { Locale } from '@/lib/i18n/config';

export function MobileNav({
  isOpen,
  onClose,
  locale,
  onOpenSearch,
}: {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
  onOpenSearch: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed top-0 right-0 rtl:right-auto rtl:left-0 w-full max-w-xs h-full bg-white dark:bg-slate-900 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <span className="font-heading font-bold text-lg text-emerald-950 dark:text-emerald-400">
              Sparkers Menu
            </span>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white"
              aria-label="Close Mobile Navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60"
          >
            <Search className="w-4 h-4 text-emerald-600" />
            <span>Search games, quizzes & rules...</span>
          </button>

          <nav className="space-y-2">
            <Link
              href={`/${locale}/play`}
              onClick={onClose}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-slate-800 dark:text-slate-200 font-medium text-sm"
            >
              <Gamepad2 className="w-5 h-5 text-indigo-600" /> Party Games (/play)
            </Link>
            <Link
              href={`/${locale}/couples`}
              onClick={onClose}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/40 text-slate-800 dark:text-slate-200 font-medium text-sm"
            >
              <Heart className="w-5 h-5 text-rose-600" /> Couples Hub (/couples)
            </Link>
            <Link
              href={`/${locale}/quizzes`}
              onClick={onClose}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-950/40 text-slate-800 dark:text-slate-200 font-medium text-sm"
            >
              <Sparkles className="w-5 h-5 text-amber-600" /> Quizzes & Generators
            </Link>
            <Link
              href={`/${locale}/encyclopedia`}
              onClick={onClose}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-800 dark:text-slate-200 font-medium text-sm"
            >
              <BookOpen className="w-5 h-5 text-emerald-600" /> Encyclopedia & Guides
            </Link>
            <Link
              href={`/${locale}/blog`}
              onClick={onClose}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/40 text-slate-800 dark:text-slate-200 font-medium text-sm"
            >
              <FileText className="w-5 h-5 text-purple-600" /> Blog & Articles
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <LocaleSwitcher currentLocale={locale} />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
