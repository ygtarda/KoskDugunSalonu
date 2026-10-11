import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Maximize2,
  Wind,
  Car,
  Volume2,
  Sun,
  Moon,
  CalendarCheck,
  Sparkles,
  ArrowRight,
  HelpCircle,
  BookOpen,
} from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './rehber.module.css';

export const metadata: Metadata = {
  title: 'Düğün Rehberi & Uzman Tavsiyeleri | Polatlı Köşk Düğün Salonu',
  description:
    'Polatlı ve Ankara’da düğün salonu seçimi, 1000 kişilik davet planlaması, masa düzeni, kolonsuz mekan avantajları, havalandırma ve seans tercihleri üzerine kapsamlı rehber.',
  alternates: {
    canonical: '/rehber',
  },
  keywords: [
    'Polatlı düğün rehberi',
    'Polatlı düğün salonu seçimi',
    '1000 kişilik düğün planlama',
    'düğün salonu havalandırma',
    'kolonsuz düğün salonu avantajları',
    'Ankara Polatlı düğün tavsiyeleri',
  ],
  openGraph: {
    title: 'Düğün Rehberi & Uzman Tavsiyeleri | Polatlı Köşk Düğün Salonu',
    description:
      'Polatlı’da kusursuz bir düğün planlamak için bilmeniz gereken kritik kriterler, salon seçimi ve oturma düzeni ipuçları.',
    url: 'https://koskdugunsalonu.com/rehber',
    type: 'article',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Köşk Düğün Salonu Polatlı Düğün Rehberi',
  description: 'Düğün salonu seçimi, oturma düzeni, seanslar ve davet organizasyon rehberleri.',
  url: 'https://koskdugunsalonu.com/rehber',
  publisher: {
    '@type': 'Organization',
    name: 'Köşk Düğün Salonu',
    url: 'https://koskdugunsalonu.com',
  },
};

export default function RehberPage() {
  return (
    <div className={styles.rehberPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: 'Düğün Rehberi' }]} />

      {/* Header */}
      <section style={{ padding: '3.5rem 0 2.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <span
              style={{
                fontSize: '0.84rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--color-cashmere)',
                fontWeight: 600,
                display: 'block',
                marginBottom: '0.6rem',
              }}
            >
              Uzman Davet Danışmanlığı
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.3rem, 4.2vw, 3.6rem)',
                color: 'var(--color-anthracite)',
                marginBottom: '1.25rem',
                fontWeight: 450,
                lineHeight: 1.2,
              }}
            >
              Polatlı Düğün & Davet Planlama Rehberi
            </h1>
            <p
              style={{
                fontSize: '1.12rem',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.8',
              }}
            >
              Düğün hazırlık sürecinde doğru kararlar vermeniz, en özel gecenizi sürprizlerden uzak, 
              ferah ve kusursuz bir anıya dönüştürmeniz için hazırladığımız kapsamlı uzman rehberleri.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Table of Contents (TOC) Bar */}
      <nav aria-label="Rehber İçindekiler" className={styles.stickyTocBar}>
        <div className="container">
          <div className={styles.tocFlex}>
            <span className={styles.tocLabel}>
              <BookOpen size={14} style={{ color: 'var(--color-champagne)' }} />
              İçindekiler:
            </span>
            <div className={styles.tocLinks}>
              <a href="#polatlida-dugun-salonu-secerken-dikkat-edilmesi-gerekenler" className={styles.tocLink}>
                <span>1. Salon Seçerken 7 Kriter</span>
              </a>
              <a href="#1000-kisilik-buyuk-dugunlerde-masa-duzeni-ve-misafir-konforu" className={styles.tocLink}>
                <span>2. 1.000 Kişilik Masa Düzeni</span>
              </a>
              <a href="#gunduz-ve-aksam-dugun-seansi-farklari" className={styles.tocLink}>
                <span>3. Gündüz vs Akşam Seansı</span>
              </a>
              <a href="#kapali-dugun-salonunda-havadar-ortam-ve-ses-duzeni" className={styles.tocLink}>
                <span>4. Havalandırma & Akustik</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Articles Container */}
      <section className="container" style={{ padding: '3.5rem 0 6rem 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          
          {/* =========================================================================
              MAKALE 1: Polatlı'da Düğün Salonu Seçerken Bilmeniz Gereken 7 Kritik Kriter
             ========================================================================= */}
          <article
            id="polatlida-dugun-salonu-secerken-dikkat-edilmesi-gerekenler"
            className={`arch-card ${styles.articleCard}`}
            style={{ padding: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                marginBottom: '1.25rem',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  padding: '0.3rem 0.85rem',
                  background: 'rgba(212, 181, 158, 0.22)',
                  border: '1px solid var(--color-champagne)',
                  borderRadius: 'var(--radius-xs)',
                  color: 'var(--color-anthracite)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Salon Seçim Stratejisi
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-cashmere)', fontSize: '0.84rem' }}>
                <Calendar size={14} />
                <span>Güncelleme: Ekim 2026</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-cashmere)', fontSize: '0.84rem' }}>
                <Clock size={14} />
                <span>6 dk detaylı okuma</span>
              </div>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                color: 'var(--color-anthracite)',
                marginBottom: '1.25rem',
                lineHeight: 1.3,
                fontWeight: 450,
              }}
            >
              Polatlı’da Düğün Salonu Seçerken Bilmeniz Gereken 7 Kritik Kriter
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: '1.8', marginBottom: '1.75rem' }}>
              Düğün salonu seçimi, bir çiftin düğün bütçesini ve misafirlerinin memnuniyetini doğrudan belirleyen 
              en hayati adımdır. Çoğu zaman yalnızca masa süslemelerine veya uygun görünen paket fiyatlara bakarak 
              karar vermek, düğün gecesinde kolon arkasında kalan masalar, yetersiz havalandırma veya elektrik 
              kesintisi gibi telafisi olmayan sorunlara yol açabilir. İşte Polatlı ve çevre ilçelerde salon seçerken 
              kesinlikle göz ardı etmemeniz gereken 7 temel kriter:
            </p>

            {/* 7 Kriter Detaylı Izgara */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2.25rem',
              }}
            >
              <div style={{ background: 'var(--color-surface-subtle)', border: '1px solid var(--color-stone)', padding: '1.4rem', borderRadius: 'var(--radius-xs)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <Maximize2 size={18} style={{ color: 'var(--color-champagne)' }} />
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--color-anthracite)', margin: 0, fontWeight: 600 }}>
                    1. Kolonsuz Alan & Kör Noktasız Görüş
                  </h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: '1.65', margin: 0 }}>
                  Salondaki taşıyıcı kolonlar, davetlilerin sahneyi, nikah masasını ve gelin-damat dansını görmesini engeller. 
                  Kolonsuz ferah bir salon, 1.000 kişilik tam kapasitede dahi her masaya eşit panoramik sahne hakimiyeti sağlar.
                </p>
              </div>

              <div
                id="kapali-dugun-salonunda-havadar-ortam-ve-ses-duzeni"
                style={{
                  background: 'var(--color-surface-subtle)',
                  border: '1px solid var(--color-stone)',
                  padding: '1.4rem',
                  borderRadius: 'var(--radius-xs)',
                  scrollMarginTop: '135px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <Wind size={18} style={{ color: 'var(--color-champagne)' }} />
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--color-anthracite)', margin: 0, fontWeight: 600 }}>
                    2. Yüksek Tavan ve Endüstriyel Havalandırma
                  </h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: '1.65', margin: 0 }}>
                  1.000 kişinin bir arada olduğu bir gecede salonun oksijeni hızla tükenir. Tavan yüksekliği en az 5 metre olmalı 
                  ve %100 taze hava beslemeli endüstriyel iklimlendirme santrali sürekli devrede kalmalıdır.
                </p>
              </div>

              <div style={{ background: 'var(--color-surface-subtle)', border: '1px solid var(--color-stone)', padding: '1.4rem', borderRadius: 'var(--radius-xs)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--color-champagne)' }} />
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--color-anthracite)', margin: 0, fontWeight: 600 }}>
                    3. Otomatik Devreye Giren Jeneratör Altyapısı
                  </h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: '1.65', margin: 0 }}>
                  Beklenmedik bir şebeke arızasında salonun karanlıkta kalması ve müziğin durması kabustur. 250 kVA tam kapasiteli 
                  kesintisiz jeneratör, hem ışık hem ses hem de klimaları saniyeler içinde devralmalıdır.
                </p>
              </div>

              <div style={{ background: 'var(--color-surface-subtle)', border: '1px solid var(--color-stone)', padding: '1.4rem', borderRadius: 'var(--radius-xs)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <Car size={18} style={{ color: 'var(--color-champagne)' }} />
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--color-anthracite)', margin: 0, fontWeight: 600 }}>
                    4. Salona Bitişik Otopark & Engelsiz Giriş
                  </h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: '1.65', margin: 0 }}>
                  Şehir merkezinde park yeri aramak davetlileri yorar. Salona özel 250 araçlık ücretsiz otopark ve yaşlı ya da 
                  bebek arabalı konuklar için merdivensiz düz giriş konforun anahtarıdır.
                </p>
              </div>

              <div style={{ background: 'var(--color-surface-subtle)', border: '1px solid var(--color-stone)', padding: '1.4rem', borderRadius: 'var(--radius-xs)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <Volume2 size={18} style={{ color: 'var(--color-champagne)' }} />
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--color-anthracite)', margin: 0, fontWeight: 600 }}>
                    5. Akustik Denge & Uğultusuz Ses Sistemi
                  </h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: '1.65', margin: 0 }}>
                  Müziğin davetlileri yormadan salona homojen yayılması gerekir. Kalitesiz kolonlar masalarda sohbete izin vermezken, 
                  akustik dengelenmiş ses altyapısı pistte coşku, masada ise huzur sunar.
                </p>
              </div>

              <div style={{ background: 'var(--color-surface-subtle)', border: '1px solid var(--color-stone)', padding: '1.4rem', borderRadius: 'var(--radius-xs)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <Sparkles size={18} style={{ color: 'var(--color-champagne)' }} />
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--color-anthracite)', margin: 0, fontWeight: 600 }}>
                    6. Menü Tadımı & Sıcak Servis Güvencesi
                  </h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: '1.65', margin: 0 }}>
                  Yemekli veya ikramlı davetlerde menülerin önceden tadılması, taze meşrubat ve hijyenik servis mutfağı olmazsa olmazdır. 
                  Servis personelinin güler yüzlü ve kalabalık kadrolu olması gerekir.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-stone)' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--color-cashmere)', fontWeight: 500 }}>
                Köşk Düğün Salonu bu 7 kriterin tamamını standart olarak sunmaktadır.
              </span>
              <Link href="/salon" className="btn btn-outline">
                <span>Salonumuzun Tüm Özelliklerini İnceleyin</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </article>

          {/* =========================================================================
              MAKALE 2: 800–1.000 Kişilik Büyük Düğünlerde Masa Düzeni ve Misafir Konforu
             ========================================================================= */}
          <article
            id="1000-kisilik-buyuk-dugunlerde-masa-duzeni-ve-misafir-konforu"
            className={`arch-card ${styles.articleCard}`}
            style={{ padding: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                marginBottom: '1.25rem',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  padding: '0.3rem 0.85rem',
                  background: 'rgba(212, 181, 158, 0.22)',
                  border: '1px solid var(--color-champagne)',
                  borderRadius: 'var(--radius-xs)',
                  color: 'var(--color-anthracite)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Masa Düzeni & Ergonomi
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-cashmere)', fontSize: '0.84rem' }}>
                <Calendar size={14} />
                <span>Eylül 2026</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-cashmere)', fontSize: '0.84rem' }}>
                <Clock size={14} />
                <span>5 dk okuma</span>
              </div>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                color: 'var(--color-anthracite)',
                marginBottom: '1.25rem',
                lineHeight: 1.3,
                fontWeight: 450,
              }}
            >
              800–1.000 Kişilik Büyük Düğünlerde Masa Düzeni ve Misafir Konforu
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: '1.8', marginBottom: '1.75rem' }}>
              Polatlı ve İç Anadolu bölgesinde geniş aile yapıları ve kalabalık çevreler nedeniyle düğünler 
              genellikle 800 ila 1.000 kişi aralığında gerçekleşir. Bu ölçekteki bir organizasyonu yönetmek, 
              yalnızca sandalyeleri dizmekten ibaret değildir. Yanlış masa planlaması garsonların servis yapamamasına, 
              davetlilerin dans pistine ulaşırken sıkışmasına ve genel bir karmaşa hissine yol açar.
            </p>

            <div
              style={{
                background: 'var(--color-surface-subtle)',
                border: '1px solid var(--color-stone)',
                borderRadius: 'var(--radius-xs)',
                padding: '2rem',
                marginBottom: '2rem',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-anthracite)', marginBottom: '1rem' }}>
                Büyük Düğünlerde İdeal Salon Yerleşim İlkeleri
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-champagne)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-anthracite)' }}>Yuvarlak Masaların Samimiyet Avantajı:</strong>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.94rem', display: 'block' }}>
                      10-12 kişilik yuvarlak masalar, konukların birbiriyle yüz yüze sohbet etmesine imkan tanırken servis personeline kesintisiz koridorlar açar.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-champagne)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-anthracite)' }}>Geniş Mermer Dans Pisti (180 m²):</strong>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.94rem', display: 'block' }}>
                      Halay, zeybek ve ilk dans gibi ritüellerde yüzlerce davetlinin birbirine çarpmadan rahatça eğlenebilmesi için pist salonun merkezinde geniş tutulmalıdır.
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-champagne)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-anthracite)' }}>Tebrik ve Takı Merasimi Geçiş Planı:</strong>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.94rem', display: 'block' }}>
                      Takı kuyruğu masaların önünü tıkamamalıdır; sahnenin yanındaki ayrılmış sirkülasyon koridoru sayesinde düğünün akışı asla kilitlenmez.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-stone)' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--color-cashmere)', fontWeight: 500 }}>
                Köşk Düğün Salonu'nda 1.000 kişilik masa planını birlikte simüle edebilirsiniz.
              </span>
              <Link href="/iletisim" className="btn btn-primary">
                <span>Tarih ve Kapasite Planı İçin Randevu Alın</span>
              </Link>
            </div>
          </article>

          {/* =========================================================================
              MAKALE 3: Gündüz ve Akşam Seansları Tercih Rehberi
             ========================================================================= */}
          <article
            id="gunduz-ve-aksam-dugun-seansi-farklari"
            className={`arch-card ${styles.articleCard}`}
            style={{ padding: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                marginBottom: '1.25rem',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  padding: '0.3rem 0.85rem',
                  background: 'rgba(212, 181, 158, 0.22)',
                  border: '1px solid var(--color-champagne)',
                  borderRadius: 'var(--radius-xs)',
                  color: 'var(--color-anthracite)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Seans & Zaman Planlaması
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-cashmere)', fontSize: '0.84rem' }}>
                <Calendar size={14} />
                <span>Ağustos 2026</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-cashmere)', fontSize: '0.84rem' }}>
                <Clock size={14} />
                <span>4 dk okuma</span>
              </div>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                color: 'var(--color-anthracite)',
                marginBottom: '1.25rem',
                lineHeight: 1.3,
                fontWeight: 450,
              }}
            >
              Gündüz Seansı mı, Akşam Seansı mı? Davetinize En Uygun Zaman Dilimi
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: '1.8', marginBottom: '1.75rem' }}>
              Köşk Düğün Salonu'nda gün iki ayrı profesyonel merasim seansına ayrılmıştır: 
              <strong> ☀️ Gündüz Seansı (12:00 – 16:00)</strong> ve <strong>🌙 Akşam Seansı (19:00 – 23:00)</strong>. 
              Hangi seansın sizin düğün konseptinize daha uygun olduğunu belirlemek için aşağıdaki karşılaştırma rehberini inceleyin:
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
                gap: '1.75rem',
                marginBottom: '2.25rem',
              }}
            >
              {/* Gündüz Seansı Kartı */}
              <div style={{ background: 'var(--color-surface-subtle)', border: '1px solid var(--color-stone)', padding: '1.75rem', borderRadius: 'var(--radius-xs)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Sun size={20} style={{ color: '#E5A93C' }} />
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-anthracite)', margin: 0, fontWeight: 600 }}>
                    ☀️ Gündüz Seansı (12:00 – 16:00)
                  </h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-cashmere)', marginBottom: '1rem', fontWeight: 500 }}>
                  Öğle & İkindi Merasimleri · Şehir Dışı Ulaşım Avantajı
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--color-champagne)' }} />
                    <span>Şehir dışından gelen konukların aynı gün rahatça dönebilmesi</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--color-champagne)' }} />
                    <span>Yaşlı ve çocuklu aileler için daha dinlendirici saatler</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.9rem', color: 'var(--color-champagne)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--color-champagne)' }} />
                    <span>Öğle yemekli düğün ve geleneksel merasimler için ideal</span>
                  </li>
                </ul>
              </div>

              {/* Akşam Seansı Kartı */}
              <div style={{ background: 'var(--color-surface-subtle)', border: '1px solid var(--color-stone)', padding: '1.75rem', borderRadius: 'var(--radius-xs)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Moon size={20} style={{ color: '#7E639A' }} />
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-anthracite)', margin: 0, fontWeight: 600 }}>
                    🌙 Akşam Seansı (19:00 – 23:00)
                  </h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-cashmere)', marginBottom: '1rem', fontWeight: 500 }}>
                  Görkemli Gece Balosu · Işık Gösterileri & Mistik Atmosfer
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--color-champagne)' }} />
                    <span>Robot ışıklar ve LED sahnelerin gece ambiyansında zirveye çıkması</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--color-champagne)' }} />
                    <span>Çalışan konukların iş çıkışı rahatça katılım sağlayabilmesi</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--color-champagne)' }} />
                    <span>Coşkulu canlı orkestra ve geç saatlere kadar süren eğlence</span>
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-stone)' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--color-cashmere)', fontWeight: 500 }}>
                Hangi seansı seçerseniz seçin, salonumuz yalnızca size özel tahsis edilir.
              </span>
              <Link href="/iletisim#concierge-booking-form" className="btn btn-outline">
                <span>Seans Müsaitliği Sorgulayın</span>
              </Link>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
