'use client';

import * as React from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PlayHero } from '@/components/play/play-hero';
import { PlayFilters } from '@/components/play/play-filters';
import { GameGrid } from '@/components/play/game-grid';
import { PLAY_GAMES, PartyGame } from '@/lib/data/play-games';

export default function PlayPlatformPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams.locale;

  const [activeAudience, setActiveAudience] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredGames = PLAY_GAMES.filter((game) => {
    const matchesAudience =
      activeAudience === 'all' ||
      game.audience.includes(activeAudience as PartyGame['audience'][number]);
    const matchesSearch =
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesAudience && matchesSearch;
  });

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Play Platform', url: `/${locale}/play` },
        ]}
      />

      
        <PlayHero gameCount={PLAY_GAMES.length} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <PlayFilters
            activeAudience={activeAudience}
            searchQuery={searchQuery}
            onAudienceChange={setActiveAudience}
            onSearchChange={setSearchQuery}
          />

          <GameGrid games={filteredGames} locale={locale} />
        </div>
      
    </>
  );
}
