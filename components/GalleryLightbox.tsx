'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Phone, CalendarCheck } from 'lucide-react';
import styles from './GalleryLightbox.module.css';

export interface GalleryItem {
  id: string;
  category: string;
  categoryName: string;
  title: string;
  description: string;
  src: string;
  fallbackSrc?: string;
  dimensions?: string;
  aspectRatio?: '3/4' | '9/16' | '16/9' | '4/3' | '1/1';
  isPortrait?: boolean;
}

interface GalleryLightboxProps {
  items: GalleryItem[];
}

const categories = [
  { id: 'all', label: 'Tüm Kareler (25 Fotoğraf)' },
  { id: 'salon', label: 'Kapalı Salon & Mimari' },
  { id: 'sahne', label: 'Sahne & Işık Şovları' },
  { id: 'dans', label: 'İlk Dans & Özel Anlar' },
  { id: 'ozel', label: 'Nişan, Nikah & Karşılama' },
  { id: 'masa', label: 'Masa Düzeni & Detaylar' },
];

export default function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [imgLoading, setImgLoading] = useState(true);
  const [imgFailed, setImgFailed] = useState(false);

  // Touch swipe support on mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpen = (idx: number) => {
    setSelectedIdx(idx);
    setImgLoading(true);
    setImgFailed(false);
  };

  const handleClose = () => {
    setSelectedIdx(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setImgFailed(false);
    setSelectedIdx((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  }, [selectedIdx, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setImgFailed(false);
    setSelectedIdx((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  }, [selectedIdx, filteredItems.length]);

  // Set to track URLs already preloaded in memory to prevent duplicate requests
  const preloadedUrls = useRef<Set<string>>(new Set());

  // Determine optimal Next.js width for the current device screen
  const getOptWidth = useCallback(() => {
    if (typeof window === 'undefined') return 1920;
    const w = window.innerWidth;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const renderWidth = w > 960 ? w * 0.6 : w * 0.95;
    const targetPx = renderWidth * dpr;
    if (targetPx <= 750) return 750;
    if (targetPx <= 1080) return 1080;
    if (targetPx <= 1200) return 1200;
    return 1920;
  }, []);

  const preloadSingleItem = useCallback((src: string) => {
    if (typeof window === 'undefined' || !src) return;
    const optWidth = getOptWidth();
    const nextUrl = `/_next/image?url=${encodeURIComponent(src)}&w=${optWidth}&q=75`;

    if (!preloadedUrls.current.has(nextUrl)) {
      preloadedUrls.current.add(nextUrl);
      const img = new window.Image();
      img.src = nextUrl;
      if (img.decode) {
        img.decode().catch(() => { });
      }
    }

    if (!preloadedUrls.current.has(src)) {
      preloadedUrls.current.add(src);
      const rawImg = new window.Image();
      rawImg.src = src;
      if (rawImg.decode) {
        rawImg.decode().catch(() => { });
      }
    }
  }, [getOptWidth]);

  // Priority preload for immediate neighbors when modal is open (+1 and -1)
  useEffect(() => {
    if (selectedIdx === null || filteredItems.length <= 1) return;
    const len = filteredItems.length;
    const nextItem = filteredItems[(selectedIdx + 1) % len];
    const prevItem = filteredItems[(selectedIdx - 1 + len) % len];
    if (nextItem?.src) preloadSingleItem(nextItem.src);
    if (prevItem?.src) preloadSingleItem(prevItem.src);
  }, [selectedIdx, filteredItems, preloadSingleItem]);

  // Gentle sequential background preload of all gallery items (one by one, never blocking)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let isCancelled = false;
    let currentIdx = 0;

    const loadNext = () => {
      if (isCancelled || currentIdx >= filteredItems.length) return;
      const item = filteredItems[currentIdx];
      if (item?.src) {
        preloadSingleItem(item.src);
      }
      currentIdx++;
      setTimeout(loadNext, 120);
    };

    const idleTimer = setTimeout(loadNext, 300);

    return () => {
      isCancelled = true;
      clearTimeout(idleTimer);
    };
  }, [filteredItems, preloadSingleItem]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (selectedIdx === null) return;

    const scrollY = window.scrollY;
    const originalBodyPosition = document.body.style.position;
    const originalBodyTop = document.body.style.top;
    const originalBodyWidth = document.body.style.width;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.width = originalBodyWidth;
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.scrollTo(0, scrollY);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIdx, handlePrev, handleNext]);

  // Accessible Focus Trap
  useEffect(() => {
    if (selectedIdx === null || !modalRef.current) return;

    const modalEl = modalRef.current;
    const focusableElements = modalEl.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }, [selectedIdx]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diffX = touchStartX.current - touchEndX.current;
      if (diffX > 50) {
        handleNext();
      } else if (diffX < -50) {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentItem = selectedIdx !== null ? filteredItems[selectedIdx] : null;

  const activeImgSrc = currentItem
    ? imgFailed
      ? currentItem.fallbackSrc || currentItem.src
      : currentItem.src
    : '';



  return (
    <div>
      {/* Category Filter Pills */}
      <div className={styles.filterBar}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterBtnActive : ''}`}
            onClick={() => {
              setActiveCategory(cat.id);
              setSelectedIdx(null);
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 16:9 Cinematic Gallery Grid */}
      <div className={styles.galleryGrid}>
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            className={styles.galleryCard}
            onClick={() => handleOpen(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleOpen(idx);
            }}
            aria-label={`${item.title} fotoğrafını büyüt`}
          >
            {/* 16:9 Cinematic Image Container */}
            <div className={styles.cardMediaWrapper}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.cardImage}
                priority={idx < 3}
                loading={idx < 3 ? 'eager' : 'lazy'}
              />
              <div className={styles.cardBadgeOverlay}>
                <span>{item.categoryName}</span>
              </div>
            </div>

            {/* Card Content */}
            <div className={styles.cardFooter}>
              <div className={styles.cardTextGroup}>
                <span className={styles.cardCategory}>{item.categoryName}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>

              {/* Clean Bottom Bar: Just 'Büyüt' without 'Yüksek Çözünürlük' */}
              <div className={styles.cardBottomBar}>
                <span className={styles.cardActionLink}>
                  <span>Büyüt</span>
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Split Lightbox Modal (Refined Warm Editorial Luxury) */}
      {currentItem && (
        <div
          ref={modalRef}
          className={styles.lightboxModal}
          role="dialog"
          aria-modal="true"
          aria-label={`${currentItem.title} Detay Modalı`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Ambient Backdrop */}
          <div className={styles.lightboxBackdrop} onClick={handleClose} />

          {/* Split Container: Left Photo Stage, Right Editorial Panel */}
          <div className={styles.lightboxContainer}>
            {/* Left: Photographic Stage */}
            <div className={styles.lightboxStage}>
              {imgLoading && (
                <div className={styles.loadingSpinner}>
                  <div className={styles.spinnerRing} />
                </div>
              )}

              <div className={styles.imageCanvas}>
                <Image
                  src={activeImgSrc}
                  alt={currentItem.title}
                  width={currentItem.aspectRatio === '9/16' ? 1440 : 1920}
                  height={2560}
                  sizes="(max-width: 960px) 95vw, 60vw"
                  className={styles.stageImage}
                  priority
                  unoptimized={imgFailed}
                  onLoad={() => setImgLoading(false)}
                  onError={() => {
                    if (!imgFailed) {
                      setImgFailed(true);
                    }
                  }}
                />
              </div>

              {/* Floating Stage Nav Arrows */}
              <button
                type="button"
                className={`${styles.stageArrow} ${styles.stageArrowPrev}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Önceki Fotoğraf"
                title="Önceki (←)"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                className={`${styles.stageArrow} ${styles.stageArrowNext}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Sonraki Fotoğraf"
                title="Sonraki (→)"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Right: Clean Editorial Information & Actions Panel */}
            <div className={styles.lightboxSidebar}>
              {/* Top Row: Counter & Close */}
              <div className={styles.sidebarHeader}>
                <div className={styles.counterText}>
                  <span className={styles.counterCurrent}>
                    {String(selectedIdx! + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.counterDivider}>/</span>
                  <span className={styles.counterTotal}>
                    {String(filteredItems.length).padStart(2, '0')}
                  </span>
                </div>
                <button
                  type="button"
                  className={styles.closeBtn}
                  onClick={handleClose}
                  aria-label="Kapat (ESC)"
                  title="Kapat (ESC)"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Middle: Title, Description & Salon Overview */}
              <div className={styles.sidebarBody}>
                <span className={styles.sidebarCategory}>{currentItem.categoryName}</span>
                <h2 className={styles.sidebarTitle}>{currentItem.title}</h2>
                <p className={styles.sidebarDesc}>{currentItem.description}</p>

                {/* Clean Micro Stats (Fitted, No Gimmicks) */}
                <div className={styles.microStatsRow}>
                  <div className={styles.statPill}>
                    <span className={styles.statPillLabel}>Kapasite</span>
                    <strong className={styles.statPillVal}>1.000 Kişi</strong>
                  </div>
                  <div className={styles.statPill}>
                    <span className={styles.statPillLabel}>Tavan</span>
                    <strong className={styles.statPillVal}>Yüksek & Ferah</strong>
                  </div>
                  <div className={styles.statPill}>
                    <span className={styles.statPillLabel}>Otopark</span>
                    <strong className={styles.statPillVal}>Geniş & Rahat</strong>
                  </div>
                </div>

                {/* Tasteful Action Buttons */}
                <div className={styles.actionCard}>
                  <a
                    href="tel:+903126230000"
                    className={styles.phoneActionBtn}
                  >
                    <Phone size={16} />
                    <span>Telefon ile Arayın</span>
                  </a>
                  <Link
                    href="/iletisim?paket=dugun"
                    className={styles.bookingActionBtn}
                    onClick={handleClose}
                  >
                    <CalendarCheck size={16} />
                    <span>Randevu & Müsaitlik</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
