import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Alert } from '@/components/ui/alert';
import { CardDeckPlayer } from '@/components/engine/card-deck-player';
import { PLAY_GAMES } from '@/lib/data/play-games';
import { getGameSchema, getHowToSchema } from '@/lib/seo/jsonld';
import { Users, Clock, Flame } from 'lucide-react';

export async function generateStaticParams() {
  return PLAY_GAMES.map((game) => ({
    gameId: game.id,
  }));
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ locale: string; gameId: string }>;
}) {
  const resolvedParams = await params;
  const game = PLAY_GAMES.find((g) => g.id === resolvedParams.gameId);

  if (!game) notFound();

  // Generated interactive prompt cards
  const promptList = [
    `What is the most awkward misunderstanding you have ever experienced?`,
    `Do a 30-second silent impression of another player!`,
    `What is one thing on your bucket list you plan to achieve this year?`,
    `If you had to trade places with anyone in this room for a week, who would it be?`,
    `Sing the chorus of your favorite song with extreme emotion!`,
    `What is the funniest rumor you have ever heard about yourself?`,
  ];

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
    <div className="flex flex-col min-h-screen">
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-10">
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
            Official Rules & Game Guide
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
      </main>
    </div>
  );
}
