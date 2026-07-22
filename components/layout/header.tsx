'use client';

import * as React from 'react';
import Link from 'next/link';
import { Sparkles, Search, Menu, ChevronDown } from 'lucide-react';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { MegaMenu } from './mega-menu';
import { MobileNav } from './mobile-nav';
import { SearchModal } from './search-modal';
import { Locale } from '@/lib/i18n/config';

export function Header({ locale }: { locale: Locale }) {
  const [isMegaOpen, setIsMegaOpen] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  React.useEffect(() => {
    const handleOpenSearch = () => setIsSearchOpen(true);
    window.addEventListener('open-search', handleOpenSearch);
    return () => window.removeEventListener('open-search', handleOpenSearch);
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/85 dark:bg-slate-900/85 border-b border-emerald-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href={`/${locale}`} className="flex items-center space-x-3 rtl:space-x-reverse group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-emerald-950 dark:text-emerald-400">
            Sparkers<span className="text-amber-500">.games</span>
          </span>
        </Link>

        {/* Desktop Navigation Link Cluster */}
        <nav className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse text-xs font-semibold text-slate-700 dark:text-slate-300">
          <button
            onClick={() => setIsMegaOpen(!isMegaOpen)}
            className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-colors py-2"
          >
            <span>Explore All Games</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMegaOpen ? 'rotate-180 text-emerald-600' : ''}`} />
          </button>
          <Link href={`/${locale}/play`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Party Games
          </Link>
          <Link href={`/${locale}/couples`} className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
            Couples Hub
          </Link>
          <Link href={`/${locale}/quizzes`} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            Quizzes & Tools
          </Link>
          <Link href={`/${locale}/encyclopedia`} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Encyclopedia
          </Link>
        </nav>

        {/* Desktop Controls (Search, Locale, Theme) */}
        <div className="hidden lg:flex items-center space-x-3 rtl:space-x-reverse">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60 hover:border-emerald-300 transition-colors cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 text-emerald-600" />
            <span>Search...</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">⌘K</kbd>
          </button>
          <LocaleSwitcher currentLocale={locale} />
          <ThemeToggle />
        </div>

        {/* Mobile Control Trigger */}
        <div className="flex lg:hidden items-center space-x-2 rtl:space-x-reverse">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-slate-600 dark:text-slate-300"
            aria-label="Open Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 text-slate-600 dark:text-slate-300"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      {isMegaOpen && <MegaMenu locale={locale} onClose={() => setIsMegaOpen(false)} />}

      {/* Mobile Nav Drawer */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        locale={locale}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        locale={locale}
      />
    </header>
  );
}
