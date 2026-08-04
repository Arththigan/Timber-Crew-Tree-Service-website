/**
 * Post-build: uses critters to inline critical CSS into index.html
 * and loads the full stylesheet asynchronously (non-render-blocking).
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import Critters from 'critters';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '../dist');

const critters = new Critters({
  path: distDir,
  publicPath: '/',
  preload: 'swap',        // load full CSS async after inline critical
  pruneSource: false,     // keep full CSS file for non-critical styles
  logLevel: 'warn',
  fonts: false,
  compress: true,
  mergeStylesheets: true,
});

const htmlPath = resolve(distDir, 'index.html');
const html = readFileSync(htmlPath, 'utf-8');

console.log('Inlining critical CSS...');
const result = await critters.process(html);
writeFileSync(htmlPath, result);
console.log('Done — critical CSS inlined, full CSS loads async.');
