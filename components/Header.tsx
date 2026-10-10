'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import styles from './Header.module.css';

const leftNavLinks = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/galeri', label: 'Galeri' },
];

const rightNavLinks = [
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/sss', label: 'SSS' },
];

const drawerNavLinks = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hizmetler', label: 'Hizmetlerimiz' },
  { href: '/galeri', label: 'Fotoğraf Galerisi' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/sss', label: 'SSS & Misafir Yorumları' },
  { href: '/iletisim', label: 'İletişim & Randevu' },
];

interface HeaderProps {
  embedded?: boolean;
}

export default function Header({ embedded = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sayfa değiştiğinde menüyü otomatik kapat
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // ESC tuşuna basıldığında menüyü kapat
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Arka plan scroll kilidi (iOS Safari & Android uyumlu)
  useEffect(() => {
    if (!mobileMenuOpen) return;

    // Menü açılmadan önceki scroll pozisyonunu kaydet
    const scrollY = window.scrollY;

    const originalBodyPosition = document.body.style.position;
    const originalBodyTop = document.body.style.top;
    const originalBodyWidth = document.body.style.width;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    // Body'yi sabitleyip sayfa kaymasını tamamen durdur
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      // Menü kapandığında orijinal stilleri geri yükle
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.width = originalBodyWidth;
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;

      // Kullanıcının bulunduğu scroll konumuna geri dön
      window.scrollTo(0, scrollY);
    };
  }, [mobileMenuOpen]);

  const isHome = pathname === '/';

  // Yandan açılır mobil çekmece menü (React Portal ile document.body'ye direkt monte edilir)
  const drawerPortal = mounted ? createPortal(
    <div
      className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}
      aria-hidden={!mobileMenuOpen}
    >
      {/* Karartma katmanı: tıklandığında kapanır, touchmove arka plana sızmaz */}
      <div
        className={styles.mobileDrawerBackdrop}
        onClick={() => setMobileMenuOpen(false)}
        onTouchMove={(e) => e.preventDefault()}
      />

      {/* Yandan kayan menü paneli (İçerisinde serbest dikey kaydırma mümkündür) */}
      <aside
        className={styles.mobileDrawerContent}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil Gezinme Menüsü"
      >
        {/* Çekmece Başlığı */}
        <div className={styles.drawerHeader}>
          <Link
            href="/"
            className={styles.drawerBrandLink}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Köşk Düğün Salonu Anasayfa"
          >
            <div className={styles.drawerBrandLogoWrapper}>
              <Image
                src="/logo-transparent.png"
                alt="Köşk Düğün Salonu Logo"
                width={46}
                height={46}
                className={styles.drawerBrandLogo}
              />
            </div>
            <div className={styles.drawerBrandTextGroup}>
              <span className={styles.drawerBrandTitle}>KÖŞK</span>
              <span className={styles.drawerBrandSub}>DÜĞÜN SALONU · POLATLI</span>
            </div>
          </Link>
          <button
            type="button"
            className={styles.drawerCloseBtn}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Menüyü Kapat"
          >
            <X size={22} />
          </button>
        </div>

        {/* Menü Bağlantıları */}
        <nav className={styles.drawerNavLinks} aria-label="Mobil Gezinme">
          {drawerNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} className={styles.drawerChevron} />
              </Link>
            );
          })}
        </nav>

        {/* Çekmece Alt Eylemleri & Bilgi Kartı */}
        <div className={styles.drawerFooter}>
          <Link
            href="/iletisim"
            className={styles.drawerCtaBtn}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Phone size={17} />
            <span>İletişime Geçin & Teklif Alın</span>
          </Link>

          <a
            href="tel:+903126230000"
            className={styles.drawerPhoneCard}
            aria-label="Telefonla Arayın: 0 312 623 00 00"
          >
            <div className={styles.drawerPhoneIcon}>
              <Phone size={18} />
            </div>
            <div className={styles.drawerPhoneMeta}>
              <span className={styles.drawerPhoneLabel}>Hemen Arayın & Bilgi Alın</span>
              <span className={styles.drawerPhoneNumber}>0 (312) 623 00 00</span>
            </div>
          </a>

          <div className={styles.drawerVenueInfo}>
            <p className={styles.drawerInfoItem}>📍 İstiklal Mah., Polatlı / Ankara</p>
            <p className={styles.drawerInfoItem}>⏱️ Haftanın her günü 09:00 – 23:00</p>
            <p className={styles.drawerInfoItem}>👥 1.000 Kişilik Kapalı Düğün Salonu</p>
          </div>
        </div>
      </aside>
    </div>,
    document.body
  ) : null;

  // Anasayfada masaüstünde hero ekranında header görünmez;
  // Sadece mobilde hızlı erişim butonu sunulur ve scroll edilince embedded header devralır.
  if (isHome && !embedded) {
    return (
      <>
        <div
          className={`${styles.mobileFloatingBar} ${scrolled ? styles.mobileFloatingBarHidden : ''}`}
          aria-hidden={scrolled}
        >
          <button
            type="button"
            className={styles.mobileFloatingToggleBtn}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menüyü Aç"
            id="mobile-floating-menu-btn"
          >
            <Menu size={20} />
            <span className={styles.mobileFloatingBtnText}>MENÜ</span>
          </button>
          <a
            href="tel:+903126230000"
            className={styles.mobileFloatingPhoneBtn}
            aria-label="Hemen Arayın: 0 312 623 00 00"
            id="mobile-floating-call-btn"
          >
            <Phone size={18} />
          </a>
        </div>
        {drawerPortal}
      </>
    );
  }

  const headerClass = embedded
    ? styles.headerEmbedded
    : isHome && !scrolled
    ? styles.headerTransparent
    : styles.headerScrolled;

  return (
    <>
      <header className={headerClass} id="main-site-header">
        <div className={styles.headerContainer}>
          {/* Mobile Menu Button */}
          <button
            type="button"
            className={styles.mobileToggleBtn}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menüyü Aç"
            aria-expanded={mobileMenuOpen}
            id="mobile-nav-toggle"
          >
            <Menu size={24} />
          </button>

          {/* Left Navigation (Desktop) */}
          <nav className={styles.leftNav} aria-label="Sol Navigasyon">
            {leftNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.activeNavLink : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Centered Standard Logo (Inside Header) */}
          <div className={styles.logoWrapper}>
            <Link
              href="/"
              className={styles.brandLink}
              aria-label="Köşk Düğün Salonu Anasayfa"
              id="header-brand-logo-link"
            >
              <Image
                src="/logo-transparent.png"
                alt="Köşk Düğün Salonu Logo"
                width={76}
                height={76}
                priority
                className={styles.brandLogoImg}
              />
            </Link>
          </div>

          {/* Right Navigation (Desktop) */}
          <nav className={styles.rightNav} aria-label="Sağ Navigasyon">
            {rightNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.activeNavLink : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/iletisim" className={styles.ctaButton} id="header-cta-iletisim">
              <Phone size={14} />
              <span>İletişim</span>
            </Link>
          </nav>

          {/* Mobile Right Call Icon */}
          <div className={styles.mobileRightAction}>
            <a
              href="tel:+903126230000"
              className={styles.mobilePhoneBtn}
              aria-label="Salon Yetkilisi ile Hemen Ara"
              id="mobile-quick-call"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Side Drawer Portal */}
      {drawerPortal}
    </>
  );
}
