// deploy.js - Post-build deployment script for Hostinger
// Copies the Next.js static export (out/) to the repo root for Hostinger Git deployment
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const rootDir = __dirname;

// Directories and files that belong to the source code and must NOT be overwritten
const PROTECTED = new Set([
  'node_modules', '.git', '.next', 'app', 'components', 'hooks', 'lib', 
  'public', 'sanity', 'types', 'docs', 'out',
  'package.json', 'package-lock.json', 'tsconfig.json', 'tsconfig.tsbuildinfo',
  'next.config.ts', 'postcss.config.mjs', 'eslint.config.mjs', 'middleware.ts',
  'AGENTS.md', 'CLAUDE.md', 'README.md', 'next-env.d.ts', 'deploy.js',
  '.gitignore', '.env', '.env.local', '.env.production', '.htaccess',
]);

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copyRecursive(path.join(src, child), path.join(dest, child));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('📦 Deploying static export to repo root for Hostinger...');

for (const item of fs.readdirSync(outDir)) {
  if (PROTECTED.has(item)) {
    console.log(`  ⏭️  Skipping protected: ${item}`);
    continue;
  }
  const src = path.join(outDir, item);
  const dest = path.join(rootDir, item);
  copyRecursive(src, dest);
  console.log(`  ✅ Copied: ${item}`);
}

console.log('\n🎉 Done! Repo root now contains the deployable static site.');
console.log('   Run: git add -A && git commit -m "Deploy static build" && git push');
