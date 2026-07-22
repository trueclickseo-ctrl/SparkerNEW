'use client';

import * as React from 'react';
import Link from 'next/link';
import { Search, X, Gamepad2, Heart, Sparkles, BookOpen } from 'lucide-react';

export function SearchModal({
  isOpen,
  onClose,
  locale,
}: {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}) {
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else window.dispatchEvent(new CustomEvent('open-search'));
      }
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const mockResults = [
    { title: 'Truth or Dare Classic Deck', category: 'Party Games', href: `/${locale}/play/truth-or-dare`, icon: <Gamepad2 className="w-4 h-4 text-indigo-500" /> },
    { title: '89 Framework Intimacy Questions', category: 'Couples Hub', href: `/${locale}/couples/deep-intimacy`, icon: <Heart className="w-4 h-4 text-rose-500" /> },
    { title: 'Love Language Relationship Quiz', category: 'Quizzes', href: `/${locale}/quizzes/love-language`, icon: <Sparkles className="w-4 h-4 text-amber-500" /> },
    { title: 'Never Have I Ever Official Rules', category: 'Encyclopedia', href: `/${locale}/encyclopedia/never-have-i-ever`, icon: <BookOpen className="w-4 h-4 text-emerald-500" /> },
  ].filter((r) => r.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center px-4 border-b border-slate-100 dark:border-slate-800">
          <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 89+ games, questions, quizzes & rules..."
            className="w-full px-3 py-4 text-sm bg-transparent focus:outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 max-h-80 overflow-y-auto space-y-2">
          {mockResults.length > 0 ? (
            mockResults.map((res) => (
              <Link
                key={res.href}
                href={res.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50/60 dark:hover:bg-slate-800/60 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:scale-105 transition-transform">
                    {res.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-white">{res.title}</h4>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">{res.category}</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center py-6 text-xs text-slate-500 dark:text-slate-400">
              No matching games found for &quot;{query}&quot;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
