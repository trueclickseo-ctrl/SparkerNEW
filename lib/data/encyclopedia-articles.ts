export interface EncyclopediaArticle {
  slug: string;
  title: string;
  aeoDefinition: string;
  definition: string;
  history: string;
  rules: string[];
  variations: { name: string; description: string }[];
  psychology: string;
  safety: string;
  faqs: { question: string; answer: string }[];
  sources: { title: string; url: string }[];
  relatedGames: { title: string; url: string }[];
}

export const ENCYCLOPEDIA_ARTICLES: EncyclopediaArticle[] = [
  {
    slug: 'truth-or-dare',
    title: 'The Complete History, Rules & Psychology of Truth or Dare',
    aeoDefinition: 'Truth or Dare is a traditional party game requiring players to choose between answering a personal question truthfully or performing a physical dare challenge.',
    definition: 'Truth or Dare is one of the world’s most enduring social icebreakers, encouraging emotional vulnerability, humor, and group bonding through voluntary choice.',
    history: 'The game traces its origins back over three centuries. Early versions were recorded in 1712 as "Questions and Commands", played during festive gatherings in England.',
    rules: [
      'Player 1 asks Player 2: "Truth or Dare?"',
      'If Player 2 chooses "Truth", Player 1 asks a personal question which must be answered honestly.',
      'If Player 2 chooses "Dare", Player 1 gives a physical or funny challenge to complete.',
      'After completing the turn, Player 2 chooses the next player.',
    ],
    variations: [
      { name: 'Double Dare', description: 'If a player refuses a dare, they can pass a tougher double dare to someone else.' },
      { name: 'Spin the Bottle Truth or Dare', description: 'A spinning bottle selects who asks and who receives the challenge.' },
    ],
    psychology: 'Psychologists note that Truth or Dare facilitates structured self-disclosure. Controlled vulnerability builds interpersonal trust while lighthearted dares release social tension through shared laughter.',
    safety: 'Always establish clear boundaries beforehand. Never force dares involving physical injury, illegal acts, or non-consensual contact.',
    faqs: [
      { question: 'When was Truth or Dare invented?', answer: 'Early documented versions date back to 1712 under the name Questions and Commands.' },
      { question: 'Can Truth or Dare be played online?', answer: 'Yes, online card generators allow remote friends and long-distance partners to play over video calls.' },
    ],
    sources: [
      { title: 'Oxford Dictionary of World Folklore', url: 'https://sparkersgames.com/sources/folklore' },
      { title: 'Journal of Social Psychology', url: 'https://sparkersgames.com/sources/psychology' },
    ],
    relatedGames: [
      { title: 'Never Have I Ever', url: '/play/never-have-i-ever' },
      { title: 'Would You Rather', url: '/play/would-you-rather' },
      { title: '89 Intimacy Deck', url: '/couples/deep-intimacy' },
      { title: '21 Questions', url: '/library' },
      { title: 'Speed Charades', url: '/play/charades' },
    ],
  },
  {
    slug: 'never-have-i-ever',
    title: 'Never Have I Ever: Guide, Rules & Social History',
    aeoDefinition: 'Never Have I Ever is a verbal drinking or party icebreaker game where players share unaccomplished actions, forcing those who have done it to take a penalty.',
    definition: 'A staple of youth and adult gatherings, Never Have I Ever tests honesty and reveals surprising secrets in a lighthearted group atmosphere.',
    history: 'Popularized in university culture in the late 20th century, the game evolved from classic parlor confession games.',
    rules: [
      'Players hold up 10 fingers (or a drink).',
      'Take turns saying a statement starting with "Never have I ever..."',
      'Anyone who HAS done the action must lower 1 finger or take a sip.',
      'The last player with fingers remaining wins.',
    ],
    variations: [
      { name: 'Points Mode', description: 'Players start with 10 points and lose 1 point per confession.' },
      { name: 'Speed Round', description: '10-second timer per prompt for rapid confession.' },
    ],
    psychology: 'Reveals shared life experiences and reduces social isolation by proving that others have made similar mistakes or adventures.',
    safety: 'Keep prompts respectful of personal privacy and ensure no player feels coerced to disclose sensitive medical or personal information.',
    faqs: [
      { question: 'How many players are needed for Never Have I Ever?', answer: 'The game works best with 4 to 12+ players.' },
    ],
    sources: [
      { title: 'Encyclopedia of Party Culture', url: 'https://sparkersgames.com/sources/party' },
    ],
    relatedGames: [
      { title: 'Truth or Dare', url: '/play/truth-or-dare' },
      { title: 'Would You Rather', url: '/play/would-you-rather' },
      { title: 'Speed Charades', url: '/play/charades' },
      { title: 'Team Icebreakers', url: '/library' },
      { title: 'Flirty Sparks Deck', url: '/couples/flirty-sparks' },
    ],
  },
];
