import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Users, 
  Maximize2, 
  ArrowUp, 
  Wind, 
  Volume2, 
  Car, 
  Heart, 
  Zap, 
  Accessibility, 
  CalendarCheck
} from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import styles from './salon.module.css';

export const metadata: Metadata = {
  title: 'Salon & Olanaklar | Polatlı 1000 Kişilik Kapalı Düğün Salonu',
  description:
    'Polatlı’da 1000 kişilik sütunsuz kapalı balo salonu, 6.5 metre tavan yüksekliği, 4 mevsim VRF iklimlendirme ve profesyonel sahne akustiği teknik detayları.',
};

const technicalSpecs = [
  {
    icon: <Users size={24} />,
    title: '800 – 1.000 Kişilik Banket Kapasitesi',
    desc: 'Yuvarlak ziyafet masalarıyla 1.000 konuk, kokteyl düzeninde 1.200 konuğa kadar ferah ve rahat ağırlama kapasitesi.',
  },
  {
    icon: <Maximize2 size={24} />,
    title: '1.200 m² Yekpare Kapalı Alan',
    desc: 'Merkezi sütun engeli bulunmayan, sahne ve dans pistinin her açıdan kusursuz görünmesini sağlayan açık görüş mimarisi.',
  },
  {
    icon: <ArrowUp size={24} />,
    title: '6.5 Metre Akustik Tavan Yüksekliği',
    desc: 'Basıklık hissini tamamen yok eden, kristal avizelerin zarafetini yansıtan ferah dikey hacim.',
  },
  {
    icon: <Wind size={24} />,
    title: 'VRF İklimlendirme & %100 Taze Hava',
    desc: 'Dış hava koşullarına bağlı kalmaksızın salon havasını saatte defalarca yenileyen, oksijen seviyesini koruyan çift filtreli havalandırma.',
  },
  {
    icon: <Volume2 size={24} />,
    title: 'Line-Array Ses & Truss Işık Altyapısı',
    desc: 'Yankı önleyici akustik tavan panelleri, bilgisayar kontrollü hareketli robot ışıklar ve davetlileri yormayan dengeli ses dağılımı.',
  },
  {
    icon: <Heart size={24} />,
    title: '2 Bağımsız VIP Gelin & Damat Süiti',
    desc: 'Özel banyosu, makyaj aynaları, ikram alanı ve dinlenme koltuklarıyla tören öncesi çifte tam mahremiyet sunan lüks odalar.',
  },
  {
    icon: <Car size={24} />,
    title: '250 Araçlık Özel Otopark Alanı',
    desc: 'Şehir merkezi yoğunluğuna takılmadan misafirlerinizin araçlarını güvenle park edebileceği geniş otopark alanı.',
  },
  {
    icon: <Zap size={24} />,
    title: '400 kVA Kesintisiz Otomatik Jeneratör',
    desc: 'Şebeke elektrik kesintisinde 4 saniyede devreye giren tam güç sanayi jeneratörü ile eğlenceniz tek bir saniye dahi aksamaz.',
  },
  {
    icon: <Accessibility size={24} />,
    title: '%100 Engelsiz ve Asansörlü Erişim',
    desc: 'Tekerlekli sandalye, bebek arabası ve yaşlı misafirlerimizin salona konforla ulaşabilmesi için geniş rampa ve asansör dizaynı.',
  },
];

