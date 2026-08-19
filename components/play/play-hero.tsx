import { Gamepad2, Users, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function PlayHero({
  gameCount,
  title,
  description,
  badgeText,
}: {
  gameCount: number;
  title?: string;
  description?: string;
  badgeText?: string;
}) {
  return (
    <section className="bg-gradient-to-b from-indigo-100/60 via-indigo-50/20 to-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-2">
          <Badge variant="play" className="px-3 py-1 text-xs">
            <Gamepad2 className="w-3.5 h-3.5" /> {badgeText || 'Play Platform Hub'}
          </Badge>
        </div>

        {/* AEO Featured Snippet Box */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-indigo-200/80 dark:border-indigo-900 shadow-xl text-start space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Play Platform Direct Overview
          </span>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            {description || (
              <>
                The <strong>Sparkers Play Platform</strong> hosts instant digital card decks for group parties, teens, office icebreakers, classroom activities, and drinking games. Filter by group size or difficulty to launch free web-native party sessions.
              </>
            )}
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
          {title || 'Instant Digital Party Card Decks'}
        </h1>

        <div className="flex justify-center items-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-400 pt-2">
          <span className="flex items-center gap-1.5"><Gamepad2 className="w-4 h-4 text-indigo-500" /> {gameCount} Ready Decks</span>
          <span>•</span>
          <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-indigo-500" /> 2-25+ Players</span>
          <span>•</span>
          <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-amber-500" /> 100% Free Web Play</span>
        </div>
      </div>
    </section>
  );
}
