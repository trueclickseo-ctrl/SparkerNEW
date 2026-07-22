import Link from 'next/link';
import { Gamepad2, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero({
  locale,
  dict,
}: {
  locale: string;
  dict: Record<string, string>;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100/60 via-emerald-50/20 to-transparent py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        {/* AEO Featured Snippet Box */}
        <div className="inline-block p-6 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-emerald-200/80 dark:border-slate-800 shadow-xl shadow-emerald-950/5 text-start space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              {dict.aeoTitle || 'Direct Answer / Quick Summary'}
            </span>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            {dict.aeoDescription ||
              'Sparkers Games is an all-in-one digital party and intimate conversation hub featuring 89+ curated games, love language quizzes, and icebreakers.'}
          </p>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {dict.heroTitle || 'Ignite Deep Connections & Unforgettable Party Moments'}
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {dict.heroSubtitle ||
            'Explore interactive card decks for couples, party hosts, teens, and office teams across 27 global languages.'}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
          <Link href={`/${locale}/play`}>
            <Button size="xl" variant="default" className="shadow-xl shadow-emerald-600/25">
              <Gamepad2 className="w-5 h-5" /> Explore Party Games <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href={`/${locale}/couples`}>
            <Button size="xl" variant="couples" className="shadow-xl shadow-rose-600/25">
              <Heart className="w-5 h-5" /> Couples Hub <Sparkles className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
