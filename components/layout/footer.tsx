import Link from 'next/link';
import { Sparkles, Heart, Gamepad2, Shield, Rss, FileText } from 'lucide-react';
import { Locale } from '@/lib/i18n/config';

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-emerald-100 dark:border-slate-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-heading font-bold text-lg text-emerald-950 dark:text-emerald-400">
              Sparkers<span className="text-amber-500">.games</span>
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
            Sparkers Games is an interactive multi-lingual game platform engineered for couples, party hosts, friends, and teams to build deep connections.
          </p>
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-2">
            <Link
              href={`/${locale}/games`}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-900/60 font-semibold transition-colors"
            >
              <Gamepad2 className="w-3.5 h-3.5" /> 89+ Games
            </Link>
            <span>•</span>
            <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-rose-500" /> 27 Locales</span>
          </div>
        </div>

        {/* Silo Column 1: Play Platform */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
            Play Platform
          </h4>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
            <li><Link href={`/${locale}/play/truth-or-dare`} className="hover:text-emerald-600">Truth or Dare</Link></li>
            <li><Link href={`/${locale}/play/never-have-i-ever`} className="hover:text-emerald-600">Never Have I Ever</Link></li>
            <li><Link href={`/${locale}/play/would-you-rather`} className="hover:text-emerald-600">Would You Rather</Link></li>
            <li><Link href={`/${locale}/play/charades`} className="hover:text-emerald-600">Charades</Link></li>
            <li><Link href={`/${locale}/play/mafia`} className="hover:text-emerald-600">Mafia / Werewolf</Link></li>
          </ul>
        </div>

        {/* Silo Column 2: Couples Hub */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
            Couples Hub
          </h4>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
            <li><Link href={`/${locale}/couples/romantic`} className="hover:text-rose-600">Romantic Decks</Link></li>
            <li><Link href={`/${locale}/couples/flirty`} className="hover:text-rose-600">Flirty Questions</Link></li>
            <li><Link href={`/${locale}/couples/long-distance`} className="hover:text-rose-600">Long Distance Mode</Link></li>
            <li><Link href={`/${locale}/couples/date-night`} className="hover:text-rose-600">Date Night Starters</Link></li>
            <li><Link href={`/${locale}/quizzes/love-language`} className="hover:text-rose-600">Love Language Quiz</Link></li>
          </ul>
        </div>

        {/* Silo Column 3: Encyclopedia & Legal */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
            Resources & Legal
          </h4>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
            <li><Link href={`/${locale}/encyclopedia`} className="hover:text-emerald-600">Game Encyclopedia</Link></li>
            <li><Link href={`/${locale}/blog`} className="hover:text-emerald-600">Sparkers Blog</Link></li>
            <li><Link href="/llms.txt" className="hover:text-emerald-600 flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> llms.txt</Link></li>
            <li><Link href="/rss.xml" className="hover:text-emerald-600 flex items-center gap-1"><Rss className="w-3.5 h-3.5" /> RSS Feed</Link></li>
            <li><Link href={`/${locale}/privacy`} className="hover:text-emerald-600 flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Sparkers Games. All global content rights reserved.</p>
        <p className="text-[11px]">Designed for high-performance internationalization & AEO/GEO indexing.</p>
      </div>
    </footer>
  );
}
