'use client';

import * as React from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { CouplesHero } from '@/components/couples/couples-hero';
import { CouplesFilters } from '@/components/couples/couples-filters';
import { CouplesGrid } from '@/components/couples/couples-grid';
import { COUPLES_DECKS } from '@/lib/data/couples-games';
import { Locale } from '@/lib/i18n/config';

export default function CouplesClientPage({
  locale,
}: {
  locale: Locale;
}) {
  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredDecks = COUPLES_DECKS.filter((deck) => {
    return activeCategory === 'all' || deck.category === activeCategory;
  });

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Couples Hub', url: `/${locale}/couples` },
        ]}
      />

      <CouplesHero deckCount={COUPLES_DECKS.length} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CouplesFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <CouplesGrid decks={filteredDecks} locale={locale} />
      </div>
    </>
  );
}
