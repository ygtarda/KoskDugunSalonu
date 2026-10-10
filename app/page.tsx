import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarCheck, Star, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import HeroCalligraphy from '@/components/HeroCalligraphy';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import BookingForm from '@/components/BookingForm';
import { GoogleIcon, GOOGLE_BUSINESS_URL } from '@/components/GoogleReviewsWidget';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.pageRoot}>
      {/* ===================================================================
          1. FIXED PINNED HERO (Stays in place while content scrolls over it)
          Header-free, ultra-cinematic welcoming screen.
          =================================================================== */}
      <section className={styles.fixedHero} aria-label="Köşk Düğün Salonu Karşılama">
        <div className={styles.heroBgLayer}>
          <Image
            src="/images/polatli-kapali-dugun-salonu-ana-salon.jpg"
            alt="Köşk Düğün Salonu 1000 Kişilik Kapalı Balo Salonu Atmosferi"
            fill
            priority
            className={styles.heroBackdropImg}
            sizes="100vw"
          />
          <div className={styles.heroVignette} />
          <div className={styles.heroGridLines} />
        </div>

        {/* Centerpiece: Hand-Drawn SVG Signature + Subtitles + Circular Down Arrow */}
        <div className={styles.heroCenterContainer}>
          <HeroCalligraphy />
        </div>
      </section>

      {/* ===================================================================
          2. SLIDING CONTENT WRAPPER (Slides up OVER the fixed hero on scroll)
          The Header is embedded at the very top of this container:
          It travels with the content and sticks to top: 0 once it reaches the top.
          =================================================================== */}
      <div className={styles.slidingContent}>
        {/* Header embedded at the top of content (Sticky on scroll) */}
        <Header embedded />

        {/* Precise Scroll Anchor Target */}
        <div id="sliding-content-start" className={styles.scrollAnchor} />

        {/* Key Metrics Strip (Generous padding so it is 100% visible and never cut off) */}
        <div className={styles.welcomeStatsBar}>
          <div className="container">
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1.000</span>
                <span className={styles.statLabel}>Kişilik Kapalı Kapasite</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1.200 m²</span>
                <span className={styles.statLabel}>Sütunsuz Yekpare Alan</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>6.5 m</span>
                <span className={styles.statLabel}>Akustik Tavan Yüksekliği</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>%100</span>
                <span className={styles.statLabel}>VRF Taze Hava İklimlendirmesi</span>
              </div>
            </div>
          </div>
        </div>

        {/* 1. Mimari Vurgu ve Kapalı Salon Mimarisi */}
        <section className={`${styles.archSection} section-spacing`} aria-label="Mimari ve Salon Nitelikleri">
          <div className="container">
            <div className="section-header">
              <div className="section-header-inner">
                <div className="editorial-indicator" />
                <div className="section-title-wrap">
                  <div className="section-category">Mimari Standartlar</div>
                  <h2>Büyük Davetler İçin Tasarlanmış Kapalı Balo Mimarisi</h2>
                  <p className="section-subtitle">
                    Hava koşullarından bağımsız, dört mevsim kesintisiz konfor sunan 1.200 m² kapalı alan.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.archGrid}>
              <div>
                <ImagePlaceholder
                  title="Ana Balo Salonu Mimari Yerleşimi"
                  dimensions="1600 × 900 · 16:9 Mimari Kesit"
                  aspectRatio="16/9"
                  category="800 - 1.000 Kişilik Banket Düzeni"
                />
              </div>

              <div>
                <p style={{ fontSize: '1.08rem', lineHeight: '1.75', color: 'var(--color-anthracite)', marginBottom: '1.5rem' }}>
                  Polatlı’nın kalbinde yer alan Köşk Düğün Salonu, hava koşullarının yarattığı riskleri tamamen ortadan kaldıran
                  kapalı salon mimarisiyle inşa edilmiştir. Kolonsuz ferah yapısı, yüksek tavanı ve endüstriyel havalandırma altyapısıyla
                  davetlilerinize nefes alan bir atmosfer sunar.
                </p>

                <ul className={styles.archFeaturesList}>
                  <li className={styles.archFeatureItem}>
                    <div className={styles.featureDot} />
                    <div>
                      <h3 className={styles.featureItemTitle}>Kolonsuz Geniş Görüş Açısı</h3>
                      <p className={styles.featureItemDesc}>
                        Tüm masalardan nikah kürsüsü, orkestra sahnesi ve dans pisti engelsiz bir şekilde izlenebilir.
                      </p>
                    </div>
                  </li>

                  <li className={styles.archFeatureItem}>
                    <div className={styles.featureDot} />
                    <div>
                      <h3 className={styles.featureItemTitle}>Endüstriyel VRF Havalandırma</h3>
                      <p className={styles.featureItemDesc}>
                        1.000 kişilik davetlerde dahi içerideki havayı sürekli tazeleyen, sessiz çalışan çift çevrimli havalandırma santrali.
                      </p>
                    </div>
                  </li>

                  <li className={styles.archFeatureItem}>
                    <div className={styles.featureDot} />
                    <div>
                      <h3 className={styles.featureItemTitle}>Akustik Tavan & Profesyonel Sahne</h3>
                      <p className={styles.featureItemDesc}>
                        6.5 metre tavan yüksekliğine entegre ses sönümleyici paneller sayesinde müzik sesleri berrak ve dengeli yayılır.
                      </p>
                    </div>
                  </li>
                </ul>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/hizmetler" className="btn btn-outline">
                    <span>Hizmet Paketlerimizi İnceleyin</span>
                  </Link>
                  <Link href="/iletisim" className="btn btn-primary">
                    <CalendarCheck size={18} />
                    <span>İletişime Geçin & Teklif Alın</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Organizasyon Türleri — Serbest Bant (Stripe) Düzeni */}
        <section className="section-spacing" style={{ backgroundColor: 'var(--color-surface-subtle)' }} aria-label="Gerçekleştirilen Davet Türleri">
          <div className="container">
            <div className="section-header">
              <div className="section-header-inner">
                <div className="editorial-indicator" />
                <div className="section-title-wrap">
                  <div className="section-category">Kusursuz Organizasyonlar</div>
                  <h2>Her Davet İçin Özelleştirilmiş Salon Düzeni</h2>
                  <p className="section-subtitle">
                    Düğünden kına merasimine, nişandan kurumsal galaya kadar geniş oturma planları.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.servicesBand}>
              <div className={styles.serviceStripe}>
                <div>
                  <h3 className={styles.serviceType}>Düğün Daveti</h3>
                  <div className={styles.serviceCapacity}>800 – 1.000 Davetli Kapasitesi</div>
                </div>
                <p className={styles.serviceText}>
                  Geniş ziyafet masa düzeni, romantik pist aydınlatması, gelin-damat VIP hazırlık süiti ve
                  özenle hazırlanan zengin ikram menüleri ile hayatınızın en görkemli gecesi.
                </p>
                <div className={styles.serviceAction}>
                  <Link href="/hizmetler#dugun" className="btn btn-text">
                    Detaylı İncele
                  </Link>
                </div>
              </div>

              <div className={styles.serviceStripe}>
                <div>
                  <h3 className={styles.serviceType}>Kına Gecesi</h3>
                  <div className={styles.serviceCapacity}>400 – 800 Davetli Kapasitesi</div>
                </div>
                <p className={styles.serviceText}>
                  Özel kına tahtı, sis ve ışık efektleri, nedime geçiş seremonisi ve kapalı salonda
                  kesintisiz kadınlar arası eğlence konsepti.
                </p>
                <div className={styles.serviceAction}>
                  <Link href="/hizmetler#kina" className="btn btn-text">
                    Detaylı İncele
                  </Link>
                </div>
              </div>

              <div className={styles.serviceStripe}>
                <div>
                  <h3 className={styles.serviceType}>Nişan & Söz Töreni</h3>
                  <div className={styles.serviceCapacity}>300 – 600 Davetli Kapasitesi</div>
                </div>
                <p className={styles.serviceText}>
                  Zarif aile merasimleri ve geniş katılımlı nişan kutlamaları için özel dekore edilmiş
                  arka fon alanı ve lüks kokteyl oturma planı.
                </p>
                <div className={styles.serviceAction}>
                  <Link href="/hizmetler#nisan" className="btn btn-text">
                    Detaylı İncele
                  </Link>
                </div>
              </div>

              <div className={styles.serviceStripe}>
                <div>
                  <h3 className={styles.serviceType}>Kurumsal Gala & Kongre</h3>
                  <div className={styles.serviceCapacity}>500 – 1.200 Katılımcı</div>
                </div>
                <p className={styles.serviceText}>
                  Polatlı kurum ve şirketleri için profesyonel ses, projeksiyon ve truss ışık sistemine
                  sahip yemekli toplantı, lansman ve mezuniyet baloları.
                </p>
                <div className={styles.serviceAction}>
                  <Link href="/hizmetler#kurumsal" className="btn btn-text">
                    Detaylı İncele
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Dergi Alıntısı Stili Referans / Yorum & Google Entegrasyonu */}
        <section className="section-spacing" aria-label="Misafir Deneyimi ve Google Yorumları">
          <div className="container">
            <div className={styles.editorialQuote}>
              <div className={styles.quoteGoogleHeader}>
                <div className={styles.googleRatingBadge}>
                  <GoogleIcon size={18} />
                  <span>Google Puanı: <strong>4.9 / 5.0</strong></span>
                  <div className={styles.googleStars} aria-label="5 yıldız">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#FBBC05" color="#FBBC05" />
                    ))}
                  </div>
                </div>
                <a
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.googleLinkBtn}
                  id="home-quote-google-link"
                >
                  <span>Google Doğrulanmış Profil</span>
                  <ExternalLink size={13} />
                </a>
              </div>




              <div className={styles.quoteFootActions}>
                <Link href="/referanslar" className="btn-text" style={{ fontSize: '0.88rem' }}>
                  <span>Tüm Google Yorumlarını İnceleyin →</span>
                </Link>
                <a
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-text"
                  style={{ fontSize: '0.88rem', color: '#1A73E8' }}
                >
                  <span>Google Haritalar'da Değerlendirin ↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Hızlı Rezervasyon & Teklif Formu */}
        <section id="randevu" className="section-spacing" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-stone)', scrollMarginTop: '90px' }} aria-label="Keşif Formu">
          <div className="container" style={{ maxWidth: '860px' }}>
            <BookingForm />
          </div>
        </section>
      </div>
    </div>
  );
}
