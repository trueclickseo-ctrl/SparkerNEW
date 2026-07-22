export interface LibraryGame {
  id: string;
  name: string;
  slug: string;
  category: string;
  cardCount: number;
  description: string;
  prompts: string[];
}

export const QUESTION_DATABASE: LibraryGame[] = [
  {
    id: 'truth-or-dare',
    name: 'Truth or Dare',
    slug: 'truth-or-dare',
    category: 'Party Classic',
    cardCount: 520,
    description: 'Classic truths and dares ranging from mild icebreakers to hilarious party challenges.',
    prompts: [
      'Truth: What is the most embarrassing song playlist on your phone?',
      'Dare: Do your best impression of a famous celebrity for 30 seconds!',
      'Truth: Have you ever accidentally sent a message to the wrong person?',
      'Dare: Let the person to your left pick a silly nickname for you for the rest of the game.',
      'Truth: What is one secret talent nobody in this room knows about?',
    ],
  },
  {
    id: 'never-have-i-ever',
    name: 'Never Have I Ever',
    slug: 'never-have-i-ever',
    category: 'Icebreaker',
    cardCount: 450,
    description: 'Discover wild stories and shared experiences with group finger counters.',
    prompts: [
      'Never have I ever re-gifted a present I did not want.',
      'Never have I ever laughed so hard I snorted out loud.',
      'Never have I ever locked my keys inside my car or home.',
      'Never have I ever binge-watched an entire TV series in one weekend.',
    ],
  },
  {
    id: 'would-you-rather',
    name: 'Would You Rather?',
    slug: 'would-you-rather',
    category: 'Debate Game',
    cardCount: 380,
    description: 'Impossible choices and funny dilemmas for group voting and debate.',
    prompts: [
      'Would you rather speak all languages fluently or be able to talk to animals?',
      'Would you rather live without internet for a month or live without music for a year?',
      'Would you rather be able to rewind time by 10 seconds or pause time for 10 minutes?',
    ],
  },
  {
    id: 'charades',
    name: 'Speed Charades',
    slug: 'charades',
    category: 'Action Game',
    cardCount: 300,
    description: 'Silent acting race featuring pop culture, movies, and hilarious action prompts.',
    prompts: [
      'Act out: Astronaut walking on the moon with zero gravity.',
      'Act out: T-Rex attempting to make a bed with short arms.',
      'Act out: Chef accidentally spilling hot soup.',
    ],
  },
  {
    id: 'mafia',
    name: 'Mafia / Werewolf',
    slug: 'mafia',
    category: 'Social Deduction',
    cardCount: 50,
    description: 'Secret identity roles and tactical voting for large groups.',
    prompts: [
      'Role: Mafia Boss — Secretly eliminate one citizen each night.',
      'Role: Detective — Inspect one player each night to uncover their true role.',
      'Role: Doctor — Choose one player each night to protect from harm.',
    ],
  },
  {
    id: '21-questions',
    name: '21 Questions',
    slug: '21-questions',
    category: 'Intimacy & Bonding',
    cardCount: 210,
    description: 'Sequential rapid-fire questions to get to know anyone deeply.',
    prompts: [
      'Question #1: What is your favorite memory from childhood?',
      'Question #2: If you could dinner with any historical figure, who would it be?',
      'Question #3: What quality do you admire most in a best friend?',
    ],
  },
  {
    id: 'conversation-starters',
    name: 'Conversation Starters',
    slug: 'conversation-starters',
    category: 'Group Bonding',
    cardCount: 320,
    description: 'Engaging starters for dinner parties, road trips, and coffee chats.',
    prompts: [
      'What is one piece of advice you wish you knew 5 years ago?',
      'If your life was a book, what would the current chapter be named?',
    ],
  },
  {
    id: 'ice-breakers',
    name: 'Team Ice Breakers',
    slug: 'ice-breakers',
    category: 'Office & School',
    cardCount: 250,
    description: 'Workplace-safe and classroom-friendly icebreaker warmups.',
    prompts: [
      'What was your very first job and what did you learn from it?',
      'Share one fun fact about your hometown or country!',
    ],
  },
];
