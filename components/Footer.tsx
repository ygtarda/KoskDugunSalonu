import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Sparkles,
  Sun,
  Moon,
  BookOpen,
  CalendarCheck,
  Car,
  Maximize2,
  ChevronRight,
} from 'lucide-react';
import { GoogleIcon, GOOGLE_BUSINESS_URL } from './GoogleReviewsWidget';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="main-site-footer">
      {/* 1. Pre-footer Call to Action Band */}
      <div className={styles.ctaBand}>
        <div className="container">
          <div className={styles.ctaGrid}>
            <div className={styles.ctaText}>
              <div className={styles.ctaPreTitle}>
                <span className={styles.accentLine}></span>
                <span>İletişim & Keşif Randevusu</span>
              </div>
              <h2 className={styles.ctaTitle}>
                1.000 Kişilik Kolonsuz Salonumuzda Özel Davetinizi Planlayalım
              </h2>
              <p className={styles.ctaDesc}>
                Gündüz (12:00 – 16:00) ve Akşam (19:00 – 23:00) seans seçeneklerimiz, kolonsuz ferah mimarimiz 
                ve merkezi konumumuzla davet tarihinizi 3 adımda sorgulayın, şeffaf teklif alın.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/iletisim#concierge-booking-form" className="btn btn-primary" id="footer-cta-randevu">
                <CalendarCheck size={18} />
                <span>Keşif & Fiyat Teklifi Alın</span>
              </Link>
              <a
                href="https://wa.me/903126230000?text=Merhaba%2C%20K%C3%B6%C5%9Fk%20D%C3%BC%C4%9F%C3%BCn%20Salonu%20hakk%C4%B1nda%20tarih%20ve%20fiyat%20bilgisi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="footer-cta-whatsapp"
              >
                <span>WhatsApp İletişim</span>
              </a>
              <a href="tel:+903126230000" className={styles.ctaPhoneDirect} id="footer-cta-phone">
                <Phone size={15} />
                <span>0 (312) 623 00 00</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Grid (Ferah & Geniş 4 Sütunlu Mimari) */}
      <div className={styles.footerMain}>
        <div className="container">
          <div className={styles.footerGrid}>
            
            {/* SÜTUN 1: Kurumsal & Güvence */}
            <div className={styles.colBrand}>
              <Link href="/" className={styles.brandTitleGroup} aria-label="Köşk Düğün Salonu Anasayfa">
                <div className={styles.brandLogoCard}>
                  <Image
                    src="/kosk_logo.jpg"
                    alt="Köşk Düğün Salonu Polatlı Logo"
                    width={52}
                    height={52}
                    className={styles.brandLogoImg}
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className={styles.brandName}>KÖŞK DÜĞÜN SALONU</h3>
                  <span className={styles.brandLocation}>POLATLI · ANKARA</span>
                </div>
              </Link>

              <p className={styles.brandAbout}>
                Polatlı'nın en geniş kapalı balo salonu: 1.000 kişilik kolonsuz ferah mimari, 
                yüksek tavan ferahlığı, güçlü havalandırma ve güler yüzlü servis anlayışı.
              </p>
              
              <div className={styles.highlightsBadge}>
                <div className={styles.badgeItem}>
                  <ShieldCheck size={15} className={styles.badgeIcon} />
                  <span>Kesintisiz 250 kVA Jeneratör Güvencesi</span>
                </div>
                <div className={styles.badgeItem}>
                  <Sparkles size={15} className={styles.badgeIcon} />
                  <span>Dört Mevsim Güçlü Taze Hava Havalandırması</span>
                </div>
                <div className={styles.badgeItem}>
                  <Maximize2 size={15} className={styles.badgeIcon} />
                  <span>Kolonsuz 1.000 Kişilik Kesintisiz Görüş</span>
                </div>
                <div className={styles.badgeItem}>
                  <Car size={15} className={styles.badgeIcon} />
                  <span>Salona Bitişik 250 Araçlık Özel Otopark</span>
                </div>
              </div>

              {/* Google Reviews 4.9 ★ Rating Rozeti */}
              <div className={styles.googleBadgeWrapper}>
                <a
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.googleBadgeLink}
                  id="footer-google-reviews-badge"
                  aria-label="Google Haritalar Puanı ve Yorumlar"
                >
                  <GoogleIcon size={18} />
                  <div>
                    <div className={styles.googleRatingText}>
                      <strong>4.9 / 5.0</strong> Mükemmel Puan
                    </div>
                    <span className={styles.googleSubText}>Google İşletme Profili & Yorumlar ↗</span>
                  </div>
                </a>
              </div>
            </div>

            {/* SÜTUN 2: Hızlı Bağlantılar & Kurumsal */}
            <div className={styles.colLinks}>
              <h4 className={styles.colHeading}>Keşfet & Kurumsal</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>Anasayfa</span>
                  </Link>
                </li>
                <li>
                  <Link href="/salon">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>Salon Mimarisi & Olanaklar</span>
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>Hizmetlerimiz & Paketler</span>
                  </Link>
                </li>
                <li>
                  <Link href="/galeri">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>Fotoğraf & Video Galerisi</span>
                  </Link>
                </li>
                <li>
                  <Link href="/hakkimizda">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>Hakkımızda & Tarihçemiz</span>
                  </Link>
                </li>
                <li>
                  <Link href="/referanslar">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>Misafir Yorumları & Deneyimler</span>
                  </Link>
                </li>
                <li>
                  <Link href="/sss">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>Sıkça Sorulan Sorular (SSS)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>İletişim & Ulaşım Bilgileri</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* SÜTUN 3: Organizasyon Paketleri & Seanslar */}
            <div className={styles.colLinks}>
              <h4 className={styles.colHeading}>Davet Paketleri & Seanslar</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/hizmetler#dugun">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>Düğün Daveti (800 – 1.000 Kişi)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler#kina">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>Geleneksel Kına Gecesi</span>
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler#nisan">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>Nişan & Söz Töreni</span>
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler#sunnet">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>Sünnet Düğünü Merasimi</span>
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler#kurumsal">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>Kurumsal Davet & Gala</span>
                  </Link>
                </li>
              </ul>

              {/* Günlük Seans Saatleri Kutusu */}
              <div className={styles.sessionBox}>
                <div className={styles.sessionBoxTitle}>
                  <Clock size={13} style={{ color: 'var(--color-champagne)' }} />
                  <span>Günlük Merasim Seansları</span>
                </div>
                <div className={styles.sessionBoxRow}>
                  <div className={styles.sessionBadge}>
                    <Sun size={12} />
                    <span>Gündüz: 12:00 – 16:00</span>
                  </div>
                  <div className={styles.sessionBadge}>
                    <Moon size={12} />
                    <span>Akşam: 19:00 – 23:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SÜTUN 4: Düğün Rehberi & SEO Sayfaları */}
            <div className={styles.colLinks}>
              <h4 className={styles.colHeading}>Düğün Rehberi & SEO</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/rehber">
                    <BookOpen size={13} className={styles.bulletIcon} />
                    <span>Polatlı Düğün ve Davet Rehberi</span>
                  </Link>
                </li>
                <li>
                  <Link href="/rehber#polatlida-dugun-salonu-secerken-dikkat-edilmesi-gerekenler">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>Salon Seçerken 7 Kritik Kriter</span>
                  </Link>
                </li>
                <li>
                  <Link href="/rehber#1000-kisilik-buyuk-dugunlerde-masa-duzeni-ve-misafir-konforu">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>1.000 Kişilik Oturma ve Masa Düzeni</span>
                  </Link>
                </li>
                <li>
                  <Link href="/rehber#kapali-dugun-salonunda-havadar-ortam-ve-ses-duzeni">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>Havadar Ortam & Akustik Ses Dengesi</span>
                  </Link>
                </li>
                <li>
                  <Link href="/salon#mimari">
                    <Maximize2 size={13} className={styles.bulletIcon} />
                    <span>Kolonsuz Balo Salonu Mimarisi</span>
                  </Link>
                </li>
                <li>
                  <Link href="/salon#gelin-odasi">
                    <ChevronRight size={13} className={styles.bulletIcon} />
                    <span>Gelin & Damat Hazırlık Suiti</span>
                  </Link>
                </li>
                <li>
                  <Link href="/salon#otopark">
                    <Car size={13} className={styles.bulletIcon} />
                    <span>Otopark & Engelsiz Giriş</span>
                  </Link>
                </li>
              </ul>

              {/* Hızlı İletişim Hatı */}
              <div className={styles.quickContactLine}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <MapPin size={14} style={{ color: 'var(--color-champagne)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.8rem', color: '#D6D0CA' }}>
                    Gülveren, Kutluhan Sk. No: 2/2, Polatlı / Ankara
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={14} style={{ color: 'var(--color-champagne)', flexShrink: 0 }} />
                  <a href="tel:+903126230000" style={{ fontSize: '0.86rem', color: '#FFFFFF', fontWeight: 600 }}>
                    0 (312) 623 00 00
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. SEO Bölgesel Etiketler Bandı (Sade & Zarif) */}
      <div className={styles.seoKeywordsBand}>
        <div className="container">
          <div className={styles.seoKeywordsFlex}>
            <span className={styles.seoKeywordsTitle}>Bölgesel Arama Başlıkları:</span>
            <div className={styles.seoKeywordsList}>
              <Link href="/salon">Polatlı Düğün Salonu</Link>
              <span>·</span>
              <Link href="/salon">1000 Kişilik Düğün Salonu</Link>
              <span>·</span>
              <Link href="/hizmetler?paket=dugun">Kolonsuz Balo Salonu</Link>
              <span>·</span>
              <Link href="/hizmetler?paket=kina">Polatlı Kına Mekanı</Link>
              <span>·</span>
              <Link href="/hizmetler?paket=nisan">Polatlı Nişan Salonu</Link>
              <span>·</span>
              <Link href="/rehber">Düğün Planlama Rehberi</Link>
              <span>·</span>
              <Link href="/sss">Düğün Salonu Fiyatları Polatlı</Link>
              <span>·</span>
              <Link href="/salon">Yemekli Düğün Organizasyonu Ankara</Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Alt Telif & Bilgi Çubuğu */}
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.bottomFlex}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Köşk Düğün Salonu Polatlı. Tüm Hakları Saklıdır.
            </p>
            <div className={styles.bottomMeta}>
              <span>1.000 Kişilik Kolonsuz Kapalı Balo Salonu</span>
              <span className={styles.dotSeparator}></span>
              <span>Polatlı, Ankara</span>
              <span className={styles.dotSeparator}></span>
              <span>Ankara Düğün Mekanları</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
