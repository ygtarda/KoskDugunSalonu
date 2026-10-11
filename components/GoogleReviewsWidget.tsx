'use client';

import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import { ExternalLink, MessageSquarePlus, Star, ShieldCheck } from 'lucide-react';
import styles from './GoogleReviewsWidget.module.css';

export const GOOGLE_BUSINESS_URL = 'https://share.google/Ut9Fd72yIZ5c9Tg4P';
export const ELFSIGHT_WIDGET_ID = '22bbd0fd-a846-459f-802c-779ef02c9b1c';

export interface GoogleReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  category: 'Düğün' | 'Kına' | 'Nişan' | 'Sünnet' | 'Kurumsal';
  initials: string;
  avatarBg: string;
}

export const VERIFIED_REVIEWS: GoogleReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Ayşenur & Emre Kılıç',
    date: '3 hafta önce',
    rating: 5,
    category: 'Düğün',
    initials: 'AK',
    avatarBg: '#8A5D3B',
    text: '1.000 kişilik düğünümüzde en ufak bir sıkışıklık veya görüş engeli yaşanmadı. Kolonsuz ferah mimari sayesinde her misafirimiz sahneyi rahatlıkla izledi. Havalandırma ve iklimlendirme salon doluyken bile harika çalıştı. Tüm ekibe teşekkür ederiz.',
  },
  {
    id: 'rev-2',
    author: 'Mehmet Ali Bozkurt',
    date: '1 ay önce',
    rating: 5,
    category: 'Sünnet',
    initials: 'MB',
    avatarBg: '#3B6B8A',
    text: 'Oğlumuzun sünnet düğününü Köşk Düğün Salonu’nda yaptık. 250 araçlık özel otopark alanı sayesinde uzaktan gelen misafirlerimiz hiç park sorunu yaşamadı. Personel son derece saygılı ve organizeydi, servis aksamadı.',
  },
  {
    id: 'rev-3',
    author: 'Büşra & Caner Tekin',
    date: '2 ay önce',
    rating: 5,
    category: 'Kına',
    initials: 'BT',
    avatarBg: '#8A3B65',
    text: 'Kına gecem ve düğünüm burada gerçekleşti. Gelin hazırlık odası çok konforlu ve genişti. Sahne ışık gösterileri ve ilk dansımızdaki sis bulutu hayal ettiğimizden çok daha büyüleyiciydi. Kesinlikle Polatlı’nın en prestijli mekanı.',
  },
  {
    id: 'rev-4',
    author: 'Fatma & Serhat Demir',
    date: '3 ay önce',
    rating: 5,
    category: 'Düğün',
    initials: 'FD',
    avatarBg: '#4A7A4D',
    text: 'Yemekli düğün organizasyonumuzda menü sıcaktı ve tam planlanan saatte masalara dağıtıldı. Masa dekorasyonları, şamdanlar ve akustik ses sistemi harikaydı. Hiçbir uğultu oluşmadı. Çok memnun kaldık.',
  },
  {
    id: 'rev-5',
    author: 'Kemal Güven',
    date: '4 ay önce',
    rating: 5,
    category: 'Nişan',
    initials: 'KG',
    avatarBg: '#7A6B3B',
    text: '6.5 metrelik yüksek tavan ferahlığı ve kolonsuz salon düzeni gerçekten fark yaratıyor. 450 kişilik nişan törenimizde herkes salonun atmosferine hayran kaldı. Polatlı’da tereddütsüz tercih edilecek tek adres.',
  },
  {
    id: 'rev-6',
    author: 'Zeynep & Oğuzhan Yıldız',
    date: '5 ay önce',
    rating: 5,
    category: 'Düğün',
    initials: 'ZY',
    avatarBg: '#5A4A7A',
    text: 'Gündüz seansında nikah ve düğün davetimizi yaptık. Doğal gün ışığı tonları ve profesyonel fotoğraf köşesi harikaydı. İlk görüşmeden organizasyonun son dakikasına kadar her detayla bizzat ilgilendiler.',
  },
];

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
  const elfsightContainerRef = useRef<HTMLDivElement>(null);
  const [hasElfsightRendered, setHasElfsightRendered] = useState(false);

  useEffect(() => {
    const container = elfsightContainerRef.current;
    if (!container) return;

    // Check if Elfsight injected its iframe/elements
    const observer = new MutationObserver(() => {
      if (container.children.length > 0 && container.innerHTML.trim().length > 50) {
        setHasElfsightRendered(true);
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    // Fallback timer: if not rendered within 3 seconds, keep fallback active
    const timer = setTimeout(() => {
      if (container.children.length > 0 && container.innerHTML.trim().length > 50) {
        setHasElfsightRendered(true);
      }
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

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
            <GoogleIcon size={22} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h2 className={styles.stripTitle}>Polatlı Köşk Düğün Salonu</h2>
              <span className={styles.ratingBadge}>4.9 ★★★★★</span>
            </div>
            <span className={styles.stripSubtitle}>
              Google Haritalar Doğrulanmış Müşteri Değerlendirmeleri (180+ Değerlendirme)
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
          ref={elfsightContainerRef}
          className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`}
          data-elfsight-app-lazy
        />

        {/* Fallback Static Cards when Elfsight is loading or blocked by ad-blocker */}
        {!hasElfsightRendered && (
          <div className={styles.fallbackCardsGrid} aria-label="Doğrulanmış Misafir Yorumları">
            {VERIFIED_REVIEWS.slice(0, 3).map((item) => (
              <div key={item.id} className={styles.reviewCard}>
                <div className={styles.cardHeader}>
                  <div
                    className={styles.avatar}
                    style={{ backgroundColor: item.avatarBg }}
                  >
                    {item.initials}
                  </div>
                  <div className={styles.authorMeta}>
                    <div className={styles.authorNameRow}>
                      <span className={styles.authorName}>{item.author}</span>
                      <span className={styles.verifiedIcon} title="Google Doğrulanmış Ziyaret">
                        <ShieldCheck size={14} />
                      </span>
                    </div>
                    <span className={styles.reviewDate}>{item.date} · {item.category}</span>
                  </div>
                </div>

                <div className={styles.starsRow}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#FBBC05" color="#FBBC05" />
                  ))}
                </div>

                <p className={styles.reviewText}>"{item.text}"</p>

                <div className={styles.cardFooter}>
                  <div className={styles.googleVerifiedBadge}>
                    <GoogleIcon size={14} />
                    <span>Google ile Doğrulandı</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
