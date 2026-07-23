import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Gamepad2, Heart, Sparkles, Flame } from 'lucide-react';

export function FeaturedGames({ locale }: { locale: string }) {
  const games = [
    {
      id: 'truth-or-dare',
      title: 'Truth or Dare Classic',
      description: 'Over 320+ dares and deep truths designed for parties and icebreakers.',
      category: 'Party Games',
      audience: 'Friends & Party',
      variant: 'play' as const,
      icon: <Gamepad2 className="w-5 h-5 text-indigo-500" />,
      href: `/${locale}/play/truth-or-dare`,
      badge: 'Popular',
      image: '/images/teens-party.jpg',
      imageAlt: 'Teens playing truth or dare at a party',
    },
    {
      id: 'deep-intimacy',
      title: '89 Intimacy Deck',
      description: 'Targeted deep conversation starters built for partners and married couples.',
      category: 'Couples Hub',
      audience: 'Couples',
      variant: 'couples' as const,
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      href: `/${locale}/couples/deep-intimacy`,
      badge: 'Trending',
      image: '/images/couples-deck.jpg',
      imageAlt: 'Romantic couple playing couples card game',
    },
    {
      id: 'never-have-i-ever',
      title: 'Never Have I Ever',
      description: 'Interactive group voting with randomizer and filter controls.',
      category: 'Party Games',
      audience: 'Teens & Adults',
      variant: 'play' as const,
      icon: <Flame className="w-5 h-5 text-amber-500" />,
      href: `/${locale}/play/never-have-i-ever`,
      badge: 'Classic',
      image: '/images/hero-party-group.jpg',
      imageAlt: 'Friends playing never have I ever',
    },
    {
      id: 'would-you-rather',
      title: 'Would You Rather?',
      description: 'Hilarious & impossible dilemmas for friendly debates.',
      category: 'Party Games',
      audience: 'All Ages',
      variant: 'default' as const,
      icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
      href: `/${locale}/play/would-you-rather`,
      badge: 'Interactive',
      image: '/images/office-team.jpg',
      imageAlt: 'Office team playing would you rather',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
        <div>
          <Badge variant="default" className="mb-2">Featured Collection</Badge>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Flagship Game Decks
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Instant digital card decks prepped for desktop, tablet, and mobile.
          </p>
        </div>
        <Link href={`/${locale}/play`}>
          <Button variant="outline" size="sm">View All 89+ Decks</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <Card key={game.id} variant={game.variant} className="flex flex-col justify-between overflow-hidden">
            {/* Game Image */}
            <div className="relative w-full h-36 overflow-hidden">
              <Image
                src={game.image}
                alt={game.imageAlt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-2 right-2">
                <Badge variant={game.variant === 'couples' ? 'couples' : 'play'}>
                  {game.badge}
                </Badge>
              </div>
            </div>

            <CardHeader className="pt-4">
              <div className="flex items-center gap-2">
                {game.icon}
                <CardTitle className="text-base">{game.title}</CardTitle>
              </div>
              <CardDescription>{game.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                Audience: {game.audience}
              </span>
            </CardContent>

            <CardFooter>
              <Link href={game.href} className="w-full">
                <Button
                  size="sm"
                  variant={game.variant === 'couples' ? 'couples' : 'play'}
                  className="w-full"
                >
                  Play Deck Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
