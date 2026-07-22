export interface PartyGame {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  audience: ('kids' | 'teens' | 'party' | 'family' | 'office' | 'classroom' | 'drinking' | 'large-groups' | 'small-groups')[];
  category: string;
  numberOfPlayers: string;
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cardCount: number;
  badge?: string;
  rules: string[];
}

export const PLAY_GAMES: PartyGame[] = [
  {
    id: 'truth-or-dare',
    title: 'Truth or Dare Classic',
    shortDescription: 'Over 500+ hilarious dares and deep truths for parties and icebreakers.',
    fullDescription: 'The ultimate party game! Draw cards to answer reveals about yourself or perform dares.',
    audience: ['party', 'teens', 'large-groups', 'small-groups'],
    category: 'Party Classic',
    numberOfPlayers: '3-15+',
    duration: '20-60 mins',
    difficulty: 'Easy',
    cardCount: 520,
    badge: 'Popular',
    rules: [
      'Players sit in a circle and take turns drawing cards.',
      'Choose between Truth (answer honestly) or Dare (perform the action).',
      'Refusing a dare incurs a penalty vote by the group.',
    ],
  },
  {
    id: 'never-have-i-ever',
    title: 'Never Have I Ever',
    shortDescription: 'Interactive group voting with wild confessions and icebreaker prompts.',
    fullDescription: 'Discover hilarious facts about your friends with card-based finger counters.',
    audience: ['party', 'teens', 'drinking', 'large-groups'],
    category: 'Icebreaker',
    numberOfPlayers: '4-20+',
    duration: '15-45 mins',
    difficulty: 'Easy',
    cardCount: 450,
    badge: 'Trending',
    rules: [
      'Each player starts with 10 fingers up.',
      'Read out a statement starting with "Never Have I Ever..."',
      'If you have done it, put 1 finger down.',
      'First to zero fingers loses the round!',
    ],
  },
  {
    id: 'would-you-rather',
    title: 'Would You Rather?',
    shortDescription: 'Dilemma showdown featuring impossible choices and hilarious debates.',
    fullDescription: 'Vote on absurd choices and see if your answers match the rest of your party group.',
    audience: ['kids', 'family', 'teens', 'party', 'office', 'classroom', 'small-groups'],
    category: 'Debate Game',
    numberOfPlayers: '2-12',
    duration: '15-30 mins',
    difficulty: 'Easy',
    cardCount: 380,
    badge: 'Family Safe',
    rules: [
      'Draw a card with two distinct scenarios (Option A vs Option B).',
      'All players vote simultaneously.',
      'Debate why your option is superior!',
    ],
  },
  {
    id: 'charades',
    title: 'Speed Charades',
    shortDescription: 'Silent acting race with movie, pop culture, and funny action prompts.',
    fullDescription: 'Act out prompts without speaking before the 60-second timer expires!',
    audience: ['kids', 'family', 'party', 'office', 'classroom', 'large-groups'],
    category: 'Action Game',
    numberOfPlayers: '4-16',
    duration: '30-60 mins',
    difficulty: 'Medium',
    cardCount: 300,
    badge: 'Team Battle',
    rules: [
      'Divide players into two competing teams.',
      'Actor draws a card and acts out the prompt without speaking or making sounds.',
      'Team gets 1 point for guessing correctly within 60 seconds.',
    ],
  },
  {
    id: 'mafia',
    title: 'Mafia / Werewolf',
    shortDescription: 'Social deduction roleplay game of secret identity, bluffing, and strategy.',
    fullDescription: 'Innocent citizens vs hidden impostors! Uncover the truth before it is too late.',
    audience: ['teens', 'party', 'large-groups'],
    category: 'Social Deduction',
    numberOfPlayers: '7-25',
    duration: '30-90 mins',
    difficulty: 'Hard',
    cardCount: 50,
    badge: 'Strategy',
    rules: [
      'Moderator assigns hidden roles (Mafia, Detective, Doctor, Citizens).',
      'Night phase: Mafia secretly eliminates a player.',
      'Day phase: Survivors discuss and vote to eliminate a suspect.',
    ],
  },
  {
    id: 'office-icebreakers',
    title: 'Office Team Icebreakers',
    shortDescription: 'Professional & engaging conversation starters for meetings and team building.',
    fullDescription: 'Break the ice in remote or office meetings with lighthearted work-friendly prompts.',
    audience: ['office', 'small-groups', 'large-groups'],
    category: 'Corporate',
    numberOfPlayers: '3-30',
    duration: '10-20 mins',
    difficulty: 'Easy',
    cardCount: 200,
    badge: 'Work Friendly',
    rules: [
      'Pass the virtual or physical card deck during meeting warmups.',
      'Each team member answers one prompt.',
    ],
  },
];
