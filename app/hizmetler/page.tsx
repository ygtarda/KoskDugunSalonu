import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Check,
  CalendarCheck,
  Sparkles,
  Building2,
  BookOpen,
  Star,
  Heart,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './hizmetler.module.css';

import { buildPageMetadata } from '@/lib/og';

export const metadata: Metadata = buildPageMetadata({
  title: 'Hizmetler & Organizasyon Paketleri | Polatlı Köşk Düğün Salonu',
  description:
    'Düğün daveti, geleneksel kına gecesi, nişan ve kurumsal etkinlikler için 1.000 kişilik kolonsuz ferah salon, zengin menüler ve eksiksiz paketler. Şeffaf fiyatlandırma.',
  canonicalPath: '/hizmetler',
  keywords: [
    'Polatlı düğün paketleri',
    'Polatlı kına gecesi organizasyonu',
    'Polatlı nişan salonu',
    'Polatlı sünnet düğünü',
    'Polatlı kurumsal davet mekanı',
    'Köşk düğün salonu hizmetleri',
  ],
  ogTitle: 'Davet Hizmetleri & Paketler',
  ogSubtitle: 'Düğün, Kına Gecesi, Nişan, Sünnet ve Kurumsal Gala Organizasyonları',
  ogTag: 'ORGANİZASYON & PAKETLER',
});

