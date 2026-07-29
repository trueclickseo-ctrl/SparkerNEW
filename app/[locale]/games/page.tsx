import { PLAY_GAMES } from '@/lib/data/play-games';
import { COUPLES_DECKS } from '@/lib/data/couples-games';
import { constructMetadata } from '@/lib/seo/metadata';
import GamesClient from './games-client';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  return constructMetadata({
    title: '107+ Interactive Party Games & Couples Decks Directory',
    description: 'Browse our complete library of 107+ interactive card games, deep intimacy questions, and truth or dare prompts. Play free in your browser.',
    path: '/games/',
    locale: resolvedParams.locale,
    ogImageSlug: 'games-index',
    keywords: ['party games library', 'couples conversation decks', 'icebreaker lists', 'free card games'],
  });
}

export default async function GamesDirectoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  return (
    <GamesClient
      PLAY_GAMES={PLAY_GAMES}
      COUPLES_DECKS={COUPLES_DECKS}
      locale={resolvedParams.locale}
    />
  );
}
