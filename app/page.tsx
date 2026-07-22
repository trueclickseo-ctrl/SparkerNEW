import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Sparkles, Gamepad2, Heart, ShieldCheck, Zap, Globe, FileText, CheckCircle2 } from 'lucide-react';
import { getFAQSchema } from '@/lib/seo/jsonld';

export default function Home() {
  const faqData = [
    {
      question: 'What is Sparkers Games?',
      answer: 'Sparkers Games is a premier platform offering interactive party games, couples conversation starters, icebreaker questions, and relationship quizzes.',
    },
    {
      question: 'Are all games free to play on Sparkers?',
      answer: 'Yes! All classic card decks, generator tools, and quizzes are accessible online across desktop and mobile devices.',
    },
    {
      question: 'Does Sparkers Games support multiple languages?',
      answer: 'Sparkers Games is architected to support 27 global languages with full localized routing and RTL support.',
    },
  ];

  const faqSchema = getFAQSchema(faqData);

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-emerald-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-emerald-950 dark:text-emerald-400">
              Sparkers<span className="text-amber-500">.games</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 font-medium">
              Milestone 1 Complete
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* AEO Snippet Section */}
        <section className="bg-gradient-to-b from-emerald-100/50 via-emerald-50/20 to-transparent py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Answer Engine Optimization (AEO) 2-3 sentence featured snippet block */}
            <div className="inline-block p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-emerald-200/80 dark:border-slate-800 shadow-xl shadow-emerald-950/5 text-left space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Direct Answer / Quick Summary
              </span>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                <strong>Sparkers Games</strong> is an all-in-one digital party and intimate conversation hub featuring 89+ curated games, love language quizzes, and icebreakers. Engineered for effortless social bonding, it offers seamless instant-play card decks for couples, group parties, and remote connections across 27 global languages.
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Ignite Deep Connections & Unforgettable Party Moments
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Clean light theme, vibrant emerald aesthetics, and a rock-solid Next.js 15 foundation built for global scale.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-medium shadow-lg shadow-emerald-600/25">
                <Gamepad2 className="w-5 h-5" /> Play Decks
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/30 dark:text-rose-300 dark:border-rose-900 font-medium">
                <Heart className="w-5 h-5" /> Couples Hub
              </div>
            </div>
          </div>
        </section>

        {/* Milestone 1 Architecture Status Checklist */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-6">
            <div className="border-b border-emerald-200/60 pb-4">
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                Milestone 1 — Foundation & Architecture Verified
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                All mandatory technical & SEO infrastructure prerequisites compiled successfully.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Next.js 15 & TS</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  App router architecture with zero TypeScript errors and rigid code standards.
                </p>
                <div className="flex items-center text-xs text-emerald-600 font-medium gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Global SEO Engine</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Metadata builder, Canonical tags, Open Graph, Twitter Cards, Organization JSON-LD & FAQ Schema.
                </p>
                <div className="flex items-center text-xs text-emerald-600 font-medium gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">GEO & AEO Ready</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Server-side rendering, llms.txt standard support, featured snippet block structure.
                </p>
                <div className="flex items-center text-xs text-emerald-600 font-medium gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 shadow-sm">
                <h3 className="font-semibold text-slate-900 dark:text-white text-base mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-emerald-100 dark:border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Sparkers Games. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/llms.txt" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" /> llms.txt
            </Link>
            <Link href="/robots.txt" className="hover:text-emerald-600 transition-colors">
              robots.txt
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
