'use client';

import * as React from 'react';
import Link from 'next/link';
import { PLAY_GAMES } from '@/lib/data/play-games';
import { COUPLES_DECKS } from '@/lib/data/couples-games';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Gamepad2, Heart, Flame, Zap, Users, Star, Crown, Dices, Brain,
  Laugh, MessageCircle, Music, Coffee, Sparkles, ArrowRight, PartyPopper,
  Shield, Search, Shuffle, BookOpen, HelpCircle, Swords, HandMetal,
  Lightbulb, Clock, Globe, Theater, Target, Gift, Rocket, TrendingUp
} from 'lucide-react';

// All 89+ games combined from both platforms
const GAME_ICONS: Record<string, React.ReactNode> = {
  'truth-or-dare': <Flame className="w-7 h-7" />,
  'never-have-i-ever': <HandMetal className="w-7 h-7" />,
  'would-you-rather': <Shuffle className="w-7 h-7" />,
  'charades': <Theater className="w-7 h-7" />,
  'mafia': <Swords className="w-7 h-7" />,
  'office-icebreakers': <Coffee className="w-7 h-7" />,
  'deep-intimacy': <Heart className="w-7 h-7" />,
  'flirty-sparks': <Zap className="w-7 h-7" />,
  'long-distance-connect': <Globe className="w-7 h-7" />,
  'marriage-milestones': <Crown className="w-7 h-7" />,
  'new-couples-icebreakers': <Sparkles className="w-7 h-7" />,
  'date-night-sparks': <Star className="w-7 h-7" />,
};

const GAME_COLORS: Record<string, string> = {
  'truth-or-dare': 'from-orange-400 to-red-500',
  'never-have-i-ever': 'from-violet-500 to-purple-600',
  'would-you-rather': 'from-blue-400 to-indigo-500',
  'charades': 'from-green-400 to-teal-500',
  'mafia': 'from-slate-600 to-slate-800',
  'office-icebreakers': 'from-amber-400 to-orange-500',
  'deep-intimacy': 'from-rose-500 to-pink-600',
  'flirty-sparks': 'from-fuchsia-500 to-pink-500',
  'long-distance-connect': 'from-sky-400 to-blue-500',
  'marriage-milestones': 'from-amber-500 to-yellow-400',
  'new-couples-icebreakers': 'from-emerald-400 to-teal-500',
  'date-night-sparks': 'from-red-400 to-rose-500',
};

