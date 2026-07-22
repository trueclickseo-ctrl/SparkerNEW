import Link from 'next/link';
import { Sparkles, Heart, Gamepad2, Shield, Rss, Mail, Building, Scale, Lock, Users } from 'lucide-react';
import { Locale } from '@/lib/i18n/config';

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
        
        {/* Brand Column (Col 1 & 2 on Large Screens) */}
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-amber-500/20 font-bold text-lg">
              ✨
            </div>
            <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
              Sparkers<span className="text-amber-400">.games</span>
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Sparkers Games is an interactive digital card game platform engineered for couples, party hosts, students, educators, and teams to build deep emotional connections and unleash creative thinking.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href={`/${locale}/games`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 font-semibold text-xs transition-colors"
            >
              <Gamepad2 className="w-4 h-4 text-purple-400" /> 107+ Categories &amp; Decks
            </Link>
            <Link
              href={`/${locale}/truth-or-dare-questions`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-950/40 hover:bg-amber-900/60 text-amber-300 border border-amber-800/60 font-semibold text-xs transition-colors"
            >
              <Sparkles className="w-4 h-4 text-amber-400" /> 555+ Truth or Dare
            </Link>
          </div>
        </div>

        {/* Silo Column 1: Play & Games */}
        <div className="space-y-3.5">
          <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-100 flex items-center gap-1.5">
            <Gamepad2 className="w-4 h-4 text-indigo-400" /> Play Platform
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><Link href={`/${locale}/play/truth-or-dare`} className="hover:text-indigo-400 transition-colors">Truth or Dare Classic</Link></li>
            <li><Link href={`/${locale}/play/never-have-i-ever`} className="hover:text-indigo-400 transition-colors">Never Have I Ever</Link></li>
            <li><Link href={`/${locale}/play/would-you-rather`} className="hover:text-indigo-400 transition-colors">Would You Rather?</Link></li>
            <li><Link href={`/${locale}/play/charades`} className="hover:text-indigo-400 transition-colors">Speed Charades</Link></li>
            <li><Link href={`/${locale}/play/mafia`} className="hover:text-indigo-400 transition-colors">Mafia / Werewolf</Link></li>
            <li><Link href={`/${locale}/cards`} className="hover:text-purple-400 font-medium transition-colors">📦 Boxed Physical Cards</Link></li>
          </ul>
        </div>

        {/* Silo Column 2: Education & Brainstorming */}
        <div className="space-y-3.5">
          <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-amber-400" /> Education &amp; Brain Gym
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><Link href={`/${locale}/educational/classroom-icebreakers`} className="hover:text-amber-300 font-medium transition-colors">🎓 Student Icebreakers (25 Cards)</Link></li>
            <li><Link href={`/${locale}/educational/teacher-reflections`} className="hover:text-amber-300 font-medium transition-colors">🍎 Teacher Reflections (25 Cards)</Link></li>
            <li><Link href={`/${locale}/educational/student-debates`} className="hover:text-amber-300 font-medium transition-colors">🗣️ University Debates (25 Cards)</Link></li>
            <li><Link href={`/${locale}/educational/brain-exercise`} className="hover:text-amber-300 font-medium transition-colors">🧠 Brain Exercise Gym (25 Cards)</Link></li>
            <li><Link href={`/${locale}/educational/college-study-breaks`} className="hover:text-amber-300 font-medium transition-colors">☕ College Study Breaks (25 Cards)</Link></li>
          </ul>
        </div>

        {/* Silo Column 3: Company & Legal (Matches Screenshot exactly) */}
        <div className="space-y-3.5">
          <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Building className="w-4 h-4 text-amber-400" /> Company
          </h4>
          <ul className="space-y-2.5 text-xs font-medium text-slate-300">
            <li>
              <Link href={`/${locale}/about`} className="hover:text-white transition-colors flex items-center gap-1.5">
                About Us
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} className="hover:text-white transition-colors flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> Contact
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-400" /> Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/terms`} className="hover:text-white transition-colors flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-slate-400" /> Terms of Service
              </Link></li>
            <li className="pt-1 border-t border-slate-800">
              <Link href={`/${locale}/encyclopedia`} className="hover:text-emerald-400 text-slate-400 text-[11px] transition-colors">
                Game Encyclopedia
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog`} className="hover:text-emerald-400 text-slate-400 text-[11px] transition-colors">
                Sparkers Blog
              </Link>
            </li>
            <li>
              <Link href="/rss.xml" className="hover:text-emerald-400 text-slate-400 text-[11px] flex items-center gap-1 transition-colors">
                <Rss className="w-3 h-3" /> RSS Feed
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Line */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Sparkers Games. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href={`/${locale}/privacy`} className="hover:text-slate-400 transition-colors">Privacy</Link>
          <Link href={`/${locale}/terms`} className="hover:text-slate-400 transition-colors">Terms</Link>
          <Link href={`/${locale}/contact`} className="hover:text-slate-400 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