const servicePackages = [
  {
    id: 'dugun',
    title: 'Düğün Daveti',
    subtitle: '1.000 Kişilik Ferah Düğün Salonu',
    capacity: '800 – 1.000 Kişi',
    badge: 'Ana Hizmet',
    featured: true,
    imageSrc: '/images/venue/kosk-ilk-dans-sis-bulutu.webp',
    imageAlt: 'Köşk Düğün Salonu Düğün Daveti ve İlk Dans Alanı',
    desc: 'Geniş aileleri ve kalabalık davetli listelerini ferahça ağırlamak isteyen çiftler için tasarlandı. Kolonsuz ferah salon, yüksek tavan ve güler yüzlü servis anlayışı bir arada.',
    features: [
      '1.000 kişiye kadar rahat salon düzeni ve masalar arası ferah geçiş alanları',
      'Geniş mermer dans pisti ve profesyonel sahne aydınlatması',
      'Özel gelin yolu süslemesi ve ilk dans için sis bulutu efekti',
      'Gelin ve damat için konforlu hazırlık ve dinlenme odası',
      'Yemekli (Kavurma/Tavuk) veya pastalı zengin menü seçenekleri',
      'Katlı düğün pastası merasimi ve taze meşrubat ikramı',
      'Canlı orkestra ve kaliteli ses sistemi altyapısı',
      'Profesyonel kamera çekimi ve fotoğraf hizmeti',
      'Geniş misafir otoparkı ve kesintisiz jeneratör desteği',
    ],
  },
  {
    id: 'kina',
    title: 'Geleneksel Kına Gecesi',
    subtitle: 'Coşkulu ve Samimi Kına Merasimi',
    capacity: '500 – 800 Kişi',
    badge: 'Geleneksel & Coşkulu',
    imageSrc: '/images/venue/kosk-sahne-mor-isik-gosterisi.webp',
    imageAlt: 'Köşk Düğün Salonu Geleneksel Kına Gecesi Sahne Düzeni',
    desc: 'Geleneksel kına adetlerini modern salon ferahlığıyla buluşturan, aileniz ve sevdiklerinizle doyasıya eğlenebileceğiniz samimi ve güvenli bir atmosfer.',
    features: [
      'Şık kadife kına tahtı ve özel arka fon sahne dekorasyonu',
      'Geniş mermer pistte kına merasimi ve yöresel oyun havaları',
      'Canlı müzik, DJ ve kaliteli ses & sahne ışıklandırması',
      'Gelin hanım ve ailesi için konforlu hazırlık odası',
      'Kına gecesine özel ikram tabağı, pasta ve meşrubat servisi',
      'Profesyonel kamera ve fotoğraf çekim hizmeti',
      'Yüksek tavan ve güçlü iklimlendirme ile ferah salon ortamı',
      'Geniş misafir otoparkı ve rahat park imkânı',
    ],
  },
  {
    id: 'nisan',
    title: 'Nişan & Söz Töreni',
    subtitle: 'Aileler ve Sevdikleriniz İçin Sıcak Bir Başlangıç',
    capacity: '300 – 600 Kişi',
    badge: 'Sıcak & Şık Ambiyans',
    imageSrc: '/images/venue/kosk-nisan-soz-ozel-konsept-aynasi.webp',
    imageAlt: 'Köşk Düğün Salonu Nişan ve Söz Töreni Konsept Alanı',
    desc: 'Evliliğe ilk adımı atarken ailelerin ve yakın dostların bir araya geldiği, sıcak, şık ve nezih bir söz ve nişan merasimi.',
    features: [
      'Özel tasarım nişan tagı ve çiçekli fotoğraf çekim fonu',
      'Merasim sahnesi, şık masa örtüleri ve salon süslemeleri',
      'Kutlama pastası merasimi ve taze ikram/meşrubat servisi',
      'Müzik yayını, ses sistemi ve canlı müzik desteği',
      'Profesyonel video ve fotoğraf çekim hizmeti',
      'Geniş dans pisti ve masalar arası ferah oturma planı',
      'Dört mevsim ideal oda sıcaklığında ferah salon konforu',
    ],
  },
  {
    id: 'sunnet',
    title: 'Sünnet Düğünü Şöleni',
    subtitle: 'Aile Boyu Coşkulu ve Ferah Kutlama',
    capacity: '500 – 1.000 Kişi',
    badge: 'Geleneksel Tören',
    imageSrc: '/images/venue/kosk-dans-pisti-spot-isik-sov.webp',
    imageAlt: 'Köşk Düğün Salonu Sünnet Düğünü Şöleni ve Dans Pisti',
    desc: 'Çocuğunuzun bu anlamlı gününde akrabalarınızın ve tüm konuklarınızın rahatça ağırlanacağı, geleneksel merasimlerin ve neşeli eğlencenin buluştuğu şölen.',
    features: [
      'Görkemli işlemeli sünnet tahtı ve özel karşılama sahnesi',
      'Yemekli (Kavurma/Tavuk) veya pastalı geleneksel ikram menüleri',
      'Geniş sahnede canlı orkestra, oyun havaları ve kaliteli ses sistemi',
      'Salona giriş anında volkan ve ışık efektleri seremonisi',
      'Tüm anları kaydeden profesyonel kamera ve fotoğraf çekimi',
      'Kolonsuz salonda geniş masa aralıkları ve rahat oturma düzeni',
      'Geniş misafir otoparkı ve kesintisiz jeneratör güvencesi',
    ],
  },
  {
    id: 'kurumsal',
    title: 'Kurumsal Davet & Mezuniyet',
    subtitle: 'Şirket, Kurum ve Mezuniyet Buluşmaları',
    capacity: '400 – 1.000 Kişi',
    badge: 'Geniş Katılımlı Davetler',
    imageSrc: '/images/venue/kosk-dev-projeksiyon-ve-sahne-duzeni.webp',
    imageAlt: 'Köşk Düğün Salonu Kurumsal Yemek, Toplantı ve Sahne Düzeni',
    desc: 'Polatlı’daki şirketler, sivil toplum kuruluşları ve okullar için geniş katılımlı yemekli toplantılar, gala geceleri ve mezuniyet kutlamaları.',
    features: [
      'Büyük projeksiyon ekranı, kablosuz mikrofonlar ve kaliteli ses sistemi',
      'Konuşmacı kürsüsü ve geniş sahne platformu',
      'Davet konseptine uygun rahat ve ferah oturma planı',
      'Yemekli, kokteyl veya zengin ikram menü seçenekleri',
      'Organizasyon süresince teknik altyapı ve salon desteği',
      'Misafirler için kolay ulaşım ve rahat otopark imkânı',
    ],
  },
];

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Köşk Düğün Salonu Hizmet ve Paketleri',
  itemListElement: servicePackages.map((pkg, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: pkg.title,
      description: pkg.desc,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Köşk Düğün Salonu',
        url: 'https://koskdugunsalonu.com',
      },
      areaServed: {
        '@type': 'City',
        name: 'Polatlı, Ankara',
      },
    },
  })),
};

