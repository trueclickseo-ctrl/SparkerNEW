import { CHARADES_CLUSTER_GAMES } from './charades-cluster';

export interface ProgrammaticGameData {
  id: string;
  path: string;
  title: string;
  h1?: string;                  // Optional unique H1 (defaults to title)
  description: string;
  introduction?: string;         // 150-400 word unique intro (replaces description fallback)
  category: string;
  badge?: string;
  players: string;
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  // Content type for schema accuracy
  contentType?: 'pillar' | 'category' | 'audience' | 'theme' | 'occasion' | 'difficulty' | 'rules' | 'printable' | 'generator' | 'faq' | 'guide' | 'history' | 'strategy';
  // Entity attributes for rich schema signals
  audience?: string;
  theme?: string;
  occasion?: string;
  season?: string;
  skillLevel?: 'beginner' | 'intermediate' | 'advanced';
  energyLevel?: 'low' | 'medium' | 'high';
  // Content blocks
  prompts: string[];
  rules: string[];
  tips?: string[];               // Unique tips per page (5-8 recommended)
  faqs: { question: string; answer: string }[];
  history?: string;              // Prose for history pages
  strategy?: string;             // Prose for strategy pages
  sources?: { title: string; url: string }[];  // Authority citations
  // Internal linking graph
  parentSlug?: string;
  siblings?: string[];
  children?: string[];
}

