import { Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function CouplesHero({ deckCount }: { deckCount: number }) {
  return (
    <section className="bg-gradient-to-b from-rose-100/60 via-rose-50/20 to-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-2">
          <Badge variant="couples" className="px-3 py-1 text-xs">
            <Heart className="w-3.5 h-3.5" /> Couples Hub & 89 Framework
          </Badge>
        </div>

        {/* AEO Featured Snippet Box */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-rose-200/80 dark:border-rose-900 shadow-xl text-start space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            Couples Hub Direct Overview
          </span>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            The <strong>Sparkers Couples Hub</strong> offers 89 Framework intimacy card decks, romantic conversation starters, flirty prompts, and long-distance date night utilities. Engineered to foster deep emotional bonding and romantic chemistry.
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
          Intimacy & Relationship Conversation Decks
        </h1>

        <div className="flex justify-center items-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-400 pt-2">
          <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-rose-500" /> {deckCount} Specialized Decks</span>
          <span>•</span>
          <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-rose-500" /> 89 Framework Prompts</span>
          <span>•</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> 100% Consensual & Safe</span>
        </div>
      </div>
    </section>
  );
}
