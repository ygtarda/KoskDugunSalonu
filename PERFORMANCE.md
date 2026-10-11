# KÖŞK DÜĞÜN SALONU — WEB PERFORMANS VE KALICI MİMARİ STANDARTLARI
> **Bu belge, projenin kalıcı performans rehberidir.** Geliştiriciler ve AI kodlama ajanları, projeye eklenen her yeni sayfa, bileşen ve görselde bu kurallara istisnasız uymakla yükümlüdür.

---

## 1. CORE WEB VITALS HEDEFLERİ

Tüm sayfalar Google PageSpeed ve Chrome User Experience (CrUX) metriklerinde aşağıdaki yeşil eşik değerlerini korumak zorundadır:

| Metrik | Anlamı | Hedeflenen Eşik |
| :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | Sayfadaki en büyük görsel/metin bloğunun çizilme süresi | **< 1.2 saniye** |
| **CLS (Cumulative Layout Shift)** | Sayfa yüklenirken yaşanan düzen kayması/sıçraması | **0.00 (Tamamen sıfır)** |
| **INP (Interaction to Next Paint)** | Tıklama ve etkileşim yanıt gecikmesi | **< 100 ms** |
| **TTFB (Time to First Byte)** | Sunucudan ilk baytın tarayıcıya ulaşma süresi | **< 200 ms** |
| **First Load JS (Sayfa Başı)** | Sayfa ilk yüklendiğinde indirilen JS bütçesi | **< 120 KB gzip** |

---

## 2. GÖRSEL STANDARTLARI (KESİN KURALLAR)

1. **`unoptimized` Bayrağı KESİNLİKLE YASAKTIR:**
   - Hiçbir `<Image>` bileşeninde `unoptimized={true}` kullanılmayacaktır. Next.js'in yerleşik WebP/AVIF dönüştürme ve responsive boyutlandırma motoru tüm görsellerde devrede kalmalıdır.
2. **Düzen Kayması (CLS) Önleme:**
   - Her görsel ya kesin `width` ve `height` değerine sahip olmalı ya da `fill` kullanılıyorsa ebeveyn konteynerinde kesin `aspect-ratio` (ör. `16 / 9`, `4 / 3`, `21 / 9`) tanımlanmalıdır.
3. **`sizes` Özelliği Gerçek Render Genişliğine Uygun Olmalıdır:**
   - Asla varsayılan `100vw` bırakılmamalıdır (hero hariç).
   - 3 sütunlu grid'lerde: `sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw"`
   - 2 sütunlu split alanlarda: `sizes="(max-width: 1024px) 100vw, 50vw"`
   - Küçük avatarlar/thumbnail'lerde: `sizes="120px"`
4. **Above-the-Fold vs. Below-the-Fold Ayrımı:**
   - **İlk Ekranda Görünen (LCP Adayı):** Hero görseli ve logonun üstünde `priority` ve `loading="eager"` zorunludur.
   - **Katlanın Altındaki (Below-the-fold):** İstisnasız tüm alt görsellerde `loading="lazy"` kullanılmalıdır.
5. **Blur Placeholder ve İskelet (Skeleton):**
   - Tüm vitrin ve galeri görsellerinde `placeholder="blur"` ve hafif SVG `blurDataURL` kullanılmalı; görsel yüklenirken boş beyaz ekran veya anlık zıplama yaşanmamalıdır.
6. **Format ve Çözünürlük:**
   - Yeni raster görseller `public/images/` altına WebP formatında ve azami 1920px genişliğinde yüklenmelidir.

---

## 3. VİDEO STANDARTLARI

1. **Önden Otomatik İndirme Yasak (`preload="none"`):**
   - Sayfa açılışında hiçbir video otomatik olarak indirilmeye başlamamalıdır.
2. **Intersection Observer ile Tembel Yükleme (Lazy Video):**
   - Video bileşeni (`<video>`) kullanıcı viewport'a yaklaşana kadar (azami `rootMargin: '200px'`) DOM'a bağlanmamalıdır.
3. **Statik Poster Görseli Zorunluluğu:**
   - Otomatik oynatılan hero arka plan videoları varsa, video yerine ilk boyamada yüksek çözünürlüklü statik bir WebP poster görseli sunulmalı; böylece LCP video indirmesine takılmamalıdır.
