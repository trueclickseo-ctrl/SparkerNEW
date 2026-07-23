import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Clock, Flame } from 'lucide-react';
import { PartyGame } from '@/lib/data/play-games';

export function GameGrid({
  games,
  locale,
}: {
  games: PartyGame[];
  locale: string;
}) {
  if (games.length === 0) {
    return (
      <div className="text-center py-16 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          No games match your selected filters. Try choosing a different audience or search term.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <Card key={game.id} variant="play" className="flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="play">{game.category}</Badge>
              {game.badge && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300">
                  {game.badge}
                </span>
              )}
            </div>
            <CardTitle className="mt-3">{game.title}</CardTitle>
            <CardDescription>{game.shortDescription}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-2">
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-indigo-500" /> {game.numberOfPlayers}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-indigo-500" /> {game.duration}</span>
              <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5 text-amber-500" /> {game.difficulty}</span>
            </div>
            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              {game.shortDescription.split('.')[0]}.
            </p>
          </CardContent>

          <CardFooter>
            <Link href={`/${locale}/play/${game.id}`} className="w-full">
              <Button variant="play" size="sm" className="w-full">
                Play Deck
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
