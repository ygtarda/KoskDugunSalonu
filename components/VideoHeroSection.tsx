'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './VideoHeroSection.module.css';

export default function VideoHeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Header yüksekliğini dinamik olarak ölç ve CSS değişkenine aktar
    const updateHeaderHeight = () => {
      const header = document.getElementById('main-site-header');
      if (header) {
        document.documentElement.style.setProperty(
          '--header-actual-height',
          `${header.offsetHeight}px`
        );
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    // Mobil tarayıcılarda da otomatik başlatmayı garantiye al
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Otomatik oynatma engellenirse sessizce poster görüntüsünü gösterir
      });
    }

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return (
    <section className={styles.videoHeroWrapper} aria-label="Salon Tanıtım Videosu">
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.ambientVideo}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/venue/kosk-ana-balo-salonu-genel-perspektif.webp"
        >
          <source src="/videos/salon-tanitim.mp4" type="video/mp4" />
          <source src="/videos/tanitim.mp4" type="video/mp4" />
          {/* Video yüklenene veya dosya henüz eklenene kadar yüksek çözünürlüklü yedek arka plan */}
          <Image
            src="/images/venue/kosk-ana-balo-salonu-genel-perspektif.webp"
            alt="Köşk Düğün Salonu Balo Salonu Görünümü"
            fill
            priority
            className={styles.fallbackPosterImg}
            sizes="100vw"
            unoptimized
          />
        </video>

        {/* Lüks yumuşak kenar geçiş katmanı */}
        <div className={styles.videoVignette} />
      </div>
    </section>
  );
}
