'use client';

import React from 'react';
import Script from 'next/script';
import { ExternalLink, MessageSquarePlus } from 'lucide-react';
import styles from './GoogleReviewsWidget.module.css';

export const GOOGLE_BUSINESS_URL = 'https://share.google/Ut9Fd72yIZ5c9Tg4P';
export const ELFSIGHT_WIDGET_ID = '22bbd0fd-a846-459f-802c-779ef02c9b1c';

export function GoogleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google"
    >
      <path
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
        fill="#4285F4"
      />
      <path
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
        fill="#34A853"
      />
      <path
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.98 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
        fill="#FBBC05"
      />
      <path
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function GoogleReviewsWidget() {
  return (
    <div className={styles.widgetWrapper} id="google-yorumlar-bolumu">
      {/* Official Elfsight Platform CDN */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />

      {/* Elegant Top Google Bar */}
      <div className={styles.topGoogleStrip}>
        <div className={styles.stripLeft}>
          <div className={styles.googleGLogo}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Google"
            >
              <path
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                fill="#4285F4"
              />
              <path
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                fill="#34A853"
              />
              <path
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.98 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                fill="#FBBC05"
              />
              <path
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                fill="#EA4335"
              />
            </svg>
          </div>
          <div>
            <h2 className={styles.stripTitle}>Polatlı Köşk Düğün Salonu</h2>
            <span className={styles.stripSubtitle}>
              Google Haritalar Doğrulanmış Canlı Müşteri Değerlendirmeleri
            </span>
          </div>
        </div>

        <div className={styles.stripActions}>
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnStripGoogle}
            id="google-maps-strip-link"
          >
            <span>Google Haritalar'da Aç</span>
            <ExternalLink size={14} />
          </a>
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnStripReview}
            id="google-write-review-strip-link"
          >
            <MessageSquarePlus size={15} />
            <span>Yorum Yazın</span>
          </a>
        </div>
      </div>

      {/* Live Google Reviews Stream */}
      <div className={styles.liveStreamContainer}>
        <div
          className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`}
          data-elfsight-app-lazy
        />
      </div>
    </div>
  );
}
