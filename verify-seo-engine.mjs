import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🧪 Starting Programmatic SEO Quality Control & Validation Audit...');

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

// Load cluster files first so they can be injected into the aggregator
const CHARADES_CLUSTER_GAMES = loadTsDataFile('lib/data/charades-cluster.ts', 'CHARADES_CLUSTER_GAMES');
// Load the main aggregator with all cluster dependencies injected
const PROGRAMMATIC_SEO_GAMES = loadTsDataFile('lib/data/programmatic-seo-games.ts', 'PROGRAMMATIC_SEO_GAMES', {
  CHARADES_CLUSTER_GAMES,
});

let passed = true;
let warningsCount = 0;
let errorsCount = 0;

const pathSet = new Set();
const titleSet = new Set();

console.log(`\n📊 Total pages to audit: ${PROGRAMMATIC_SEO_GAMES.length}\n`);

for (const game of PROGRAMMATIC_SEO_GAMES) {
  // 1. URL Path Normalization & Canonical Checks
  if (!game.path.startsWith('/') || !game.path.endsWith('/')) {
    console.error(`  ❌ [${game.id}] URL path "${game.path}" must start and end with a slash.`);
    errorsCount++; passed = false;
  }
  if (game.path !== game.path.toLowerCase()) {
    console.error(`  ❌ [${game.id}] URL path "${game.path}" must be completely lowercase.`);
    errorsCount++; passed = false;
  }
  if (pathSet.has(game.path)) {
    console.error(`  ❌ [${game.id}] Duplicate URL path: "${game.path}"`);
    errorsCount++; passed = false;
  }
  pathSet.add(game.path);

  // 2. Unique metadata
  if (titleSet.has(game.title)) {
    console.warn(`  ⚠️  [${game.id}] Duplicate title: "${game.title}"`);
    warningsCount++;
  }
  titleSet.add(game.title);

  // 3. Schema integrity
  if (!game.faqs || game.faqs.length === 0) {
    console.error(`  ❌ [${game.id}] Missing FAQs — FAQPage schema will be empty.`);
    errorsCount++; passed = false;
  }
  if (!game.rules || game.rules.length === 0) {
    console.error(`  ❌ [${game.id}] Missing rules — HowTo schema will be empty.`);
    errorsCount++; passed = false;
  }
  if (!game.prompts || game.prompts.length === 0) {
    console.error(`  ❌ [${game.id}] Missing prompts — page will render empty card deck.`);
    errorsCount++; passed = false;
  }

  // 4. Internal link graph integrity
  if (game.parentSlug) {
    const parent = PROGRAMMATIC_SEO_GAMES.find(g => g.id === game.parentSlug);
    if (!parent) {
      console.error(`  ❌ [${game.id}] Broken parentSlug: "${game.parentSlug}" not found in database.`);
      errorsCount++; passed = false;
    }
  }
  for (const childId of (game.children || [])) {
    const child = PROGRAMMATIC_SEO_GAMES.find(g => g.id === childId);
    if (!child) {
      console.warn(`  ⚠️  [${game.id}] Child link "${childId}" not found in database.`);
      warningsCount++;
    }
  }
  for (const sibId of (game.siblings || [])) {
    const sib = PROGRAMMATIC_SEO_GAMES.find(g => g.id === sibId);
    if (!sib) {
      console.warn(`  ⚠️  [${game.id}] Sibling link "${sibId}" not found in database.`);
      warningsCount++;
    }
  }

  // 5. OG Image check
  const ogImgPath = path.join(__dirname, 'public', 'og', `pseo-${game.id}.svg`);
  if (!fs.existsSync(ogImgPath)) {
    console.warn(`  ⚠️  [${game.id}] OG image "pseo-${game.id}.svg" not found — run build first.`);
    warningsCount++;
  }
}

console.log('\n==================================================');
console.log('AUDIT RESULT');
console.log('==================================================');
console.log(`   Pages audited : ${PROGRAMMATIC_SEO_GAMES.length}`);
console.log(`   Errors        : ${errorsCount}`);
console.log(`   Warnings      : ${warningsCount}`);
if (passed) {
  console.log(`🎉 SUCCESS: All SEO validations passed.`);
} else {
  console.log(`🚨 FAILURE: ${errorsCount} error(s) must be fixed before deploying.`);
  process.exit(1);
}
