import Link from 'next/link';
import Image from 'next/image';
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
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* AEO Featured Snippet Box */}
            <div className="inline-block p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-emerald-200/80 dark:border-slate-800 shadow-xl shadow-emerald-950/5 text-start space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                {dict.aeoTitle || 'Direct Answer / Quick Summary'}
              </span>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                {dict.aeoDescription ||
                  'Sparkers Games is an all-in-one digital party and intimate conversation hub featuring 89+ curated games, love language quizzes, and icebreakers.'}
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {dict.heroTitle || 'Ignite Deep Connections & Unforgettable Party Moments'}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              {dict.heroSubtitle ||
                'Explore interactive card decks for couples, party hosts, teens, and office teams across 27 global languages.'}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
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

            {/* Social proof pill */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                <Image src="/images/testimonial-elena.jpg" alt="Elena" width={32} height={32} className="w-8 h-8 rounded-full object-cover border-2 border-white dark:border-slate-900" />
                <Image src="/images/testimonial-david.jpg" alt="David" width={32} height={32} className="w-8 h-8 rounded-full object-cover border-2 border-white dark:border-slate-900" />
                <Image src="/images/testimonial-sophia.jpg" alt="Sophia" width={32} height={32} className="w-8 h-8 rounded-full object-cover border-2 border-white dark:border-slate-900" />
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                <strong className="text-slate-900 dark:text-white">500,000+</strong> game sessions played globally
              </span>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/20 border border-emerald-100 dark:border-slate-800">
              <Image
                src="/images/hero-party-group.jpg"
                alt="Friends laughing and playing card games together"
                width={640}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg border border-emerald-100 dark:border-slate-700">
                <span className="text-lg">🎉</span>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Party Mode Active</p>
                  <p className="text-[10px] text-slate-500">320+ Truth or Dare cards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