export const PROGRAMMATIC_SEO_GAMES: ProgrammaticGameData[] = [
  // ─── CHARADES CLUSTER (38 PAGES — imported from charades-cluster.ts) ─────────
  ...CHARADES_CLUSTER_GAMES,

  // ─── TRUTH OR DARE CLUSTER ──────────────────────────────────────────
  {
    id: 'truth-or-dare',
    path: '/truth-or-dare/',
    title: 'Truth or Dare Classic',
    description: 'The world-famous conversation game of secrets and challenges. Take turns answering reveals or performing wild dares.',
    category: 'Party Classic',
    badge: 'Trending 🔥',
    players: '3-15+ players',
    duration: '30-90 mins',
    difficulty: 'Easy',
    prompts: [
      'Truth: What is the most awkward text you sent to the wrong contact?',
      'Dare: Do your best celebrity impression for 30 seconds straight!',
      'Truth: Have you ever lied about your age or height to sound cooler?',
      'Dare: Speak in a Shakespearean English accent for the next 3 rounds.',
      'Truth: What is your absolute biggest guilty pleasure reality TV show?',
      'Dare: Let someone draw a silly mustache on your face with an eyeliner.',
      'Truth: Have you ever eaten food off the floor after the 5-second rule?',
      'Dare: Walk across the room backwards until it is your turn again.',
      'Truth: What is the worst nickname anyone has ever given you?',
      'Dare: Perform a 20-second catwalk strut like a high-fashion model.',
    ],
    rules: [
      'Players sit in a circle and draw cards in clockwise order.',
      'Choose between TRUTH (answer the question honestly) or DARE (perform the challenge).',
      'If you refuse a card, you must perform a group-voted penalty.',
    ],
    faqs: [
      { question: 'What is Truth or Dare?', answer: 'Truth or Dare is a classic party game where players choose between answering a revealing question or performing a fun dare.' }
    ],
    children: ['truth-or-dare-couples', 'truth-or-dare-friends'],
    siblings: ['never-have-i-ever', 'would-you-rather', 'charades'],
  },
  {
    id: 'truth-or-dare-couples',
    path: '/truth-or-dare/couples/',
    title: 'Truth or Dare for Couples',
    description: 'Romantic, flirty, and spicy prompts designed to build intimacy, spark fun conversations, and test your connection.',
    category: 'Relationship / Intimacy',
    badge: 'Couples Night 💕',
    players: '2 players',
    duration: '20-50 mins',
    difficulty: 'Easy',
    prompts: [
      'Truth: What was the exact moment you realized you had feelings for me?',
      'Dare: Give your partner a relaxing 2-minute shoulder massage.',
      'Truth: What is one secret romantic fantasy you want us to try out?',
      'Dare: Whisper a flirty or sweet secret into your partner’s ear.',
      'Truth: What outfit of mine is your absolute favorite for date nights?',
      'Dare: Slow dance with your partner for 1 minute without any music.',
      'Truth: What is your absolute favorite memory of our relationship?',
      'Dare: Hold hands with your partner for the next 3 rounds of the game.',
      'Truth: What is one small daily habit of mine that you find attractive?',
      'Dare: Kiss your partner gently on the forehead, cheek, and lips.',
    ],
    rules: [
      'Play together with your partner on date nights.',
      'Alternate drawing cards and decide to reveal secrets or perform flirty challenges.',
      'Establish comfortable boundaries and safe words before playing.',
    ],
    faqs: [
      { question: 'Can we play couples Truth or Dare on a first date?', answer: 'We suggest starting with lighter icebreaker decks and moving to this intimacy deck once you feel comfortable together.' }
    ],
    parentSlug: 'truth-or-dare',
    siblings: ['truth-or-dare-friends'],
  },
  {
    id: 'truth-or-dare-friends',
    path: '/truth-or-dare/friends/',
    title: 'Truth or Dare for Friends',
    description: 'Hilarious, non-awkward group truths and funny dares to get friends laughing, talking, and bonding.',
    category: 'Party Classic',
    badge: 'Friend Group Vibe 🤝',
    players: '3-15 players',
    duration: '30-60 mins',
    difficulty: 'Easy',
    prompts: [
      'Truth: What is the dumbest way you have ever accidentally injured yourself?',
      'Dare: Let the person to your left styling your hair however they want.',
      'Truth: If you had to swap lives with someone in this room, who is it?',
      'Dare: Say 5 genuine compliments to the person sitting opposite you.',
      'Truth: What is the most ridiculous rumor you ever heard about yourself?',
      'Dare: Sing the chorus of your favorite pop song in an opera voice.',
      'Truth: What is one childish habit you still do on a daily basis?',
      'Dare: Talk to an inanimate object in the room like it is your friend.',
      'Truth: Have you ever pretended to recognize someone you forgot?',
      'Dare: Do your best chicken dance impression for 15 seconds.',
    ],
    rules: [
      'Sit in a circle and draw cards.',
      'Choose Truth to share secrets or Dare to perform comical challenges in front of friends.',
    ],
    faqs: [
      { question: 'Is this deck safe for all friend groups?', answer: 'Yes, this deck contains clean, hilarious party icebreakers safe for school and casual hangouts.' }
    ],
    parentSlug: 'truth-or-dare',
    siblings: ['truth-or-dare-couples'],
  },

  // ─── ICEBREAKERS CLUSTER ────────────────────────────────────────────
  {
    id: 'icebreakers',
    path: '/icebreakers/',
    title: 'Icebreaker Cards',
    description: 'Break the ice in any room! Clean, engaging, and professional questions designed to start conversations easily.',
    category: 'Icebreaker',
    badge: 'Meeting Prep ☕',
    players: '3-30 players',
    duration: '10-30 mins',
    difficulty: 'Easy',
    prompts: [
      'What was your very first job and what did you learn from it?',
      'If you could travel anywhere in the world next week, where would it be?',
      'What is one book, movie, or podcast that changed your perspective recently?',
      'What is your favorite family holiday tradition of all time?',
      'If you could have any superpower for one day, what would you choose?',
      'Share one fun fact about your hometown or country!',
      'Are you a morning person or a night owl, and why?',
      'What is one hobby or skill you would love to learn if time was no object?',
      'If your life was a movie title, what would it be called?',
      'What makes you feel most appreciated and valued in a team setting?',
    ],
    rules: [
      'Pass the digital deck around during meetings, class warmups, or parties.',
      'Each player draws a card and answers the prompt.',
      'Keep answers brief and enjoy learning about each other.',
    ],
    faqs: [
      { question: 'Where can I use Icebreakers?', answer: 'Icebreakers are great for company team meetings, classroom introductions, or casual dinner parties.' }
    ],
    children: ['icebreakers-work', 'icebreakers-team-building'],
    siblings: ['conversation-starters', 'this-or-that'],
  },
  {
    id: 'icebreakers-work',
    path: '/icebreakers/work/',
    title: 'Work Icebreakers',
    description: 'Professional, work-safe conversation prompts designed for remote team meetings, office syncs, and team standups.',
    category: 'Corporate',
    badge: 'Slack & Zoom friendly 💼',
    players: '3-50 players',
    duration: '10-20 mins',
    difficulty: 'Easy',
    prompts: [
      'What is your go-to productivity hack or routine to stay focused?',
      'What is the most interesting project you are currently working on?',
      'If you could co-work from any coffee shop or beach, where would it be?',
      'What was your favorite team achievement from the past month?',
      'What is your preferred method of communication (Slack, Email, Huddle)?',
      'What is one work-safe desktop wallpaper image you currently use?',
      'What industry trend or skill are you most curious about exploring?',
      'What is one thing you appreciate about the person sitting next to you?',
    ],
    rules: [
      'Use during the first 5 minutes of recurring weekly syncs.',
      'Ask team members to share their answers in the chat or speak in turn.',
    ],
    faqs: [
      { question: 'Are these icebreakers work-safe?', answer: 'Yes, all prompts are 100% professional and corporate-friendly, avoiding any awkward topic fields.' }
    ],
    parentSlug: 'icebreakers',
    siblings: ['icebreakers-team-building'],
  },
  {
    id: 'icebreakers-team-building',
    path: '/icebreakers/team-building/',
    title: 'Team Building Icebreakers',
    description: 'Deeper questions to build trust, collaboration, and understanding across department silos.',
    category: 'Corporate',
    badge: 'Trust Building 🤝',
    players: '4-30 players',
    duration: '15-40 mins',
    difficulty: 'Easy',
    prompts: [
      'What core value do you appreciate most in your teammates?',
      'Describe a time when a colleague stood up for you or supported you.',
      'What is one personal goal you are actively working on outside of work?',
      'How do you prefer to receive feedback (directly, written, or in sync)?',
      'What was the most challenging project you solved this year, and how?',
      'What collaborative tools make your daily work life easiest?',
    ],
    rules: [
      'Use during structured team building retreats or workshops.',
      'Encourage open sharing and active listening among all participants.',
    ],
    faqs: [
      { question: 'What is the goal of Team Building Icebreakers?', answer: 'The goal is to go beyond surface introductions and foster psychological safety and collaboration.' }
    ],
    parentSlug: 'icebreakers',
    siblings: ['icebreakers-work'],
  },

  // ─── STANDALONE PAGES ───────────────────────────────────────────────
  {
    id: 'would-you-rather',
    path: '/would-you-rather/',
    title: 'Would You Rather?',
    description: 'Impossible choices and absurd dilemmas! Draw cards and debate why your option is superior to the group.',
    category: 'Debate Game',
    badge: 'Vibrant Dilemma ⚖️',
    players: '2-20 players',
    duration: '15-45 mins',
    difficulty: 'Easy',
    prompts: [
      'Would you rather be able to fly at walking speed or run at 100 mph?',
      'Would you rather always speak your mind out loud or never speak again?',
      'Would you rather live in a world without music or a world without movies?',
      'Would you rather have a permanently cold house or a permanently hot house?',
      'Would you rather be able to speak all human languages or speak to animals?',
      'Would you rather travel 100 years into the past or 100 years into the future?',
      'Would you rather always have to sing instead of speaking or dance instead of walking?',
      'Would you rather have no internet access for a month or no shower for a month?',
    ],
    rules: [
      'Draw a card displaying two difficult choices (Option A vs Option B).',
      'All players vote simultaneously (e.g. raising hands or writing on paper).',
      'Debate and argue why your choice is the better scenario!',
    ],
    faqs: [
      { question: 'How do you play Would You Rather?', answer: 'You draw a card with two scenarios, vote on which one you prefer, and discuss your reasoning with the group.' }
    ],
    siblings: ['truth-or-dare', 'never-have-i-ever', 'this-or-that'],
  },
  {
    id: 'never-have-i-ever',
    path: '/never-have-i-ever/',
    title: 'Never Have I Ever',
    description: 'A classic game of confessions. Discover funny stories and hidden facts about your friends with finger counts.',
    category: 'Icebreaker',
    badge: 'Confessions Vibe 🤫',
    players: '3-15 players',
    duration: '15-30 mins',
    difficulty: 'Easy',
    prompts: [
      'Never have I ever re-gifted a birthday present I did not want.',
      'Never have I ever laughed so hard I snorted out loud in public.',
      'Never have I ever locked my keys inside my car or house.',
      'Never have I ever binge-watched an entire TV series in one weekend.',
      'Never have I ever pretended to recognize someone whose name I forgot.',
      'Never have I ever texted something to the wrong person and panicked.',
      'Never have I ever fallen asleep in a class or office meeting.',
      'Never have I ever looked at an old photo and cringed at my style.',
    ],
    rules: [
      'Every player starts the game with 10 fingers up.',
      'One player draws a card and reads the statement starting with "Never Have I Ever..."',
      'If you have done the action, you must put 1 finger down.',
      'The last player with fingers remaining wins the game!',
    ],
    faqs: [
      { question: 'What is Never Have I Ever?', answer: 'Never Have I Ever is a conversational group game where players admit to actions by lowering fingers or taking sips of a beverage.' }
    ],
    siblings: ['would-you-rather', 'truth-or-dare', 'most-likely-to'],
  },
  {
    id: 'conversation-starters',
    path: '/conversation-starters/',
    title: 'Conversation Starters',
    description: 'Thought-provoking, funny, and engaging questions designed to start conversations at dinner tables, parties, or trips.',
    category: 'Icebreaker',
    badge: 'Deep Chats 💬',
    players: '2-12 players',
    duration: '15-60 mins',
    difficulty: 'Easy',
    prompts: [
      'What is one piece of advice you wish you could give your 15-year-old self?',
      'If your life was a book, what would the current chapter be named?',
      'What is the most interesting museum or travel spot you ever visited?',
      'What childhood memory brings the most comfort to your heart?',
      'What is one habit of yours that you are actively trying to improve?',
      'If you could invite three historical figures to a dinner party, who are they?',
      'What does living a fully fulfilled life look like to you 10 years from now?',
    ],
    rules: [
      'Draw a card and read the question to the group.',
      'Give every player an opportunity to share their answer.',
      'Allow conversations to flow naturally around each topic.',
    ],
    faqs: [
      { question: 'How do you use Conversation Starters?', answer: 'Simply read the prompt cards and let players respond in turns. It works best without strict time limits.' }
    ],
    siblings: ['icebreakers', 'would-you-rather'],
  },
  {
    id: 'most-likely-to',
    path: '/most-likely-to/',
    title: 'Most Likely To...',
    description: 'Find out what your friends really think of you! Point to the person who matches the prompt on the count of three.',
    category: 'Voting Game',
    badge: 'Vibe Check 🎯',
    players: '3-15 players',
    duration: '15-40 mins',
    difficulty: 'Easy',
    prompts: [
      'Who is most likely to get rich with a bizarre startup idea?',
      'Who is most likely to lock their keys inside their car or home?',
      'Who is most likely to become a famous actor or influencer?',
      'Who is most likely to forget where they parked their car in a mall?',
      'Who is most likely to survive a zombie apocalypse longest?',
      'Who is most likely to spend all their money on concert tickets?',
      'Who is most likely to cry during a sad animated movie?',
    ],
    rules: [
      'Read a card starting with "Most likely to..." aloud.',
      'All players count down: "3... 2... 1..."',
      'On "1", point to the player who you think is most likely to do the action.',
      'The player with the most votes/points on them keeps the card or logs a point.',
    ],
    faqs: [
      { question: 'How do you play Most Likely To?', answer: 'Players vote on who fits a specific prompt by pointing at them simultaneously on a count of three.' }
    ],
    siblings: ['never-have-i-ever', 'truth-or-dare'],
  },
  {
    id: 'this-or-that',
    path: '/this-or-that/',
    title: 'This or That',
    description: 'Quick-fire preferences showdown. Compare choices with friends instantly on simple binary preferences.',
    category: 'Debate Game',
    badge: 'Quick-fire ⚡',
    players: '2-15 players',
    duration: '10-25 mins',
    difficulty: 'Easy',
    prompts: [
      'Coffee or Tea?',
      'Summer or Winter?',
      'Early Bird or Night Owl?',
      'Sweet or Savory?',
      'Movies at home or Theater experience?',
      'City vacation or Beach relaxation?',
      'Text message or Phone call?',
      'Dogs or Cats?',
    ],
    rules: [
      'Draw a card with two simple options.',
      'Say your choice instantly without overthinking.',
      'Compare answers with the room to check alignment.',
    ],
    faqs: [
      { question: 'What is This or That?', answer: 'This or That is a quick preference game comparing binary choices like Coffee vs Tea or Dogs vs Cats.' }
    ],
    siblings: ['would-you-rather', 'icebreakers'],
  },
  {
    id: 'minute-to-win-it',
    path: '/minute-to-win-it/',
    title: 'Minute to Win It Challenges',
    description: 'Hilarious 60-second physical and mental challenges. Complete the task before the timer runs out!',
    category: 'Action Game',
    badge: 'Speed Run ⏱️',
    players: '3-15 players',
    duration: '20-50 mins',
    difficulty: 'Medium',
    prompts: [
      'Challenge: Balance a plastic spoon on your nose for 30 seconds straight without using hands.',
      'Challenge: Do 45 quick jumping jacks while reciting your favorite food.',
      'Challenge: Try to touch your nose with your tongue for 15 seconds.',
      'Challenge: Recite the alphabet backwards starting from Z within 30 seconds.',
      'Challenge: Balance a book or cup on your head and walk across the room and back.',
      'Challenge: Say "banana smoothie" 5 times fast without tripping on words.',
    ],
    rules: [
      'One player attempts the challenge card.',
      'Start a 60-second timer.',
      'If they complete the challenge within 1 minute, they score 1 point. Rotate turns.',
    ],
    faqs: [
      { question: 'What is a Minute to Win It game?', answer: 'It is a speed-based party game where contestants try to complete funny physical or mental challenges in under 60 seconds.' }
    ],
    siblings: ['charades', 'truth-or-dare'],
  },
  {
    id: 'drinking-games',
    path: '/drinking-games/',
    title: 'Party Drinking Games',
    description: 'Safe, interactive adult drinking prompts, rules, and vibe checks to fuel your group celebrations. 21+ only.',
    category: 'Adults Party',
    badge: '21+ After Dark 🔞',
    players: '4-12 players',
    duration: '20-60 mins',
    difficulty: 'Easy',
    prompts: [
      'Take a sip if you are the tallest person in the room.',
      'Take a sip if you have ever ghosted someone on a dating app.',
      'The player to your left makes a rule that everyone must follow for 3 rounds (e.g. no saying "yes").',
      'Choose a drinking buddy; every time they drink, you drink too.',
      'Share one funny dating app message or skip and take two sips.',
    ],
    rules: [
      'Strictly for adults of legal drinking age. Please drink responsibly.',
      'Players draw cards and follow the rules or directives listed.',
      'You can always skip any prompt by taking a small sip of water or mocktails instead.',
    ],
    faqs: [
      { question: 'Do I have to drink alcohol to play?', answer: 'Absolutely not. You can play with mocktails, water, soda, or any beverage of your choice.' }
    ],
    siblings: ['truth-or-dare', 'never-have-i-ever'],
  },
];
