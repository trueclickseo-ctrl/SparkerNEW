// full-count-audit.mjs
// Checks EVERY deck in EVERY data file - claimed count vs actual prompts
import { readFileSync } from 'fs';

function countPromptsInBlock(block) {
  // Find the prompts/samplePrompts/truths/dares array and count string items
  const lines = block.split('\n');
  let inArray = false;
  let count = 0;
  for (const line of lines) {
    if (/\b(samplePrompts|prompts|truths|dares)\s*:\s*\[/.test(line)) {
      inArray = true;
      continue;
    }
    if (inArray) {
      // A prompt line starts with spaces then a quote
      if (/^\s+['`"]/.test(line)) {
        count++;
      }
      // End of this array
      if (/^\s+\],/.test(line) || /^\s+\]$/.test(line)) {
        inArray = false;
      }
    }
  }
  return count;
}

function auditFile(path, claimedField) {
  const content = readFileSync(path, 'utf8');
  // Split into deck blocks (each starts with { id: ...)
  const raw = content.split(/\n  \{/);
  const results = [];

  for (const block of raw.slice(1)) {
    const idMatch = block.match(/\bid:\s*['"]([^'"]+)['"]/);
    const titleMatch = block.match(/\b(?:title|name):\s*['"]([^'"]+)['"]/);
    const countMatch = block.match(new RegExp(`\\b${claimedField}\\s*:\\s*(\\d+)`));
    const actual = countPromptsInBlock(block);

    if (!idMatch) continue;

    const claimed = countMatch ? parseInt(countMatch[1]) : null;
    const label = (titleMatch ? titleMatch[1] : idMatch[1]).slice(0, 55);
    const mismatch = claimed !== null && claimed !== actual;

    results.push({ id: idMatch[1], label, claimed, actual, mismatch });
  }
  return results;
}

function printResults(label, results) {
  let anyMismatch = false;
  console.log(`\n${'='.repeat(70)}`);
  console.log(`  ${label}`);
  console.log('='.repeat(70));
  for (const r of results) {
    if (r.claimed === null) {
      console.log(`  ❓  "${r.label}"\n       No count field found | Actual: ${r.actual}`);
    } else if (r.mismatch) {
      anyMismatch = true;
      const diff = r.actual - r.claimed;
      console.log(`  ❌  "${r.label}"\n       Claimed: ${r.claimed} | Actual: ${r.actual} | DIFFERENCE: ${diff > 0 ? '+' : ''}${diff}`);
    } else {
      console.log(`  ✅  "${r.label}" → ${r.actual} prompts ✓`);
    }
  }
  if (!anyMismatch) console.log('\n  All counts match! ✅');
  return anyMismatch;
}

// ── Truth-or-Dare Master (special structure: truths[] + dares[]) ──────────────
function auditToDMaster(path) {
  const content = readFileSync(path, 'utf8');
  const blocks = content.split(/\n  \{/).slice(1);
  const results = [];
  let grandTotal = 0;
  console.log(`\n${'='.repeat(70)}`);
  console.log(`  Truth-or-Dare Master 555 (${path})`);
  console.log('='.repeat(70));
  for (const block of blocks) {
    const idMatch   = block.match(/\bid:\s*'([^']+)'/);
    const nameMatch = block.match(/\bname:\s*'([^']+)'/);
    const truths = (block.match(/^ {6}'/gm) || []).length;
    grandTotal += truths;
    if (idMatch) {
      const label = (nameMatch ? nameMatch[1] : idMatch[1]).slice(0, 55);
      console.log(`  📋  "${label}" → ${truths} prompts (truths + dares)`);
      results.push({ label, truths });
    }
  }
  console.log(`\n  ► Grand total: ${grandTotal} prompts across all categories`);
  console.log(`  ► Site claims: "555+ Truth or Dare" → ${grandTotal < 555 ? '❌ SHORTFALL by ' + (555 - grandTotal) : '✅ Meets claim'}`);
  return grandTotal;
}

// ── Run all audits ────────────────────────────────────────────────────────────
let anyIssue = false;

const couplesResults = auditFile('lib/data/couples-games.ts', 'promptCount');
anyIssue = printResults('Couples Decks (lib/data/couples-games.ts) — claimed: promptCount', couplesResults) || anyIssue;

const playResults = auditFile('lib/data/play-games.ts', 'cardCount');
anyIssue = printResults('Play Games (lib/data/play-games.ts) — claimed: cardCount', playResults) || anyIssue;

const qdbResults = auditFile('lib/data/question-database.ts', 'cardCount');
anyIssue = printResults('Question Database (lib/data/question-database.ts) — claimed: cardCount', qdbResults) || anyIssue;

const eduResults = auditFile('lib/data/educational-games.ts', 'cardCount');
anyIssue = printResults('Educational Games (lib/data/educational-games.ts) — claimed: cardCount', eduResults) || anyIssue;

const physResults = auditFile('lib/data/physical-card-decks.ts', 'cardCount');
anyIssue = printResults('Physical Card Decks (lib/data/physical-card-decks.ts) — claimed: cardCount', physResults) || anyIssue;

const todTotal = auditToDMaster('lib/data/truth-or-dare-master-555.ts');

console.log(`\n${'='.repeat(70)}`);
console.log(`  FINAL VERDICT`);
console.log('='.repeat(70));
console.log(`  Truth-or-Dare page header claims "555+" but master file has: ${todTotal} prompts`);
console.log(`  Note: question-database.ts mismatches are EXPECTED — those`);
console.log(`        are "sample" prompts shown in library cards, not full decks.`);
console.log(`        The real issue is what the UI DISPLAYS to users.`);
console.log('\n  KEY QUESTION: Does the UI show the "claimed" count or "actual" count?');
console.log('  - Couples deck page: shows `deck.samplePrompts.length` → ACTUAL ✅');
console.log('  - Play game page:    shows `game.cardCount` → CLAIMED (may be inflated) ⚠️');
console.log('  - Library page:      shows `game.cardCount` → CLAIMED (may be inflated) ⚠️');
console.log('  - Truth-or-Dare page: hardcoded "555+" text → needs verification ⚠️');
