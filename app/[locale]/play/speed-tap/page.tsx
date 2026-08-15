import { constructMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { SpeedTapGame } from '@/components/play/speed-tap-game';
import { getGameSchema, getHowToSchema } from '@/lib/seo/jsonld';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return constructMetadata({
    title: 'Party Speed Tap — Fast Tap Challenge Game | Sparkers Games',
    description: 'Tap as fast as you can before time runs out! A quick, hilarious party warm-up game for friends, teams, and group hangouts. No download, just tap.',
    path: '/play/speed-tap/',
    locale: resolvedParams.locale,
    ogImageSlug: 'play-speed-tap',
    keywords: ['speed tap', 'party game', 'tap challenge', 'group warm-up', 'party tap game'],
  });
}

export default async function SpeedTapPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const gameSchema = getGameSchema({
    name: 'Party Speed Tap',
    description: 'Tap as fast as you can before time runs out! A quick, hilarious party warm-up game for friends, teams, and group hangouts.',
    url: `/${locale}/play/speed-tap`,
    numberOfPlayers: '1-10+ Players',
    genre: 'Action & Party Warm-Up',
  });

  const howToSchema = getHowToSchema({
    name: 'How to Play Party Speed Tap',
    description: 'Rules for Party Speed Tap challenge game.',
    steps: [
      { name: 'Select Round Time', text: 'Choose 10s, 15s, or 30s round length.' },
      { name: 'Countdown', text: 'Wait for 3-2-1-GO animation.' },
      { name: 'Tap Fast', text: 'Tap the screen as fast as possible before timer reaches 0.' },
      { name: 'Pass Phone', text: 'Compare score titles and pass phone to the next player.' },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Play Platform', url: `/${locale}/play` },
          { name: 'Party Speed Tap', url: `/${locale}/play/speed-tap` },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <SpeedTapGame />
      </div>
    </>
  );
}
