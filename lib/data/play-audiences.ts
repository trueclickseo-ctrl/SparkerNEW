import { PartyGame } from './play-games';

export interface AudienceCategory {
  id: string;
  aliases?: string[];
  label: string;
  title: string;
  description: string;
  keywords: string[];
  filterAudience: PartyGame['audience'][number];
}

export const AUDIENCE_CATEGORIES: AudienceCategory[] = [
  {
    id: 'office',
    aliases: ['games-for-office'],
    label: 'Office Teams',
    title: 'Office Team Party Games & Workplace Icebreakers | Sparkers Games',
    description: 'Free office team building card games, meeting icebreakers, and work-friendly party games. Play instant corporate decks online with no downloads.',
    keywords: ['office icebreakers', 'team building games', 'workplace icebreakers', 'corporate party games', 'office party games'],
    filterAudience: 'office',
  },
  {
    id: 'kids',
    aliases: ['games-for-kids'],
    label: 'Kids & Family',
    title: 'Kids & Family Party Card Games — Free Online Decks | Sparkers Games',
    description: 'Clean, fun, family-friendly card games and icebreakers for kids, parents, and classrooms. Play online instantly without sign-up.',
    keywords: ['kids party games', 'family game night', 'clean icebreakers', 'family card games'],
    filterAudience: 'kids',
  },
  {
    id: 'teens',
    aliases: ['games-for-teens'],
    label: 'Teens',
    title: 'Party Games for Teens & Youth Groups | Sparkers Games',
    description: 'Engaging, fun party games and icebreakers for teens, student groups, and birthday hangouts. Truth or Dare, Charades, and Would You Rather.',
    keywords: ['teen party games', 'youth group games', 'high school icebreakers', 'teen games'],
    filterAudience: 'teens',
  },
  {
    id: 'party',
    aliases: ['games-for-friends', 'games-for-couples'],
    label: 'Party & Friends',
    title: 'Party Games for Friends & Group Hangouts | Sparkers Games',
    description: 'Ultimate group party games, icebreaker decks, and conversation starters for game nights and weekend hangouts.',
    keywords: ['party games for friends', 'group party games', 'adult game night', 'icebreaker cards'],
    filterAudience: 'party',
  },
  {
    id: 'drinking',
    aliases: ['drinking-games'],
    label: 'Drinking (21+)',
    title: '21+ Adult Drinking Party Card Games | Sparkers Games',
    description: 'Spicy adult party games, Never Have I Ever, and drinking card decks for game nights (21+).',
    keywords: ['drinking games', '21+ party games', 'adult game night', 'never have i ever drinking'],
    filterAudience: 'drinking',
  },
  {
    id: 'large-groups',
    label: 'Large Groups (8+)',
    title: 'Party Games for Large Groups & Big Parties | Sparkers Games',
    description: 'High-energy party games designed for 8+ players, large crowds, and social gatherings.',
    keywords: ['large group party games', 'big group icebreakers', 'crowd party games'],
    filterAudience: 'large-groups',
  },
  {
    id: 'small-groups',
    aliases: ['date-night-games'],
    label: 'Small Groups (2-4)',
    title: 'Small Group & Couples Party Card Games | Sparkers Games',
    description: 'Intimate conversation starters and small group party games for 2 to 4 players.',
    keywords: ['small group games', 'couples party games', '2 player card games'],
    filterAudience: 'small-groups',
  },
];

export function findAudienceCategory(slug: string): AudienceCategory | undefined {
  return AUDIENCE_CATEGORIES.find(
    (aud) => aud.id === slug || (aud.aliases && aud.aliases.includes(slug))
  );
}
