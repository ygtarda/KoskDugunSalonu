import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
  CalendarCheck,
} from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import styles from './salon.module.css';

export const metadata: Metadata = {
  title: 'Salon Mimarisi & Olanaklar | 1.000 Kişilik Kolonsuz Salon Polatlı',
  description:
    'Polatlı’da 1.000 kişilik kolonsuz ferah salon, 6.5 m tavan yüksekliği, 180 m² dans pisti, %100 taze hava iklimlendirmesi, 250 kVA jeneratör ve 250 araçlık özel otopark.',
  alternates: {
    canonical: '/salon',
  },
  keywords: [
    'Polatlı 1000 kişilik salon',
    'kolonsuz düğün salonu Polatlı',
    'yüksek tavan düğün salonu',
    'düğün salonu otopark Polatlı',
    'Köşk salon olanakları',
    'Polatlı balo salonu özellikleri',
  ],
  openGraph: {
    title: 'Salon Mimarisi & Olanaklar | Köşk Düğün Salonu Polatlı',
    description:
      '1.000 kişilik kolonsuz ferah salon, 6.5 m tavan yüksekliği, 180 m² mermer dans pisti, 250 araçlık otopark ve kesintisiz jeneratör güvencesi.',
    url: 'https://koskdugunsalonu.com/salon',
    type: 'website',
  },
};

const salonFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Salonda görüşü kapatan kolon var mı?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hayır, Köşk Düğün Salonu %100 kolonsuz bir mimariye sahiptir. Salonun hiçbir noktasında sahneyi, dans pistini veya nikah masasını kapatan engelleyici kolon bulunmaz.',
      },
    },
    {
      '@type': 'Question',
      name: '1.000 kişilik tam kapasitede havalandırma yeterli midir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet, salonumuz 6.5 metre tavan yüksekliğine ve saatte içeriye sürekli taze hava basan endüstriyel klima santraline sahiptir. En kalabalık yaz düğünlerinde dahi basıklık ve havasızlık yaşanmaz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Otopark imkanı ve kapasitesi nedir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salonumuzun hemen bitişiğinde misafirlerimize özel 250 araç kapasiteli ücretsiz otopark mevcuttur. Konuklarınız park yeri aramakla vakit kaybetmez.',
      },
    },
  ],
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
    title: '6.5 Metre Tavan Yüksekliği',
    desc: 'Yüksek tavanlı mimarisi sayesinde basıklık hissi oluşturmaz; ferah, havadar ve aydınlık bir ortam sunar.',
  },
  {
    icon: <Wind size={24} />,
    title: '%100 Taze Hava Havalandırması',
    desc: 'En kalabalık davetlerde dahi içerideki havayı sürekli tazeleyen ve filtreleyen endüstriyel iklimlendirme santrali.',
  },
  {
    icon: <Volume2 size={24} />,
    title: 'Dengeli Line-Array Ses Sistemi',
    desc: 'Davetlileri yormayan akustik ses dağılımı ve düğün coşkusunu artıran hareketli robot sahne ışıklandırması.',
  },
  {
    icon: <Heart size={24} />,
    title: 'Özel Gelin & Damat Suiti',
    desc: 'Tören öncesi rahatça dinlenebileceğiniz, makyaj aynası, dinlenme alanı ve özel lavabosu bulunan VIP hazırlık odası.',
  },
  {
    icon: <Car size={24} />,
    title: '250 Araçlık Özel Otopark',
    desc: 'Misafirlerinizin araçlarını park etmekte zorlanmayacağı, salona bitişik güvenli ve geniş otopark alanı.',
  },
  {
    icon: <Zap size={24} />,
    title: '250 kVA Kesintisiz Jeneratör',
    desc: 'Olası elektrik kesintilerinde otomatik olarak saniyeler içinde devreye giren tam kapasiteli jeneratör desteği.',
  },
  {
    icon: <Accessibility size={24} />,
    title: 'Engelsiz ve Kolay Erişim',
    desc: 'Tekerlekli sandalye, bebek arabası ve yaşlı misafirlerimizin salona rahatça ulaşabilmesi için düz giriş ve rampa altyapısı.',
  },
];

const salonFaqItems: FaqItem[] = [
  {
    question: 'Salonda kolon var mı, masalardan sahne görünür mü?',
    answer:
      'Kesinlikle hayır. Köşk Düğün Salonu %100 kolonsuz bir mimariyle inşa edilmiştir. 1.000 kişilik tam kapasitede dahi her masadan sahne, nikah alanı ve mermer dans pisti engelsiz ve panoramik şekilde izlenebilir.',
  },
  {
    question: '1.000 kişilik tam kapasiteli davetlerde salon havasız kalır mı?',
    answer:
      'Hayır. 6.5 metre yüksek tavanımız ve %100 taze hava sirkülasyonlu endüstriyel iklimlendirme sistemimiz sayesinde salonda hava sürekli yenilenir. Yaz sıcağında ferah ve serin, kış aylarında ideal oda sıcaklığında bir ortam sağlanır.',
  },
  {
    question: 'Misafirlerimiz için otopark var mı ve ücretli midir?',
    answer:
      'Salonumuzun hemen yanında 250 araç kapasiteli geniş özel otoparkımız bulunmaktadır ve davetlileriniz için tamamen ücretsizdir. Ayrıca salon girişimiz engelli, bebek arabalı ve yaşlı konuklarımız için %100 düz girişlidir.',
  },
];

