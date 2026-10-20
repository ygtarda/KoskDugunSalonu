'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './FloatingContactBar.module.css';

export default function FloatingContactBar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isContact = pathname === '/iletisim';

  const whatsappUrl =
    'https://wa.me/905382969079?text=Merhaba,%20K%C3%B6%C5%9Fk%20D%C3%BC%C4%9F%C3%BCn%20Salonu%20hakk%C4%B1nda%20bilgi%20ve%20tarih%20m%C3%BCsaitli%C4%9Fi%20%C3%B6%C4%9Frenmek%20istiyorum.';
  const instagramUrl = 'https://www.instagram.com/koskdugunsalonu';
  const phoneUrl = 'tel:+905382969079';

  return (
    <aside
      className={`${styles.floatingDock} ${isHome ? styles.hideOnMobileHome : ''} ${isContact ? styles.hideOnContact : ''}`}
      aria-label="Hızlı İletişim Kanalları"
    >
      {/* 1. WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.actionButton} ${styles.btnWhatsapp}`}
        aria-label="WhatsApp üzerinden yazın (Hızlı Yanıt)"
        id="floating-whatsapp-btn"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="#FFFFFF"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className={styles.tooltip}>WhatsApp ile Yazın</span>
      </a>

      {/* 2. Instagram Button */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.actionButton} ${styles.btnInstagram}`}
        aria-label="Instagram profilimizi ziyaret edin"
        id="floating-instagram-btn"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
        </svg>
        <span className={styles.tooltip}>Instagram @koskdugunsalonu</span>
      </a>

      {/* 3. Phone Call Button */}
      <a
        href={phoneUrl}
        className={`${styles.actionButton} ${styles.btnPhone}`}
        aria-label="Hemen Arayın: 0538 296 90 79"
        id="floating-phone-btn"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className={styles.tooltip}>Hemen Arayın: 0538 296 90 79</span>
      </a>
    </aside>
  );
}
