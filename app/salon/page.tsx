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
import Image from 'next/image';
import TiltCard from '@/components/TiltCard';
import styles from './salon.module.css';

export const metadata: Metadata = {
  title: 'Salon & Olanaklar | Polatlı 1.000 Kişilik Köşk Düğün Salonu',
  description:
    'Polatlı’da 1.000 kişilik kolonsuz ferah salon, yüksek tavan, havadar ortam, geniş dans pisti ve kolay otopark imkanıyla Köşk Düğün Salonu.',
};

const technicalSpecs = [
  {
    icon: <Users size={24} />,
    title: '800 – 1.000 Kişilik Kapasite',
    desc: 'Yuvarlak masalarla kalabalık ailelerin ve tüm davetlilerin ferahça oturabileceği geniş ağırlama kapasitesi.',
  },
  {
    icon: <Maximize2 size={24} />,
    title: 'Kolonsuz Geniş Salon',
    desc: 'Salonda görüşü kapatan kolon bulunmaz; sahne, nikah masası ve dans pisti her noktadan rahatça görünür.',
  },
  {
    icon: <ArrowUp size={24} />,
    title: 'Yüksek Tavan Ferahlığı',
    desc: 'Yüksek tavanlı yapısı sayesinde basıklık hissi oluşturmaz; ferah ve aydınlık bir ortam sunar.',
  },
  {
    icon: <Wind size={24} />,
    title: 'Düzenli Havalandırma',
    desc: 'En kalabalık davetlerde dahi içerideki havanın temiz ve ferah kalmasını sağlayan düzenli havalandırma.',
  },
  {
    icon: <Volume2 size={24} />,
    title: 'Kaliteli Ses ve Sahne Işıkları',
    desc: 'Davetlileri yormayan dengeli ses sistemi ve düğün coşkusunu artıran hareketli sahne aydınlatması.',
  },
  {
    icon: <Heart size={24} />,
    title: 'Gelin & Damat Hazırlık Odası',
    desc: 'Tören öncesi rahatça dinlenebileceğiniz, makyaj aynası ve oturma alanı bulunan özel hazırlık odası.',
  },
  {
    icon: <Car size={24} />,
    title: 'Geniş Otopark Alanı',
    desc: 'Misafirlerinizin araçlarını park etmekte zorlanmayacağı, salona bitişik geniş otopark imkanı.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Kesintisiz Jeneratör Güvencesi',
    desc: 'Olası elektrik kesintilerinde hemen devreye giren jeneratör desteğiyle eğlenceniz kesintisiz devam eder.',
  },
  {
    icon: <Accessibility size={24} />,
    title: 'Kolay ve Engelsiz Erişim',
    desc: 'Tekerlekli sandalye, bebek arabası ve yaşlı misafirlerimizin salona rahatça ulaşabilmesi için düz giriş ve rampa imkanı.',
  },
];