export default function SalonPage() {
  return (
    <div className={styles.salonPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(salonFaqSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: 'Salon Mimarisi & Olanaklar' }]} />

      {/* Page Header */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.heroTextWrapper}>
            <div className={styles.pagePreTitle}>1.000 Kişilik Kolonsuz Mimari</div>
            <h1 className={styles.pageTitle}>Geniş, Ferah ve Tam Donanımlı Balo Salonumuz</h1>
            <p className={styles.pageLead}>
              Düğün ve büyük davetleriniz için Polatlı'nın en konforlu ortamını hazırladık. 1.000 kişilik oturma kapasitesi, 
              kolonsuz geniş mimarisi, 6.5 metre tavan yüksekliği, güçlü taze hava havalandırması ve merkezi konumuyla 
              davetiniz boyunca tüm misafirlerinize rahat bir ağırlama sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Mimari Özellikler Matrisi / Çizelgesi */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-surface-subtle)' }} id="mimari">
        <div className="container">
          <div className="section-header">
            <div className="section-header-inner">
              <div className="editorial-indicator" />
              <div className="section-title-wrap">
                <div className="section-category">Teknik ve Mimari Standartlar</div>
                <h2>Kusursuz Bir Davet İçin Eksiksiz Altyapı</h2>
                <p className="section-subtitle">
                  Köşk Düğün Salonu, geniş alanı ve ergonomik yerleşimiyle davet boyunca konuklarınızın konforunu güvenceye alır.
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

      {/* Derin İnceleme 1: Akustik & Havalandırma */}
      <section className="section-spacing" id="havalandirma">
        <div className="container">
          <div className={styles.deepDiveGrid}>
            <div className={styles.deepDiveMedia}>
              <Image
                src="/images/venue/kosk-orkestra-sahnesi-ve-dans-pisti.webp"
                alt="Köşk Düğün Salonu Sahne, Orkestra ve 180 m² Dans Pisti Alanı"
                fill
                className={styles.deepDiveImg}
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className={styles.deepDiveContent}>
              <div className={styles.pagePreTitle}>Ferah & Havadar Ortam</div>
              <h2>Kalabalık Davetlerde Bile Tertemiz Hava Sirkülasyonu</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                Düğün salonlarında misafirlerin en çok şikayet ettiği iki konu vardır: 
                <strong> havasız kalmak</strong> ve <strong>müziğin kulak tırmalayarak sohbeti engellemesi</strong>.
              </p>
              <div className={styles.problemSolutionBox}>
                <div className={styles.boxItem}>
                  <h4>1. %100 Taze Hava ile Düzenli Havalandırma</h4>
                  <p>
                    Salonumuzdaki endüstriyel klima santrali içerideki havayı sürekli dışarı atıp filtre edilmiş 
                    tertemiz hava basar. 1.000 kişilik tam kapasiteli davetlerde bile salonda basıklık hissedilmez.
                  </p>
                </div>
                <div className={styles.boxItem}>
                  <h4>2. Yüksek Tavan ve Dengeli Line-Array Ses Dağılımı</h4>
                  <p>
                    6.5 metre tavan yüksekliğimiz sayesinde müzik sesi uğultu yapmaz. Sahne önünde coşkuyla oynanırken, 
                    arkadaki masalarda misafirleriniz bağırmadan rahatça sohbet edebilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Derin İnceleme 2: Gelin & Damat Suiti */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-surface-subtle)' }} id="gelin-odasi">
        <div className="container">
          <div className={styles.deepDiveGridReversed}>
            <div className={styles.deepDiveContent}>
              <div className={styles.pagePreTitle}>VIP Çift Suiti</div>
              <h2>Düğün Öncesi Huzurlu Dinlenme: Gelin & Damat Odası</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                Gelin ve damadın düğün öncesinde dinlenebileceği, son hazırlıklarını rahatça tamamlayabileceği 
                ve en yakınlarıyla heyecanını paylaşabileceği özel iklimlendirmeli VIP odamız mevcuttur.
              </p>
              <ul className={styles.suiteFeaturesList}>
                <li>Geniş boy aynası ve profesyonel makyaj masası aydınlatması</li>
                <li>Özel temiz lavabo ve ferah giyinme kabini</li>
                <li>Konforlu oturma grubu ve ikram alanı</li>
                <li>Salona ve gelin yoluna doğrudan kesintisiz geçiş kapısı</li>
              </ul>
              <div style={{ marginTop: '2.25rem' }}>
                <Link href="/iletisim#concierge-booking-form" className="btn btn-primary">
                  <CalendarCheck size={18} />
                  <span>Salonu Yerinde İncelemek İçin Keşif Randevusu Alın</span>
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
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sıkça Sorulan Salon Soruları (FaqAccordion ile uyumlu) */}
      <section className="container" style={{ padding: '4.5rem 0' }} id="otopark">
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.82rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-cashmere)', fontWeight: 600 }}>
              Merak Edilen Sorular
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', color: 'var(--color-anthracite)', margin: '0.4rem 0' }}>
              Salonumuz Hakkında Sıkça Sorulanlar
            </h2>
          </div>

          <FaqAccordion items={salonFaqItems} />
        </div>
      </section>
    </div>
  );
}
