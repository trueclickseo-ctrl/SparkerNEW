import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Alert } from '@/components/ui/alert';
import { CardDeckPlayer } from '@/components/engine/card-deck-player';
import { EDUCATIONAL_DECKS } from '@/lib/data/educational-games';
import { getGameSchema } from '@/lib/seo/jsonld';
import { GraduationCap, Brain, Users } from 'lucide-react';

export async function generateStaticParams() {
  return EDUCATIONAL_DECKS.map((deck) => ({
    deckId: deck.id,
  }));
}

export default async function EducationalDeckDetailPage({
  params,
}: {
  params: Promise<{ locale: string; deckId: string }>;
}) {
  const resolvedParams = await params;
  const targetId = resolvedParams.deckId;
  const deck =
    EDUCATIONAL_DECKS.find((d) => d.id === targetId) ||
    EDUCATIONAL_DECKS.find((d) => d.category === targetId);

  if (!deck) notFound();

  const gameSchema = getGameSchema({
    name: deck.title,
    description: deck.fullDescription,
    url: `/${resolvedParams.locale}/educational/${deck.id}`,
    numberOfPlayers: 'Classroom / Students / Teachers',
    genre: 'Educational & Brainstorming Exercise Cards',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${resolvedParams.locale}` },
          { name: 'Educational & Brain Gym', url: `/${resolvedParams.locale}/educational` },
          { name: deck.title, url: `/${resolvedParams.locale}/educational/${deck.id}` },
        ]}
      />

      
        {/* Header Metadata */}
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Badge variant="amber">{deck.audience}</Badge>
            {deck.badge && <Badge variant="play">{deck.badge}</Badge>}
          </div>

          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
            {deck.title}
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {deck.fullDescription}
          </p>

          <div className="flex items-center justify-center gap-6 p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-950/60 shadow-sm text-xs font-medium text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-emerald-600" /> {deck.prompts.length} Digital Cards</span>
            <span className="flex items-center gap-1.5"><Brain className="w-4 h-4 text-amber-500" /> Brainstorming Engine</span>
          </div>
        </div>

        {/* Live Interactive Educational Card Deck Player */}
        <CardDeckPlayer
          gameId={deck.id}
          title={deck.title}
          prompts={deck.prompts}
          variant="play"
        />

        <Alert variant="info" title="Classroom & Workshop Ready">
          Use these digital cards on interactive smartboards, projector screens, or mobile devices during lectures, student orientations, or faculty workshops.
        </Alert>
      
    </>
  );
}
