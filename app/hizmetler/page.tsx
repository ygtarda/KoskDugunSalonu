import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, CalendarCheck } from 'lucide-react';
import styles from './hizmetler.module.css';

export const metadata: Metadata = {
  title: 'Hizmetler & Organizasyon Paketleri | Polatlı Köşk Düğün Salonu',
  description:
    'Düğün, kına gecesi, nişan ve kurumsal davetler için 1000 kişilik kapalı salonda eksiksiz hizmet paketleri. Polatlı’da şeffaf planlama ve kişiye özel fiyat teklifi.',
};

const servicePackages = [
  {
    id: 'dugun',
    title: 'Görkemli Düğün Daveti',
    subtitle: '1.000 Kişilik Kapalı Balo Konsepti',
    capacity: '800 – 1.000 Kişi',
    badge: 'Ana Hizmet',
    desc: 'Büyük aileleri ve geniş davetli listelerini ferahça ağırlamak isteyen çiftler için tasarlandı. Ses akustiği, görkemli aydınlatma ve kusursuz servis bir arada.',
    features: [
      '1.200 m² sütunsuz kapalı salonda 1.000 kişilik yuvarlak masa banket düzeni',
      'Özel gelin yolu, canlı çiçek detaylı tag ve sisli ilk dans koreografisi',
      'Bilgisayarlı truss robot ışık sistemi ve profesyonel line-array ses altyapısı',
      'Gelin ve damat için 2 bağımsız VIP hazırlık süiti ve özel ikram servisi',
      'Yemekli veya zengin kokteyl menü seçenekleri (Geleneksel kavurma/tavuk veya lüks ikramlar)',
      '7 katlı gösterişli düğün pastası merasimi ve meşrubat servisi',
      'HD çoklu kamera çekimi, canlı yayın reji masası ve tam düğün video kaydı',
      '250 araçlık özel otopark alanı ve vale yönlendirmesi',
      '400 kVA sanayi tipi jeneratör ile kesintisiz enerji güvencesi',
    ],
  },
  {
    id: 'kina',
    title: 'Geleneksel Kına Gecesi',
    subtitle: 'Zarafet ve Eğlencenin Doruğu',
    capacity: '500 – 800 Kişi',
    badge: 'Özel Kadınlar Koridoru',
    desc: 'Geleneksel dokuları modern salon konforuyla harmanlayan, gelin hanımın ve nedimelerin kendilerini prenses gibi hissedeceği zengin konsept.',
    features: [
      'Göz alıcı kadife kına tahtı ve özel cibinlikli sahne dekorasyonu',
      'Nedime ekibi ile koreografili kına çıkışı ve bendir gösterisi',
      'Kadın garson, kadın DJ ve kadın güvenlik ekibi opsiyonu',
      'Gelin için kaftan ve nedimeler için tef/mum/fayton aksesuarları',
      'Özel kına tepsisi, dağıtımlık yaş ve kuru kına paketleri',
      'Kına gecesine özel ikram tabağı ve taze meşrubat servisi',
      'Salona ait VIP gelin süitinde rahat giyinme ve dinlenme alanı',
      'Merkezi VRF havalandırma ile kesintisiz ferah ortam',
    ],
  },
  {
    id: 'nisan',
    title: 'Nişan & Söz Töreni',
    subtitle: 'Zarif Başlangıçlar İçin Butik Düzen',
    capacity: '300 – 600 Kişi',
    badge: 'Romantik Ambiyans',
    desc: 'Ailelerin ve yakın dostların bir araya geldiği, sıcak, samimi ama son derece şık bir balo salonu atmosferinde yüzük takma töreni.',
    features: [
      'Özel tasarım nişan tagı, pampa ve çiçek arka fon süslemesi',
      'Yüzük tepsisi, merasim makası ve özel sehpa sunumu',
      'Yumuşak şampanya tonlarında zarif masa giydirmeleri',
      'Canlı akustik müzik veya DJ performans desteği',
      'Özel tasarım nişan pastası ve zengin karşılama ikramları',
      'Fotoğraf ve video çekimi ile anıların ölümsüzleştirilmesi',
      'Kapalı salon konforunda 4 mevsim ideal oda sıcaklığı',
    ],
  },
  {
    id: 'sunnet',
    title: 'Sünnet Düğünü Şöleni',
    subtitle: 'Aile Boyu Coşkulu Kutlama',
    capacity: '500 – 1.000 Kişi',
    badge: 'Çocuklara Özel Alan',
    desc: 'Minik evladınızın bu önemli gününde tüm akrabalarınızın rahatça ağırlanacağı, geleneksel merasimlerin ve eğlencenin bir arada yaşandığı organizasyon.',
    features: [
      'Özel işlemeli sünnet tahtı ve yeniçeri karşılama seremonisi',
      'Palyaço, yüz boyama ve çocuk oyun animasyon alanı',
      'Yemekli veya pastalı geleneksel ikram menüleri',
      'Geniş sahnede fasıl, halk oyunları veya canlı orkestra imkânı',
      'Salona giriş anında konfeti ve ışık şovları',
      'Geniş misafir otoparkı ile konuklara rahat varış imkânı',
    ],
  },
  {
    id: 'kurumsal',
    title: 'Kurumsal Gala & Kongre',
    subtitle: 'Prestijli İş ve Toplantı Buluşmaları',
    capacity: '400 – 1.200 Kişi',
    badge: 'Profesyonel AV Donanımı',
    desc: 'Polatlı ve Ankara’daki şirketler, sivil toplum kuruluşları ve kurumlar için gala yemekleri, bayi toplantıları, mezuniyetler ve ödül törenleri.',
    features: [
      'Dev projeksiyon / LED ekran ve çoklu mikrofon sistemi',
      'Kürsü, konuşmacı sahnesi ve simultane ses iletimi',
      'U-düzen, sınıf düzeni veya yuvarlak masa protokol oturumu',
      'Protokol karşılama fuayesi ve tebrik kokteyli',
      'Fasıl, orkestra veya kurumsal sunum teknik desteği',
      'Yüksek hızlı Wi-Fi ve teknik operatör refakati',
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
            <div className={styles.pagePreTitle}>Organizasyon Konseptleri</div>
            <h1 className={styles.pageTitle}>
              Her Davete Özel Kusursuz Hizmet Paketleri
            </h1>
            <p className={styles.pageLead}>
              Köşk Düğün Salonu’nda hazır kalıplara sıkışmazsınız. İhtiyacınıza, davetli sayınıza ve 
              hayal ettiğiniz konsepte göre şekillenen profesyonel organizasyon çözümleri sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="container" style={{ paddingBottom: '6rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {servicePackages.map((pkg) => (
            <div key={pkg.id} id={pkg.id} className={styles.packageCard}>
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
