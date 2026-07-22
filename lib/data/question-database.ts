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
    name: 'Would You Rather',
    slug: 'would-you-rather',
    category: 'Debate & Dilemmas',
    cardCount: 380,
    description: 'Absurd dilemmas and impossible choices designed for group debates.',
    prompts: [
      'Would you rather be able to fly at walking speed or run at 100 mph?',
      'Would you rather always speak your mind out loud or never speak again?',
      'Would you rather live in a world without music or a world without movies?',
    ],
  },
  {
    id: 'charades',
    name: 'Speed Charades',
    slug: 'charades',
    category: 'Action & Acting',
    cardCount: 300,
    description: 'Silent acting prompts featuring pop culture, funny actions, and movies.',
    prompts: [
      'Act out: A penguin trying to walk on ice wearing high heels.',
      'Act out: An astronaut realizing their helmet is leaking air.',
      'Act out: Trying to eat hot soup while riding a roller coaster.',
    ],
  },
  {
    id: 'mafia',
    name: 'Mafia & Werewolf',
    slug: 'mafia',
    category: 'Social Deduction',
    cardCount: 50,
    description: 'Bluffing, secret identity roleplay, and village survival game.',
    prompts: [
      'Role: Mafia Boss — Secretly eliminate citizens during night phases.',
      'Role: Detective — Inspect one player each night to uncover their role.',
      'Role: Doctor — Save one player each night from potential elimination.',
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
      'Question #2: If you could have dinner with any historical figure, who would it be?',
      'Question #3: What quality do you admire most in a best friend?',
    ],
  },
  {
    id: 'double-entendres',
    name: 'Double Entendres & 2-Way Meanings',
    slug: 'truth-or-dare',
    category: 'Double Entendres (2-Way)',
    cardCount: 180,
    description: 'Clever, cheeky questions and prompts with innocent surfaces but cheeky double meanings.',
    prompts: [
      'What is something that starts out hard, gets warm and soft, and feels amazing when you finish?',
      'What is something long, flexible, and gets wetter the more you use it?',
      'What is something you love to do in the dark under the covers when nobody is watching?',
      'What is something that grows bigger when you touch it gently and care for it?',
    ],
  },
  {
    id: 'after-dark-spicy',
    name: 'After Dark Adult 18+ Truths',
    slug: 'truth-or-dare',
    category: 'Adult 18+ Spicy',
    cardCount: 220,
    description: 'Bold, sensual, and uncensored adult questions for romantic partners and late-night parties.',
    prompts: [
      'What is your ultimate late-night fantasy that you have never shared out loud?',
      'What is the most daring place you have ever kissed or cuddled with someone?',
      'What whisper or touch turns you on faster than anything else?',
      'What is one bedroom scenario you would love to try out with your partner?',
    ],
  },
  {
    id: 'genz-unfiltered-icks',
    name: 'Gen Z Red Flags & Icks',
    slug: 'genz-unfiltered-icks',
    category: 'Gen Z Red Flags & Icks',
    cardCount: 195,
    description: 'Unfiltered Gen Z prompts on dating icks, main character syndrome, and situationships.',
    prompts: [
      'Never have I ever ghosted someone because they gave me an instant ick.',
      'Never have I ever stalked an ex’s Spotify activity or VSCO page.',
      'What is a major red flag that people pretend is normal in modern dating?',
      'Who in your contacts has the most unhinged main character energy?',
    ],
  },
  {
    id: 'spicy-never-have-i-ever',
    name: 'Spicy 18+ Never Have I Ever',
    slug: 'never-have-i-ever',
    category: 'Spicy 18+ Confessions',
    cardCount: 240,
    description: 'Risqué adult confessions for wild game nights with drinks and close friends.',
    prompts: [
      'Never have I ever had a crush on a friend’s sibling or ex.',
      'Never have I ever made out with someone whose name I forgot the next morning.',
      'Never have I ever sent a risky text message to the wrong group chat.',
    ],
  },
  {
    id: 'conversation-starters',
    name: 'Conversation Starters',
    slug: 'office-icebreakers',
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
    slug: 'office-icebreakers',
    category: 'Office & School',
    cardCount: 250,
    description: 'Workplace-safe and classroom-friendly icebreaker warmups.',
    prompts: [
      'What was your very first job and what did you learn from it?',
      'Share one fun fact about your hometown or country!',
    ],
  },
];
