export interface CouplesDeck {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 
    | 'romantic' 
    | 'flirty' 
    | 'deep' 
    | 'marriage' 
    | 'long-distance' 
    | 'date-night' 
    | 'new-couples'
    | 'gen-z'
    | 'romantic-stories'
    | 'spicy-teasers'
    | 'deep-questions'
    | 'compatibility';
  intimacyLevel: 'Mild' | 'Medium' | 'Deep' | 'Spicy';
  promptCount: number;
  badge?: string;
  samplePrompts: string[];
}

export const COUPLES_DECKS: CouplesDeck[] = [
  // 1. Deep Intimacy
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
  // 2. Flirty Sparks
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
  // 3. Romantic Decks & Love Connection
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
  // 4. Gen Z Vibe & Situationships (NEW GEN Z FOCUS)
  {
    id: 'gen-z-vibe-check',
    title: 'Gen Z Vibe Check & Red Flags',
    shortDescription: 'Unfiltered, hilarious Gen Z prompts about green flags, situationships, and soft-launching.',
    fullDescription: 'Built specifically for Gen Z couples and dating! Real talk on icks, roster dating, main character energy, and defining the relationship.',
    category: 'gen-z',
    intimacyLevel: 'Medium',
    promptCount: 95,
    badge: 'Gen Z Pick 🔥',
    samplePrompts: [
      'What was your biggest initial green flag or instant ick about me?',
      'When did you officially realize we were no longer just a situationship?',
      'Which song on my playlist screams "main character energy" to you?',
    ],
  },
  // 5. Gen Z Late Night Texts (NEW GEN Z FOCUS)
  {
    id: 'gen-z-late-night-talks',
    title: 'Late Night Delirious Talks',
    shortDescription: '3 AM chaotic, deep, and aesthetic questions for late-night call sessions.',
    fullDescription: 'For late-night FaceTime calls or pillow talk. Weird hypothetical dilemmas, aesthetic vibes, and vulnerability.',
    category: 'gen-z',
    intimacyLevel: 'Deep',
    promptCount: 80,
    badge: 'Night Owl 🌙',
    samplePrompts: [
      'If we survived an apocalypse together, what role would each of us play?',
      'What is the most niche hyperfixation of mine that you secretly love?',
      'If our couple aesthetic was a Pinterest board, what 3 photos would be on it?',
    ],
  },
  // 6. Romantic Stories & Lore (NEW ROMANTIC STORIES FOCUS)
  {
    id: 'romantic-story-prompts',
    title: 'Our Romantic Love Story & Lore',
    shortDescription: 'Nostalgic prompts to retell your meet-cute, first kiss, and romantic milestones.',
    fullDescription: 'Take turns storytelling the chapters of your love story! Revisit how you met, your favorite date, and funniest couple lore.',
    category: 'romantic-stories',
    intimacyLevel: 'Medium',
    promptCount: 90,
    badge: 'Love Lore 📖',
    samplePrompts: [
      'Describe our very first kiss from your perspective in vivid detail.',
      'What was the most romantic date night story we have ever created together?',
      'What is the funniest plot twist or unexpected challenge in our love story?',
    ],
  },
  // 7. Midnight Confessions (NEW ROMANTIC STORIES FOCUS)
  {
    id: 'romantic-midnight-confessions',
    title: 'Midnight Romantic Confessions',
    shortDescription: 'Sweet whispers, hidden feelings, and emotional confessions for intimate nights.',
    fullDescription: 'Uncover the romantic thoughts your partner had before you were official. Heartwarming and tender bonding prompts.',
    category: 'romantic-stories',
    intimacyLevel: 'Deep',
    promptCount: 85,
    badge: 'Heartfelt 💕',
    samplePrompts: [
      'What was a secret thought you had about me before we started dating?',
      'When do you feel most loved and cherished by me in our day-to-day life?',
      'What is a romantic surprise you have always wanted us to do together?',
    ],
  },
  // 8. Long Distance Sync
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
  // 9. Marriage & Milestones
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
  // 10. New Couples Starters
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
  // 11. Date Night Companion
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
  // 12. Spicy Teasers & Chemistry (NEW ADDITIONAL CATEGORY)
  {
    id: 'spicy-teasers-after-dark',
    title: 'After Dark Spicy Chemistry',
    shortDescription: 'Sensual, flirty, and daring prompts to turn up the heat between partners.',
    fullDescription: 'Designed for couples looking to explore physical intimacy, fantasies, and playful bedroom banter.',
    category: 'spicy-teasers',
    intimacyLevel: 'Spicy',
    promptCount: 100,
    badge: 'Spicy 18+ 🔥',
    samplePrompts: [
      'Where is your favorite place on your body to be kissed or touched gently?',
      'If we could play out one secret romantic fantasy tonight, what would it be?',
      'What whisper in your ear turns you on the fastest?',
    ],
  },
  // 13. Future Goals & Compatibility (NEW ADDITIONAL CATEGORY)
  {
    id: 'couple-compatibility-check',
    title: 'Couple Life Goals & Alignment',
    shortDescription: 'Align your future vision: travel, lifestyle, finances, and shared dreams.',
    fullDescription: 'Assess how compatible your long-term goals are in a fun, non-judgmental card game format.',
    category: 'compatibility',
    intimacyLevel: 'Deep',
    promptCount: 75,
    badge: 'Life Goals 🎯',
    samplePrompts: [
      'What does our ideal dream home look like 10 years from now?',
      'How do we handle stress or big financial decisions as a team?',
      'What is one bucket list country we must explore together before 30?',
    ],
  },
];
