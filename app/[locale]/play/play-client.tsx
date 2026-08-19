'use client';

import * as React from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PlayHero } from '@/components/play/play-hero';
import { PlayFilters } from '@/components/play/play-filters';
import { GameGrid } from '@/components/play/game-grid';
import { PLAY_GAMES, PartyGame } from '@/lib/data/play-games';
import { Locale } from '@/lib/i18n/config';

export default function PlayClientPage({
  locale,
  initialAudience = 'all',
  customTitle,
  customDescription,
  badgeText,
  breadcrumbLabel,
}: {
  locale: Locale;
  initialAudience?: string;
  customTitle?: string;
  customDescription?: string;
  badgeText?: string;
  breadcrumbLabel?: string;
}) {
  const [activeAudience, setActiveAudience] = React.useState(initialAudience);
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
          { name: 'Play Platform', url: `/${locale}/play/` },
          ...(initialAudience !== 'all'
            ? [{ name: breadcrumbLabel || customTitle || initialAudience, url: `/${locale}/play/${initialAudience}/` }]
            : []),
        ]}
      />

      <PlayHero
        gameCount={filteredGames.length}
        title={customTitle}
        description={customDescription}
        badgeText={badgeText}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PlayFilters
          activeAudience={activeAudience}
          searchQuery={searchQuery}
          locale={locale}
          onAudienceChange={setActiveAudience}
          onSearchChange={setSearchQuery}
        />

        <GameGrid games={filteredGames} locale={locale} />
      </div>
    </>
  );
}
