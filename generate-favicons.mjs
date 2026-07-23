import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceImage = 'C:\\Users\\SEO\\.gemini\\antigravity\\brain\\285c05a0-b3b8-4d18-a4b0-0afd1b1d3640\\sparkers_favicon_1784789197092.jpg';
const rootDir = process.cwd();

async function generate() {
  console.log('Generating favicons for Sparkers Games...');

  // 1. Generate 512x512 PNG
  const p512 = await sharp(sourceImage).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public', 'icon.png'), p512);
  fs.writeFileSync(path.join(rootDir, 'app', 'icon.png'), p512);

  // 2. Generate 180x180 Apple Touch Icon
  const p180 = await sharp(sourceImage).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public', 'apple-touch-icon.png'), p180);
  fs.writeFileSync(path.join(rootDir, 'app', 'apple-icon.png'), p180);

  // 3. Generate 32x32 and 16x16 PNGs
  const p32 = await sharp(sourceImage).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon-32x32.png'), p32);

  const p16 = await sharp(sourceImage).resize(16, 16).png().toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon-16x16.png'), p16);

  // 4. Generate ICO format (contain 32x32 PNG header in ICO format or sharp png as ico)
  // Standard web browsers accept 32x32 PNG inside ico container or raw 32x32 png
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon.ico'), p32);
  fs.writeFileSync(path.join(rootDir, 'app', 'favicon.ico'), p32);
  fs.writeFileSync(path.join(rootDir, 'favicon.ico'), p32);

  console.log('✅ Favicons generated successfully in public/, app/, and root!');
}

generate().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
