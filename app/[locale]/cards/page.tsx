'use client';

import * as React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PHYSICAL_CARD_DECKS, PhysicalCardProduct } from '@/lib/data/physical-card-decks';
import { Search, ShoppingCart, ExternalLink, Star, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';

export default function CardsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams.locale;

  const [query, setQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [selectedDeck, setSelectedDeck] = React.useState<PhysicalCardProduct | null>(null);

  const categories = [
    { id: 'all', label: 'All Card Decks' },
    { id: 'couples', label: '💑 Couples & Intimacy' },
    { id: 'party', label: '🎉 Party & Gen Z' },
    { id: 'deep', label: '🔮 Deep Talk' },
  ];

  const filteredDecks = PHYSICAL_CARD_DECKS.filter((deck) => {
    const matchesCat = activeCategory === 'all' || deck.category === activeCategory;
    const matchesQuery =
      deck.title.toLowerCase().includes(query.toLowerCase()) ||
      deck.description.toLowerCase().includes(query.toLowerCase()) ||
      deck.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Physical Card Decks', url: `/${locale}/cards` },
        ]}
      />

      
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-extrabold shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-500" /> Physical Boxed Card Decks &amp; Best Sellers
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-gradient-funky">
            Explore Premium Card Decks
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Beautifully crafted physical card boxes for couples date nights, Gen Z party vibes, and deep conversations. Click any deck to view sample cards inside or order directly on Amazon.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="w-4.5 h-4.5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search card decks by name, theme, or category..."
              className="w-full pl-11 pr-4 py-3 text-sm rounded-2xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-900/50 text-purple-950 dark:text-purple-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer hover:scale-105 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/25 ring-2 ring-purple-400/50'
                    : 'bg-white/90 dark:bg-slate-900 text-purple-950 dark:text-purple-300 border border-purple-200 dark:border-slate-800 hover:bg-purple-50 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Physical Cards Grid — Matching User Screenshot Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filteredDecks.map((deck) => (
            <div
              key={deck.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border-2 border-rose-200/80 dark:border-slate-800 p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* TOP PICK Badge Pill */}
              {deck.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 rounded-b-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                    {deck.badge}
                  </span>
                </div>
              )}

              {/* Card Header & Merchant Tag */}
              <div className="flex justify-end items-center mb-3">
                <span className="text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500 uppercase">
                  {deck.merchant}
                </span>
              </div>

              {/* Physical Product Box Mockup Container */}
              <div
                onClick={() => setSelectedDeck(deck)}
                className="cursor-pointer relative aspect-4/3 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 dark:from-slate-800/80 dark:to-slate-800/40 border border-rose-100 dark:border-slate-700/60 p-6 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300 mb-6 shadow-inner"
              >
                {/* Simulated 3D Card Deck Box Visual */}
                <div className={`w-36 h-48 rounded-xl ${deck.imageBgColor} text-white p-4 flex flex-col justify-between items-center text-center shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 border-2 border-white/20`}>
                  <div className="w-full flex justify-between items-center text-[9px] font-extrabold opacity-80 uppercase">
                    <span>SPARKERS</span>
                    <span>{deck.cardCount} CARDS</span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-8 h-8 mx-auto rounded-full bg-white/20 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-heading font-black text-xs uppercase leading-tight tracking-tight">
                      {deck.title}
                    </h4>
                  </div>
                  <span className="text-[8px] font-bold tracking-widest uppercase bg-white/20 px-2 py-0.5 rounded-full">
                    VIEW CARDS INSIDE
                  </span>
                </div>
              </div>

              {/* Deck Info */}
              <div className="space-y-3 flex-grow">
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white leading-tight">
                    {deck.title} <span className="text-xs text-slate-400 font-normal">• {deck.cardCount} Cards</span>
                  </h3>
                  <div className="flex items-center gap-1 mt-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{deck.rating}</span>
                    <span className="text-slate-400 text-[11px] font-normal">({deck.reviewCount} reviews)</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {deck.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {deck.tags.map((t) => (
                    <span key={t} className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-900/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-6">
                <button
                  onClick={() => setSelectedDeck(deck)}
                  className="w-full py-2.5 px-4 rounded-2xl bg-purple-100 dark:bg-purple-950/50 text-purple-900 dark:text-purple-200 font-bold text-xs hover:bg-purple-200 dark:hover:bg-purple-900/80 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-purple-600" /> Preview {deck.cardCount} Cards Inside
                </button>

                <a
                  href={deck.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-amber-950 font-extrabold text-xs shadow-md hover:shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer border border-amber-300/60"
                >
                  <ShoppingCart className="w-4 h-4" /> View on Amazon <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      

      {/* Modal for "View Cards Inside" Preview */}
      {selectedDeck && (
        <Modal
          isOpen={!!selectedDeck}
          onClose={() => setSelectedDeck(null)}
          title={`Cards Inside: ${selectedDeck.title}`}
          description={`Sample conversation cards included in the ${selectedDeck.title} physical box.`}
        >
          <div className="space-y-4 py-2">
            <div className="p-3 rounded-xl bg-purple-50 dark:bg-slate-800 border border-purple-100 dark:border-purple-900/40 flex items-center justify-between text-xs">
              <span className="font-bold text-purple-950 dark:text-purple-200">Total Cards in Box: {selectedDeck.cardCount}</span>
              <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{selectedDeck.price}</span>
            </div>

            <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-slate-900 dark:text-white pt-2">
              Sample Prompts Inside This Box:
            </h4>

            <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
              {selectedDeck.cardsInside.map((prompt, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-slate-800 shadow-xs flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-xs font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    &quot;{prompt}&quot;
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex gap-3">
              <Button variant="outline" className="w-1/2" onClick={() => setSelectedDeck(null)}>
                Close Preview
              </Button>
              <a
                href={selectedDeck.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-amber-950 font-extrabold text-xs shadow-md hover:shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Buy on Amazon <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
