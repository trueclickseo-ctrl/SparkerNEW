import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadTsDataFile(filePath, varName, injectedVars = {}) {
  const content = fs.readFileSync(path.resolve(__dirname, '..', filePath), 'utf8');
  let clean = content
    .replace(/export interface [\s\S]*?\n\}/g, '')
    .replace(/export type [\s\S]*?;/g, '')
    .replace(new RegExp(`export const ${varName}:[^=]+=`, 'g'), `const ${varName} =`)
    .replace(/export const /g, 'const ')
    .replace(/import\s+.*?\s+from\s+['"].*?['"];/g, '');

  const preamble = Object.entries(injectedVars)
    .map(([k, v]) => `const ${k} = ${JSON.stringify(v)};`)
    .join('\n');

  const fnContent = `${preamble}\n${clean}\nreturn ${varName};`;
  const fn = new Function(fnContent);
  return fn();
}

const CHARADES_CLUSTER_GAMES = loadTsDataFile('lib/data/charades-cluster.ts', 'CHARADES_CLUSTER_GAMES');
const PROGRAMMATIC_SEO_GAMES = loadTsDataFile('lib/data/programmatic-seo-games.ts', 'PROGRAMMATIC_SEO_GAMES', {
  CHARADES_CLUSTER_GAMES,
});

console.log('--- PILLARS LIST ---');
PROGRAMMATIC_SEO_GAMES.forEach(g => {
  if (!g.parentSlug) {
    console.log(`ID: ${g.id} | Path: ${g.path} | Title: ${g.title}`);
  }
});
