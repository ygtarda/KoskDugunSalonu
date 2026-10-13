import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CalendarCheck, 
  ArrowRight, 
  Sparkles, 
  Car, 
  Zap, 
  Accessibility, 
  Wind,
  CheckCircle2,
  Phone
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroCalligraphy from '@/components/HeroCalligraphy';
import TiltCard from '@/components/TiltCard';
import VideoHeroSection from '@/components/VideoHeroSection';
import styles from './page.module.css';

const AtmosphereSwitcher = dynamic(() => import('@/components/AtmosphereSwitcher'), {
  loading: () => (
    <div style={{ minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-cashmere)' }}>
      Ambiyans vitrini yükleniyor...
    </div>
  ),
});

export default function HomePage() {
  return (
    <div className={styles.pageRoot}>
      {/* ===================================================================
          1. FIXED PINNED HERO (İlk Karşılama Bölümü - Kesinlikle Korundu)
          Header-free, ultra-cinematic welcoming screen with cursive signature.
          =================================================================== */}
      <section className={styles.fixedHero} aria-label="Köşk Düğün Salonu Karşılama">
        <div className={styles.heroBgLayer}>
          <Image
            src="/images/venue/kosk-ana-balo-salonu-genel-perspektif.webp"
            alt="Köşk Düğün Salonu 1.000 Kişilik Kapalı Düğün Salonu Atmosferi"
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
          =================================================================== */}
      <div className={styles.slidingContent}>
        {/* Sticky Header embedded at top of content */}
        <Header embedded />

        {/* Precise Scroll Anchor Target */}
        <div id="sliding-content-start" className={styles.scrollAnchor} />

        {/* ===================================================================
            BÖLÜM 1: SİNEMATİK TANITIM VİDEOSU HERO BÖLÜMÜ
            Tam ekran boyutunda, header'ın hemen altında konumlandırılan video alanı
            =================================================================== */}
        <VideoHeroSection />

        {/* ===================================================================
            BÖLÜM 2: 4 TEMEL METRİK ŞERİDİ (Videonun hemen altına eklendi)
            =================================================================== */}
        <div className={styles.welcomeStatsBar}>
          <div className="container">
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1.000</span>
                <span className={styles.statLabel}>Kişilik Geniş Kapasite</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>Kolonsuz</span>
                <span className={styles.statLabel}>Ferah & Açık Salon</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>Yüksek Tavan</span>
                <span className={styles.statLabel}>Havadar & Ferah Ortam</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>Geniş Otopark</span>
                <span className={styles.statLabel}>Rahat Park İmkânı</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            BÖLÜM 3: KOLONSUZ SALON MİMARİSİ VE 4 DOĞAL AVANTAJ
            =================================================================== */}
        <section className={`${styles.archSection} section-spacing`} aria-label="Salon Özellikleri ve Ferah Alan">
          <div className="container">
            <div className="section-header">
              <div className="section-header-inner">
                <div className="editorial-indicator" />
                <div className="section-title-wrap">
                  <div className="section-category">Ferah & Geniş Salon</div>
                  <h2>Geniş Alanı, Yüksek Tavanı ve Kolay Ulaşımıyla Köşk Düğün Salonu</h2>
                  <p className="section-subtitle">
                    Düğün, nişan ve özel davetleriniz için ferah oturma düzeni ve rahat bir eğlence ortamı.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.archGrid}>
              <div className={styles.archImageContainer}>
                <Image
                  src="/images/venue/kosk-ana-salon-kusursuz-simetri.webp"
                  alt="Köşk Düğün Salonu Kolonsuz Geniş Alan ve Yüksek Tavan Görünümü"
                  fill
                  className={styles.archRealImg}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  loading="lazy"
                />
                <div className={styles.archImgCaption}>
                  <span>Ferah Oturma Düzeni & Geniş Dans Pisti</span>
                </div>
              </div>

              <div className={styles.archContent}>
                <p className={styles.archIntroText}>
                  Polatlı’nın merkezinde yer alan Köşk Düğün Salonu; kolonsuz ferah yapısı, yüksek tavanı ve havadar ortamıyla
                  tüm davetlilerinize rahat bir deneyim sunar. Geniş oturma planı ve kolay ulaşılabilir konumu
                  sayesinde en kalabalık günlerinizde bile herkes keyifle ağırlanır.
                </p>

                <ul className={styles.archFeaturesList}>
                  <li className={styles.archFeatureItem}>
                    <div className={styles.featureDot} />
                    <div>
                      <h3 className={styles.featureItemTitle}>Kolonsuz Geniş Alan</h3>
                      <p className={styles.featureItemDesc}>
                        Salonda görüşü engelleyen kolon bulunmaz; tüm masalardan sahne ve dans pisti rahatça görünür.
                      </p>
                    </div>
                  </li>

                  <li className={styles.archFeatureItem}>
                    <div className={styles.featureDot} />
                    <div>
                      <h3 className={styles.featureItemTitle}>Yüksek Tavan & Havadar Ortam</h3>
                      <p className={styles.featureItemDesc}>
                        Yüksek tavanlı yapısı ve düzenli havalandırmasıyla kalabalık davetlerde bile salon havası ferah ve temiz kalır.
                      </p>
                    </div>
                  </li>

                  <li className={styles.archFeatureItem}>
                    <div className={styles.featureDot} />
                    <div>
                      <h3 className={styles.featureItemTitle}>Merkezi Konum & Kolay Ulaşım</h3>
                      <p className={styles.featureItemDesc}>
                        Polatlı merkezde, misafirlerinizin rahatça gelebileceği ve araç park sorunu yaşamayacağı bir konumdadır.
                      </p>
                    </div>
                  </li>

                  <li className={styles.archFeatureItem}>
                    <div className={styles.featureDot} />
                    <div>
                      <h3 className={styles.featureItemTitle}>Geniş Dans Pisti & Ferah Masalar</h3>
                      <p className={styles.featureItemDesc}>
                        Davetlilerinizin sıkışmadan dans edebileceği geniş mermer pisti ve rahat geçiş koridorları vardır.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className={styles.archActionGrid}>
                  <Link href="/hizmetler" className={`${styles.archBtn} ${styles.archBtnSecondary}`}>
                    <span>Hizmet Paketlerimizi İnceleyin</span>
                  </Link>
                  <Link href="/iletisim" className={`${styles.archBtn} ${styles.archBtnPrimary}`}>
                    <CalendarCheck size={17} />
                    <span suppressHydrationWarning>Keşif & Fiyat Teklifi Alın</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            BÖLÜM 4: İNTERAKTİF IŞIK & AMBİYANS DENEYİMİ (YENİ)
            İlk Dans, Kına, Dans Pisti ve Ziyafet atmosferlerini tek tıkla canlı geçişle deneyimleme
            =================================================================== */}
        <section className="section-spacing" style={{ backgroundColor: 'var(--color-surface-subtle)' }} aria-label="İnteraktif Salon Ambiyansları">
          <div className="container">
            <div className="section-header">
              <div className="section-header-inner">
                <div className="editorial-indicator" />
                <div className="section-title-wrap">
                  <div className="section-category">Işık & Atmosfer</div>
                  <h2>Davetinizin Her Anına Özel Farklı Bir Ambiyans</h2>
                  <p className="section-subtitle">
                    Sisli ilk danstan coşkulu kına gecesine kadar salonumuzun özel ışıklandırmasını inceleyin.
                  </p>
                </div>
              </div>
            </div>

            <AtmosphereSwitcher />
          </div>
        </section>

        {/* ===================================================================
            BÖLÜM 5: ORGANİZASYON KONSEPTLERİ VE PAKETLER (Stripe Layout)
            =================================================================== */}
        <section className="section-spacing" aria-label="Gerçekleştirilen Davet Türleri">
          <div className="container">
            <div className="section-header">
              <div className="section-header-inner">
                <div className="editorial-indicator" />
                <div className="section-title-wrap">
                  <div className="section-category">Davet Konseptleri & Paketler</div>
                  <h2>Her Davet İçin Özelleştirilmiş Salon Düzeni</h2>
                  <p className="section-subtitle">
                    Düğünden kına merasimine, nişandan kurumsal toplantıya kadar geniş oturma planları.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.servicesBand}>
              <div className={`${styles.serviceStripe} ${styles.serviceStripeFeatured}`}>
                <div className={styles.serviceThumbWrap}>
                  <Image
                    src="/images/venue/kosk-ilk-dans-sis-bulutu.webp"
                    alt="Köşk Düğün Salonu İlk Dans ve Sis Bulutu"
                    fill
                    className={styles.serviceThumb}
                    sizes="120px"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className={styles.serviceType}>Düğün Daveti</h3>
                  <div className={styles.serviceCapacity}>800 – 1.000 Davetli Kapasitesi</div>
                </div>
                <p className={styles.serviceText}>
                  Ferah salon düzeni, geniş dans pisti, romantik aydınlatma ve
                  taze ikram menüleriyle eksiksiz bir düğün deneyimi.
                </p>
                <div className={styles.serviceAction}>
                  <Link href="/hizmetler#dugun" className="btn btn-text">
                    Detaylı İncele
                  </Link>
                </div>
              </div>

              <div className={styles.serviceStripe}>
                <div className={styles.serviceThumbWrap}>
                  <Image
                    src="/images/venue/kosk-sahne-mor-isik-gosterisi.webp"
                    alt="Köşk Düğün Salonu Kına Gecesi Mor Işık Ambiyansı"
                    fill
                    className={styles.serviceThumb}
                    sizes="120px"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className={styles.serviceType}>Kına Gecesi</h3>
                  <div className={styles.serviceCapacity}>400 – 800 Davetli Kapasitesi</div>
                </div>
                <p className={styles.serviceText}>
                  Özel kına tahtı, sis ve mistik mor ışık efektleri, nedime geçiş seremonisi ve kapalı salonda
                  kesintisiz kadınlar arası eğlence konsepti.
                </p>
                <div className={styles.serviceAction}>
                  <Link href="/hizmetler#kina" className="btn btn-text">
                    Detaylı İncele
                  </Link>
                </div>
              </div>

              <div className={styles.serviceStripe}>
                <div className={styles.serviceThumbWrap}>
                  <Image
                    src="/images/venue/kosk-nisan-soz-ozel-konsept-aynasi.webp"
                    alt="Köşk Düğün Salonu Nişan ve Söz Özel Konsept Aynası"
                    fill
                    className={styles.serviceThumb}
                    sizes="120px"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className={styles.serviceType}>Nişan & Söz Töreni</h3>
                  <div className={styles.serviceCapacity}>300 – 600 Davetli Kapasitesi</div>
                </div>
                <p className={styles.serviceText}>
                  Zarif aile merasimleri ve geniş katılımlı nişan kutlamaları için özel dekore edilmiş
                  barok ayna fon alanı ve lüks kokteyl oturma planı.
                </p>
                <div className={styles.serviceAction}>
                  <Link href="/hizmetler#nisan" className="btn btn-text">
                    Detaylı İncele
                  </Link>
                </div>
              </div>

              <div className={styles.serviceStripe}>
                <div className={styles.serviceThumbWrap}>
                  <Image
                    src="/images/venue/kosk-dev-projeksiyon-ve-sahne-duzeni.webp"
                    alt="Köşk Düğün Salonu Dev Projeksiyon ve Sahne Düzeni"
                    fill
                    className={styles.serviceThumb}
                    sizes="120px"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className={styles.serviceType}>Kurumsal Gala & Kongre</h3>
                  <div className={styles.serviceCapacity}>500 – 1.000 Katılımcı</div>
                </div>
                <p className={styles.serviceText}>
                  Polatlı kurum ve şirketleri için kaliteli ses, dev projeksiyon ve sahne aydınlatmasına
                  sahip yemekli toplantı, lansman ve mezuniyet kutlamaları.
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

        {/* ===================================================================
            BÖLÜM 6: DAVET YOLCULUĞU — 4 ADIMDA KUSURSUZ GÜN (YENİ)
            Düğün gününün akışını şeffaf ve güven veren bir zaman çizelgesiyle gösterir
            =================================================================== */}
        <section className="section-spacing" style={{ backgroundColor: 'var(--color-surface-subtle)' }} aria-label="Davet Yolculuğu ve Organizasyon Akışı">
          <div className="container">
            <div className="section-header">
              <div className="section-header-inner">
                <div className="editorial-indicator" />
                <div className="section-title-wrap">
                  <div className="section-category">Davet Süreci & Koordinasyon</div>
                  <h2>Bir Davetin Başından Sonuna Planlı Akışı</h2>
                  <p className="section-subtitle">
                    En özel gecenizde hiçbir detayı tesadüfe bırakmıyoruz. Deneyimli ekibimizle planlanan standart adımlar:
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.timelineGrid}>
              <div className={styles.timelineStepCard}>
                <div className={styles.stepNumberBadge}>01</div>
                <h3 className={styles.stepTitle}>Özel Hazırlık & Fuaye Karşılama</h3>
                <p className={styles.stepDesc}>
                  Çiftimiz kendilerine tahsis edilen özel odada dinlenip son hazırlıklarını yaparken, 
                  davetlileriniz giriş fuayesinde güler yüzlü ekibimizce karşılanır.
                </p>
              </div>

              <div className={styles.timelineStepCard}>
                <div className={styles.stepNumberBadge}>02</div>
                <h3 className={styles.stepTitle}>Gelin Yolu & Sisli İlk Dans</h3>
                <p className={styles.stepDesc}>
                  Işık ve müzik eşliğinde gelin yolundan salona giriş; ardından zemine yayılan sis bulutları 
                  üzerinde romantik ilk dans koreografisi.
                </p>
              </div>

              <div className={styles.timelineStepCard}>
                <div className={styles.stepNumberBadge}>03</div>
                <h3 className={styles.stepTitle}>Ziyafet & Eş Zamanlı Sıcak Servis</h3>
                <p className={styles.stepDesc}>
                  Usta şefler tarafından hazırlanan leziz menüler ve pasta ikramları, geniş servis 
                  koridorları sayesinde tüm masalara aynı anda ve sıcak olarak ulaştırılır.
                </p>
              </div>

              <div className={styles.timelineStepCard}>
                <div className={styles.stepNumberBadge}>04</div>
                <h3 className={styles.stepTitle}>Kolonsuz Pistte Coşkulu Eğlence</h3>
                <p className={styles.stepDesc}>
                  Salonda kolon bulunmadığı için tüm davetliler eğlenceyi rahatça takip eder; geniş 
                  mermer pistte gecenin sonuna kadar doyasıya oynanır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            BÖLÜM 7: SEÇKİN FOTOĞRAF VİTRİNİ (YENİ ASİMETRİK GALERİ MOZAİK)
            Salondan 4 gerçek seçkin kare ve galeriye geçiş köprüsü
            =================================================================== */}
        <section className="section-spacing" aria-label="Fotoğraf Vitrini">
          <div className="container">
            <div className={styles.galleryMosaicHeader}>
              <div>
                <div className="section-category">Fotoğraf Vitrini</div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', color: 'var(--color-anthracite)', fontWeight: 450 }}>
                  Salondan Gerçek Karelerle Tanışın
                </h2>
              </div>
              <Link href="/galeri" className="btn btn-outline">
                <span>Fotoğraf Galerisinin Tamamı (20+ Fotoğraf)</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className={styles.mosaicGrid}>
              <div className={`${styles.mosaicItem} ${styles.mosaicLarge}`}>
                <Image
                  src="/images/venue/kosk-gelin-damat-nikah-tahti-masasi.webp"
                  alt="Köşk Düğün Salonu Nikah Kürsüsü ve Özel Taht Alanı"
                  fill
                  className={styles.mosaicImg}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                />
                <div className={styles.mosaicBadge}>Nikah & Sahne Düzeni</div>
              </div>

              <div className={styles.mosaicItem}>
                <Image
                  src="/images/venue/kosk-ziyafet-masalari-ve-orkestra-gorunumu.webp"
                  alt="Köşk Düğün Salonu Ziyafet Masaları ve Çiçek Vazo Düzeni"
                  fill
                  className={styles.mosaicImg}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  loading="lazy"
                />
                <div className={styles.mosaicBadge}>Ziyafet Masaları</div>
              </div>

              <div className={styles.mosaicItem}>
                <Image
                  src="/images/venue/kosk-orkestra-sahnesi-ve-dans-pisti.webp"
                  alt="Köşk Düğün Salonu Canlı Orkestra Sahnesi"
                  fill
                  className={styles.mosaicImg}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  loading="lazy"
                />
                <div className={styles.mosaicBadge}>Canlı Orkestra & Sahne</div>
              </div>

              <div className={`${styles.mosaicItem} ${styles.mosaicWide}`}>
                <Image
                  src="/images/venue/kosk-dans-pisti-spot-isik-sov.webp"
                  alt="Köşk Düğün Salonu Dans Pisti Takip Spotu"
                  fill
                  className={styles.mosaicImg}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                />
                <div className={styles.mosaicBadge}>Geniş Mermer Dans Pisti</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            BÖLÜM 8: SALON OLANAKLARI & GÜVENCELER (YENİ)
            Otopark, Jeneratör, Engelsiz Erişim, Havalandırma
            =================================================================== */}
        <section className="section-spacing" style={{ backgroundColor: 'var(--color-surface-subtle)' }} aria-label="Salon Olanakları">
          <div className="container">
            <div className={styles.amenitiesStrip}>
              <div className={styles.amenityCard}>
                <div className={styles.amenityIcon}>
                  <Car size={24} />
                </div>
                <h4>Rahat Park İmkânı</h4>
                <p>Salona bitişik geniş otoparkımız sayesinde misafirleriniz park yeri aramakla uğraşmaz, park sorunu yaşamaz.</p>
              </div>

              <div className={styles.amenityCard}>
                <div className={styles.amenityIcon}>
                  <Zap size={24} />
                </div>
                <h4>Kesintisiz Jeneratör</h4>
                <p>Olası elektrik kesintilerinde anında devreye giren otomatik jeneratör güvencesiyle eğlenceniz asla bölünmez.</p>
              </div>

              <div className={styles.amenityCard}>
                <div className={styles.amenityIcon}>
                  <Accessibility size={24} />
                </div>
                <h4>%100 Engelsiz Erişim</h4>
                <p>Tekerlekli sandalye ve bebek arabalı misafirlerimiz için merdivensiz düz giriş ve rahat ulaşım imkânı.</p>
              </div>

              <div className={styles.amenityCard}>
                <div className={styles.amenityIcon}>
                  <Wind size={24} />
                </div>
                <h4>Ferah Havalandırma</h4>
                <p>Yüksek tavan ve güçlü havalandırma sistemiyle kalabalık davetlerde bile salon havası daima temiz ve ferah kalır.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            BÖLÜM 9: ZİYARET VE KAHVEYE DAVET ÇAĞRISI (CTA INVITATION BANNER)
            BookingForm kaldırıldığı için onun yerine zarif, konuksever ve yüksek dönüşümlü davet alanı
            =================================================================== */}
        <section className="section-spacing" aria-label="Salonu Ziyaret Daveti">
          <div className="container">
            <TiltCard className={styles.invitationCard} maxTilt={2.5} glare={false}>
              <div className={styles.invitationBadge}>
                <Sparkles size={14} style={{ color: 'var(--color-champagne)' }} />
                <span>KEŞİF & TANIŞMA</span>
              </div>
              <h2 className={styles.invitationTitle}>
                Salonu Kendi Gözlerinizle Görmeye ve Kahvemizi İçmeye Davetlisiniz
              </h2>
              <p className={styles.invitationDesc}>
                Fotoğraflar fikir verir; ancak 1.200 m² kolonsuz salonun ferahlığını, yüksek tavan atmosferini 
                ve masaların yerleşimini yerinde görmek bambaşka bir histir. Polatlı merkezindeki salonumuzu 
                haftanın her günü ziyaret edebilir, tarih takvimini organizasyon şefimizle birlikte inceleyebilirsiniz.
              </p>

              <div className={styles.invitationActions}>
                <Link href="/iletisim" className="btn btn-primary" id="home-invitation-randevu-btn">
                  <CalendarCheck size={18} />
                  <span suppressHydrationWarning>Keşif & Fiyat Teklifi Alın</span>
                </Link>
                <a
                  href="https://wa.me/903126230000?text=Merhaba,%20K%C3%B6%C5%9Fk%20D%C3%BC%C4%9F%C3%BCn%20Salonu%20i%C3%A7in%20bilgi%20ve%20ziyaret%20randevusu%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  id="home-invitation-whatsapp-btn"
                >
                  <Phone size={17} />
                  <span>WhatsApp ile Hızlı Bilgi Alın</span>
                </a>
              </div>
            </TiltCard>
          </div>
        </section>
      </div>
    </div>
  );
}
