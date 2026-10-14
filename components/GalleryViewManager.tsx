'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Grid,
  Sparkles,
  MoveHorizontal,
  ArrowRight,
  Building2,
  CalendarCheck,
} from 'lucide-react';
import PolaroidLineCarousel, { Slide } from '@/components/ui/polaroid-line-carousel';
import GalleryLightbox, { GalleryItem } from '@/components/GalleryLightbox';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './GalleryViewManager.module.css';

interface GalleryViewManagerProps {
  galleryItems: GalleryItem[];
  venueSlides: Slide[];
}

export default function GalleryViewManager({
  galleryItems,
  venueSlides,
}: GalleryViewManagerProps) {
  const [view, setView] = useState<'modern' | 'klasik'>('modern');

  // URL parametresine veya hash'e göre klasik görünümle açma desteği (?gorunum=klasik veya #klasik)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      if (
        searchParams.get('gorunum') === 'klasik' ||
        searchParams.get('view') === 'klasik' ||
        window.location.hash === '#klasik'
      ) {
        setView('klasik');
      }
    }
  }, []);

  const switchToClassic = () => {
    setView('klasik');
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', '/galeri?gorunum=klasik');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const switchToModern = () => {
    setView('modern');
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', '/galeri');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.galleryViewRoot}>
      {/* Breadcrumb Navigation - Diğer tüm sayfalarla birebir aynı: Header altında tam genişlikte */}
      <Breadcrumb items={[{ label: 'Fotoğraf Galerisi' }]} />

      {view === 'modern' ? (
        /* ===================================================================
           1. MODERN GÖRÜNÜM: İpe Asılı Polaroid Karusel Vitrini (Varsayılan)
           =================================================================== */
        <div style={{ backgroundColor: 'var(--color-sand, #FAF8F5)', paddingTop: '1.25rem' }}>
          <div className="container">
            {/* Header Başlık Grubu */}
            <div className={styles.modernHeaderWrap}>
              <h1 className={styles.modernTitle}>
                Anları Canlı Yaşayın: Köşk Fotoğraf Vitrini
              </h1>

              <p className={styles.modernDesc}>
                İpe asılı mandallı polaroid kartlarını farenizle veya parmağınızla sağa-sola kaydırarak
                salonumuzun farklı köşelerindeki gerçek atmosferi keşfedin.
              </p>

              <div className={styles.hintBadge}>
                <MoveHorizontal size={16} />
                <span>Kartları sürükleyin, tıklayın veya alt kısımdaki ok butonlarını kullanın</span>
              </div>
            </div>
          </div>

          {/* Hanging Polaroid Carousel Bileşeni */}
          <section className={styles.carouselSection} aria-label="İpe Asılı Fotoğraf Vitrini">
            <PolaroidLineCarousel
              slides={venueSlides}
              height="clamp(520px, 62vh, 600px)"
              cardWidth={320}
              sag={32}
              topOffset={8}
              swing={1.1}
              autoplay={5000}
              background="var(--color-sand, #FAF8F5)"
              string="#8A7F72"
            />
          </section>

          {/* Alt Bilgi & Klasik Galeriye Geçiş Kartı (Klasik galeri alt kartı ile birebir aynı tasarım ve merkezleme) */}
          <section className="container" style={{ paddingBottom: '6rem' }}>
            <div className={styles.classicBottomBanner} style={{ marginTop: '0' }}>
              <h3 className={styles.classicBottomTitle}>
                Klasik Izgara Galeriyi İncelemek İster misiniz?
              </h3>
              <p className={styles.classicBottomDesc}>
                Kategorilere ayrılmış 20+ fotoğraftan oluşan lightbox destekli detaylı salon galerimize
                ve fotoğraf köşelerine dilediğiniz zaman dönebilirsiniz.
              </p>
              <div className={styles.classicBottomActions}>
                <button
                  type="button"
                  onClick={switchToClassic}
                  className="btn btn-outline"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                  id="open-classic-gallery-btn"
                >
                  <Grid size={16} />
                  <span>Klasik Izgara Galeriyi Aç</span>
                </button>



                <Link
                  href="/iletisim"
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  id="gallery-modern-booking-btn"
                >
                  <CalendarCheck size={18} />
                  <span>Salonu Yerinde Görün</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      ) : (
        /* ===================================================================
           2. KLASİK GÖRÜNÜM: 20+ Fotoğraflı Kategori Filtreli Izgara & Lightbox
           =================================================================== */
        <div>
          <section className={styles.classicHeaderSection}>
            <div className="container">
              {/* Modern Galeriye Geri Dönüş Butonu
              <div className={styles.topSwitchBar}>
                <button
                  type="button"
                  onClick={switchToModern}
                  className={styles.modernPillBtn}
                  id="return-to-modern-gallery-btn"
                >
                  <Sparkles size={15} style={{ color: 'var(--color-champagne-dark, #8A6840)' }} />
                  <span>İnteraktif Polaroid Vitrinine Dön</span>
                  <ArrowRight size={14} />
                </button>
              </div> */}

              <div style={{ maxWidth: '820px', margin: '0 auto' }}>
                <span className={styles.classicCategoryLabel}>
                  Mekân Görünümleri
                </span>
                <h1 className={styles.classicTitle}>
                  Kapalı Salonumuzdan Fotoğraflar
                </h1>
                <p className={styles.classicSubtitle}>
                  Köşk Düğün Salonu’nun 1.200 m² kolonsuz ferah yapısını, yüksek tavanını ve
                  davet masalarının geniş yerleşim düzenini inceleyin.
                </p>
              </div>
            </div>
          </section>

          <section className="container" style={{ paddingBottom: '6rem' }}>
            {/* Orijinal Klasik Lightbox Izgarası (Kesinlikle korundu) */}
            <GalleryLightbox items={galleryItems} />

            {/* Klasik Sayfa Altı Tanıtım & İletişim Kartı */}
            <div className={styles.classicBottomBanner}>
              <h3 className={styles.classicBottomTitle}>
                Salonu Kendi Gözlerinizle Görmek İster Misiniz?
              </h3>
              <p className={styles.classicBottomDesc}>
                Fotoğraflar atmosferi hissettirir; ancak yüksek tavan ferahlığını ve salonun genişliğini
                yerinde görmek ve tarih müsaitliğini öğrenmek için bizimle hemen iletişime geçebilirsiniz.
              </p>
              <div className={styles.classicBottomActions}>
                <button
                  type="button"
                  onClick={switchToModern}
                  className="btn btn-outline"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                >
                  <Sparkles size={16} />
                  <span>İnteraktif Polaroid Vitrine Dön</span>
                </button>
                <Link href="/iletisim" className="btn btn-primary">
                  <CalendarCheck size={18} />
                  <span>Keşif & Fiyat Teklifi Alın</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
