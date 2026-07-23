import Image from 'next/image';
import { Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function CouplesHero({ deckCount }: { deckCount: number }) {
  return (
    <section className="relative bg-gradient-to-b from-rose-100/60 via-rose-50/20 to-transparent py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Badge variant="couples" className="px-3 py-1 text-xs">
                <Heart className="w-3.5 h-3.5" /> Couples Hub &amp; 89 Framework
              </Badge>
            </div>

            {/* AEO Snippet */}
            <div className="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-rose-200/80 dark:border-rose-900 shadow-xl text-start space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                Couples Hub Direct Overview
              </span>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                The <strong>Sparkers Couples Hub</strong> offers 89 Framework intimacy card decks, romantic conversation starters, flirty prompts, and long-distance date night utilities. Engineered to foster deep emotional bonding and romantic chemistry.
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
              Intimacy &amp; Relationship Conversation Decks
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-rose-500" /> {deckCount} Specialized Decks</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-rose-500" /> 89 Framework Prompts</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> 100% Consensual &amp; Safe</span>
            </div>
          </div>

          {/* Right: Couple Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rose-900/20 border border-rose-100 dark:border-slate-800">
              <Image
                src="/images/couples-hub-banner.jpg"
                alt="Romantic couple on a candlelit dinner date"
                width={580}
                height={400}
                className="w-full h-72 object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg border border-rose-100 dark:border-slate-700">
                <span className="text-lg">💑</span>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">89 Intimacy Framework</p>
                  <p className="text-[10px] text-slate-500">260+ curated couple prompts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