export default function SalonPage() {
  return (
    <div className={styles.salonPage}>
      {/* Page Header */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.heroTextWrapper}>
            <div className={styles.pagePreTitle}>Salonumuzun Özellikleri</div>
            <h1 className={styles.pageTitle}>Geniş ve Ferah Salonumuzda Rahat Davetler</h1>
            <p className={styles.pageLead}>
              Düğün ve büyük davetleriniz için ferah bir ortam sunuyoruz. 1.000 kişilik kapasitesi, 
              kolonsuz ferah yapısı, yüksek tavanı ve kolay ulaşılabilir konumuyla tüm misafirlerinize 
              konforlu bir gece hazırladık.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Showcase: Architectural Real Photography */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <div className={styles.showcaseMedia}>
          <Image
            src="/images/venue/kosk-ana-balo-salonu-genel-perspektif.webp"
            alt="Köşk Düğün Salonu 1.000 Kişilik Kapalı Balo Salonu Panoramik Görünüm"
            fill
            className={styles.showcaseImg}
            sizes="100vw"
            priority
            unoptimized
          />
          <div className={styles.showcaseCaption}>
            <span className={styles.captionTitle}>1.000 Kişilik Kolonsuz Salon & Geniş Dans Pisti</span>
            <span className={styles.captionBadge}>Ferah Oturma Düzeni · Düzenli Havalandırma</span>
          </div>
        </div>
      </section>

      {/* Technical Specifications Grid */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-header-inner">
              <div className="editorial-indicator" />
              <div className="section-title-wrap">
                <div className="section-category">Salon İmkânları</div>
                <h2>Misafirlerinizin Rahatı İçin Hazırlanan Detaylar</h2>
                <p className="section-subtitle">
                  Köşk Düğün Salonu, geniş alanı ve kullanışlı yapısıyla davet boyunca rahat etmenizi sağlar.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.specsGrid}>
            {technicalSpecs.map((spec, index) => (
              <TiltCard key={index} className={styles.specCard} maxTilt={6} glare>
                <div className={styles.specIcon}>{spec.icon}</div>
                <h3 className={styles.specTitle}>{spec.title}</h3>
                <p className={styles.specDesc}>{spec.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section: Acoustics & HVAC */}
      <section className="section-spacing">
        <div className="container">
          <div className={styles.deepDiveGrid}>
            <div className={styles.deepDiveMedia}>
              <Image
                src="/images/venue/kosk-orkestra-sahnesi-ve-dans-pisti.webp"
                alt="Köşk Düğün Salonu Sahne ve Dans Pisti"
                fill
                className={styles.deepDiveImg}
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div className={styles.deepDiveContent}>
              <div className={styles.pagePreTitle}>Ferah & Havadar Ortam</div>
              <h2>Kalabalık Davetlerde Bile Ferah Bir Atmosfer</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Düğün salonlarında misafirlerin en çok önem verdiği iki konu vardır: 
                <strong> havasız kalmamak</strong> ve <strong>müziğin kulak tırmalamadan keyifle dinlenmesi</strong>.
              </p>
              <div className={styles.problemSolutionBox}>
                <div className={styles.boxItem}>
                  <h4>1. Düzenli Havalandırma ile Temiz Hava</h4>
                  <p>
                    Salonumuzdaki havalandırma sistemi içerideki havayı sürekli tazeler. 1.000 kişilik tam 
                    kapasiteli davetlerde bile salon içinde basıklık ve havasızlık hissedilmez.
                  </p>
                </div>
                <div className={styles.boxItem}>
                  <h4>2. Yüksek Tavan ve Dengeli Ses Dağılımı</h4>
                  <p>
                    Yüksek tavanlı ferah yapımız sayesinde müzik sesi uğultu yapmaz. Sahnedeki müzik 
                    keyifle dinlenirken, masalardaki sohbetler de rahatça devam eder.
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
              <h2>Düğün Öncesi Rahat Hazırlık: Gelin & Damat Odası</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Gelin ve damadın düğün öncesinde dinlenebileceği, son hazırlıklarını rahatça yapabileceği 
                ve en yakınlarıyla heyecanını paylaşabileceği konforlu hazırlık odamız mevcuttur.
              </p>
              <ul className={styles.suiteFeaturesList}>
                <li>Ayna ve makyaj masası alanı</li>
                <li>Temiz lavabo ve rahat giyinme alanı</li>
                <li>Konforlu oturma grubu ve dinlenme alanı</li>
                <li>Salona doğrudan ve rahat geçiş imkânı</li>
              </ul>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/iletisim" className="btn btn-primary">
                  <CalendarCheck size={18} />
                  <span>Salonu Yerinde İncelemek İçin Randevu Alın</span>
                </Link>
              </div>
            </div>
            <div className={styles.deepDiveMedia}>
              <Image
                src="/images/venue/kosk-gelin-damat-nikah-tahti-masasi.webp"
                alt="Köşk Düğün Salonu Gelin & Damat Nikah Kürsüsü ve Masası"
                fill
                className={styles.deepDiveImg}
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
