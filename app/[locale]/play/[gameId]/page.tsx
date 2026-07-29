import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Alert } from '@/components/ui/alert';
import { CardDeckPlayer } from '@/components/engine/card-deck-player';
import { PLAY_GAMES } from '@/lib/data/play-games';
import { TRUTH_OR_DARE_MASTER_555 } from '@/lib/data/truth-or-dare-master-555';
import { QUESTION_DATABASE } from '@/lib/data/question-database';
import { getGameSchema, getHowToSchema } from '@/lib/seo/jsonld';
import { Users, Clock, Flame } from 'lucide-react';

import { constructMetadata } from '@/lib/seo/metadata';

export async function generateStaticParams() {
  return PLAY_GAMES.map((game) => ({
    gameId: game.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; gameId: string }>;
}) {
  const resolvedParams = await params;
  const game = PLAY_GAMES.find((g) => g.id === resolvedParams.gameId);
  if (!game) return {};
  return constructMetadata({
    title: game.title,
    description: game.shortDescription,
    path: `/play/${game.id}/`,
    locale: resolvedParams.locale,
    ogImageSlug: `play-${game.id}`,
    keywords: [game.category, 'party game', 'group game', game.title.toLowerCase()],
  });
}


/** Build a real, game-specific prompt list from the master data files */
function getPromptsForGame(gameId: string): string[] {
  switch (gameId) {
    case 'truth-or-dare': {
      // Load ALL 8 categories → 8 × (20 truths + 20 dares) = 320 real prompts
      return TRUTH_OR_DARE_MASTER_555.flatMap((cat) => [
        ...cat.truths,
        ...cat.dares,
      ]);
    }
    case 'never-have-i-ever': {
      const db    = QUESTION_DATABASE.find((g) => g.id === 'never-have-i-ever');
      const spicy = QUESTION_DATABASE.find((g) => g.id === 'spicy-never-have-i-ever');
      const genz  = QUESTION_DATABASE.find((g) => g.id === 'genz-unfiltered-icks');
      return [
        ...(db    ? db.prompts    : []),
        ...(spicy ? spicy.prompts : []),
        ...(genz  ? genz.prompts  : []),
      ];
    }
    case 'would-you-rather': {
      const db = QUESTION_DATABASE.find((g) => g.id === 'would-you-rather');
      return db ? db.prompts : [];
    }
    case 'charades': {
      const db = QUESTION_DATABASE.find((g) => g.id === 'charades');
      return db ? db.prompts : [];
    }
    case 'mafia': {
      const db = QUESTION_DATABASE.find((g) => g.id === 'mafia');
      return db ? db.prompts : [];
    }
    case 'office-icebreakers': {
      const conv = QUESTION_DATABASE.find((g) => g.id === 'conversation-starters');
      const ice  = QUESTION_DATABASE.find((g) => g.id === 'ice-breakers');
      const partyCategory = TRUTH_OR_DARE_MASTER_555.find((c) => c.id === 'party-icebreakers');
      return [
        ...(conv ? conv.prompts : []),
        ...(ice  ? ice.prompts  : []),
        ...(partyCategory ? partyCategory.truths : []),
      ];
    }
    default: {
      const db = QUESTION_DATABASE.find((g) => g.id === gameId);
      return db ? db.prompts : [];
    }
  }
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ locale: string; gameId: string }>;
}) {
  const resolvedParams = await params;
  const game = PLAY_GAMES.find((g) => g.id === resolvedParams.gameId);

  if (!game) notFound();

  const promptList = getPromptsForGame(resolvedParams.gameId);

  const gameSchema = getGameSchema({
    name: game.title,
    description: game.fullDescription,
    url: `/${resolvedParams.locale}/play/${game.id}`,
    numberOfPlayers: game.numberOfPlayers,
    genre: game.category,
  });

  const howToSchema = getHowToSchema({
    name: `How to Play ${game.title}`,
    description: `Official step-by-step game rules for ${game.title}.`,
    steps: game.rules.map((r, idx) => ({
      name: `Step ${idx + 1}`,
      text: r,
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${resolvedParams.locale}` },
          { name: 'Play Platform', url: `/${resolvedParams.locale}/play` },
          { name: game.title, url: `/${resolvedParams.locale}/play/${game.id}` },
        ]}
      />

      
        {/* Header Metadata */}
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Badge variant="play">{game.category}</Badge>
            {game.badge && <Badge variant="amber">{game.badge}</Badge>}
          </div>

          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
            {game.title}
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {game.fullDescription}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-950/60 shadow-sm text-xs font-medium text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-indigo-500" /> {game.numberOfPlayers}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-indigo-500" /> {game.duration}</span>
            <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-amber-500" /> {game.difficulty}</span>
            {promptList.length > 0 && (
              <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold">
                🃏 {promptList.length} Cards
              </span>
            )}
          </div>
        </div>

        {/* Live Interactive Card Deck Player */}
        <CardDeckPlayer
          gameId={game.id}
          title={game.title}
          prompts={promptList}
          variant="play"
        />

        {/* Rules */}
        <div className="space-y-4 pt-4 border-t border-slate-200/60 dark:border-slate-800">
          <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
            Official Rules &amp; Game Guide
          </h2>
          <div className="space-y-3">
            {game.rules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Alert variant="info" title="AEO Verified Card Engine">
          This deck features interactive shuffle algorithms, favorites bookmarking, and local session progress state.
        </Alert>
      
    </>
  );
}
