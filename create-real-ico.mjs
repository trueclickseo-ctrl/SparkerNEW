import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceImage = 'C:\\Users\\SEO\\.gemini\\antigravity\\brain\\285c05a0-b3b8-4d18-a4b0-0afd1b1d3640\\sparkers_favicon_1784789197092.jpg';
const rootDir = process.cwd();

function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  let currentOffset = headerSize;

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // Image size
    entry.writeUInt32LE(currentOffset, 12); // Image offset
    entries.push(entry);
    currentOffset += item.buffer.length;
  }

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(count, 4); // Number of images

  return Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buffer)]);
}

async function run() {
  console.log('Generating valid RGBA PNG and ICO favicons...');

  // ensureAlpha guarantees 32-bit RGBA PNG
  const p16Buf = await sharp(sourceImage).resize(16, 16).ensureAlpha().png().toBuffer();
  const p32Buf = await sharp(sourceImage).resize(32, 32).ensureAlpha().png().toBuffer();
  const p48Buf = await sharp(sourceImage).resize(48, 48).ensureAlpha().png().toBuffer();
  const p180Buf = await sharp(sourceImage).resize(180, 180).ensureAlpha().png().toBuffer();
  const p512Buf = await sharp(sourceImage).resize(512, 512).ensureAlpha().png().toBuffer();

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: p16Buf },
    { width: 32, height: 32, buffer: p32Buf },
    { width: 48, height: 48, buffer: p48Buf },
  ]);

  // Write ICO
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(rootDir, 'app', 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(rootDir, 'favicon.ico'), icoBuffer);

  // Write PNGs
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon-16x16.png'), p16Buf);
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon-32x32.png'), p32Buf);
  fs.writeFileSync(path.join(rootDir, 'public', 'apple-touch-icon.png'), p180Buf);
  fs.writeFileSync(path.join(rootDir, 'app', 'apple-icon.png'), p180Buf);
  fs.writeFileSync(path.join(rootDir, 'public', 'icon.png'), p512Buf);
  fs.writeFileSync(path.join(rootDir, 'app', 'icon.png'), p512Buf);

  console.log('✅ Real RGBA ICO created! Size:', icoBuffer.length, 'bytes');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
