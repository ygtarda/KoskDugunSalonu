import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { GoogleIcon, GOOGLE_BUSINESS_URL } from './GoogleReviewsWidget';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="main-site-footer">
      {/* Pre-footer Call to Action Band */}
      <div className={styles.ctaBand}>
        <div className="container">
          <div className={styles.ctaGrid}>
            <div className={styles.ctaText}>
              <div className={styles.ctaPreTitle}>
                <span className={styles.accentLine}></span>
                <span>İletişim & Rezervasyon</span>
              </div>
              <h2 className={styles.ctaTitle}>1000 Kişilik Kapalı Balo Salonumuzda Yerinizi Ayırtın</h2>
              <p className={styles.ctaDesc}>
                Polatlı şehir merkezindeki yüksek tavanlı, ferah iç mekânımız ve dört mevsim iklimlendirme 
                konforumuzla hayalinizdeki daveti birlikte planlayalım.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/iletisim" className="btn btn-primary" id="footer-cta-randevu">
                <span>İletişime Geçin & Teklif Alın</span>
              </Link>
              <a
                href="https://wa.me/903126230000?text=Merhaba,%20Köşk%20Düğün%20Salonu%20hakkında%20bilgi%20ve%20tarih%20müsaitliği%20öğrenmek%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="footer-cta-whatsapp"
              >
                <span>WhatsApp İletişim</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className={styles.footerMain}>
        <div className="container">
          <div className={styles.footerGrid}>
            {/* Column 1: Brand & Philosophy */}
            <div className={styles.colBrand}>
              <div className={styles.brandTitleGroup}>
                <span className={styles.brandMonogram}>K</span>
                <div>
                  <h3 className={styles.brandName}>KÖŞK DÜĞÜN SALONU</h3>
                  <span className={styles.brandLocation}>Polatlı · Ankara</span>
                </div>
              </div>
              <p className={styles.brandAbout}>
                Polatlı'nın en geniş kapalı balo salonu: 6.5 metre yüksek tavan, %100 taze hava iklimlendirmesi, 
                özel akustik ses mimarisi ve 1000 kişilik tam donanımlı kapalı salon altyapısı.
              </p>
              <div className={styles.highlightsBadge}>
                <div className={styles.badgeItem}>
                  <ShieldCheck size={16} className={styles.badgeIcon} />
                  <span>Kesintisiz Sanayi Tipi Jeneratör</span>
                </div>
                <div className={styles.badgeItem}>
                  <Sparkles size={16} className={styles.badgeIcon} />
                  <span>Dört Mevsim VRF İklimlendirme</span>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className={styles.colLinks}>
              <h4 className={styles.colHeading}>Hızlı Bağlantılar</h4>
              <ul className={styles.linkList}>
                <li><Link href="/">Anasayfa</Link></li>
                <li><Link href="/hizmetler">Hizmetlerimiz</Link></li>
                <li><Link href="/galeri">Fotoğraf Galerisi</Link></li>
                <li><Link href="/sss">SSS & Misafir Yorumları (4.9 ★)</Link></li>
                <li><Link href="/iletisim">İletişim & Ulaşım</Link></li>
              </ul>
            </div>

            {/* Column 3: Event Types */}
            <div className={styles.colLinks}>
              <h4 className={styles.colHeading}>Davet Türleri</h4>
              <ul className={styles.linkList}>
                <li><Link href="/hizmetler#dugun">Kapalı Salon Düğünü</Link></li>
                <li><Link href="/hizmetler#kina">Kına Gecesi Merasimi</Link></li>
                <li><Link href="/hizmetler#nisan">Nişan ve Söz Daveti</Link></li>
                <li><Link href="/hizmetler#sunnet">Sünnet Düğünü Töreni</Link></li>
                <li><Link href="/hizmetler#kurumsal">Kurumsal Gala ve Toplantı</Link></li>
                <li><Link href="/hizmetler#mezuniyet">Mezuniyet Balosu</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact & Location */}
            <div className={styles.colContact}>
              <h4 className={styles.colHeading}>İletişim & Konum</h4>
              <ul className={styles.contactList}>
                <li>
                  <MapPin size={18} className={styles.contactIcon} />
                  <div>
                    <strong>Adres:</strong>
                    <span>Cumhuriyet Mah. Ankara Cad. No: 42, Polatlı / Ankara</span>
                  </div>
                </li>
                <li>
                  <Phone size={18} className={styles.contactIcon} />
                  <div>
                    <strong>Telefon:</strong>
                    <a href="tel:+903126230000">0 (312) 623 00 00</a>
                  </div>
                </li>
                <li>
                  <Mail size={18} className={styles.contactIcon} />
                  <div>
                    <strong>E-posta:</strong>
                    <a href="mailto:iletisim@koskdugunsalonu.com">iletisim@koskdugunsalonu.com</a>
                  </div>
                </li>
                <li>
                  <Clock size={18} className={styles.contactIcon} />
                  <div>
                    <strong>Çalışma Saatleri:</strong>
                    <span>Pazartesi – Pazar: 09:00 – 23:30</span>
                  </div>
                </li>
                <li style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(232, 228, 223, 0.4)' }}>
                  <a
                    href={GOOGLE_BUSINESS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid var(--color-stone)',
                      padding: '0.5rem 0.9rem',
                      borderRadius: 'var(--radius-xs)',
                      color: 'var(--color-anthracite)',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                    }}
                    id="footer-google-business-link"
                  >
                    <GoogleIcon size={16} />
                    <span>Google Profili & Yorumlar (4.9 ★) ↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.bottomFlex}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Köşk Düğün Salonu Polatlı. Tüm Hakları Saklıdır.
            </p>
            <div className={styles.bottomMeta}>
              <span>1000 Kişilik Kapalı Balo Salonu</span>
              <span className={styles.dotSeparator}></span>
              <span>Polatlı, Ankara</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
