'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { RotateCcw, Home, Phone, MessageCircle, AlertTriangle } from 'lucide-react';
import styles from './error.module.css';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Hatayı konsola güvenli şekilde logla (geliştirici ve izleme araçları için)
    console.error('[Köşk Düğün Salonu Uygulama Hatası]:', error);
  }, [error]);

  const isDev = process.env.NODE_ENV === 'development';

  return (
    <div className={styles.errorWrapper}>
      <article className={styles.errorCard} aria-labelledby="error-heading">
        {/* Üst Rozet */}
        <div className={styles.badge}>
          <span>SİSTEM BİLGİLENDİRMESİ</span>
        </div>

        {/* Zarif 500 Kodu */}
        <div className={styles.errorCode} aria-hidden="true">
          500
        </div>

        {/* İnce Mimari Çizgi Motif SVG Bölücü */}
        <div className={styles.ornamentDivider} aria-hidden="true">
          <span className={styles.dividerLine} />
          <span className={styles.dividerDiamond} />
          <span className={styles.dividerLineRight} />
        </div>

        {/* Anlamsal h1 Başlığı */}
        <h1 id="error-heading" className={styles.title}>
          Beklenmeyen Bir Aksaklık Oluştu
        </h1>

        {/* Nazik, Konuksever Açıklama */}
        <p className={styles.desc}>
          Sayfa görüntülenirken geçici bir teknik aksaklık meydana geldi. Mühendislik ekibimiz durumdan haberdar
          edildi. Dilerseniz sayfayı yeniden yüklemeyi deneyebilir ya da doğrudan salon yetkilimizle iletişime
          geçebilirsiniz.
        </p>

        {/* Ana Aksiyon Butonları */}
        <div className={styles.actions}>
          <button
            type="button"
            onClick={() => reset()}
            className={styles.primaryBtn}
            id="error-retry-btn"
            aria-label="Sayfayı Yeniden Yüklemeyi Dene"
          >
            <RotateCcw size={17} />
            <span>Tekrar Dene</span>
          </button>

          <Link href="/" className={styles.outlineBtn} id="error-home-btn">
            <Home size={17} />
            <span>Anasayfaya Dön</span>
          </Link>
        </div>

        {/* Danışma & İletişim Şeridi */}
        <aside className={styles.conciergeStrip} aria-label="Salon Yetkilisi Danışma Hattı">
          <div className={styles.conciergeText}>
            <AlertTriangle size={18} className={styles.conciergeIcon} />
            <span>Davet planlamanız veya tarih sorgulamalarınız için bize hemen ulaşın:</span>
          </div>
          <div className={styles.conciergeActions}>
            <a href="tel:+903126230000" className={styles.conciergeLink} id="error-call-link">
              <Phone size={14} />
              <span>0 (312) 623 00 00</span>
            </a>
            <a
              href="https://wa.me/903126230000?text=Merhaba%2C%20web%20sitenizde%20bir%20hata%20ile%20kar%C5%9F%C4%B1la%C5%9Ft%C4%B1m.%20Bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.conciergeLink}
              id="error-wa-link"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </aside>

        {/* Geliştirme Ortamı Detayları (Üretimde Asla Gösterilmez) */}
        {isDev && (
          <div className={styles.devDebugWrapper} aria-label="Geliştirici Hata Detayları">
            <details className={styles.devDetails}>
              <summary className={styles.devSummary}>Teknik Hata Bilgisi (Yalnızca Dev Ortamında)</summary>
              <p style={{ margin: '0.4rem 0 0', color: 'var(--color-powder)' }}>
                <strong>Digest:</strong> {error.digest || 'Belirtilmedi'}
              </p>
              <pre>{error.message || 'Hata mesajı bulunamadı.'}</pre>
            </details>
          </div>
        )}
      </article>
    </div>
  );
}