export default function HizmetlerPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: 'Hizmetler & Paketler' }]} />

      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.heroTextWrapper}>
            <div className={styles.pagePreTitle}>Davet & Organizasyon Seçenekleri</div>
            <h1 className={styles.pageTitle}>
              Her Davetiniz İçin Rahat ve Eksiksiz Hizmet
            </h1>
            <p className={styles.pageLead}>
              Düğün, kına, nişan ve tüm özel günleriniz için davetli sayınıza ve bütçenize uygun,
              samimi ve eksiksiz organizasyon çözümleri sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="container" style={{ paddingBottom: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {servicePackages.map((pkg, idx) => (
            <article
              key={pkg.id}
              id={pkg.id}
              className={`${styles.packageCard} ${pkg.featured ? styles.packageCardFeatured : ''}`}
            >
              {pkg.featured && (
                <div className={styles.featuredRibbon}>
                  <Star size={14} fill="#FFFFFF" />
                  <span>Öne Çıkan Ana Organizasyon</span>
                </div>
              )}

              <div className={styles.packageMediaWrap}>
                <Image
                  src={pkg.imageSrc}
                  alt={pkg.imageAlt}
                  fill
                  className={styles.packageImg}
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  priority={idx === 0}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
                <div className={styles.packageMediaOverlay}>
                  <span className={styles.packageMediaCategory}>{pkg.title}</span>
                  <span className={styles.packageMediaCapacity}>{pkg.capacity}</span>
                </div>
              </div>

              <div className={styles.cardHeader}>
                <div>
                  <span className={styles.badge}>{pkg.badge}</span>
                  <h2 className={styles.packageTitle}>{pkg.title}</h2>
                  <span className={styles.packageSubtitle}>{pkg.subtitle}</span>
                </div>

                <div className={styles.capacityBadge}>
                  <span className={styles.capacityLabel}>Kapasite Aralığı</span>
                  <strong className={styles.capacityValue}>{pkg.capacity}</strong>
                </div>
              </div>

              <p className={styles.packageDesc}>{pkg.desc}</p>

              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-anthracite)', marginBottom: '1.25rem' }}>
                  Paket Kapsamındaki Standart Hizmetler:
                </h4>
                <div className={styles.featuresGrid}>
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className={styles.featureItem}>
                      {pkg.id === 'dugun' ? (
                        <Sparkles size={17} className={styles.featureIcon} style={{ color: 'var(--color-champagne)' }} />
                      ) : pkg.id === 'kina' ? (
                        <Heart size={17} className={styles.featureIcon} style={{ color: '#D45D79' }} />
                      ) : pkg.id === 'nisan' ? (
                        <CheckCircle2 size={17} className={styles.featureIcon} style={{ color: 'var(--color-champagne)' }} />
                      ) : pkg.id === 'sunnet' ? (
                        <ShieldCheck size={17} className={styles.featureIcon} style={{ color: '#3B798A' }} />
                      ) : (
                        <Check size={17} className={styles.featureIcon} />
                      )}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div>
                  <span className={styles.pricingPolicy}>Şeffaf Fiyat Politikası</span>
                  <span className={styles.pricingDesc}>
                    Davetli sayısı, menü tercihi ve tarihe göre kişiselleştirilmiş net bütçe planı sunulur.
                  </span>
                </div>
                <Link href={`/iletisim?paket=${pkg.id}#concierge-booking-form`} className="btn btn-primary">
                  <CalendarCheck size={18} />
                  <span>Bu Paket İçin Keşif & Fiyat Teklifi Alın</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* SEO Cross-Links Section */}
        <section className={styles.crossLinksSection}>
          <div className={styles.crossLinksHeader}>
            <span className={styles.crossLinksPreTitle}>Daha Fazla Keşfedin</span>
            <h3 className={styles.crossLinksTitle}>Salon Mimarimiz ve Davet Rehberimiz</h3>
          </div>

          <div className={styles.crossLinksGrid}>
            <div className={styles.crossLinkCard}>
              <div className={styles.crossLinkTop}>
                <div className={styles.crossLinkIconWrap}>
                  <Building2 size={22} />
                </div>
                <span className={styles.crossLinkBadge}>Salon Mimarisi & Konfor</span>
              </div>
              <h4 className={styles.crossLinkHeading}>
                Salon Olanakları & Mimari
              </h4>
              <p className={styles.crossLinkDesc}>
                1.000 kişilik kolonsuz ferah salonumuz, yüksek tavanımız, geniş dans pistimiz, rahat otoparkımız ve otomatik jeneratör altyapımızın tüm olanaklarını inceleyin.
              </p>
              <div className={styles.crossLinkAction}>
                <Link href="/salon" className={`btn btn-outline ${styles.crossLinkBtn}`}>
                  <span>Salon Detaylarını İnceleyin</span>
                  <ArrowRight size={16} className={styles.crossLinkArrow} />
                </Link>
              </div>
            </div>

            <div className={styles.crossLinkCard}>
              <div className={styles.crossLinkTop}>
                <div className={styles.crossLinkIconWrap}>
                  <BookOpen size={22} />
                </div>
                <span className={styles.crossLinkBadge}>Planlama & Tavsiyeler</span>
              </div>
              <h4 className={styles.crossLinkHeading}>
                Düğün & Kına Planlama Rehberi
              </h4>
              <p className={styles.crossLinkDesc}>
                Masa düzeni optimizasyonu, gündüz ve akşam seansları karşılaştırması ve eksiksiz bir organizasyon için uzman tavsiyelerini okuyun.
              </p>
              <div className={styles.crossLinkAction}>
                <Link href="/rehber" className={`btn btn-outline ${styles.crossLinkBtn}`}>
                  <span>Rehberi Keşfedin</span>
                  <ArrowRight size={16} className={styles.crossLinkArrow} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
