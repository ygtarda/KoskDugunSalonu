import React from 'react';
import styles from './ImagePlaceholder.module.css';

interface ImagePlaceholderProps {
  title?: string;
  dimensions?: string;
  aspectRatio?: '16/9' | '4/3' | '3/2' | '1/1' | '21/9';
  category?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ImagePlaceholder({
  title = 'Mekân Görseli',
  dimensions = '1600 × 900 (16:9)',
  aspectRatio = '16/9',
  category,
  className = '',
  style,
}: ImagePlaceholderProps) {
  const ratioClass = {
    '16/9': styles.ratio_16_9,
    '4/3': styles.ratio_4_3,
    '3/2': styles.ratio_3_2,
    '1/1': styles.ratio_1_1,
    '21/9': styles.ratio_21_9,
  }[aspectRatio] || styles.ratio_16_9;

  return (
    <div
      className={`${styles.wrapper} ${ratioClass} ${className}`}
      style={style}
      role="img"
      aria-label={`${title} yer tutucu görseli`}
    >
      <div className={styles.gridPattern} />
      <div className={styles.cornerMarks} />

      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.dimensions}>{dimensions}</div>
        {category && <span className={styles.badge}>{category}</span>}
      </div>
    </div>
  );
}
