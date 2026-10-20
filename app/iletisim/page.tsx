import type { Metadata } from 'next';
import { Suspense } from 'react';
import BookingForm from '@/components/BookingForm';
import Breadcrumb from '@/components/Breadcrumb';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import styles from './page.module.css';

import { buildPageMetadata } from '@/lib/og';

export const metadata: Metadata = buildPageMetadata({
  title: 'İletişim & Fiyat Teklifi | Polatlı Köşk Düğün Salonu',
  description:
    'Polatlı Köşk Düğün Salonu iletişim bilgileri, adres ve harita konumu, telefon numarası ve düğün organizasyonu teklif formu. Gülveren, Kutluhan Sk. No: 2/2, Polatlı / Ankara.',
  canonicalPath: '/iletisim',
  keywords: [
    'Polatlı düğün salonu iletişim',
    'Köşk düğün salonu telefon',
    'Polatlı düğün salonu adres',
    'Polatlı düğün fiyat teklifi al',
    'Polatlı düğün salonu randevu',
  ],
  ogTitle: 'İletişim & Keşif Randevusu',
  ogSubtitle: 'Gülveren Mah. Kutluhan Sk. No: 2/2 Polatlı · 0538 296 90 79',
  ogTag: 'TARİH VE FİYAT TEKLİFİ',
});

const EXACT_ADDRESS = 'Gülveren, Kutluhan Sk. No: 2/2, 06960 Polatlı / Ankara';
const MAPS_URL =
  'https://maps.google.com/?q=Polatl%C4%B1+K%C3%B6%C5%9Fk+d%C3%BC%C4%9F%C3%BCn+salonu,+G%C3%BClveren,+Kutluhan+Sk.+2/2,+06960+Polatl%C4%B1/Ankara';

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Köşk Düğün Salonu İletişim',
  description: 'Köşk Düğün Salonu Polatlı adres, telefon ve randevu sayfası.',
  url: 'https://koskdugunsalonu.com/iletisim',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Köşk Düğün Salonu',
    telephone: '+905382969079',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gülveren, Kutluhan Sk. No: 2/2',
      addressLocality: 'Polatlı',
      addressRegion: 'Ankara',
      postalCode: '06960',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.5841,
      longitude: 32.1448,
    },
  },
};