4. **Mobil ve Tarayıcı Uyumluluğu:**
   - Otomatik oynatılan videolar `autoPlay`, `muted`, `loop`, `playsInline` özelliklerini eksiksiz taşımalıdır.
   - Modern tarayıcılar için öncelikli `<source type="video/webm">`, geriye dönük uyumluluk için `<source type="video/mp4">` sağlanmalıdır.

---

## 4. FONT VE TİPOGRAFİ STANDARTLARI

1. **CSS `@import url(...)` Kesinlikle Yasaktır:**
   - Fontlar asla CSS dosyaları içinden `@import` ile çağrılmamalıdır (bu işlem render-blocking ağ zinciri yaratır).
2. **`next/font/google` Preload ve Display Swap:**
   - Tüm yazı tipleri `app/layout.tsx` içinde `next/font/google` modülüyle çağrılmalı ve `display: 'swap'` tanımlanmalıdır.
3. **Sadece Kullanılan Ağırlıklar Yüklenmelidir:**
   - İhtiyaç duyulmayan font kalınlıkları (weight) import edilmemelidir. Proje standardı: Fraunces (400, 500, 600), DM Sans (400, 500, 600, 700), Cinzel (400, 500, 600), Cormorant Garamond (400, 600).

---

## 5. JAVASCRIPT VE BUNDLE OPTİMİZASYONU

1. **Dinamik Yükleme (`next/dynamic`):**
   - Katlanın altında kalan veya istemciye özel bileşenler (`GalleryLightbox`, `AtmosphereSwitcher`, `FloatingContactBar`, `CustomCursor`) `next/dynamic` ile lazy-load edilmelidir.
   - Sadece tarayıcıda çalışan (SSR gerektirmeyen) araçlar için `{ ssr: false }` kullanılmalıdır.
2. **Üçüncü Taraf Scriptler:**
   - Google Analytics, widget veya harici scriptler Next.js `next/script` bileşeniyle ve `strategy="lazyOnload"` stratejisiyle yüklenmelidir.
3. **Bundle Analizi:**
   - Yapılan her büyük geliştirme sonrası terminalde `npm run analyze` çalıştırılarak bundle boyutları denetlenmelidir.

---

## 6. ANİMASYON VE CSS PERFORMANSI

1. **Yalnızca Composite Özellikleri Animasyonlanabilir:**
   - Animasyon ve geçişlerde YALNIZCA `transform` ve `opacity` kullanılmalıdır.
   - `left`, `top`, `right`, `bottom`, `width`, `height`, `margin`, `padding` animasyonu KESİNLİKLE YASAKTIR (tarayıcı reflow/layout darboğazına yol açar).
2. **Scroll Tetiklemeleri:**
   - Scroll olaylarında ağır hesaplamalar yapılmamalı; `IntersectionObserver` veya `requestAnimationFrame` tercih edilmelidir.
3. **Erişilebilirlik ve Düşük Hareket:**
   - Tüm CSS animasyonları `@media (prefers-reduced-motion: reduce)` ile anında sıfırlanabilir olmalıdır (`globals.css` içinde global kural mevcuttur).

---

## 7. AĞ VE ÖNBELLEKLEME (CACHE-CONTROL)

1. `next.config.js` içinde statik varlıklar (`/images/:path*`, `/_next/static/:path*`) için:
   ```
   Cache-Control: public, max-age=31536000, immutable
   ```
   başlığı atanmıştır.
2. `compress: true` ile Gzip/Brotli sıkıştırması aktiftir.
3. `poweredByHeader: false` ile gereksiz başlık baytları kaldırılmıştır.

---

## 8. HIZLI PERFORMANS KONTROL LİSTESİ (YENİ KOD EKLERKEN)

Yeni bir sayfa veya bileşen eklediğinizde bu 6 adımı doğrulayın:
- [ ] Görselde `unoptimized` yok mu?
- [ ] Görselin ebeveyninde `aspect-ratio` veya görselde `width/height` tanımlı mı?
- [ ] İlk ekranda görünen görselde `priority` var mı? Alttakilerde `loading="lazy"` var mı?
- [ ] Animasyonlar sadece `transform` ve `opacity` mi kullanıyor?
- [ ] Ağır bir bileşen eklendiyse `next/dynamic` kullanıldı mı?
- [ ] `npm run build` hatasız 0 kodla tamamlanıyor mu?
