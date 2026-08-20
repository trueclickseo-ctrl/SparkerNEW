import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, 'public');

console.log('🚀 Starting Pre-build Technical SEO Generator...');

// Ensure public directories exist
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}
const OG_DIR = path.join(PUBLIC_DIR, 'og');
if (!fs.existsSync(OG_DIR)) {
  fs.mkdirSync(OG_DIR, { recursive: true });
}

// Robust TypeScript evaluator to load raw data files in node
// Load a TS data file, optionally injecting pre-resolved variables into scope
function loadTsDataFile(filePath, varName, injectedVars = {}) {
  const content = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
  let clean = content
    .replace(/export interface [\s\S]*?\n\}/g, '')
    .replace(/export type [\s\S]*?;/g, '')
    .replace(new RegExp(`export const ${varName}:[^=]+=`, 'g'), `const ${varName} =`)
    .replace(/export const /g, 'const ')
    .replace(/import\s+.*?\s+from\s+['"].*?['"];/g, '');

  // Build preamble of injected dependency variables
  const preamble = Object.entries(injectedVars)
    .map(([k, v]) => `const ${k} = ${JSON.stringify(v)};`)
    .join('\n');

  const fnContent = `${preamble}\n${clean}\nreturn ${varName};`;
  try {
    const fn = new Function(fnContent);
    return fn();
  } catch (err) {
    console.error(`Error evaluating ${filePath}:`, err);
    return [];
  }
}

// Load databases — dependencies first so they can be injected into dependents
const PLAY_GAMES = loadTsDataFile('lib/data/play-games.ts', 'PLAY_GAMES');
const COUPLES_DECKS = loadTsDataFile('lib/data/couples-games.ts', 'COUPLES_DECKS');
const ENCYCLOPEDIA_ARTICLES = loadTsDataFile('lib/data/encyclopedia-articles.ts', 'ENCYCLOPEDIA_ARTICLES');
const BLOG_POSTS = loadTsDataFile('lib/data/blog-posts.ts', 'BLOG_POSTS');
const TRUTH_OR_DARE_MASTER_555 = loadTsDataFile('lib/data/truth-or-dare-master-555.ts', 'TRUTH_OR_DARE_MASTER_555');
// Load cluster files first so they can be injected into the aggregator
const CHARADES_CLUSTER_GAMES = loadTsDataFile('lib/data/charades-cluster.ts', 'CHARADES_CLUSTER_GAMES');
// Now load the main aggregator, injecting all cluster dependencies
const PROGRAMMATIC_SEO_GAMES = loadTsDataFile('lib/data/programmatic-seo-games.ts', 'PROGRAMMATIC_SEO_GAMES', {
  CHARADES_CLUSTER_GAMES,
});

const BASE_URL = 'https://www.sparkersgames.com';
const LOCALE = 'en';

// Helper to escape XML special chars
function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

// ─── 1. GENERATE ROBOTS.TXT ───────────────────────────────────────────
const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /search/
Disallow: /design-system/
Disallow: /en/design-system/
Disallow: /*?*
Disallow: /*&*
Disallow: /*.json$

# Allow major AI crawlers explicitly for GEO (Generative Engine Optimization)
User-agent: GPTBot
Allow: /
Disallow: /api/
Disallow: /search/

User-agent: ChatGPT-User
Allow: /
Disallow: /api/

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: ${BASE_URL}/sitemap-index.xml
`;
fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt);
console.log('✅ Generated public/robots.txt');

// ─── 2. GENERATE MANIFEST.JSON ────────────────────────────────────────
const manifest = {
  name: 'Sparkers Games',
  short_name: 'Sparkers',
  description: 'Premier destination for engaging party games, couples conversation starters, and interactive card decks.',
  start_url: '/en/',
  display: 'standalone',
  background_color: '#0f172a',
  theme_color: '#7c3aed',
  icons: [
    {
      src: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      src: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      src: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    {
      src: '/icon.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    },
  ],
};
fs.writeFileSync(path.join(PUBLIC_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log('✅ Generated public/manifest.json');

// ─── 4. SITEMAP GENERATORS ────────────────────────────────────────────
const nowStr = new Date().toISOString();

// A. Sitemap Pages
const staticPages = [
  '/',
  '/play/',
  '/couples/',
  '/quizzes/',
  '/encyclopedia/',
  '/blog/',
  '/library/',
  '/cards/',
  '/truth-or-dare-questions/',
  '/about/',
  '/contact/',
  '/privacy/',
  '/terms/',
];
let sitemapPagesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
for (const p of staticPages) {
  sitemapPagesXml += `
  <url>
    <loc>${BASE_URL}/${LOCALE}${p}</loc>
    <lastmod>${nowStr}</lastmod>
    <changefreq>${p === '/' || p === '/play/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${p === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
}
sitemapPagesXml += '\n</urlset>';
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-pages.xml'), sitemapPagesXml);

// B. Sitemap Games
const audienceSlugs = [
  'office',
  'kids',
  'teens',
  'party',
  'drinking',
  'large-groups',
  'small-groups',
  'games-for-couples',
  'games-for-friends',
  'games-for-teens',
  'games-for-office',
  'games-for-kids',
  'drinking-games',
  'date-night-games',
];
let sitemapGamesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
for (const game of PLAY_GAMES) {
  sitemapGamesXml += `
  <url>
    <loc>${BASE_URL}/${LOCALE}/play/${game.id}/</loc>
    <lastmod>${nowStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
}
for (const aud of audienceSlugs) {
  sitemapGamesXml += `
  <url>
    <loc>${BASE_URL}/${LOCALE}/play/${aud}/</loc>
    <lastmod>${nowStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`;
}
for (const deck of COUPLES_DECKS) {
  sitemapGamesXml += `
  <url>
    <loc>${BASE_URL}/${LOCALE}/couples/${deck.id}/</loc>
    <lastmod>${nowStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
}
sitemapGamesXml += '\n</urlset>';
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-games.xml'), sitemapGamesXml);

// C. Sitemap Blog
let sitemapBlogXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
for (const post of BLOG_POSTS) {
  sitemapBlogXml += `
  <url>
    <loc>${BASE_URL}/${LOCALE}/blog/${post.slug}/</loc>
    <lastmod>${nowStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
}
sitemapBlogXml += '\n</urlset>';
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-blog.xml'), sitemapBlogXml);

// E. Sitemap Categories & Quizzes (Includes Programmatic SEO Decks!)
const quizSlugs = [
  'love-language',
  'attachment-style',
  'relationship-compatibility',
  'communication-style',
];
const generatorSlugs = ['couple-name', 'wheel-spinner'];

let sitemapCategoriesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
for (const cat of TRUTH_OR_DARE_MASTER_555) {
  sitemapCategoriesXml += `
  <url>
    <loc>${BASE_URL}/${LOCALE}/truth-or-dare-questions/${cat.id}/</loc>
    <lastmod>${nowStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`;
}
for (const art of ENCYCLOPEDIA_ARTICLES) {
  sitemapCategoriesXml += `
  <url>
    <loc>${BASE_URL}/${LOCALE}/encyclopedia/${art.slug}/</loc>
    <lastmod>${nowStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
}
for (const qz of quizSlugs) {
  sitemapCategoriesXml += `
  <url>
    <loc>${BASE_URL}/${LOCALE}/quizzes/${qz}/</loc>
    <lastmod>${nowStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
}
for (const gen of generatorSlugs) {
  sitemapCategoriesXml += `
  <url>
    <loc>${BASE_URL}/${LOCALE}/generators/${gen}/</loc>
    <lastmod>${nowStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`;
}
// Add all Programmatic SEO routes — pillar pages get priority 1.0, sub-pages 0.9
for (const pGame of PROGRAMMATIC_SEO_GAMES) {
  // Pillar = exactly 2 segments: /charades/ → ['', 'charades', ''] → 3 parts
  const segments = pGame.path.split('/').filter(Boolean);
  const isPillar = segments.length === 1;
  sitemapCategoriesXml += `
  <url>
    <loc>${BASE_URL}/${LOCALE}${pGame.path}</loc>
    <lastmod>${nowStr}</lastmod>
    <changefreq>${isPillar ? 'daily' : 'weekly'}</changefreq>
    <priority>${isPillar ? '1.0' : '0.9'}</priority>
  </url>`;
}
sitemapCategoriesXml += '\n</urlset>';
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-categories.xml'), sitemapCategoriesXml);

// F. Sitemap Images
let sitemapImagesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

const imageEntries = [
  { loc: `${BASE_URL}/favicon.ico`, title: 'Sparkers Games Icon' },
  { loc: `${BASE_URL}/icon.png`, title: 'Sparkers Games Logo' },
  { loc: `${BASE_URL}/apple-touch-icon.png`, title: 'Sparkers Games Apple Icon' },
];

for (const img of imageEntries) {
  sitemapImagesXml += `
  <url>
    <loc>${BASE_URL}/${LOCALE}/</loc>
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
    </image:image>
  </url>`;
}
sitemapImagesXml += '\n</urlset>';
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-images.xml'), sitemapImagesXml);

// G. Sitemap Index
const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-pages.xml</loc>
    <lastmod>${nowStr}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-games.xml</loc>
    <lastmod>${nowStr}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-blog.xml</loc>
    <lastmod>${nowStr}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-categories.xml</loc>
    <lastmod>${nowStr}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-images.xml</loc>
    <lastmod>${nowStr}</lastmod>
  </sitemap>
</sitemapindex>`;
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-index.xml'), sitemapIndexXml);
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapIndexXml);
console.log('✅ Generated public/sitemap.xml and sitemap-index.xml');

// ─── 5. GENERATE DYNAMIC OG IMAGES (SVG FORMAT) ───────────────────────
const allPages = [
  ...staticPages.map(p => ({ title: 'Sparkers Games', desc: 'Ultimate Party & Couples Card Games Platform', slug: p.replace(/\//g, '') || 'index' })),
  ...PLAY_GAMES.map(g => ({ title: g.title, desc: g.shortDescription, slug: `play-${g.id}` })),
  ...COUPLES_DECKS.map(d => ({ title: d.title, desc: d.shortDescription, slug: `couples-${d.id}` })),
  ...BLOG_POSTS.map(b => ({ title: b.title, desc: b.excerpt || 'Read our official guide', slug: `blog-${b.slug}` })),
  ...ENCYCLOPEDIA_ARTICLES.map(e => ({ title: e.title, desc: e.aeoDefinition || e.definition || 'Guide & Rules', slug: `encyclopedia-${e.slug}` })),
  ...TRUTH_OR_DARE_MASTER_555.map(c => ({ title: c.name, desc: c.description, slug: `tod-${c.id}` })),
  ...PROGRAMMATIC_SEO_GAMES.map(p => ({ title: p.title, desc: p.description, slug: `pseo-${p.id}` }))
];

for (const pg of allPages) {
  const safeTitle = escapeXml(pg.title);
  const safeDesc = escapeXml(pg.desc.length > 80 ? pg.desc.substring(0, 77) + '...' : pg.desc);
  
  const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4f46e5;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#c084fc;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#purpleGrad)" />
    <!-- Outer Border -->
    <rect x="25" y="25" width="1150" height="580" rx="30" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="6" />
    
    <!-- Accent Sparkles -->
    <path d="M150 150 L160 170 L180 180 L160 190 L150 210 L140 190 L120 180 L140 170 Z" fill="rgba(255,255,255,0.3)" />
    <path d="M1000 450 L1008 466 L1024 474 L1008 482 L1000 498 L992 482 L976 474 L992 466 Z" fill="rgba(255,255,255,0.3)" />
    
    <!-- Text Elements -->
    <text x="100" y="150" font-family="'Outfit', 'Inter', sans-serif" font-weight="900" font-size="28" fill="#ffffff" letter-spacing="4">SPARKERS GAMES</text>
    <text x="100" y="320" font-family="'Outfit', 'Inter', sans-serif" font-weight="800" font-size="64" fill="#ffffff">${safeTitle}</text>
    <text x="100" y="420" font-family="'Inter', sans-serif" font-weight="400" font-size="24" fill="#f3e8ff">${safeDesc}</text>
    
    <!-- Footer Branding -->
    <rect x="100" y="490" width="240" height="46" rx="23" fill="rgba(255,255,255,0.15)" />
    <text x="130" y="521" font-family="'Inter', sans-serif" font-weight="700" font-size="16" fill="#ffffff">⚡ sparkersgames.com</text>
  </svg>`;
  
  fs.writeFileSync(path.join(OG_DIR, `${pg.slug}.svg`), svg);
}

console.log(`... Generated ${allPages.length} dynamic SVG open graph images.`);
console.log('🎉 Pre-build Technical SEO verification generated successfully.');
