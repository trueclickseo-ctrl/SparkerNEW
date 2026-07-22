'use client';

import * as React from 'react';
import Link from 'next/link';
import { Sparkles, Search, Menu, ChevronDown } from 'lucide-react';
import { MegaMenu } from './mega-menu';
import { MobileNav } from './mobile-nav';
import { SearchModal } from './search-modal';
import { Locale } from '@/lib/i18n/config';

export function Header({ locale }: { locale: Locale }) {
  const [isMegaOpen, setIsMegaOpen] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const headerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleOpenSearch = () => setIsSearchOpen(true);
    window.addEventListener('open-search', handleOpenSearch);
    return () => window.removeEventListener('open-search', handleOpenSearch);
  }, []);

  // Close Mega Menu when clicking outside header container
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMegaOpen(false);
      }
    }
    if (isMegaOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMegaOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 backdrop-blur-lg bg-white/95 dark:bg-slate-900/95 border-b-2 border-purple-200/80 dark:border-purple-900/50 transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href={`/${locale}`} className="flex items-center space-x-3 rtl:space-x-reverse group shrink-0 mr-4 lg:mr-8">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 text-white flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <Sparkles className="w-5 h-5 animate-pulse-subtle" />
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight text-purple-950 dark:text-purple-300">
            Sparkers<span className="text-amber-500 font-black">.games</span>
          </span>
        </Link>

        {/* Desktop Navigation Link Cluster */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 rtl:space-x-reverse text-xs font-semibold text-slate-700 dark:text-slate-300">
          <button
            onClick={() => setIsMegaOpen(!isMegaOpen)}
            className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-colors py-2"
          >
            <span>Explore All Games</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMegaOpen ? 'rotate-180 text-emerald-600' : ''}`} />
          </button>
          <Link href={`/${locale}/play`} onClick={() => setIsMegaOpen(false)} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap">
            Party Games
          </Link>
          <Link href={`/${locale}/couples`} onClick={() => setIsMegaOpen(false)} className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors whitespace-nowrap">
            Couples Hub
          </Link>
          <Link href={`/${locale}/truth-or-dare-questions`} onClick={() => setIsMegaOpen(false)} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-extrabold text-amber-600 dark:text-amber-400 whitespace-nowrap">
            🔥 555+ Truth or Dare
          </Link>
          <Link href={`/${locale}/cards`} onClick={() => setIsMegaOpen(false)} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
            📦 Physical Cards
          </Link>
          <Link href={`/${locale}/quizzes`} onClick={() => setIsMegaOpen(false)} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap">
            Quizzes &amp; Tools
          </Link>
          <Link href={`/${locale}/encyclopedia`} onClick={() => setIsMegaOpen(false)} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors whitespace-nowrap">
            Encyclopedia
          </Link>
        </nav>

        {/* Desktop Controls (Search) */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 ml-6 xl:ml-10 rtl:space-x-reverse rtl:ml-0 rtl:mr-6">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60 hover:border-emerald-300 transition-colors cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 text-emerald-600" />
            <span>Search...</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">⌘K</kbd>
          </button>
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
