# AGENTS.md — AI AGENT GUIDELINES FOR KÖŞK DÜĞÜN SALONU

This repository contains the official website for **Köşk Düğün Salonu** (Ankara Polatlı).
All autonomous and pair-programming AI coding agents working on this project MUST follow the architectural, performance, and data consistency standards outlined below.

---

## 1. CANONICAL SINGLE SOURCES OF TRUTH (NAP & VENUE DATA)
Never invent or alter these core business facts:
- **Venue Address (NAP):** `Gülveren, Kutluhan Sk. No: 2/2, 06960 Polatlı / Ankara` (Must match in Header, Footer, Contact, and schema.org JSON-LD).
- **Official Phone:** `0538 296 90 79` (`tel:+905382969079`).
- **Official WhatsApp:** `+90 538 296 90 79` (`https://wa.me/905382969079`).
- **Capacity:** `1.000 Kişilik Kapalı Düğün Salonu` (kolonsuz ferah alan).
- **Ceiling Height:** `Yüksek Tavan Ferahlığı` (6.5 Metre).
- **Private Parking:** `Geniş Özel Otopark` (Rahat park imkânı, park sorunu yok).
- **Corporate Logo:** `/kosk_logo.jpg` (used across Header, Footer, and emails).

---

## 2. STRICT PERFORMANCE RULES (SEE ALSO: PERFORMANCE.md)

### Images
1. **NEVER use `unoptimized` on `<Image>` components.** Next.js image optimization (AVIF/WebP) must always be active.
2. **Zero Layout Shift (CLS = 0):** Always supply explicit `width`/`height` or use `fill` with a parent having a strictly defined `aspect-ratio` (e.g., `16 / 9`, `4 / 3`, `21 / 9`).
3. **Above-the-Fold vs Below-the-Fold:**
   - Hero / LCP images MUST use `priority` and `loading="eager"`.
   - Below-the-fold images MUST use `loading="lazy"` and `placeholder="blur"` with a low-res data URL.
4. **Responsive sizes:** Always specify real render sizes (e.g. `sizes="(max-width: 1024px) 100vw, 50vw"`).

### Video
1. Never autoplay unmuted video. `muted`, `playsInline`, `autoPlay`, `loop` are mandatory.
2. Always show an optimized static WebP poster image first so LCP is instant.
3. Videos MUST be lazy-loaded using `IntersectionObserver` with `preload="none"`.

### Fonts
1. Never use `@import url(...)` in CSS.
2. Always use `next/font/google` with `display: 'swap'` and strictly loaded weights in `app/layout.tsx`.

### JavaScript & Bundling
1. Lazy-load non-critical or page-specific heavy interactive components using `next/dynamic` (`ssr: false` for client-only widgets like cursor, floating dock, lightbox).
2. Third-party scripts MUST use `next/script` with `strategy="lazyOnload"`.
3. Verify bundle size with `npm run analyze`.

### CSS & Animation
1. ONLY animate `transform` and `opacity`. Never animate `width`, `height`, `left`, `top`, `margin`, or `padding` (causes layout reflows/jank).
2. Always respect `@media (prefers-reduced-motion: reduce)`.

---

## 3. DESIGN AESTHETICS & REPETITION PREVENTION
- Avoid repetitive template archetypes (do NOT slap 3D TiltCards or glare on every card). Use refined luxury editorial cards with subtle border transitions and gold accents.
- Reserve 3D TiltCard only for 1-2 featured showcase elements.
- Always run `npm run build` to verify 0 errors before concluding work.
