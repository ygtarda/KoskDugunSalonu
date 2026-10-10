import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Check, CalendarCheck } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import styles from './hizmetler.module.css';

export const metadata: Metadata = {
  title: 'Hizmetler & Organizasyon Paketleri | Polatlı Köşk Düğün Salonu',
  description:
    'Düğün, kına gecesi, nişan ve özel davetler için kolonsuz ve geniş salonda eksiksiz hizmet. Polatlı’da şeffaf planlama ve bütçenize uygun teklif.',
};

const servicePackages = [
  {
    id: 'dugun',
    title: 'Düğün Daveti',
    subtitle: '1.000 Kişilik Geniş ve Ferah Salon',
    capacity: '800 – 1.000 Kişi',
    badge: 'Ana Hizmet',
    imageSrc: '/images/venue/kosk-ilk-dans-sis-bulutu.webp',
    imageAlt: 'Köşk Düğün Salonu Düğün Daveti ve İlk Dans Alanı',
    desc: 'Geniş aileleri ve kalabalık davetli listelerini rahatça ağırlamak isteyen çiftler için tasarlandı. Kolonsuz ferah salon, yüksek tavan ve güler yüzlü servis bir arada.',
    features: [
      'Kolonsuz ferah salonda 1.000 kişiye kadar yuvarlak masa oturma düzeni',
      'Özel gelin yolu, şık süslemeler ve sisli romantik ilk dans alanı',
      'Eğlence ve canlı müzik için kaliteli ses sistemi ve sahne aydınlatması',
      'Gelin ve damat için rahat dinlenme ve hazırlık odası',
      'Yemekli veya pastalı menü seçenekleri (Kavurma, tavuk veya zengin ikram tabakları)',
      'Özel düğün pastası merasimi ve taze meşrubat servisi',
      'Kamera çekimi ve profesyonel fotoğraf hizmeti',
      'Geniş misafir otoparkı ile araç park kolaylığı',
      'Kesintisiz jeneratör desteği ile kesintisiz eğlence güvencesi',
    ],
  },
  {
    id: 'kina',
    title: 'Geleneksel Kına Gecesi',
    subtitle: 'Eğlenceli ve Sıcak Kına Merasimi',
    capacity: '500 – 800 Kişi',
    badge: 'Kadın Davetlilere Özel',
    imageSrc: '/images/venue/kosk-sahne-mor-isik-gosterisi.webp',
    imageAlt: 'Köşk Düğün Salonu Geleneksel Kına Gecesi Sahne Düzeni',
    desc: 'Geleneksel adetleri modern salon ferahlığıyla buluşturan, gelin hanımın ve davetlilerin doyasıya eğleneceği samimi bir atmosfer.',
    features: [
      'Şık kadife kına tahtı ve özel arka fon sahne dekorasyonu',
      'Nedime ekibi ile koreografili kına çıkışı ve bendir gösterisi',
      'Kadın garson ve kadın DJ tercihi opsiyonu',
      'Gelin için kaftan ve nedimeler için tef/mum aksesuarları',
      'Özel kına tepsisi, dağıtımlık yaş ve kuru kına paketleri',
      'Kına gecesine özel ikram tabağı ve taze meşrubat servisi',
      'Gelin hanım için konforlu giyinme ve dinlenme odası',
      'Yüksek tavan ve ferah havalandırmalı rahat salon ortamı',
    ],
  },
  {
    id: 'nisan',
    title: 'Nişan & Söz Töreni',
    subtitle: 'Aileler ve Dostlar İçin Samimi Bir Başlangıç',
    capacity: '300 – 600 Kişi',
    badge: 'Sıcak & Şık Ambiyans',
    imageSrc: '/images/venue/kosk-nisan-soz-ozel-konsept-aynasi.webp',
    imageAlt: 'Köşk Düğün Salonu Nişan ve Söz Töreni Konsept Alanı',
    desc: 'Ailelerin ve yakın dostların bir araya geldiği, sıcak, samimi ve şık bir ortamda yüzük takma merasimi.',
    features: [
      'Özel tasarım nişan tagı ve çiçekli fotoğraf arka fonu',
      'Yüzük tepsisi, merasim makası ve özel sehpa sunumu',
      'Şık masa örtüleri ve zarif masa süslemeleri',
      'Müzik yayını ve isteğe bağlı canlı müzik desteği',
      'Özel tasarım nişan pastası ve taze ikramlar',
      'Fotoğraf ve video çekimi ile anıların kaydedilmesi',
      'Dört mevsim ideal oda sıcaklığında ferah salon',
    ],
  },
  {
    id: 'sunnet',
    title: 'Sünnet Düğünü Şöleni',
    subtitle: 'Aile Boyu Coşkulu ve Rahat Kutlama',
    capacity: '500 – 1.000 Kişi',
    badge: 'Çocuklara Özel Alan',
    imageSrc: '/images/venue/kosk-dans-pisti-spot-isik-sov.webp',
    imageAlt: 'Köşk Düğün Salonu Sünnet Düğünü Şöleni ve Dans Pisti',
    desc: 'Çocuğunuzun bu anlamlı gününde tüm akrabalarınızın rahatça ağırlanacağı, geleneksel merasimlerin ve eğlencenin bir arada yaşandığı organizasyon.',
    features: [
      'Özel işlemeli sünnet tahtı ve karşılama seremonisi',
      'Palyaço ve çocuk oyun animasyon alanı',
      'Yemekli veya pastalı geleneksel ikram menüleri',
      'Geniş sahnede müzik, oyun havaları ve canlı orkestra imkânı',
      'Salona giriş anında konfeti ve ışık efektleri',
      'Geniş misafir otoparkı ile konuklara rahat varış imkânı',
    ],
  },
  {
    id: 'kurumsal',
    title: 'Kurumsal Yemek & Toplantı',
    subtitle: 'Şirket ve Kurum Buluşmaları',
    capacity: '400 – 1.200 Kişi',
    badge: 'Geniş Katılımlı Davetler',
    imageSrc: '/images/venue/kosk-dev-projeksiyon-ve-sahne-duzeni.webp',
    imageAlt: 'Köşk Düğün Salonu Kurumsal Yemek, Toplantı ve Sahne Düzeni',
    desc: 'Polatlı’daki şirketler, sivil toplum kuruluşları ve kurumlar için yemekli toplantılar, bayi buluşmaları, mezuniyetler ve veda geceleri.',
    features: [
      'Büyük projeksiyon ekranı ve ses/mikrofon sistemi',
      'Konuşmacı kürsüsü ve sahne düzeni',
      'Geniş yuvarlak masa veya isteğe göre oturma düzeni',
      'Giriş karşılama alanı ve ikram standı',
      'Müzik ve ses teknik desteği',
      'Misafirler için kolay ulaşım ve otopark imkanı',
    ],
  },
];

export default function HizmetlerPage() {
  return (
    <div style={{ paddingTop: '1rem' }}>
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
      <section className="container" style={{ paddingBottom: '6rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {servicePackages.map((pkg) => (
            <TiltCard key={pkg.id} id={pkg.id} className={styles.packageCard} maxTilt={2} scale={1.008} glare>
              <div className={styles.packageMediaWrap}>
                <Image
                  src={pkg.imageSrc}
                  alt={pkg.imageAlt}
                  fill
                  className={styles.packageImg}
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  unoptimized
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
                      <Check size={18} className={styles.featureIcon} />
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
                <Link href={`/iletisim?paket=${pkg.id}`} className="btn btn-primary">
                  <CalendarCheck size={18} />
                  <span>Bu Paket İçin Teklif & Randevu Alın</span>
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </div>
  );
}
