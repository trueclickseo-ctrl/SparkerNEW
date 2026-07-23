// count-tod.mjs - Count prompts in truth-or-dare-master-555.ts
import { readFileSync } from 'fs';

const content = readFileSync('lib/data/truth-or-dare-master-555.ts', 'utf8');

// Count all string lines inside truths[] and dares[] arrays
const allPromptLines = content.match(/^ {6}'/gm) || [];
console.log('Total truth + dare prompts in master file:', allPromptLines.length);

// Count categories
const categories = content.match(/id:\s*'/g) || [];
console.log('Number of categories:', categories.length);

// Breakdown per category
const blocks = content.split(/\n  \{/).slice(1);
let total = 0;
for (const block of blocks) {
  const idMatch = block.match(/id:\s*'([^']+)'/);
  const nameMatch = block.match(/name:\s*'([^']+)'/);
  const prompts = (block.match(/^ {6}'/gm) || []).length;
  total += prompts;
  if (idMatch) {
    console.log(`  ${nameMatch ? nameMatch[1] : idMatch[1]}: ${prompts} prompts`);
  }
}
console.log('\nGrand total:', total);
