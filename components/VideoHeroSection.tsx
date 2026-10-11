'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './VideoHeroSection.module.css';

interface VideoHeroSectionProps {
  videoSrc?: string;
  webmSrc?: string;
  posterSrc?: string;
}

export default function VideoHeroSection({
  videoSrc,
  webmSrc,
  posterSrc = '/images/venue/kosk-ana-balo-salonu-genel-perspektif.webp',
}: VideoHeroSectionProps) {
  const [shouldLoadVideo, setShouldLoadVideo] = React.useState(false);
  const videoWrapperRef = React.useRef<HTMLDivElement>(null);

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

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  // Video lazy-loading with Intersection Observer
  useEffect(() => {
    if (!videoSrc && !webmSrc) return;
    if (!('IntersectionObserver' in window)) {
      setShouldLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (videoWrapperRef.current) {
      observer.observe(videoWrapperRef.current);
    }

    return () => observer.disconnect();
  }, [videoSrc, webmSrc]);

  return (
    <section
      ref={videoWrapperRef}
      className={styles.videoHeroWrapper}
      aria-label="Salon Tanıtım ve Mimari Görünümü"
    >
      <div className={styles.videoContainer}>
        {/* Poster Image: Always rendered first for optimal LCP */}
        <Image
          src={posterSrc}
          alt="Köşk Düğün Salonu Kolonsuz Ana Balo Salonu Genel Perspektif"
          fill
          priority
          className={styles.fallbackPosterImg}
          sizes="100vw"
          quality={85}
        />

        {/* Lazy-loaded video if sources provided */}
        {shouldLoadVideo && (videoSrc || webmSrc) && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={posterSrc}
            className={styles.fallbackPosterImg}
          >
            {webmSrc && <source src={webmSrc} type="video/webm" />}
            {videoSrc && <source src={videoSrc} type="video/mp4" />}
          </video>
        )}

        {/* Lüks yumuşak kenar geçiş katmanı & Rozet */}
        <div className={styles.videoVignette}>
          <div className={styles.heroBadgeWrapper}>
            <span className={styles.heroBadgeDot}></span>
            <span className={styles.heroBadgeText}>
              1.000 Kişilik Kolonsuz Ana Balo Salonu · Kesintisiz Görüş & Yüksek Tavan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
