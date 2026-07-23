// fix-wrappers.mjs
// Removes the outer <div className="flex flex-col min-h-screen"> wrapper and
// any inner <main ...> tag from pages, since [locale]/layout.tsx already provides both.
import { readFileSync, writeFileSync } from 'fs';

const files = [
  'app/[locale]/about/page.tsx',
  'app/[locale]/blog/[slug]/page.tsx',
  'app/[locale]/blog/page.tsx',
  'app/[locale]/cards/page.tsx',
  'app/[locale]/contact/page.tsx',
  'app/[locale]/couples/[deckId]/page.tsx',
  'app/[locale]/couples/page.tsx',
  'app/[locale]/educational/[deckId]/page.tsx',
  'app/[locale]/educational/page.tsx',
  'app/[locale]/encyclopedia/[slug]/page.tsx',
  'app/[locale]/encyclopedia/page.tsx',
  'app/[locale]/generators/couple-name/page.tsx',
  'app/[locale]/generators/wheel-spinner/page.tsx',
  'app/[locale]/library/page.tsx',
  'app/[locale]/play/[gameId]/page.tsx',
  'app/[locale]/play/page.tsx',
  'app/[locale]/privacy/page.tsx',
  'app/[locale]/quizzes/love-language/page.tsx',
  'app/[locale]/quizzes/page.tsx',
  'app/[locale]/terms/page.tsx',
  'app/[locale]/truth-or-dare-questions/page.tsx',
];

let fixed = 0;
let skipped = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf8');
  const original = content;

  // 1. Remove outer <div className="flex flex-col min-h-screen"> wrapper
  //    Pattern: return (\n    <div className="flex flex-col min-h-screen">
  //    Matching closing </div> at bottom
  content = content.replace(
    /(\s+return \(\s*\n)\s+<div className="flex flex-col min-h-screen">\n/,
    '$1  <>\n'
  );

  // 2. Remove inner <main ...> opening tag (various variants)
  //    e.g. <main className="flex-grow"> or <main className="max-w-..." ...>
  content = content.replace(
    /\n\s+<main( className="[^"]*")?>(\s*\n)/g,
    '\n$2'
  );

  // 3. Remove </main> closing tag (the one matching the above)
  content = content.replace(/\n\s+<\/main>\n(\s+<\/div>\n\s+\);)/g, '\n  </>\n  );');

  // 4. Clean up: replace the final </div> before ); if we injected </>
  // Replace: last </div>\n    ); with  </>\n  );
  content = content.replace(
    /\n(\s+)<\/div>\n(\s+\);)/,
    '\n$1</>\n$2'
  );

  if (content !== original) {
    writeFileSync(file, content, 'utf8');
    console.log(`✅ Fixed: ${file}`);
    fixed++;
  } else {
    console.log(`⏭️  No change needed: ${file}`);
    skipped++;
  }
}

console.log(`\nDone. Fixed: ${fixed}, Skipped: ${skipped}`);
