import { notFound } from 'next/navigation';
import { PROGRAMMATIC_SEO_GAMES } from '@/lib/data/programmatic-seo-games';
import MasterPageTemplate from '@/components/seo/master-page-template';
import { constructMetadata } from '@/lib/seo/metadata';
import { SeoEntityModel, SeoRelatedLink } from '@/types/programmatic-seo';

interface PageProps {
  params: Promise<{ locale: string; slug: string[] }>;
}

export async function generateStaticParams() {
  const paths: { slug: string[] }[] = [];
  
  for (const game of PROGRAMMATIC_SEO_GAMES) {
    const cleanSlug = game.path.split('/').filter(Boolean);
    paths.push({ slug: cleanSlug });
  }

  return paths;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const slugPath = '/' + resolvedParams.slug.join('/') + '/';
  
  const game = PROGRAMMATIC_SEO_GAMES.find((g) => g.path === slugPath);
  if (!game) return {};

  return constructMetadata({
    title: `${game.title} — Play Interactive Cards Free`,
    description: game.description,
    path: game.path,
    locale: resolvedParams.locale,
    ogImageSlug: `pseo-${game.id}`,
    keywords: [game.title.toLowerCase(), game.category.toLowerCase(), 'party game', 'group game'],
  });
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Derive the correct SeoEntityModel contentType from the page ID */
function deriveContentType(id: string): SeoEntityModel['contentType'] {
  if (id.endsWith('-rules')) return 'rules';
  if (id.endsWith('-how-to-play')) return 'guide';
  if (id.endsWith('-history')) return 'history';
  if (id.endsWith('-strategy')) return 'strategy';
  if (id.endsWith('-tips')) return 'guide';
  if (id.endsWith('-faq')) return 'faq';
  if (id.endsWith('-printable') || id.endsWith('-pdf')) return 'printable';
  if (id.endsWith('-generator')) return 'generator';
  if (id.endsWith('-examples') || id.endsWith('-categories') || id.endsWith('-cards')) return 'category';
  if (id.endsWith('-easy') || id.endsWith('-hard') || id.endsWith('-impossible') || id.endsWith('-one-word')) return 'difficulty';
  if (id.endsWith('-kids') || id.endsWith('-adults') || id.endsWith('-couples') || id.endsWith('-friends') || id.endsWith('-office') || id.endsWith('-classroom') || id.endsWith('-church') || id.endsWith('-team-building')) return 'audience';
  if (id.endsWith('-christmas') || id.endsWith('-halloween') || id.endsWith('-birthday')) return 'occasion';
  if (id.endsWith('-movie') || id.endsWith('-disney') || id.endsWith('-pixar') || id.endsWith('-marvel') || id.endsWith('-anime') || id.endsWith('-tv-shows') || id.endsWith('-animals') || id.endsWith('-sports') || id.endsWith('-music') || id.endsWith('-emoji') || id.endsWith('-couples')) return 'theme';
  // Pillar: ID has no hyphen sub-suffix (e.g. 'charades', 'truth-or-dare')
  if (!id.includes('-') || ['truth-or-dare', 'never-have-i-ever', 'would-you-rather', 'most-likely-to', 'this-or-that', 'minute-to-win-it', 'drinking-games', 'conversation-starters'].includes(id)) return 'pillar';
  return 'category';
}

/** Extract the canonical game name from an ID */
function deriveGameName(id: string): string {
  const knownGames = ['charades', 'truth-or-dare', 'never-have-i-ever', 'would-you-rather', 'icebreakers', 'conversation-starters', 'most-likely-to', 'this-or-that', 'minute-to-win-it', 'drinking-games'];
  for (const g of knownGames) {
    if (id === g || id.startsWith(g + '-')) return g;
  }
  return id.split('-')[0];
}

/** Derive contextual trending links — siblings first, then popular pages */
function deriveTrendingLinks(game: typeof PROGRAMMATIC_SEO_GAMES[0], locale: string): SeoRelatedLink[] {
  const siblingIds = game.siblings || [];
  const sibs = siblingIds
    .slice(0, 3)
    .map((sId) => PROGRAMMATIC_SEO_GAMES.find((g) => g.id === sId))
    .filter(Boolean) as typeof PROGRAMMATIC_SEO_GAMES;

  // Fill remaining slots with popular pillar pages
  const popular = PROGRAMMATIC_SEO_GAMES.filter(
    (g) => !g.parentSlug && g.id !== game.id && !siblingIds.includes(g.id)
  ).slice(0, 5 - sibs.length);

  return [...sibs, ...popular].map((l) => ({
    title: l.title,
    url: `/${locale}${l.path}`,
  }));
}

// ─── Default tips per contentType ────────────────────────────────────────────
const DEFAULT_TIPS_BY_TYPE: Record<string, string[]> = {
  rules: [
    'Read all rules aloud before the first round so every player starts on the same page.',
    'Appoint a neutral referee for competitive games to resolve disputes fairly.',
    'Use a phone timer app with a loud buzzer — silence adds tension and excitement.',
    'Allow one "rules clarification" pause per player per game without penalty.',
    'Post a printed rules summary where everyone can see it during play.',
  ],
  guide: [
    'Run a practice round with no scoring so beginners can get comfortable.',
    'Assign a patient experienced player to guide newcomers through their first turn.',
    'Start with easy prompts and gradually increase difficulty as confidence grows.',
    'Celebrate every successful guess loudly — energy is contagious.',
    'Keep sessions under 45 minutes for first-time players to avoid fatigue.',
  ],
  history: [
    'Share one historical fact about charades before each round to educate and entertain.',
    'Try playing a historical variation — actors must dress in period costume.',
    'Use history pages as trivia questions between rounds for bonus points.',
    'Challenge players to guess which era a specific gesture comes from.',
    'Combine history knowledge with acting for an educational twist.',
  ],
  strategy: [
    'Establish a private signal system with your team before competitive games begin.',
    'Always act out the easiest word in a phrase first to anchor the guess.',
    'Use the "sounds like" gesture liberally — it unlocks many difficult words.',
    'If stuck, break the word into syllables using forearm chops.',
    'Watch opponents act — studying their style helps you anticipate your own prompts.',
    'Confident body language speeds up guessing even for unclear gestures.',
  ],
  printable: [
    'Print on card stock (200gsm+) for durable reusable cards.',
    'Laminate your favorite decks to make them wipe-clean and waterproof.',
    'Cut cards with a guillotine cutter for clean professional edges.',
    'Store sorted decks in labeled zip-lock bags for quick setup.',
    'Print two copies of the same deck to allow simultaneous team play.',
  ],
  generator: [
    'Tap "Generate" rapidly for a random warm-up at the start of your session.',
    'Use the generator in "timed mode" — spin a new card every 60 seconds.',
    'Challenge players to act out consecutive cards without pausing between them.',
    'Screenshot difficult cards to review and laugh about after the game ends.',
    'Set the generator to a specific category for themed game nights.',
  ],
  faq: [
    'Use this FAQ page to resolve disputes mid-game without breaking the flow.',
    'Bookmark this page on your phone for instant rule clarification at parties.',
    'Share the FAQ with new players before the game starts to align expectations.',
    'Read one FAQ question per round as a fun trivia warm-up.',
    'Contribute your own rule variation ideas in the comments below.',
  ],
  pillar: [
    'Mix difficulty levels across rounds to keep the energy fresh and inclusive.',
    'Rotate actors every 2 minutes — no single person should dominate the stage.',
    'Create a themed deck night by selecting one category (e.g. Movies Only).',
    'Add a "penalty challenge" for failed acting attempts to raise the stakes.',
    'Record your funniest acting moments for memorable party content.',
  ],
  default: [
    'Mix easy and hard prompts in every round to keep all skill levels engaged.',
    'Encourage enthusiastic reactions from guessers — energy drives faster guessing.',
    'Rotate the actor role every turn so everyone participates equally.',
    'Use a visible scoreboard to add friendly competition and motivation.',
    'Keep backup prompts ready in case a card is too difficult for the group.',
  ],
};

export default async function ProgrammaticSeoGamePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slugPath = '/' + resolvedParams.slug.join('/') + '/';

  const game = PROGRAMMATIC_SEO_GAMES.find((g) => g.path === slugPath);
  if (!game) {
    notFound();
  }

  // ─── Derive per-page values ───────────────────────────────────────────────
  const contentType = game.contentType ?? deriveContentType(game.id);
  const gameName = deriveGameName(game.id);

  // Skill level: use explicit value if set, else derive from difficulty/contentType
  const skillLevelMap: Record<string, SeoEntityModel['skillLevel']> = {
    Easy: 'beginner',
    Medium: 'intermediate',
    Hard: 'advanced',
  };
  const explicitSkill = game.skillLevel;
  const derivedSkill =
    game.id.endsWith('-impossible') || game.id.endsWith('-hard') || game.id.endsWith('-strategy')
      ? 'advanced'
      : game.id.endsWith('-easy') || game.id.endsWith('-kids') || game.id.endsWith('-one-word')
      ? 'beginner'
      : skillLevelMap[game.difficulty] ?? 'beginner';
  const skillLevel = explicitSkill ?? derivedSkill;

  // Tips: use page-specific tips if defined, else fall back to contentType defaults
  const tips =
    game.tips && game.tips.length > 0
      ? game.tips
      : DEFAULT_TIPS_BY_TYPE[contentType] ?? DEFAULT_TIPS_BY_TYPE['default'];

  // Introduction: use rich intro if defined, else fall back to description
  const introduction = game.introduction ?? game.description;

  // Map database properties to SeoEntityModel
  const entityData: SeoEntityModel = {
    id: game.id,
    path: game.path,
    contentType,
    game: gameName,
    title: game.title,
    h1: game.h1 ?? game.title,
    introduction,
    playerCount: game.players,
    duration: game.duration,
    difficulty: game.difficulty.toLowerCase() as SeoEntityModel['difficulty'],
    audience: game.audience as SeoEntityModel['audience'],
    theme: game.theme,
    occasion: game.occasion,
    season: game.season,
    skillLevel,
    energyLevel: game.energyLevel,
    equipmentNeeded: 'Any Web Browser (Phone, Tablet, or Laptop)',
    prompts: game.prompts.map((p) => ({
      text: p,
      context: p.startsWith('Truth:') ? 'TRUTH' : p.startsWith('Dare:') ? 'DARE' : undefined,
    })),
    rules: game.rules,
    tips,
    faqs: game.faqs,
    history: game.history,
    strategy: game.strategy,
    sources: game.sources,
    author: {
      name: 'Marcus Vance',
      role: 'Event & Party Host Specialist',
      bio: 'Marcus has hosted over 500 social gatherings, team building events, and game nights across the US and UK, specialising in party game facilitation.',
    },
    reviewedBy: {
      name: 'Dr. Sarah Jenkins',
      role: 'Social Psychologist & Group Dynamics Researcher',
      bio: 'Dr. Jenkins holds a PhD in Social Psychology and consults on the therapeutic and social benefits of structured play for both children and adults.',
    },
    lastUpdated: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  };

  // ─── Build link objects ───────────────────────────────────────────────────
  const parentLink: SeoRelatedLink | undefined = game.parentSlug
    ? {
        title: PROGRAMMATIC_SEO_GAMES.find((g) => g.id === game.parentSlug)?.title ?? 'Parent Game',
        url: `/${resolvedParams.locale}${PROGRAMMATIC_SEO_GAMES.find((g) => g.id === game.parentSlug)?.path ?? ''}`,
      }
    : undefined;

  const childLinks: SeoRelatedLink[] = (game.children ?? []).map((cId) => {
    const cg = PROGRAMMATIC_SEO_GAMES.find((g) => g.id === cId);
    return { title: cg?.title ?? 'Sub-category', url: `/${resolvedParams.locale}${cg?.path ?? ''}` };
  });

  const siblingLinks: SeoRelatedLink[] = (game.siblings ?? []).map((sId) => {
    const sg = PROGRAMMATIC_SEO_GAMES.find((g) => g.id === sId);
    return { title: sg?.title ?? 'Related Game', url: `/${resolvedParams.locale}${sg?.path ?? ''}` };
  });

  const trendingLinks = deriveTrendingLinks(game, resolvedParams.locale);

  return (
    <MasterPageTemplate
      data={entityData}
      locale={resolvedParams.locale}
      parentLink={parentLink}
      childLinks={childLinks}
      siblingLinks={siblingLinks}
      trendingLinks={trendingLinks}
    />
  );
}
