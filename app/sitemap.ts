import { MetadataRoute } from 'next';
import { PLAY_GAMES } from '@/lib/data/play-games';
import { COUPLES_DECKS } from '@/lib/data/couples-games';

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sparkersgames.com';
const LOCALE = 'en';
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // ─── Top-level section pages ──────────────────────────────────────────────
  const sections = [
    { route: '', freq: 'daily' as const, priority: 1.0 },
    { route: '/play', freq: 'weekly' as const, priority: 0.9 },
    { route: '/couples', freq: 'weekly' as const, priority: 0.9 },
    { route: '/quizzes', freq: 'weekly' as const, priority: 0.9 },
    { route: '/encyclopedia', freq: 'weekly' as const, priority: 0.8 },
    { route: '/blog', freq: 'weekly' as const, priority: 0.8 },
    { route: '/library', freq: 'weekly' as const, priority: 0.7 },
    { route: '/cards', freq: 'monthly' as const, priority: 0.8 },
    { route: '/truth-or-dare-questions', freq: 'weekly' as const, priority: 0.9 },
    { route: '/about', freq: 'monthly' as const, priority: 0.5 },
    { route: '/contact', freq: 'monthly' as const, priority: 0.4 },
    { route: '/privacy', freq: 'monthly' as const, priority: 0.3 },
    { route: '/terms', freq: 'monthly' as const, priority: 0.3 },
  ];

  for (const { route, freq, priority } of sections) {
    entries.push({
      url: `${BASE_URL}/${LOCALE}${route}`,
      lastModified: now,
      changeFrequency: freq,
      priority,
    });
  }

  // ─── Individual party / play game pages ────────────────────────────────────
  for (const game of PLAY_GAMES) {
    entries.push({
      url: `${BASE_URL}/${LOCALE}/play/${game.id}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    });
  }

  // ─── Individual couples deck pages ────────────────────────────────────────
  for (const deck of COUPLES_DECKS) {
    entries.push({
      url: `${BASE_URL}/${LOCALE}/couples/${deck.id}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    });
  }

  // ─── Quiz pages ────────────────────────────────────────────────────────────
  const quizSlugs = [
    'love-language',
    'attachment-style',
    'relationship-compatibility',
    'communication-style',
  ];
  for (const slug of quizSlugs) {
    entries.push({
      url: `${BASE_URL}/${LOCALE}/quizzes/${slug}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  // ─── Generator / tool pages ────────────────────────────────────────────────
  const generatorSlugs = ['couple-name', 'wheel-spinner', 'random-question'];
  for (const slug of generatorSlugs) {
    entries.push({
      url: `${BASE_URL}/${LOCALE}/generators/${slug}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    });
  }

  // ─── Audience landing pages ────────────────────────────────────────────────
  const audienceSlugs = [
    'games-for-couples',
    'games-for-friends',
    'games-for-teens',
    'games-for-office',
    'games-for-kids',
    'drinking-games',
    'date-night-games',
  ];
  for (const slug of audienceSlugs) {
    entries.push({
      url: `${BASE_URL}/${LOCALE}/play/${slug}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  return entries;
}
