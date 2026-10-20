'use client';

import React, { useState, useEffect } from 'react';
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
  { href: '/hizmetler', label: 'Hizmetlerimiz & Paketler' },
  { href: '/galeri', label: 'Fotoğraf Galerisi' },
  { href: '/hakkimizda', label: 'Hakkımızda & Değerlerimiz' },
  { href: '/sss', label: 'Sıkça Sorulan Sorular' },
  { href: '/iletisim', label: 'İletişim & Randevu Talebi' },
];

interface HeaderProps {
  embedded?: boolean;
}

export default function Header({ embedded = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  // Karşılama ekranının bir kez geçildikten sonra asla tekrar açılmaması için cookie & storage senkronizasyonu
  const handleHomeNavigation = () => {
    try {
      document.cookie = 'kosk_welcome_dismissed=true; path=/; max-age=31536000; SameSite=Lax';
      localStorage.setItem('kosk_welcome_dismissed', 'true');
      sessionStorage.setItem('kosk_welcome_dismissed', 'true');
      document.documentElement.classList.add('welcome-dismissed');
    } catch {
      // noop
    }
  };

  // İç sayfalardayken veya gezinirken karşılama ekranını kalıcı olarak atlat
  useEffect(() => {
    if (pathname !== '/') {
      handleHomeNavigation();
    }
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

  // Yandan açılır mobil çekmece menü (Doğrudan JSX olarak render edilir, portal karmaşası ve DOM uyuşmazlığı yaratmaz)
  const drawerContent = (
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
            onClick={() => {
              handleHomeNavigation();
              setMobileMenuOpen(false);
            }}
            aria-label="Köşk Düğün Salonu Anasayfa"
          >
            <div className={styles.drawerBrandLogoWrapper}>
              <Image
                src="/kosk_logo.jpg"
                alt="Köşk Düğün Salonu Logo"
                width={46}
                height={46}
                className={styles.drawerBrandLogo}
                loading="lazy"
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
                onClick={() => {
                  if (link.href === '/') {
                    handleHomeNavigation();
                  }
                  setMobileMenuOpen(false);
                }}
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
            href="tel:+905382969079"
            className={styles.drawerPhoneCard}
            aria-label="Telefonla Arayın: 0538 296 90 79"
          >
            <div className={styles.drawerPhoneIcon}>
              <Phone size={18} />
            </div>
            <div className={styles.drawerPhoneMeta}>
              <span className={styles.drawerPhoneLabel}>Hemen Arayın & Bilgi Alın</span>
              <span className={styles.drawerPhoneNumber}>0538 296 90 79</span>
            </div>
          </a>

          <div className={styles.drawerVenueInfo}>
            <p className={styles.drawerInfoItem}>📍 Gülveren, Kutluhan Sk. No: 2/2, Polatlı / Ankara</p>
            <p className={styles.drawerInfoItem}>⏱️ Haftanın her günü 09:00 – 23:00</p>
            <p className={styles.drawerInfoItem}>👥 1.000 Kişilik Kapalı Düğün Salonu</p>
          </div>
        </div>
      </aside>
    </div>
  );

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
          <div className={styles.mobileFloatingActionGroup}>
            <a
              href="https://wa.me/905382969079?text=Merhaba,%20K%C3%B6%C5%9Fk%20D%C3%BC%C4%9F%C3%BCn%20Salonu%20hakk%C4%B1nda%20bilgi%20ve%20tarih%20m%C3%BCsaitli%C4%9Fi%20%C3%B6%C4%9Frenmek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileFloatingWhatsappBtn}
              aria-label="WhatsApp üzerinden yazın"
              id="mobile-floating-wa-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="tel:+905382969079"
              className={styles.mobileFloatingPhoneBtn}
              aria-label="Hemen Arayın: 0538 296 90 79"
              id="mobile-floating-call-btn"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>
        {drawerContent}
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
                  onClick={link.href === '/' ? handleHomeNavigation : undefined}
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
              onClick={handleHomeNavigation}
              aria-label="Köşk Düğün Salonu Anasayfa"
              id="header-brand-logo-link"
            >
              <Image
                src="/kosk_logo.jpg"
                alt="Köşk Düğün Salonu Logo"
                width={56}
                height={56}
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
              href="tel:+905382969079"
              className={styles.mobilePhoneBtn}
              aria-label="Salon Yetkilisi ile Hemen Ara"
              id="mobile-quick-call"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Side Drawer */}
      {drawerContent}
    </>
  );
}
