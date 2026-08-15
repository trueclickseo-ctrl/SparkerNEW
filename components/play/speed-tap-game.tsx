'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Zap, Trophy, Play, RotateCcw, UserPlus, Timer, Flame, Award } from 'lucide-react';

interface PlayerScore {
  playerNumber: number;
  count: number;
  rate: string;
  duration: number;
  tierTitle: string;
}

const TIER_TITLES = [
  "Lightning Fingers ⚡ — Absolutely unstoppable.",
  "On Fire 🔥 — That was fast.",
  "Warming Up 💪 — Solid effort, go again!",
  "Just Getting Started 🌱 — Round two?",
];

function getTierTitle(count: number, duration: number): string {
  const rate = count / duration;
  if (rate >= 7.5 || count >= 100) {
    return TIER_TITLES[0];
  } else if (rate >= 5.5 || count >= 70) {
    return TIER_TITLES[1];
  } else if (rate >= 3.5 || count >= 45) {
    return TIER_TITLES[2];
  } else {
    return TIER_TITLES[3];
  }
}

export function SpeedTapGame() {
  const [gameState, setGameState] = React.useState<'start' | 'countdown' | 'playing' | 'ended'>('start');
  const [roundDuration, setRoundDuration] = React.useState<number>(15);
  const [countdown, setCountdown] = React.useState<number | string>(3);
  const [tapCount, setTapCount] = React.useState<number>(0);
  const [timeLeft, setTimeLeft] = React.useState<number>(15);
  const [currentPlayer, setCurrentPlayer] = React.useState<number>(1);
  const [sessionLeaderboard, setSessionLeaderboard] = React.useState<PlayerScore[]>([]);
  const [lastScore, setLastScore] = React.useState<PlayerScore | null>(null);

  const phaserContainerRef = React.useRef<HTMLDivElement>(null);
  const phaserGameRef = React.useRef<any>(null);
  const startTimeRef = React.useRef<number>(0);

  // Live calculated rate per second
  const currentRate = React.useMemo(() => {
    if (gameState !== 'playing') return '0.0';
    const elapsed = (roundDuration - timeLeft);
    if (elapsed <= 0) return (tapCount / 0.1).toFixed(1);
    return (tapCount / elapsed).toFixed(1);
  }, [tapCount, timeLeft, roundDuration, gameState]);

  // Handle countdown sequence
  React.useEffect(() => {
    if (gameState !== 'countdown') return;

    setCountdown(3);
    const timer3 = setTimeout(() => setCountdown(2), 1000);
    const timer2 = setTimeout(() => setCountdown(1), 2000);
    const timer1 = setTimeout(() => setCountdown('GO!'), 3000);
    const timerGo = setTimeout(() => {
      setGameState('playing');
      setTapCount(0);
      setTimeLeft(roundDuration);
      startTimeRef.current = Date.now();
    }, 3600);

    return () => {
      clearTimeout(timer3);
      clearTimeout(timer2);
      clearTimeout(timer1);
      clearTimeout(timerGo);
    };
  }, [gameState, roundDuration]);

  // Handle round timer
  React.useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState]);

  // Handle end game when time reaches 0
  React.useEffect(() => {
    if (gameState === 'playing' && timeLeft === 0) {
      const rateStr = (tapCount / roundDuration).toFixed(1);
      const tier = getTierTitle(tapCount, roundDuration);
      const scoreObj: PlayerScore = {
        playerNumber: currentPlayer,
        count: tapCount,
        rate: rateStr,
        duration: roundDuration,
        tierTitle: tier,
      };

      setLastScore(scoreObj);
      setSessionLeaderboard((prev) => [...prev, scoreObj].sort((a, b) => b.count - a.count));
      setGameState('ended');
    }
  }, [timeLeft, gameState, tapCount, roundDuration, currentPlayer]);

  // Initialize Phaser 3 canvas container for tap effects and canvas logic
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    let isMounted = true;
    let PhaserModule: any = null;

    async function initPhaser() {
      try {
        const phaser = await import('phaser');
        PhaserModule = phaser.default || phaser;

        if (!isMounted || !phaserContainerRef.current) return;

        // Cleanup existing instance if any
        if (phaserGameRef.current) {
          phaserGameRef.current.destroy(true);
          phaserGameRef.current = null;
        }

        const config = {
          type: PhaserModule.AUTO,
          parent: phaserContainerRef.current,
          width: phaserContainerRef.current.clientWidth || 340,
          height: 280,
          transparent: true,
          physics: { default: 'arcade' },
          scene: {
            create: function (this: any) {
              const scene = this;
              const width = scene.cameras.main.width;
              const height = scene.cameras.main.height;

              // Create interactive tap region in Phaser scene
              const circle = scene.add.circle(width / 2, height / 2, 100, 0x10b981, 0.15);
              circle.setStrokeStyle(3, 0x059669, 0.8);
              circle.setInteractive();

              const pulseCircle = scene.add.circle(width / 2, height / 2, 100, 0x34d399, 0);

              scene.tweens.add({
                targets: circle,
                scaleX: 1.05,
                scaleY: 1.05,
                duration: 800,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut',
              });

              circle.on('pointerdown', () => {
                // Flash animation on tap
                pulseCircle.setAlpha(0.4);
                pulseCircle.setScale(1);
                scene.tweens.add({
                  targets: pulseCircle,
                  scaleX: 1.4,
                  scaleY: 1.4,
                  alpha: 0,
                  duration: 250,
                  ease: 'Power2',
                });

                // Spawn floating tap text
                const text = scene.add.text(
                  width / 2 + (Math.random() * 60 - 30),
                  height / 2 + (Math.random() * 40 - 20),
                  '+1',
                  { fontSize: '24px', fontStyle: 'bold', color: '#059669' }
                );
                scene.tweens.add({
                  targets: text,
                  y: text.y - 50,
                  alpha: 0,
                  duration: 400,
                  onComplete: () => text.destroy(),
                });
              });
            },
          },
        };

        phaserGameRef.current = new PhaserModule.Game(config);
      } catch (e) {
        console.error('Failed to load Phaser:', e);
      }
    }

    if (gameState === 'playing') {
      initPhaser();
    }

    return () => {
      isMounted = false;
      if (phaserGameRef.current) {
        phaserGameRef.current.destroy(true);
        phaserGameRef.current = null;
      }
    };
  }, [gameState]);

  const handleStartRound = () => {
    setGameState('countdown');
  };

  const handleTap = () => {
    if (gameState === 'playing') {
      setTapCount((c) => c + 1);
    }
  };

  const handlePlayAgain = () => {
    setGameState('start');
  };

  const handlePassToNext = () => {
    setCurrentPlayer((p) => p + 1);
    setGameState('start');
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      {/* Game Card Container */}
      <Card variant="play" className="relative overflow-hidden border-2 border-emerald-500/20 dark:border-emerald-500/30 shadow-xl bg-white dark:bg-slate-900">
        
        {/* Top Header Badge */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 bg-emerald-50/50 dark:bg-emerald-950/20">
          <div className="flex items-center gap-2">
            <Badge variant="default" className="bg-emerald-600 text-white hover:bg-emerald-700">
              <Zap className="w-3.5 h-3.5 mr-1" /> Party Warm-Up
            </Badge>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Player {currentPlayer}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <Timer className="w-4 h-4" /> {roundDuration}s Mode
          </div>
        </div>

        {/* SCREEN 1: START SCREEN */}
        {gameState === 'start' && (
          <div className="p-6 text-center space-y-6 py-10">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
              <Zap className="w-9 h-9 fill-current" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
                Party Speed Tap ⚡
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Tap as fast as you can before time runs out. Pass the phone, compare scores, crown a champion.
              </p>
            </div>

            {/* Round Length Selector */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pick your round
              </label>
              <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
                {[
                  { dur: 10, label: 'Quick (10s)' },
                  { dur: 15, label: 'Classic (15s)' },
                  { dur: 30, label: 'Marathon (30s)' },
                ].map((opt) => (
                  <button
                    key={opt.dur}
                    type="button"
                    onClick={() => setRoundDuration(opt.dur)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      roundDuration === opt.dur
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/25 scale-[1.02]'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Start Round Button */}
            <div className="pt-4">
              <Button
                variant="play"
                size="lg"
                onClick={handleStartRound}
                className="w-full max-w-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25 font-bold py-6 text-lg rounded-2xl gap-2 active:scale-95 transition-transform"
              >
                <Play className="w-5 h-5 fill-current" /> Start Round
              </Button>
            </div>
          </div>
        )}

        {/* SCREEN 2: COUNTDOWN */}
        {gameState === 'countdown' && (
          <div className="p-12 text-center flex flex-col items-center justify-center min-h-[320px]">
            <div className="text-6xl sm:text-7xl font-heading font-black text-emerald-600 dark:text-emerald-400 animate-bounce tracking-wider">
              {countdown}
            </div>
            <p className="text-xs uppercase tracking-widest text-slate-400 mt-4 font-semibold">
              Get ready to tap!
            </p>
          </div>
        )}

        {/* SCREEN 3: DURING ROUND */}
        {gameState === 'playing' && (
          <div className="p-6 text-center space-y-4">
            {/* Live Stats Header */}
            <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80">
              <div className="text-left">
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                  Time Remaining
                </span>
                <span className={`text-xl font-black ${timeLeft <= 3 ? 'text-rose-500 animate-pulse' : 'text-slate-900 dark:text-white'}`}>
                  {timeLeft}s
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                  Live Rate
                </span>
                <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                  {currentRate} <span className="text-xs font-normal text-slate-500">per second</span>
                </span>
              </div>
            </div>

            {/* Live Taps Counter Display */}
            <div className="py-2">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                Taps
              </span>
              <span className="text-5xl sm:text-6xl font-heading font-extrabold text-slate-900 dark:text-white transition-all scale-105 inline-block">
                {tapCount}
              </span>
            </div>

            {/* Interactive Tap Area (Touch-Friendly Minimum 80px / Full Canvas Height) */}
            <div className="relative w-full min-h-[220px] flex items-center justify-center select-none">
              {/* Canvas Overlay for Phaser Effects */}
              <div ref={phaserContainerRef} className="absolute inset-0 z-0 flex items-center justify-center opacity-80 pointer-events-none" />

              {/* Large Central Primary Tap Button */}
              <button
                type="button"
                onPointerDown={handleTap}
                className="relative z-10 w-full min-h-[140px] rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 text-white font-heading font-extrabold text-2xl shadow-xl shadow-emerald-500/35 border-4 border-white dark:border-slate-800 active:scale-95 transition-all flex flex-col items-center justify-center cursor-pointer select-none touch-manipulation"
              >
                <Zap className="w-10 h-10 mb-1 fill-white/20 animate-pulse" />
                <span>{tapCount === 0 ? 'Tap here!' : 'TAP! TAP! TAP!'}</span>
                <span className="text-xs font-medium text-emerald-100 opacity-90 mt-1">
                  Keep tapping as fast as you can
                </span>
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 4: END SCREEN */}
        {gameState === 'ended' && lastScore && (
          <div className="p-6 text-center space-y-6 py-8">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-500 flex items-center justify-center mx-auto shadow-inner">
              <Award className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
                Time's Up! ⏱️
              </h2>
              <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                You tapped {lastScore.count} times ({lastScore.rate}/sec)
              </p>
            </div>

            {/* Score Tier Result Box */}
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-slate-800 dark:text-emerald-200 text-sm font-semibold leading-relaxed max-w-md mx-auto shadow-sm">
              {lastScore.tierTitle}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
              <Button
                variant="play"
                size="lg"
                onClick={handlePlayAgain}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 gap-2 rounded-xl"
              >
                <RotateCcw className="w-4 h-4" /> Primary button: Play Again
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handlePassToNext}
                className="w-full border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3.5 gap-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <UserPlus className="w-4 h-4" /> Secondary button: Pass to Next Player
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* SCREEN 5 & 6: SESSION LEADERBOARD */}
      <Card className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-5 h-5 text-amber-500" />
          <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
            This Round's Champions 🏆
          </h3>
        </div>

        {sessionLeaderboard.length < 2 && (
          <div className="text-center py-6 text-slate-400 text-xs font-medium border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
            No taps yet — be the first! (Pass phone to 2+ players to show ranking leaderboard)
          </div>
        )}

        {sessionLeaderboard.length >= 2 && (
          <div className="space-y-2">
            {sessionLeaderboard.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-xl border text-xs ${
                  index === 0
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-300 font-bold'
                    : 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                    index === 0 ? 'bg-amber-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {index + 1}
                  </span>
                  <span>Player {item.playerNumber}</span>
                </div>
                <div className="font-mono font-bold">
                  {item.count} taps <span className="text-[10px] opacity-75 font-normal">({item.rate}/sec)</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