export default function IletisimPage() {
  return (
    <div className={styles.pageWrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: 'İletişim & Randevu' }]} />

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>
              <span className={styles.eyebrowDot} />
              <span>Bize Ulaşın & Keşfe Davetlisiniz</span>
            </div>
            <h1 className={styles.heroTitle}>İletişim ve Keşif Randevusu</h1>
            <p className={styles.heroSubtitle}>
              Özel davetiniz için salon takvimimizin müsaitliğini öğrenebilir,
              şeffaf menü teklifi alabilir veya salonumuzu yerinde ziyaret edebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className="container">
          {/* Üst Blok: Doğrudan İletişim Kanalları & Form (Yan Yana, Eşit Uzunlukta, Form Daha Geniş) */}
          <div className={styles.topCardsGrid}>
            {/* Sol Kart: Doğrudan İletişim Kanalları */}
            <div className={styles.contactInfoCard}>
              <div className={styles.infoCardHeader}>
                <h2 className={styles.infoCardTitle}>Doğrudan İletişim Kanalları</h2>
                <p className={styles.infoCardSubtitle}>
                  Etkinlik danışmanlarımız haftanın her günü salon takvimi ve bütçe planlaması için hizmetinizdedir.
                </p>
              </div>

              <div className={styles.channelList}>
                {/* Telefon */}
                <a href="tel:+905382969079" className={styles.channelItem} id="contact-phone-link">
                  <div className={styles.channelIcon}>
                    <Phone size={19} />
                  </div>
                  <div className={styles.channelDetails}>
                    <span className={styles.channelLabel}>Telefon ile Danışma</span>
                    <span className={styles.channelValuePhone}>0538 296 90 79</span>
                    <span className={styles.channelHint}>Hemen arayarak takvim durumunu sorabilirsiniz.</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/905382969079?text=Merhaba,%20K%C3%B6%C5%9Fk%20D%C3%BC%C4%9F%C3%BCn%20Salonu%20i%C3%A7in%20bilgi%20ve%20randevu%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelItem}
                  id="contact-whatsapp-link"
                >
                  <div className={`${styles.channelIcon} ${styles.whatsappIcon}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.57 1.785.895 2.791.895 3.181 0 5.767-2.587 5.768-5.766.001-3.181-2.585-5.781-5.768-5.781zm3.385 8.163c-.144.405-.837.774-1.17.822-.312.043-.687.069-2.222-.569-1.964-.816-3.216-2.825-3.313-2.955-.097-.13-1.002-1.332-1.002-2.54 0-1.208.634-1.802.859-2.044.225-.242.49-.303.654-.303.163 0 .327.002.469.009.15.008.354-.057.553.423.204.492.694 1.692.756 1.815.061.123.102.267.02.43-.081.163-.122.266-.244.41-.123.143-.258.32-.369.43-.123.123-.251.256-.108.502.143.245.635 1.047 1.363 1.694.936.833 1.726 1.091 1.972 1.213.246.123.39.103.534-.061.144-.164.614-.716.778-.962.163-.246.327-.205.552-.123.225.082 1.431.675 1.677.798.246.123.409.184.47.287.062.102.062.593-.082.998z" />
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.688 0-3.256-.494-4.577-1.345l-.328-.21-2.957.776.79-2.882-.224-.356A8.136 8.136 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167s8.167 3.664 8.167 8.167-3.664 8.167-8.167 8.167z" />
                    </svg>
                  </div>
                  <div className={styles.channelDetails}>
                    <span className={styles.channelLabel} style={{ color: '#1E9E4B' }}>
                      WhatsApp Danışma
                    </span>
                    <span className={styles.channelValue}>Sohbet Başlatın & Bilgi Alın</span>
                    <span className={styles.channelHint}>Görseller ve canlı müsaitlik bilgisi için yazın.</span>
                  </div>
                </a>

                {/* Adres */}
                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <MapPin size={19} />
                  </div>
                  <div className={styles.channelDetails}>
                    <span className={styles.channelLabel}>Salon Adresi</span>
                    <span className={styles.channelValue}>{EXACT_ADDRESS}</span>
                    <span className={styles.channelHint}>Misafirleriniz için geniş ve ücretsiz otopark mevcuttur. Park sorunu yaşanmaz.</span>
                  </div>
                </div>


              </div>
            </div>

            {/* Sağ Kolon: 3 Adımlı Rezervasyon Formu */}
            <div className={styles.formColumn}>
              <Suspense fallback={<div style={{ minHeight: '520px' }} />}>
                <BookingForm />
              </Suspense>
            </div>
          </div>

          {/* Alt Blok: Tam Genişlikte Panoramik Harita Kartı (Üst blokların toplam genişliğinde) */}
          <div className={styles.fullWidthMapCard}>
            <div className={styles.mapCardHeader}>
              <div>
                <h3 className={styles.mapCardTitle}>Polatlı Konum Haritası</h3>
                <div className={styles.mapAddressBadge}>
                  <MapPin size={14} style={{ color: 'var(--color-champagne)' }} />
                  <span>{EXACT_ADDRESS}</span>
                </div>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapExternalLink}
                id="contact-map-external-link"
              >
                <Navigation size={14} />
                <span>Google Haritalar'da Aç</span>
              </a>
            </div>

            <div className={styles.mapFrameWrapper}>
              <iframe
                title="Köşk Düğün Salonu Polatlı Haritası"
                src="https://maps.google.com/maps?q=Polatl%C4%B1%20K%C3%B6%C5%9Fk%20d%C3%BC%C4%9F%C3%BCn%20salonu%2C%20G%C3%BClveren%2C%20Kutluhan%20Sk.%202%2F2%2C%2006960%20Polatl%C4%B1%2FAnkara&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className={styles.mapFrame}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
