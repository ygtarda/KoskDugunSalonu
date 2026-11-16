/**
 * GitHub Pages (project site) post-export fixer.
 * Next.js `basePath` prefixes _next assets & links, but hardcoded public asset
 * strings like "/images/x.webp" or "/hero-video.mp4" are left untouched.
 * This rewrites them in the exported `out/` folder to "/KoskDugunSalonu/...".
 */
const fs = require('fs');
const path = require('path');

const BASE = '/KoskDugunSalonu';
const OUT = path.join(__dirname, '..', 'out');
const ASSET = '(images|videos|hero-video\\.mp4|kosk_logo|logo|favicon|icon-|apple-touch-icon|opengraph-image|twitter-image)';
// Preceded by a quote, escaped quote, paren, comma or whitespace — never by a letter (avoids double-prefixing).
const RE = new RegExp(`([\"'\`(,\\s])/${ASSET}`, 'g');

let changed = 0;
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(html|js|css|txt|json)$/.test(entry.name)) {
      const src = fs.readFileSync(p, 'utf8');
      const out = src.replace(RE, `$1${BASE}/$2`);
      if (out !== src) {
        fs.writeFileSync(p, out);
        changed++;
      }
    }
  }
}

walk(OUT);
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
console.log(`gh-pages-fix: rewrote asset paths in ${changed} files`);
