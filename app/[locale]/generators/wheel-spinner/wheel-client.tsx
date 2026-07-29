'use client';

import * as React from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dices, Play } from 'lucide-react';

export default function WheelSpinnerClient({ locale }: { locale: string }) {
  const [selectedWinner, setSelectedWinner] = React.useState<string | null>(null);
  const [spinning, setSpinning] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const options = ['Truth Challenge', 'Wild Dare', 'Sing a Song', 'Tell a Secret', 'Skip Turn', 'Double Dare'];

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setSelectedWinner(null);

    timerRef.current = setTimeout(() => {
      const winner = options[Math.floor(Math.random() * options.length)];
      setSelectedWinner(winner);
      setSpinning(false);
    }, 1500);
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Generators', url: `/${locale}/quizzes` },
          { name: 'Wheel Spinner', url: `/${locale}/generators/wheel-spinner` },
        ]}
      />

      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-3">
          <Badge variant="play" className="px-3 py-1">
            <Dices className="w-3.5 h-3.5" /> HTML5 Decision Wheel
          </Badge>
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
            Random Wheel Spinner
          </h1>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Spin the wheel to make random choices for party tasks, game turns, or fun challenges.
          </p>
        </div>

        <Card variant="default" className="p-8 text-center space-y-6 flex flex-col items-center">
          <div className="relative w-48 h-48 rounded-full border-8 border-indigo-200 dark:border-slate-800 flex items-center justify-center bg-indigo-50 dark:bg-slate-900 shadow-inner">
            <div className={`text-5xl transition-transform duration-1000 ${spinning ? 'animate-spin' : ''}`}>
              🎡
            </div>
            {spinning && (
              <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center text-xs font-black text-indigo-600 animate-pulse uppercase">
                Spinning...
              </div>
            )}
          </div>

          {selectedWinner && (
            <div className="p-4 rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-200 text-indigo-900 dark:text-indigo-300 font-bold text-sm w-full animate-bounce">
              🎉 Selected: {selectedWinner}
            </div>
          )}

          <Button
            variant="play"
            size="lg"
            onClick={spinWheel}
            disabled={spinning}
            className="w-full font-bold cursor-pointer"
          >
            <Play className="w-4 h-4" /> {spinning ? 'Spinning...' : 'Spin Wheel'}
          </Button>
        </Card>
      </div>
    </>
  );
}
