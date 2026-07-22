export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Party Tips' | 'Couples Advice' | 'Game Strategy';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: '10-tips-for-unforgettable-date-night',
    title: '10 Expert Tips for an Unforgettable Date Night at Home',
    excerpt: 'Transform an ordinary evening into a romantic connection ritual with card decks and conversation starters.',
    content: `Date nights do not always require expensive restaurant reservations or traveling out of town. With thoughtful planning and structured conversation prompts, your living room can become the ultimate sanctuary for romance.\n\n1. Set the Ambience\nDim the overhead lights, light scented candles, and put on low-fi jazz or acoustic melodies in the background.\n\n2. Put Distractions Away\nStore phones in a separate room for 90 minutes to ensure full presence.\n\n3. Use Intimacy Card Decks\nDraw prompts from the 89 Intimacy Deck to spark meaningful reflections beyond everyday chatter.`,
    category: 'Couples Advice',
    author: {
      name: 'Dr. Sarah Jenkins',
      role: 'Relationship Counselor',
      avatar: '/authors/sarah.jpg',
    },
    publishedAt: '2026-07-20',
    readTime: '5 min read',
    tags: ['Couples', 'Date Night', 'Romance'],
  },
  {
    slug: 'how-to-host-the-ultimate-party-game-night',
    title: 'How to Host the Ultimate Party Game Night (Zero Awkward Silences)',
    excerpt: 'Step-by-step host guide for organizing icebreakers, team games, and party snacks.',
    content: `Hosting a memorable game night requires balancing energy, choosing the right game deck, and keeping everyone involved.\n\n1. Start with Light Icebreakers\nBegin with Would You Rather or Never Have I Ever to get everyone laughing immediately.\n\n2. Rotate Seating\nKeep group dynamics fresh by shuffling seating arrangements between rounds.`,
    category: 'Party Tips',
    author: {
      name: 'Marcus Vance',
      role: 'Event Director',
      avatar: '/authors/marcus.jpg',
    },
    publishedAt: '2026-07-18',
    readTime: '6 min read',
    tags: ['Party', 'Hosting', 'Icebreakers'],
  },
];
