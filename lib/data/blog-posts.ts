export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Party Tips' | 'Couples Advice' | 'Game Strategy' | 'Gen Z & Dating' | 'Icebreakers & Social';
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
  // 1. Couples Advice
  {
    slug: '10-tips-for-unforgettable-date-night',
    title: '10 Expert Tips for an Unforgettable Date Night at Home',
    excerpt: 'Transform an ordinary evening into a romantic connection ritual with card decks and conversation starters.',
    content: `Date nights do not always require expensive restaurant reservations or traveling out of town. With thoughtful planning and structured conversation prompts, your living room can become the ultimate sanctuary for romance.

### 1. Set the Ambience
Dim the overhead lights, light scented candles, and put on low-fi jazz or acoustic melodies in the background to signal a shift away from work mode.

### 2. Put Distractions Away
Store smartphones in another room for 90 uninterrupted minutes. Real intimacy happens when both partners are fully present.

### 3. Use Intimacy Card Decks
Draw prompts from the 89 Intimacy Deck to spark deep reflections, revisit cherished memories, and explore shared dreams.`,
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

  // 2. Party Tips
  {
    slug: 'how-to-host-the-ultimate-party-game-night',
    title: 'How to Host the Ultimate Party Game Night (Zero Awkward Silences)',
    excerpt: 'Step-by-step host guide for organizing icebreakers, team games, and party snacks for maximum group energy.',
    content: `Hosting a memorable game night requires balancing energy, choosing the right game deck, and keeping everyone involved.

### 1. Start with Light Icebreakers
Begin with Would You Rather or Never Have I Ever to get everyone laughing and breaking the ice immediately.

### 2. Rotate Group Seating
Keep group dynamics fresh by shuffling seating arrangements between game rounds so everyone interacts with new guests.`,
    category: 'Party Tips',
    author: {
      name: 'Marcus Vance',
      role: 'Event & Party Host Specialist',
      avatar: '/authors/marcus.jpg',
    },
    publishedAt: '2026-07-18',
    readTime: '6 min read',
    tags: ['Party', 'Hosting', 'Icebreakers'],
  },

  // 3. Game Strategy
  {
    slug: 'mastering-mafia-and-werewolf-social-deduction-tactics',
    title: 'Mastering Mafia & Werewolf: Psychological Bluffing & Victory Strategies',
    excerpt: 'Learn secret deduction tricks, body language cues, and voting strategies to dominate social deduction games.',
    content: `Social deduction games like Mafia and Werewolf are psychological battlegrounds where body language, voting patterns, and strategic storytelling determine victory.

### 1. Pay Attention to Voting Velocity
Impostors often hesitate or sync their votes with dominant voices. Watch who votes immediately versus who waits for consensus.

### 2. Control the Narrative early
In daylight phases, frame the conversation around logical inconsistencies rather than raw emotional accusations.`,
    category: 'Game Strategy',
    author: {
      name: 'Alex Chen',
      role: 'Board Game Strategist',
      avatar: '/authors/alex.jpg',
    },
    publishedAt: '2026-07-15',
    readTime: '7 min read',
    tags: ['Mafia', 'Strategy', 'Bluffing'],
  },

  // 4. Gen Z & Dating
  {
    slug: 'gen-z-guide-to-situationships-red-flags-and-green-flags',
    title: 'The Gen Z Guide to Navigating Situationships & Spotting Red Flags',
    excerpt: 'How to transition from soft-launching to real commitment using honest vibe-check conversation cards.',
    content: `Modern dating can feel like a chaotic cycle of roster dating, soft launches, and undefined situationships.

### 1. The Power of the Honest Vibe Check
Using card decks like Gen Z Vibe Check allows you to ask direct questions about dating expectations without making things uncomfortable.

### 2. Identifying 2026 Green Flags
Active listening, consistency in texting, and emotional transparency remain the ultimate green flags.`,
    category: 'Gen Z & Dating',
    author: {
      name: 'Maya Lin',
      role: 'Gen Z Relationship Writer',
      avatar: '/authors/maya.jpg',
    },
    publishedAt: '2026-07-12',
    readTime: '5 min read',
    tags: ['Gen Z', 'Dating', 'Situationships'],
  },

  // 5. Couples Advice
  {
    slug: 'rekindling-romance-for-long-term-couples',
    title: '5 Daily Connection Rituals to Rekindle Passion in Long-Term Relationships',
    excerpt: 'Simple psychological rituals and conversation decks to stay deeply connected despite busy schedules.',
    content: `Over time, routine can quietly replace romance. Building daily connection micro-moments restores intimacy.

### 1. The 10-Minute Morning Check-In
Ask one intentional question over morning coffee before diving into work or chores.

### 2. Weekly Intimacy Card Draw
Pick a quiet evening every Sunday to draw 3 cards from the 89 Intimacy Deck.`,
    category: 'Couples Advice',
    author: {
      name: 'Dr. Sarah Jenkins',
      role: 'Relationship Counselor',
      avatar: '/authors/sarah.jpg',
    },
    publishedAt: '2026-07-10',
    readTime: '6 min read',
    tags: ['Romance', 'Intimacy', 'Long-Term Love'],
  },

  // 6. Game Strategy
  {
    slug: 'the-art-of-asking-great-truth-or-dare-questions',
    title: 'The Art of Asking Great Truth or Dare Questions (Without Crossing Boundaries)',
    excerpt: 'How to curate party prompts that generate huge laughs while respecting everyone’s comfort levels.',
    content: `Truth or Dare is legendary because it balances vulnerability with hilarious actions.

### 1. Calibrate Difficulty by Group Dynamics
Always start with mild truths before escalating to spicy or daring rounds.

### 2. Establish a Clear Pass Rule
Give every player 1 "Pass Token" to maintain trust and ensure nobody feels forced.`,
    category: 'Game Strategy',
    author: {
      name: 'Marcus Vance',
      role: 'Event Host Specialist',
      avatar: '/authors/marcus.jpg',
    },
    publishedAt: '2026-07-08',
    readTime: '4 min read',
    tags: ['Truth or Dare', 'Party Games', 'Rules'],
  },

  // 7. Icebreakers & Social
  {
    slug: 'icebreaker-games-for-remote-work-teams',
    title: '12 Fun Virtual Icebreaker Games for Remote Zoom Meetings',
    excerpt: 'Boost team morale and eliminate awkward Zoom silences with fast, interactive card games.',
    content: `Remote meetings often lack natural watercooler chat. Structured icebreaker games restore team bonding.

### 1. Two Truths & A Lie Blitz
Spend 5 minutes at the start of team syncs letting one colleague present 3 quick statements.

### 2. Rapid Would You Rather Debates
Poll the entire team on silly work-friendly dilemmas like "Never use email again vs Never use Slack again".`,
    category: 'Icebreakers & Social',
    author: {
      name: 'David Ross',
      role: 'Corporate Culture Coach',
      avatar: '/authors/david.jpg',
    },
    publishedAt: '2026-07-05',
    readTime: '5 min read',
    tags: ['Remote Work', 'Icebreakers', 'Team Building'],
  },

  // 8. Couples Advice
  {
    slug: 'long-distance-relationship-date-ideas',
    title: 'How to Have Fun Virtual Date Nights in Long-Distance Relationships',
    excerpt: 'Creative video call date ideas, synchronized card games, and remote connection strategies.',
    content: `Distance doesn’t have to drain the spark out of your connection.

### 1. Synchronized Card Draws
Use Sparkers Long Distance Sync Deck during FaceTime calls so both partners draw from the same prompt deck in real-time.

### 2. Virtual Dinner & Movie Syncs
Cook the same recipe in your respective kitchens before sitting down for a digital candlelight dinner.`,
    category: 'Couples Advice',
    author: {
      name: 'Maya Lin',
      role: 'Relationship Writer',
      avatar: '/authors/maya.jpg',
    },
    publishedAt: '2026-07-03',
    readTime: '6 min read',
    tags: ['Long Distance', 'Virtual Date', 'Couples'],
  },

  // 9. Party Tips
  {
    slug: 'top-10-drinking-games-for-adult-game-nights',
    title: 'Top 10 Adult Drinking & Party Card Games for Unforgettable Gatherings',
    excerpt: 'Ranked guide to the funniest 21+ card games, rules, and hosting tips for weekend parties.',
    content: `Looking to elevate your weekend house party? Adult card games add instant energy and hilarity.

### 1. Never Have I Ever (Sip Edition)
Every finger lost equals a sip of your drink — instant conversation starter!

### 2. Most Likely To... Showdown
Point at the player most likely to get locked out of their own apartment!`,
    category: 'Party Tips',
    author: {
      name: 'Marcus Vance',
      role: 'Event Host Specialist',
      avatar: '/authors/marcus.jpg',
    },
    publishedAt: '2026-06-28',
    readTime: '7 min read',
    tags: ['Drinking Games', 'Adult Party', '21+'],
  },

  // 10. Game Strategy
  {
    slug: 'psychology-of-deep-questions-why-card-decks-work',
    title: 'The Science of Connection: Why Structured Conversation Cards Deepen Friendships',
    excerpt: 'Discover the psychological research behind vulnerability, active listening, and structured question decks.',
    content: `Psychological studies show that structured mutual vulnerability (like Arthur Aron's 36 Questions) accelerates trust.

### 1. Bypassing Small Talk Barriers
Pre-written card prompts reduce social anxiety because the card "asks" the question, not the individual.

### 2. Building Emotional Safety
Reciprocal sharing creates deep neural alignment and feelings of safety between friends and partners.`,
    category: 'Game Strategy',
    author: {
      name: 'Dr. Sarah Jenkins',
      role: 'Relationship Counselor',
      avatar: '/authors/sarah.jpg',
    },
    publishedAt: '2026-06-25',
    readTime: '8 min read',
    tags: ['Psychology', 'Communication', 'Connection'],
  },

  // 11. Gen Z & Dating
  {
    slug: 'first-date-questions-that-are-not-boring',
    title: '20 First Date Questions That Are Actually Fun (No Resume Interrogations)',
    excerpt: 'Ditch boring work questions and use engaging, playful icebreakers that spark real chemistry.',
    content: `Nobody wants a first date to feel like a job interview.

### 1. Ask Hypothetical Dilemmas
"If we had to escape a fake room escape in 10 minutes, what would your role be?"

### 2. Share Childhood Nostalgia
"What was your absolute favorite Saturday morning cartoon growing up?"`,
    category: 'Gen Z & Dating',
    author: {
      name: 'Maya Lin',
      role: 'Gen Z Relationship Writer',
      avatar: '/authors/maya.jpg',
    },
    publishedAt: '2026-06-20',
    readTime: '5 min read',
    tags: ['First Date', 'Icebreakers', 'Gen Z'],
  },

  // 12. Couples Questions
  {
    slug: 'would-you-rather-questions-for-couples',
    title: '100+ Best Would You Rather Questions for Couples (Fun, Deep & Spicy)',
    excerpt: 'The ultimate collection of Would You Rather questions designed specifically for couples to ignite conversation, laughter, and romance.',
    content: `Would You Rather is one of the most effective conversation starters for couples whether you have been dating for 3 months or married for 10 years.

### Fun & Lighthearted Questions
1. Would you rather have a surprise date night planned for you every week, or take one luxury vacation together every year?
2. Would you rather cook dinner together every night or have breakfast served in bed every weekend?
3. Would you rather binge-watch a mystery series or play competitive card games all night?

### Deep & Romantic Questions
1. Would you rather read each other's minds for one day or relive our favorite memory together?
2. Would you rather move to a new coastal town together or build our dream home in the city?

### How to Use This Prompt List
Draw cards from our online [Would You Rather Game Deck](/en/play/would-you-rather/) or [89 Intimacy Deck](/en/couples/deep-intimacy/) for instant interactive fun!`,
    category: 'Couples Advice',
    author: {
      name: 'Dr. Sarah Jenkins',
      role: 'Relationship Counselor',
      avatar: '/authors/sarah.jpg',
    },
    publishedAt: '2026-07-22',
    readTime: '6 min read',
    tags: ['Couples', 'Would You Rather', 'Date Night'],
  },

  // 13. Couples Confessions
  {
    slug: 'never-have-i-ever-questions-for-couples',
    title: '75 Never Have I Ever Questions for Couples (Uncover Fun Secrets)',
    excerpt: 'Fun, flirty, and surprising Never Have I Ever questions designed for partners and date nights.',
    content: `Never Have I Ever is not just for college parties — it is a fantastic way for couples to learn secret stories about each other's past.

### Lighthearted Couple Confessions
1. Never have I ever practiced what I was going to say before calling you.
2. Never have I ever worn your hoodie when you weren't looking.
3. Never have I ever accidentally bought a gift for you that I secretly wanted for myself.

### Flirty & Romantic Confessions
1. Never have I ever gotten butterflies watching you walk across a room.
2. Never have I ever planned our future home in my head during our early dates.

Play the interactive [Never Have I Ever Online Deck](/en/play/never-have-i-ever/) with finger counters!`,
    category: 'Couples Advice',
    author: {
      name: 'Maya Lin',
      role: 'Gen Z Relationship Writer',
      avatar: '/authors/maya.jpg',
    },
    publishedAt: '2026-07-21',
    readTime: '5 min read',
    tags: ['Never Have I Ever', 'Couples', 'Flirty'],
  },

  // 14. Deep Intimacy
  {
    slug: 'deep-questions-to-ask-your-partner',
    title: '50 Deep Questions to Ask Your Partner to Strengthen Your Emotional Bond',
    excerpt: 'Meaningful, psychology-backed questions to deepen intimacy, vulnerability, and mutual trust.',
    content: `Psychologists emphasize that emotional intimacy requires continuous curiosity about your partner's evolving inner world.

### Deep Intimacy Prompts
1. What is one goal you want us to accomplish together in the next 3 years?
2. When do you feel most safe, supported, and cherished by me?
3. What childhood memory shaped how you express love today?
4. What is a hidden dream you rarely voice out loud?

Explore the full 25-prompt [89 Intimacy & Soul Deck](/en/couples/deep-intimacy/) online for free!`,
    category: 'Couples Advice',
    author: {
      name: 'Dr. Sarah Jenkins',
      role: 'Relationship Counselor',
      avatar: '/authors/sarah.jpg',
    },
    publishedAt: '2026-07-23',
    readTime: '7 min read',
    tags: ['Intimacy', 'Deep Questions', 'Relationship Advice'],
  },
];
