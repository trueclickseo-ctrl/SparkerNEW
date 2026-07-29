export type GameContentType =
  | 'pillar'
  | 'category'
  | 'audience'
  | 'theme'
  | 'occasion'
  | 'difficulty'
  | 'rules'
  | 'printable'
  | 'generator'
  | 'faq'
  | 'guide'
  | 'history'
  | 'strategy'
  | 'blog';

export interface SeoPrompt {
  text: string;
  context?: string;
}

export interface SeoFAQ {
  question: string;
  answer: string;
}

export interface SeoRelatedLink {
  title: string;
  url: string;
  category?: string;
}

export interface SeoEntityModel {
  id: string;
  path: string; // URL Normalization (lowercase, hyphenated, single trailing slash)
  contentType: GameContentType;
  game: string; // e.g. "charades"
  title: string;
  h1: string;
  introduction: string;
  
  // Entity Attributes
  audience?: 'kids' | 'teens' | 'couples' | 'friends' | 'office' | 'classroom' | 'church' | 'large-groups' | 'small-groups';
  theme?: string;
  occasion?: string;
  difficulty?: 'easy' | 'medium' | 'hard' | 'impossible' | 'one-word';
  intent?: 'ideas' | 'questions' | 'rules' | 'examples' | 'generator' | 'printable' | 'cards' | 'history' | 'guide' | 'tips' | 'strategy' | 'pdf';
  ageGroup?: string;
  playerCount?: string;
  duration?: string;
  indoorOutdoor?: 'indoor' | 'outdoor' | 'both';
  competitiveCooperative?: 'competitive' | 'cooperative' | 'both';
  season?: string;
  mood?: string;
  energyLevel?: 'low' | 'medium' | 'high';
  skillLevel?: 'beginner' | 'intermediate' | 'advanced';
  equipmentNeeded?: string;
  language?: string;
  searchPriority?: number;

  // Content Blocks
  prompts: SeoPrompt[];
  rules: string[];
  tips: string[];
  faqs: SeoFAQ[];
  history?: string;
  strategy?: string;

  // EEAT Signals
  author: {
    name: string;
    role: string;
    avatar?: string;
    bio?: string;
  };
  reviewedBy?: {
    name: string;
    role: string;
    bio?: string;
  };
  lastUpdated: string;
  sources?: { title: string; url: string }[];
}
