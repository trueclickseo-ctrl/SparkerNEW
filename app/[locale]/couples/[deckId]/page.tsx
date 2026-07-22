import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Alert } from '@/components/ui/alert';
import { CardDeckPlayer } from '@/components/engine/card-deck-player';
import { COUPLES_DECKS } from '@/lib/data/couples-games';
import { getGameSchema } from '@/lib/seo/jsonld';
import { Heart, Sparkles } from 'lucide-react';

export async function generateStaticParams() {
  return COUPLES_DECKS.map((deck) => ({
    deckId: deck.id,
  }));
}

export default async function CouplesDeckDetailPage({
  params,
}: {
  params: Promise<{ locale: string; deckId: string }>;
}) {
  const resolvedParams = await params;
  const targetId = resolvedParams.deckId;
  const deck =
    COUPLES_DECKS.find((d) => d.id === targetId) ||
    COUPLES_DECKS.find((d) => d.category === targetId);

  if (!deck) notFound();

  const gameSchema = getGameSchema({
    name: deck.title,
    description: deck.fullDescription,
    url: `/${resolvedParams.locale}/couples/${deck.id}`,
    numberOfPlayers: '2 (Couples)',
    genre: 'Relationship / Intimacy Card Deck',
  });

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${resolvedParams.locale}` },
          { name: 'Couples Hub', url: `/${resolvedParams.locale}/couples` },
          { name: deck.title, url: `/${resolvedParams.locale}/couples/${deck.id}` },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-10">
        {/* Header Metadata */}
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Badge variant="couples">{deck.intimacyLevel} Intimacy</Badge>
            {deck.badge && <Badge variant="amber">{deck.badge}</Badge>}
          </div>

          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
            {deck.title}
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {deck.fullDescription}
          </p>

          <div className="flex items-center justify-center gap-6 p-3 rounded-xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-rose-950/60 shadow-sm text-xs font-medium text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-rose-500" /> {deck.promptCount} Cards</span>
            <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-rose-500" /> 89 Games Framework</span>
          </div>
        </div>

        {/* Live Interactive Couples Card Deck Player */}
        <CardDeckPlayer
          gameId={deck.id}
          title={deck.title}
          prompts={deck.samplePrompts}
          variant="couples"
        />

        <Alert variant="couples" title="Safe Space & Consensual Comfort">
          Always establish safe words or skip rules before diving into deep intimacy prompts. Respect your partner&apos;s comfort boundaries.
        </Alert>
      </main>
    </div>
  );
}
