'use client';

import * as React from 'react';

function getStoredFavorites(gameId: string): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const item = localStorage.getItem(`sparkers-favs-${gameId}`);
    return item ? JSON.parse(item) : [];
  } catch {
    return [];
  }
}

export function useGameSession(gameId: string, initialPrompts: string[]) {
  const [prompts, setPrompts] = React.useState<string[]>(initialPrompts);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isFlipped, setIsFlipped] = React.useState(false);

  // Stable favorites state — avoids useSyncExternalStore snapshot instability
  const [favorites, setFavorites] = React.useState<string[]>(() =>
    getStoredFavorites(gameId)
  );

  // Sync from storage events (cross-tab and same-tab updates)
  React.useEffect(() => {
    const onStorage = () => {
      setFavorites(getStoredFavorites(gameId));
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [gameId]);

  // Fisher-Yates Shuffle
  const shuffle = () => {
    const arr = [...prompts];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setPrompts(arr);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % prompts.length);
    }, 150);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + prompts.length) % prompts.length);
    }, 150);
  };

  const toggleFavorite = (prompt: string) => {
    const updated = favorites.includes(prompt)
      ? favorites.filter((p: string) => p !== prompt)
      : [...favorites, prompt];
    if (typeof window !== 'undefined') {
      localStorage.setItem(`sparkers-favs-${gameId}`, JSON.stringify(updated));
      setFavorites(updated);
      window.dispatchEvent(new Event('storage'));
    }
  };

  return {
    currentPrompt: prompts[currentIndex] || initialPrompts[0],
    currentIndex,
    totalCards: prompts.length,
    isFlipped,
    setIsFlipped,
    nextCard,
    prevCard,
    shuffle,
    favorites,
    toggleFavorite,
  };
}
