/**
 * Recolors public/new-logo.png foreground to solid white or emerald-500 (#10b981),
 * preserving alpha. Run: node scripts/generate-logo-variants.mjs
 */
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const src = join(root, 'public', 'new-logo.png');

/** Tailwind emerald-500 */
const EMERALD = { r: 16, g: 185, b: 129 };
const WHITE = { r: 255, g: 255, b: 255 };

async function recolor(outName, rgb) {
  const img = sharp(src).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  if (channels !== 4) {
    throw new Error(`Expected RGBA, got ${channels} channels`);
  }
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a === 0) continue;
    data[i] = rgb.r;
    data[i + 1] = rgb.g;
    data[i + 2] = rgb.b;
  }
  const outPath = join(root, 'public', outName);
  await sharp(data, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outPath);
  console.log('Wrote', outPath);
}

await recolor('new-logo-white.png', WHITE);
await recolor('new-logo-emerald.png', EMERALD);
console.log('Done.');
