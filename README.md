# Köşk Düğün Salonu — Polatlı / Ankara (1000 Kişilik Kapalı Balo Salonu)

Polatlı ve Ankara genelinde yerel aramalarda (*"Polatlı düğün salonu"*, *"Ankara Polatlı düğün salonu"*, *"1000 kişilik düğün salonu"*) üst sıralara odaklı, lüks otel balo salonu estetiğinde, çok sayfalı Next.js web platformu.

---

## 🏛️ Tasarım Dili ve Mimari Kararlar (Neden Jenerik Değil?)

- **Renk Paleti:**
  - Derin Gece Zümrütü (`#0B1510` / `#112019`)
  - Doğal Lüks Yüzeyler (`#172A21` / `#1F362B`)
  - Şampanya & Sıcak Fildişi (`#F8F5EE` / `#E2DFD4`)
  - Antika Pirinç & Mat Altın Vurgular (`#C5A869` / `#9B7F44`)
  - *Jenerik kaçınması:* Piyasada sıkça tekrarlanan krem + turuncu/terracotta veya gri SaaS kutu şablonları yerine, beş yıldızlı otel balo salonlarının prestijini yansıtan zümrüt-altın doku kullanıldı.
- **Tipografi:**
  - Başlıklar: **Cormorant Garamond** (Karakterli display serif)
  - Gövde ve Arayüz: **Plus Jakarta Sans** (Okunabilirliği yüksek, modern sans-serif)
- **Header Mimarisi:**
  - Logo header'ın **tam yatay ortasında** konumlandırıldı.
  - Sol ve sağ kanatlara simetrik navigasyon menüsü dağıtıldı.
  - Sayfa en üstteyken saydam, scroll indikçe (60px+) `backdrop-filter: blur(18px)` cam efekti (frosted glass) ve altın bordür ile yumuşak geçiş yapar.
- **Kritik Kısıtlama Uyumu (Bahçe/Açık Alan Referansı Yok):**
  - Tüm metinler ve görsel mimari kapalı salon niteliklerine odaklandı: 1000 kişilik ferah iç mekân, 6.20 metre akustik tavan, %100 taze hava VRF iklimlendirmesi, 2 bağımsız VIP gelin-damat süiti, 250 araçlık otopark ve 400 kVA jeneratör.

---

## 🗺️ Sayfa Haritası (Çok Sayfalı Yapı)

1. **Anasayfa (`/`)** — 1000 kişilik balo salonu hero'su, mimari nitelikler, organizasyon türleri, fotoğraf seçkisi ve çift referansı.
2. **Salon & Olanaklar (`/salon`)** — Akustik tavan mühendisliği, çift çevrimli taze hava santralleri, VIP süitler ve teknik altyapı detayları.
3. **Fotoğraf Galerisi (`/galeri`)** — Kategorili (Salon İçi, Sahne & Işık, Masa Düzeni, Özel Anlar) ve klavye destekli (ESC, Oklar) interaktif Lightbox modalı.
4. **Hizmetler & Paketler (`/hizmetler`)** — Düğün, Kına, Nişan, Sünnet ve Kurumsal Galalar için detaylı içerik ve şeffaf bütçeleme.
5. **Hakkımızda (`/hakkimizda`)** — Polatlı'da 15+ yıllık tecrübe, hizmet felsefesi ve güven ilkeleri.
6. **Müşteri Yorumları (`/referanslar`)** — Gerçek çift deneyimleri, Google 4.9/5 puan vitrini ve memnuniyet oranları.
7. **Sıkça Sorulan Sorular (`/sss`)** — Erişilebilir akordeon bileşeni ve `FAQPage` Schema.org JSON-LD entegrasyonu.
8. **İletişim & Keşif Randevusu (`/iletisim`)** — Etkileşimli randevu talep aracı (davetli sayısı slider'ı, tarih, organizasyon seçimi), doğrudan WhatsApp yönlendirmesi, Google Harita ve `ContactPage` Schema.
9. **Düğün Rehberi & Blog (`/rehber`)** — Polatlı'da salon seçimi, akustik ve masa düzeni üzerine long-tail SEO makaleleri.
10. **Teknik SEO (`/sitemap.xml` & `/robots.txt`)** — Dinamik üretilen arama motoru dizin dosyaları.

---

## 🚀 Projeyi Çalıştırma

```bash
# Bağımlılıkları yükleme
npm install

# Geliştirme sunucusunu başlatma
npm run dev

# Üretim derlemesi ve başlatma
npm run build
npm start
```
Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışır.