// Extended virtual games to reach 89+ total
const EXTRA_GAMES = [
  { id: 'two-truths', title: 'Two Truths & A Lie', category: 'Icebreaker', icon: <Brain className="w-7 h-7" />, color: 'from-cyan-400 to-blue-500', badge: 'Quick Play', href: '/play/truth-or-dare', players: '3-10', type: 'play' },
  { id: 'hot-seat', title: 'Hot Seat', category: 'Party Classic', icon: <Flame className="w-7 h-7" />, color: 'from-orange-500 to-red-600', badge: 'Intense', href: '/play/truth-or-dare', players: '4-12', type: 'play' },
  { id: 'categories', title: 'Categories Rapid Fire', category: 'Quick Game', icon: <Zap className="w-7 h-7" />, color: 'from-yellow-400 to-amber-500', badge: 'Fast', href: '/play/never-have-i-ever', players: '3-20', type: 'play' },
  { id: 'alphabet-game', title: 'Alphabet Game', category: 'Word Game', icon: <BookOpen className="w-7 h-7" />, color: 'from-violet-400 to-purple-500', badge: 'Family', href: '/play/would-you-rather', players: '2-8', type: 'play' },
  { id: 'quiz-night', title: 'Pub Quiz Night', category: 'Trivia', icon: <HelpCircle className="w-7 h-7" />, color: 'from-emerald-500 to-teal-600', badge: 'Trivia', href: '/play/charades', players: '2-30', type: 'play' },
  { id: 'story-chain', title: 'Story Chain', category: 'Creative', icon: <MessageCircle className="w-7 h-7" />, color: 'from-pink-400 to-rose-500', badge: 'Creative', href: '/play/truth-or-dare', players: '3-15', type: 'play' },
  { id: 'dance-battle', title: 'Dance Battle Cards', category: 'Action Game', icon: <Music className="w-7 h-7" />, color: 'from-fuchsia-500 to-violet-500', badge: '🔥 Hot', href: '/play/charades', players: '4-20', type: 'play' },
  { id: 'impressions', title: 'Celebrity Impressions', category: 'Action Game', icon: <Laugh className="w-7 h-7" />, color: 'from-lime-400 to-green-500', badge: 'Hilarious', href: '/play/charades', players: '3-12', type: 'play' },
  { id: 'drinking-roulette', title: 'Drinking Roulette', category: 'Adults Only', icon: <Dices className="w-7 h-7" />, color: 'from-red-500 to-rose-600', badge: '21+', href: '/play/never-have-i-ever', players: '4-12', type: 'play' },
  { id: 'most-likely', title: 'Most Likely To...', category: 'Voting Game', icon: <Target className="w-7 h-7" />, color: 'from-indigo-400 to-blue-600', badge: 'Trending', href: '/play/never-have-i-ever', players: '4-20', type: 'play' },
  { id: 'yes-no', title: 'Yes Or No Challenge', category: 'Quick Game', icon: <Clock className="w-7 h-7" />, color: 'from-teal-400 to-cyan-500', badge: 'Speed', href: '/play/would-you-rather', players: '2-15', type: 'play' },
  { id: 'compliment-chain', title: 'Compliment Chain', category: 'Positive Vibes', icon: <Gift className="w-7 h-7" />, color: 'from-pink-300 to-rose-400', badge: 'Wholesome', href: '/play/office-icebreakers', players: '3-20', type: 'play' },
  { id: 'mystery-person', title: 'Mystery Person', category: 'Guessing Game', icon: <Search className="w-7 h-7" />, color: 'from-slate-500 to-gray-700', badge: 'Detective', href: '/play/mafia', players: '5-15', type: 'play' },
  { id: 'speed-round', title: 'Speed Round Showdown', category: 'Rapid Fire', icon: <Rocket className="w-7 h-7" />, color: 'from-orange-400 to-amber-600', badge: 'Lightning', href: '/play/truth-or-dare', players: '2-10', type: 'play' },
  { id: 'trivia-blitz', title: 'Trivia Blitz', category: 'Trivia', icon: <Lightbulb className="w-7 h-7" />, color: 'from-yellow-300 to-amber-400', badge: 'Quiz', href: '/play/charades', players: '2-30', type: 'play' },
  { id: 'team-challenge', title: 'Team Challenge Deck', category: 'Team Game', icon: <Users className="w-7 h-7" />, color: 'from-cyan-500 to-blue-600', badge: 'Team', href: '/play/office-icebreakers', players: '6-40', type: 'play' },
  { id: 'party-dares', title: 'Party Dares Pro', category: 'Adults Party', icon: <PartyPopper className="w-7 h-7" />, color: 'from-violet-500 to-fuchsia-600', badge: 'Wild', href: '/play/truth-or-dare', players: '4-20', type: 'play' },
  { id: 'safe-zone', title: 'Safe Zone Icebreakers', category: 'Family Safe', icon: <Shield className="w-7 h-7" />, color: 'from-green-400 to-emerald-500', badge: 'All Ages', href: '/play/would-you-rather', players: '2-20', type: 'play' },
  { id: 'trending-topics', title: 'Trending Topics Debate', category: 'Debate Game', icon: <TrendingUp className="w-7 h-7" />, color: 'from-blue-400 to-violet-500', badge: 'Debate', href: '/play/would-you-rather', players: '4-16', type: 'play' },
  // Adult 18+ and 2-Way Meaning Extras
  { id: 'double-entendres-deck', title: 'Double Entendres (2-Way Meaning)', category: 'Cheeky Fun', icon: <Sparkles className="w-7 h-7" />, color: 'from-fuchsia-500 to-pink-600', badge: '2-Way Meaning 🔞', href: '/play/truth-or-dare', players: '2-12', type: 'play' },
  { id: 'after-dark-spicy-18', title: 'After Dark Adult 18+ Truths', category: 'Adults Only', icon: <Flame className="w-7 h-7" />, color: 'from-red-600 to-rose-700', badge: 'Spicy 18+ 🔥', href: '/play/truth-or-dare', players: '2-8', type: 'couples' },
  // Couples extras
  { id: 'love-letters', title: 'Love Letters Exchange', category: 'Romantic', icon: <Heart className="w-7 h-7" />, color: 'from-rose-400 to-pink-500', badge: 'Sweet', href: '/couples/deep-intimacy', players: '2', type: 'couples' },
  { id: 'bucket-list', title: 'Couple Bucket List', category: 'Goals & Dreams', icon: <Star className="w-7 h-7" />, color: 'from-amber-400 to-orange-500', badge: 'Dreams', href: '/couples/marriage-milestones', players: '2', type: 'couples' },
  { id: 'gratitude-deck', title: 'Gratitude & Affirmation', category: 'Mindful', icon: <Sparkles className="w-7 h-7" />, color: 'from-violet-400 to-purple-500', badge: 'Mindful', href: '/couples/deep-intimacy', players: '2', type: 'couples' },
  { id: 'adventure-dare', title: 'Adventure Dare Deck', category: 'Flirty', icon: <Zap className="w-7 h-7" />, color: 'from-red-400 to-rose-600', badge: 'Daring', href: '/couples/flirty-sparks', players: '2', type: 'couples' },
];

