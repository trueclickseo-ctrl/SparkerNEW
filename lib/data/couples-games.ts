export interface CouplesDeck {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'romantic' | 'flirty' | 'deep' | 'marriage' | 'long-distance' | 'date-night' | 'new-couples';
  intimacyLevel: 'Mild' | 'Medium' | 'Deep' | 'Spicy';
  promptCount: number;
  badge?: string;
  samplePrompts: string[];
}

export const COUPLES_DECKS: CouplesDeck[] = [
  {
    id: 'deep-intimacy',
    title: '89 Intimacy & Soul Deck',
    shortDescription: 'Targeted deep conversation starters built for partners and long-term couples.',
    fullDescription: 'The core pillar of the 89 Games Framework. Explores emotional vulnerability, shared dreams, and relationship reflection.',
    category: 'deep',
    intimacyLevel: 'Deep',
    promptCount: 89,
    badge: 'Pillar Deck',
    samplePrompts: [
      'What was the exact moment you realized we had something special?',
      'How has our relationship changed the way you view your future self?',
      'What is one secret dream you have that you have never told anyone else?',
    ],
  },
  {
    id: 'flirty-sparks',
    title: 'Flirty Sparks & Teasers',
    shortDescription: 'Playful, lighthearted, and sensual prompts for date night chemistry.',
    fullDescription: 'Spark playful banter and romantic friction with fun, lighthearted prompts.',
    category: 'flirty',
    intimacyLevel: 'Spicy',
    promptCount: 75,
    badge: 'Popular',
    samplePrompts: [
      'What is my most irresistible habit when we are out in public?',
      'If we could sneak away right now for one hour, where would we go?',
      'What outfit of mine is your absolute favorite?',
    ],
  },
  {
    id: 'long-distance-connect',
    title: 'Long Distance Sync Deck',
    shortDescription: 'Specially formatted for video call date nights and remote partners.',
    fullDescription: 'Stay connected across timezones with synchronized room draws and shared prompts.',
    category: 'long-distance',
    intimacyLevel: 'Medium',
    promptCount: 65,
    badge: 'Remote Sync',
    samplePrompts: [
      'What is the first thing we are doing when we reunite at the airport?',
      'What smells or songs instantly remind you of me during your day?',
    ],
  },
  {
    id: 'marriage-milestones',
    title: 'Marriage & Milestones',
    shortDescription: 'Thoughtful prompts for married couples to rekindle connection and alignment.',
    fullDescription: 'Reflect on shared achievements, parenting goals, and marital partnership.',
    category: 'marriage',
    intimacyLevel: 'Deep',
    promptCount: 80,
    badge: 'Marriage',
    samplePrompts: [
      'What is our proudest shared milestone from the past 5 years?',
      'How can I better support your personal goals this coming month?',
    ],
  },
  {
    id: 'new-couples-icebreakers',
    title: 'New Couples Starters',
    shortDescription: 'Fun and non-intimidating questions for early dating and new relationships.',
    fullDescription: 'Get to know your new partner comfortably without awkward pressure.',
    category: 'new-couples',
    intimacyLevel: 'Mild',
    promptCount: 60,
    badge: 'Early Dating',
    samplePrompts: [
      'What is your ultimate guilty pleasure TV show or movie?',
      'If you could travel anywhere tomorrow, where would we go?',
    ],
  },
  {
    id: 'date-night-sparks',
    title: 'Date Night Companion',
    shortDescription: 'The perfect restaurant or cozy evening deck for dinner dates.',
    fullDescription: 'Keep conversation flowing effortlessly over dinner, drinks, or coffee.',
    category: 'date-night',
    intimacyLevel: 'Medium',
    promptCount: 70,
    badge: 'Dinner Safe',
    samplePrompts: [
      'What is the best meal we have ever cooked or ordered together?',
      'If our relationship was a movie title, what would it be called?',
    ],
  },
  {
    id: 'romantic',
    title: 'Romantic Decks & Love Connection',
    shortDescription: 'Sweet, passionate, and heartwarming prompts to celebrate love.',
    fullDescription: 'Deepen your romantic connection with questions designed to bring out tenderness, gratitude, and romance.',
    category: 'romantic',
    intimacyLevel: 'Medium',
    promptCount: 85,
    badge: 'Romantic',
    samplePrompts: [
      'What is one small romantic gesture I do that always makes your heart flutter?',
      'If we could replay one memory from our relationship forever, which one would you pick?',
      'What is your favorite picture of us together and why?',
    ],
  },
];
