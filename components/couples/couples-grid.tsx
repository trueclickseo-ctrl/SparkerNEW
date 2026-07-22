import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Flame, MessageCircle } from 'lucide-react';
import { CouplesDeck } from '@/lib/data/couples-games';

export function CouplesGrid({
  decks,
  locale,
}: {
  decks: CouplesDeck[];
  locale: string;
}) {
  if (decks.length === 0) {
    return (
      <div className="text-center py-16 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          No couples decks found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {decks.map((deck) => (
        <Card key={deck.id} variant="couples" className="flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="couples">{deck.intimacyLevel} Intimacy</Badge>
              {deck.badge && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-900 dark:bg-rose-950/60 dark:text-rose-300">
                  {deck.badge}
                </span>
              )}
            </div>
            <CardTitle className="mt-3">{deck.title}</CardTitle>
            <CardDescription>{deck.shortDescription}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-rose-500" /> {deck.promptCount} Questions</span>
              <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5 text-rose-500" /> {deck.category}</span>
            </div>

            <div className="p-3 rounded-xl bg-rose-50/50 dark:bg-slate-800/40 border border-rose-100 dark:border-rose-950/40 space-y-1">
              <span className="text-[10px] font-semibold text-rose-700 dark:text-rose-400 flex items-center gap-1">
                <MessageCircle className="w-3 h-3" /> Sample Prompt:
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-300 italic">
                &quot;{deck.samplePrompts[0]}&quot;
              </p>
            </div>
          </CardContent>

          <CardFooter>
            <Link href={`/${locale}/couples/${deck.id}`} className="w-full">
              <Button variant="couples" size="sm" className="w-full">
                Open Intimacy Deck
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