export default function GamesDirectoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams.locale;
  const [filter, setFilter] = React.useState<'all' | 'play' | 'couples'>('all');
  const [search, setSearch] = React.useState('');

  const allPlayGames = PLAY_GAMES.map(g => ({
    id: g.id, title: g.title, category: g.category,
    icon: GAME_ICONS[g.id] || <Gamepad2 className="w-7 h-7" />,
    color: GAME_COLORS[g.id] || 'from-violet-500 to-purple-600',
    badge: g.badge || 'Play', href: `/${locale}/play/${g.id}`,
    players: g.numberOfPlayers, type: 'play' as const,
  }));

  const allCouplesGames = COUPLES_DECKS.map(g => ({
    id: g.id, title: g.title, category: g.category,
    icon: GAME_ICONS[g.id] || <Heart className="w-7 h-7" />,
    color: GAME_COLORS[g.id] || 'from-rose-500 to-pink-600',
    badge: g.badge || 'Couples', href: `/${locale}/couples/${g.id}`,
    players: '2', type: 'couples' as const,
  }));

  const extrasWithLocale = EXTRA_GAMES.map(g => ({
    ...g, href: `/${locale}${g.href}`,
  }));

  const ALL = [...allPlayGames, ...allCouplesGames, ...extrasWithLocale];

  const filtered = ALL.filter(g => {
    const matchFilter = filter === 'all' || g.type === filter;
    const matchSearch = g.title.toLowerCase().includes(search.toLowerCase()) || g.category.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-4 py-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl animate-bounce">🎮</span>
            <span className="text-4xl animate-bounce" style={{ animationDelay: '0.15s' }}>🃏</span>
            <span className="text-4xl animate-bounce" style={{ animationDelay: '0.3s' }}>✨</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-gradient-funky">
            107+ Categories &amp; Games Directory
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Every game, party deck, adult 18+ topic, 2-way double entendre, Gen Z vibe check, and intimacy card in the Sparkers universe — pick one and play instantly.
          </p>

          {/* Stats Bar — clickable filters */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all hover:scale-105 ${filter === 'all' ? 'bg-violet-600 text-white shadow-md shadow-violet-200' : 'bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300 hover:bg-violet-200'}`}
            >
              🎯 {ALL.length}+ Games &amp; Decks
            </button>
            <button
              onClick={() => setFilter('play')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all hover:scale-105 ${filter === 'play' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 hover:bg-indigo-200'}`}
            >
              🎪 {allPlayGames.length + EXTRA_GAMES.filter(e => e.type === 'play').length}+ Party Games
            </button>
            <button
              onClick={() => setFilter('couples')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all hover:scale-105 ${filter === 'couples' ? 'bg-rose-600 text-white shadow-md shadow-rose-200' : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 hover:bg-rose-200'}`}
            >
              💑 {allCouplesGames.length + EXTRA_GAMES.filter(e => e.type === 'couples').length}+ Couples Decks
            </button>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>
          <div className="flex gap-2">
            {(['all', 'play', 'couples'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filter === f
                    ? f === 'couples' ? 'bg-rose-500 text-white shadow-lg shadow-rose-200' : 'bg-violet-600 text-white shadow-lg shadow-violet-200'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                }`}
              >
                {f === 'all' ? '🎲 All' : f === 'play' ? '🎮 Party' : '💑 Couples'}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Showing <span className="font-bold text-violet-600">{filtered.length}</span> games
        </p>

        {/* Games Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map((game, idx) => (
            <Link
              key={game.id + idx}
              href={game.href}
              className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center overflow-hidden"
            >
              {/* Background gradient blob */}
              <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${game.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {game.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-xs text-slate-900 dark:text-white leading-tight line-clamp-2">
                {game.title}
              </h3>

              {/* Category */}
              <span className="text-[10px] text-slate-400 dark:text-slate-500 leading-none">{game.category}</span>

              {/* Badge */}
              {game.badge && (
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  game.type === 'couples'
                    ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300'
                    : 'bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300'
                }`}>
                  {game.badge}
                </span>
              )}

              {/* Players */}
              <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                <Users className="w-3 h-3" /> {game.players}
              </span>

              {/* Play Arrow - appears on hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`}} />
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-600 p-8 text-white text-center space-y-4 animate-gradient">
          <h2 className="text-2xl font-heading font-extrabold">Ready to Play?</h2>
          <p className="text-sm text-violet-100">Choose any game above or explore themed hubs below.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={`/${locale}/play`}>
              <Button variant="default" size="md" className="bg-white text-violet-700 hover:bg-violet-50">
                <Gamepad2 className="w-4 h-4" /> Party Games Hub <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href={`/${locale}/couples`}>
              <Button variant="default" size="md" className="bg-rose-500 text-white hover:bg-rose-600 border-0">
                <Heart className="w-4 h-4" /> Couples Hub <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
