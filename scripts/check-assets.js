#!/usr/bin/env node

/**
 * scripts/check-assets.js
 * Görsel ve Statik Varlık Boyut Denetleyicisi
 * public/ klasörüne eklenen yeni görsellerin performans sınırlarını aşıp aşmadığını denetler.
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const MAX_IMAGE_SIZE_KB = 1500; // 1.5 MB üst sınır
const ALLOWED_EXTS = ['.webp', '.avif', '.jpg', '.jpeg', '.png', '.svg', '.ico'];

let errorsFound = 0;
let warningsFound = 0;

function checkDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      checkDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ALLOWED_EXTS.includes(ext)) {
        const sizeKB = Math.round(stat.size / 1024);
        const relPath = path.relative(path.join(__dirname, '..'), fullPath);

        // Raw, aşırı büyük raster dosyası uyarısı
        if (sizeKB > MAX_IMAGE_SIZE_KB && ext !== '.svg') {
          console.warn(`⚠️ [UYARI] ${relPath} (${sizeKB} KB) > ${MAX_IMAGE_SIZE_KB} KB sınırından büyük. WebP/AVIF sıkıştırması önerilir.`);
          warningsFound++;
        }

        // WebP formatı tavsiyesi
        if (['.jpg', '.png'].includes(ext) && sizeKB > 300) {
          console.log(`ℹ️ [İPUCU] ${relPath} (${sizeKB} KB) JPG/PNG yerine WebP formatına çevrilebilir.`);
        }
      }
    }
  }
}

console.log('🔍 Görsel ve statik varlık boyut denetimi başlatılıyor...\n');
checkDirectory(PUBLIC_DIR);

console.log('\n----------------------------------------');
if (errorsFound === 0) {
  console.log(`✅ Varlık denetimi tamamlandı: ${warningsFound} optimizasyon uyarısı, 0 kritik hata.`);
  process.exit(0);
} else {
  console.error(`❌ Varlık denetiminde ${errorsFound} kritik hata bulundu!`);
  process.exit(1);
}
