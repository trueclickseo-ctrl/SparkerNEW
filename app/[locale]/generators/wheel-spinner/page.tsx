'use client';

import * as React from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dices, Play } from 'lucide-react';

export default function WheelSpinnerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams.locale;

  const [selectedWinner, setSelectedWinner] = React.useState<string | null>(null);
  const [spinning, setSpinning] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup timer on unmount to prevent memory leak
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

      
        <div className="text-center space-y-3">
          <Badge variant="play" className="px-3 py-1">
            <Dices className="w-3.5 h-3.5" /> HTML5 Decision Wheel
          </Badge>
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
            Random Wheel Spinner
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Spin the randomizer wheel to choose party turns and dare challenges!
          </p>
        </div>

        <Card variant="play" className="p-8 text-center space-y-6">
          {/* Visual Spinner Representation */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full border-4 border-indigo-600 dark:border-indigo-400 flex items-center justify-center bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-500 shadow-2xl overflow-hidden">
            <div className={`text-white font-extrabold text-xl transition-all duration-1000 ${spinning ? 'animate-spin' : ''}`}>
              {selectedWinner ? selectedWinner : 'SPARKERS WHEEL'}
            </div>
          </div>

          <Button
            size="xl"
            variant="play"
            disabled={spinning}
            onClick={spinWheel}
            className="w-full shadow-lg shadow-indigo-600/30"
          >
            <Play className="w-5 h-5 fill-current" /> {spinning ? 'Spinning...' : 'Spin the Wheel!'}
          </Button>
        </Card>

        {selectedWinner && (
          <div className="p-6 rounded-2xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200 text-center font-bold text-lg animate-in zoom-in-95">
            🎉 Result: &quot;{selectedWinner}&quot;
          </div>
        )}
      
    </>
  );
}
