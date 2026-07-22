export interface PhysicalCardProduct {
  id: string;
  title: string;
  subtitle: string;
  cardCount: number;
  badge?: string;
  merchant: 'AMAZON' | 'SPARKERS OFFICIAL' | 'BESTSELF' | 'TALES';
  price: string;
  rating: number;
  reviewCount: string;
  description: string;
  imageBgColor: string;
  accentColor: string;
  amazonUrl: string;
  category: 'couples' | 'party' | 'family' | 'icebreaker' | 'deep';
  tags: string[];
  cardsInside: string[];
}

export const PHYSICAL_CARD_DECKS: PhysicalCardProduct[] = [
  {
    id: 'better-together-100',
    title: 'BETTER TOGETHER',
    subtitle: '100 Conversation Cards',
    cardCount: 100,
    badge: 'TOP PICK',
    merchant: 'AMAZON',
    price: '$24.99',
    rating: 4.8,
    reviewCount: '10K+',
    description: 'Trusted by 10K+ couples. A balanced mix of playful icebreakers and vulnerable deep-dives for intimate relationship bonding.',
    imageBgColor: 'bg-rose-500',
    accentColor: 'border-rose-400 text-rose-600',
    amazonUrl: 'https://amazon.com',
    category: 'couples',
    tags: ['Couples', 'Deep Intimacy', 'Best Seller'],
    cardsInside: [
      'What was the exact moment you knew you were in love with me?',
      'What is one secret dream for our future you have never shared out loud?',
      'What small daily ritual of ours brings you the most comfort?',
      'If we could travel anywhere in the world tomorrow, where would we land?',
      'How has our relationship changed the way you view long-term love?',
    ],
  },
  {
    id: 'bestself-intimacy-170',
    title: 'BestSelf Intimacy Deck',
    subtitle: '170 Prompts',
    cardCount: 170,
    badge: 'POPULAR',
    merchant: 'AMAZON',
    price: '$29.99',
    rating: 4.9,
    reviewCount: '200K+',
    description: '170 cards in 7 categories. Loved by 200K couples — premium soft-touch cardstock, gift-friendly luxury packaging.',
    imageBgColor: 'bg-red-600',
    accentColor: 'border-red-500 text-red-600',
    amazonUrl: 'https://amazon.com',
    category: 'couples',
    tags: ['Intimacy', 'Gift Favorite', 'Deep Talk'],
    cardsInside: [
      'How do we work well together and balance each other out?',
      'What is one physical touch or gesture that instantly calms you down?',
      'What memory of us together always brings a smile to your face?',
      'What is a new adventure or hobby you want us to tackle this year?',
      'What compliment from me means the absolute most to you?',
    ],
  },
  {
    id: 'tales-couples-150',
    title: 'TALES Couples Edition',
    subtitle: '150 Cards',
    cardCount: 150,
    badge: 'TRENDING',
    merchant: 'AMAZON',
    price: '$22.50',
    rating: 4.7,
    reviewCount: '15K+',
    description: 'Conversation starters built for rediscovering each other on quiet nights in, cozy date nights, and road trips.',
    imageBgColor: 'bg-fuchsia-600',
    accentColor: 'border-fuchsia-500 text-fuchsia-600',
    amazonUrl: 'https://amazon.com',
    category: 'couples',
    tags: ['Cozy Date Night', 'Storytelling', 'Fun'],
    cardsInside: [
      'When did you realize that you were in love with me?',
      'If our relationship had a theme song, what track would it be?',
      'What was your very first impression of my personality?',
      'What is the funniest thing that has ever happened to us on a date?',
      'What is one thing I do that makes you feel deeply appreciated?',
    ],
  },
  {
    id: 'sparkers-89-pillar-edition',
    title: 'SPARKERS 89 Intimacy Framework',
    subtitle: '89 Master Cards',
    cardCount: 89,
    badge: 'SPARKERS ORIGINAL',
    merchant: 'SPARKERS OFFICIAL',
    price: '$27.00',
    rating: 5.0,
    reviewCount: '50K+',
    description: 'Our flagship 89-card psychological prompt framework engineered for deep soul connection, vulnerable talks, and lasting alignment.',
    imageBgColor: 'bg-purple-600',
    accentColor: 'border-purple-500 text-purple-600',
    amazonUrl: 'https://amazon.com',
    category: 'deep',
    tags: ['Flagship', '89 Framework', 'Psychology Backed'],
    cardsInside: [
      'How has our partnership helped you grow into the person you are today?',
      'What is an unhealed part of your past that I can better support you with?',
      'What is your biggest fear regarding our future, and how can we solve it together?',
      'What is the most meaningful promise we have ever made to one another?',
      'When you look at me across a crowded room, what is the first thought that enters your mind?',
    ],
  },
  {
    id: 'gen-z-vibe-check-deck',
    title: 'GEN Z Vibe Check & Red Flags',
    subtitle: '120 Cards',
    cardCount: 120,
    badge: 'GEN Z HOT PICK',
    merchant: 'AMAZON',
    price: '$19.99',
    rating: 4.9,
    reviewCount: '45K+',
    description: 'Unfiltered Gen Z prompts about icks, green flags, situationships, main character energy, and late night FaceTime talks.',
    imageBgColor: 'bg-pink-600',
    accentColor: 'border-pink-500 text-pink-600',
    amazonUrl: 'https://amazon.com',
    category: 'party',
    tags: ['Gen Z', 'Situationship', 'Red Flags', 'Funny'],
    cardsInside: [
      'What was your biggest initial green flag or instant ick about me?',
      'When did you officially realize we were no longer just a situationship?',
      'Which song on my playlist screams "main character energy" to you?',
      'Who in our friend group has the most chaotic dating energy?',
      'What is the most unhinged late-night text you have ever sent or received?',
    ],
  },
  {
    id: 'truth-or-dare-night-edition',
    title: 'TRUTH OR DARE After Dark',
    subtitle: '110 Cards',
    cardCount: 110,
    badge: 'PARTY FAVORITE',
    merchant: 'AMAZON',
    price: '$21.99',
    rating: 4.8,
    reviewCount: '80K+',
    description: 'The classic game reimagined into a luxury physical card box for house parties, game nights, and late-night social gatherings.',
    imageBgColor: 'bg-amber-600',
    accentColor: 'border-amber-500 text-amber-600',
    amazonUrl: 'https://amazon.com',
    category: 'party',
    tags: ['Party Game', 'Adults Only', 'Dares'],
    cardsInside: [
      'TRUTH: What is the most embarrassing assumption someone has ever made about you?',
      'DARE: Let the person to your left send a 3-word text message to anyone in your contacts.',
      'TRUTH: Have you ever lied to get out of a party or social obligation?',
      'DARE: Do your best 30-second impression of another player in the room.',
      'TRUTH: What is one secret talent you possess that nobody here knows about?',
    ],
  },
];
