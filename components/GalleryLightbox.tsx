'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
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
  aspectRatio?: '16/9' | '4/3' | '3/2' | '1/1' | '21/9';
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

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const handleOpen = (idx: number) => {
    setSelectedIdx(idx);
  };

  const handleClose = () => {
    setSelectedIdx(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  }, [selectedIdx, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  }, [selectedIdx, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (selectedIdx !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIdx, handlePrev, handleNext]);

  const currentItem = selectedIdx !== null ? filteredItems[selectedIdx] : null;

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

      {/* Grid Display with Strict Uniform Alignment */}
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
            aria-label={`${item.title} detaylarını tam boy görüntüle`}
          >
            {/* 1. Strict 16:9 Image Container with Real Photograph */}
            <div className={styles.cardMediaWrapper}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.cardImage}
                unoptimized
              />
              <div className={styles.cardBadgeOverlay}>
                <span>{item.categoryName}</span>
              </div>
            </div>

            {/* 2. Strict Equal Height & Vertically Aligned Footer */}
            <div className={styles.cardFooter}>
              <div className={styles.cardTextGroup}>
                <span className={styles.cardCategory}>{item.categoryName}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>

              {/* 3. Strict Bottom Line & Action Indicator */}
              <div className={styles.cardBottomBar}>
                <span className={styles.cardDimensionBadge}>Yüksek Çözünürlük</span>
                <span className={styles.cardActionLink}>
                  <span>Büyüt</span>
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div className={styles.lightboxModal} role="dialog" aria-modal="true" aria-label="Görsel Detayı">
          <div className={styles.lightboxBackdrop} onClick={handleClose} />
          
          <div className={styles.lightboxContainer}>
            {/* Top Toolbar */}
            <div className={styles.lightboxToolbar}>
              <div className={styles.counter}>
                {selectedIdx! + 1} / {filteredItems.length}
              </div>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={handleClose}
                aria-label="Kapat (ESC)"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Content */}
            <div className={styles.lightboxBody}>
              <div className={styles.lightboxMediaWrapper}>
                <Image
                  src={currentItem.src}
                  alt={currentItem.title}
                  width={2560}
                  height={1707}
                  sizes="(max-width: 1024px) 95vw, 1200px"
                  className={styles.lightboxImage}
                  priority
                  unoptimized
                />
              </div>

              <div className={styles.lightboxMeta}>
                <span className={styles.captionCategory}>{currentItem.categoryName}</span>
                <h3 className={styles.captionTitle}>{currentItem.title}</h3>
                <p className={styles.captionDesc}>{currentItem.description}</p>
              </div>
            </div>

            {/* Controls */}
            <div className={styles.navControls}>
              <button
                type="button"
                className={styles.navBtn}
                onClick={handlePrev}
                aria-label="Önceki Kare"
              >
                <ChevronLeft size={18} />
                <span>Önceki</span>
              </button>
              <button
                type="button"
                className={styles.navBtn}
                onClick={handleNext}
                aria-label="Sonraki Kare"
              >
                <span>Sonraki</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
