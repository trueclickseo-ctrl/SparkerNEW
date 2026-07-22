# Sparkers Games — Production Maintenance & Operational Documentation

Version: 1.0  
Date: July 22, 2026  

---

## 1. Stack Overview

- **Framework**: Next.js 15 App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS (v4) with Decent Emerald Light Theme & Optional Dark Theme (`next-themes`)
- **Internationalization**: 27 Locales (`en`, `zh-Hans`, `es`, `ar`, `pt`, `fr`, `ja`, `ru`, `de`, `ko`, `id`, `tr`, `it`, `vi`, `pl`, `nl`, `th`, `uk`, `cs`, `ro`, `el`, `hu`, `sv`, `da`, `fi`, `nb`, `hr`)
- **CMS Integration**: Sanity CMS Schemas (`sanity/schemas/`)

---

## 2. Developer Operations Commands

### Run Development Server
```bash
npm run dev
```

### Run Linter
```bash
npm run lint
```

### Type Verification
```bash
npx tsc --noEmit
```

### Production Build & SSG Generation
```bash
npm run build
```

---

## 3. Adding New Game Decks

1. Open `lib/data/play-games.ts` (for party decks) or `lib/data/couples-games.ts` (for intimacy decks).
2. Add a new deck entry matching the `PartyGame` or `CouplesDeck` interface.
3. Next.js static site generation (`generateStaticParams`) will automatically compile static routes for all 27 locales upon `npm run build`.

---

## 4. Global SEO Compliance Checklist

- **Semantic SEO**: Ensure all new pages link to their pillar page and include at least 5 contextual internal links.
- **On-Page SEO**: Unique `<title>` template and meta description per route.
- **Structured Data**: Verify JSON-LD schemas (`Organization`, `WebSite`, `FAQPage`, `Game`, `HowTo`, `Article`, `BreadcrumbList`).
- **GEO / AI Indexing**: Keep `/public/llms.txt` updated with core entity definitions.