export default function SalonPage() {
  return (
    <div className={styles.salonPage}>
      {/* Page Header */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.heroTextWrapper}>
            <div className={styles.pagePreTitle}>Mimari ve Teknik Standartlar</div>
            <h1 className={styles.pageTitle}>Polatlı’nın En Donanımlı Kapalı Balo Salonu</h1>
            <p className={styles.pageLead}>
              Düğün ve büyük davetlerde hava koşulu riski yoktur. 1.000 kişilik konuk ağırlamalarında 
              hava sirkülasyonundan ses akustiğine kadar her teknik detayı profesyonel balo salonu 
              standartlarında projelendirdik.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Showcase: Architectural Blueprint Placeholder */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <ImagePlaceholder
          title="Kapalı Balo Salonu İç Mimari Planı"
          dimensions="1920 × 1080 · 16:9 Mimari Kesit"
          aspectRatio="16/9"
          category="Tamamen Kapalı Salon · 4 Mevsim İklimlendirme"
        />
      </section>

      {/* Technical Specifications Grid */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-header-inner">
              <div className="editorial-indicator" />
              <div className="section-title-wrap">
                <div className="section-category">Teknik Kapasite</div>
                <h2>Teknik Altyapı ve Konfor Olanakları</h2>
                <p className="section-subtitle">
                  Köşk Düğün Salonu, estetiğin yanı sıra mühendislik ve misafir konforunu da en üst düzeyde tutar.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.specsGrid}>
            {technicalSpecs.map((spec, index) => (
              <div key={index} className={styles.specCard}>
                <div className={styles.specIcon}>{spec.icon}</div>
                <h3 className={styles.specTitle}>{spec.title}</h3>
                <p className={styles.specDesc}>{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section: Acoustics & HVAC */}
      <section className="section-spacing">
        <div className="container">
          <div className={styles.deepDiveGrid}>
            <div>
              <ImagePlaceholder
                title="Akustik Tavan ve Truss Sahne Detayı"
                dimensions="1200 × 900 · 4:3 Yerleşim"
                aspectRatio="4/3"
                category="Line-Array Ses ve Robotik Işık"
              />
            </div>
            <div className={styles.deepDiveContent}>
              <div className={styles.pagePreTitle}>Akustik ve Havalandırma</div>
              <h2>Büyük Salonlarda En Sık Yaşanan İki Problemi Çözdük</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Düğün salonlarında misafirlerin en çok şikayet ettiği iki konu vardır: 
                <strong> basık/ağırlaşan hava</strong> ve <strong>uğultu yapan kulak tırmalayıcı ses</strong>.
              </p>
              <div className={styles.problemSolutionBox}>
                <div className={styles.boxItem}>
                  <h4>1. Çift Çevrimli Taze Hava Santrali</h4>
                  <p>
                    Salonumuzda bulunan endüstriyel klima santralleri, içerideki kullanılmış havayı 
                    sürekli tahliye ederken dışarıdan filtre edilmiş %100 taze havayı basar. 1.000 kişi salonda 
                    olduğunda bile baş ağrısı ve havasızlık yaşanmaz.
                  </p>
                </div>
                <div className={styles.boxItem}>
                  <h4>2. Ses Sönümleyici Akustik Tavan Mimarisi</h4>
                  <p>
                    6.5 metrelik tavanımız özel akustik panellerle kaplanmıştır. Ses tavana çarptığında 
                    yankı yapmadan absorbe edilir. Sahnedeki orkestra masalardaki sohbeti 
                    bastırmaz; müzik net, konuşmalar anlaşılır kalır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section: VIP Suites & Bridal Comfort */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
        <div className="container">
          <div className={styles.deepDiveGridReversed}>
            <div className={styles.deepDiveContent}>
              <div className={styles.pagePreTitle}>Çiftlerimize Özel Alan</div>
              <h2>Düğün Öncesi Huzur: Özel VIP Hazırlık Süitleri</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Gelin ve damadın düğün öncesi dinlenebileceği, son hazırlıklarını rahatça yapabileceği 
                ve en yakınlarıyla heyecanını paylaşabileceği müstakil 2 adet süit hazırladık.
              </p>
              <ul className={styles.suiteFeaturesList}>
                <li>Geniş boy aynaları ve profesyonel LED makyaj masası</li>
                <li>Müstakil temiz banyo ve giyinme alanı</li>
                <li>Konforlu oturma grubu, iklimlendirme ve ikram servisi</li>
                <li>Salona doğrudan ve gizli geçiş imkânı</li>
              </ul>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/iletisim" className="btn btn-primary">
                  <CalendarCheck size={18} />
                  <span>Salonu Yerinde İncelemek İçin Randevu Alın</span>
                </Link>
              </div>
            </div>
            <div>
              <ImagePlaceholder
                title="VIP Gelin & Damat Hazırlık Süiti"
                dimensions="1200 × 900 · 4:3 Yerleşim"
                aspectRatio="4/3"
                category="Müstakil Banyo · Makyaj İstasyonu"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
