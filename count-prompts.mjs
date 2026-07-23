// count-prompts.mjs - Run with: node count-prompts.mjs
// Counts actual prompts in each deck vs the claimed cardCount/promptCount

import { readFileSync } from 'fs';

// Parse the TS files manually using regex
function extractDecks(content) {
  const results = [];
  
  // Find all id, title/name, promptCount/cardCount, and samplePrompts/prompts arrays
  const deckBlocks = content.split(/\n  \{/);
  
  for (const block of deckBlocks) {
    const idMatch = block.match(/\bid:\s*['"]([^'"]+)['"]/);
    const titleMatch = block.match(/\b(?:title|name):\s*['"]([^'"]+)['"]/);
    const countMatch = block.match(/\b(?:promptCount|cardCount):\s*(\d+)/);
    
    // Count actual array items in samplePrompts or prompts
    const promptsStart = block.search(/\b(?:samplePrompts|prompts):\s*\[/);
    if (promptsStart === -1) continue;
    
    const afterPromptsKey = block.slice(promptsStart);
    // Count string entries (lines starting with spaces + quote)
    const promptLines = afterPromptsKey.match(/^\s+['`]/gm);
    
    if (idMatch && countMatch) {
      results.push({
        id: idMatch[1],
        title: titleMatch ? titleMatch[1] : idMatch[1],
        claimed: parseInt(countMatch[1]),
        actual: promptLines ? promptLines.length : 0,
      });
    }
  }
  return results;
}

const files = [
  { path: 'lib/data/couples-games.ts', label: 'Couples Decks' },
  { path: 'lib/data/play-games.ts', label: 'Play Games' },
  { path: 'lib/data/question-database.ts', label: 'Question Database' },
  { path: 'lib/data/educational-games.ts', label: 'Educational Games' },
  { path: 'lib/data/physical-card-decks.ts', label: 'Physical Card Decks' },
];

let hasIssues = false;

for (const { path, label } of files) {
  const content = readFileSync(path, 'utf8');
  const decks = extractDecks(content);
  
  console.log(`\n=== ${label} (${path}) ===`);
  
  for (const d of decks) {
    const match = d.claimed === d.actual;
    const status = match ? '✅' : '⚠️  MISMATCH';
    if (!match) hasIssues = true;
    console.log(`  ${status} "${d.title.slice(0, 50)}" | Claimed: ${d.claimed} | Actual prompts: ${d.actual}`);
  }
}

console.log('\n' + (hasIssues ? '⚠️  MISMATCHES FOUND - card counts do not match actual prompts' : '✅ All counts match'));
