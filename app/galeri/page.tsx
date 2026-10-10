import type { Metadata } from 'next';
import Link from 'next/link';
import GalleryLightbox, { GalleryItem } from '@/components/GalleryLightbox';
import { CalendarCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fotoğraf Galerisi | Polatlı Köşk Kapalı Düğün Salonu',
  description:
    'Köşk Düğün Salonu’nun 1.000 kişilik kolonsuz kapalı salonu, ferah masa düzeni, sahne ışıklandırması ve gelin hazırlık odasından fotoğrafları inceleyin.',
};

const galleryItems: GalleryItem[] = [
  // 1. Kapalı Salon & Mimari
  {
    id: 'ana-salon-genel-perspektif',
    category: 'salon',
    categoryName: 'Kapalı Salon & Mimari',
    title: '1.000 Kişilik Ana Balo Salonu Panoramik Bakış',
    description: '1.200 m² kolonsuz ferah salon yapısı, kristal avizeler ve geniş dans pistini merkezine alan görkemli mimari yerleşim.',
    src: '/images/venue/kosk-ana-balo-salonu-genel-perspektif.webp',
    fallbackSrc: '/images/venue/kosk-ana-balo-salonu-genel-perspektif.jpg',
  },
  {
    id: 'ana-salon-kusursuz-simetri',
    category: 'salon',
    categoryName: 'Kapalı Salon & Mimari',
    title: 'Kusursuz Simetri ve Yüksek Tavan Ferahlığı',
    description: '6.5 metre tavan yüksekliği, sarkıt çiçek detayları ve her masadan sahneyi kesintisiz gören geniş görüş koridoru.',
    src: '/images/venue/kosk-ana-salon-kusursuz-simetri.webp',
    fallbackSrc: '/images/venue/kosk-ana-salon-kusursuz-simetri.jpg',
  },
  {
    id: 'balo-salonu-panoramik-oturma-duzeni',
    category: 'salon',
    categoryName: 'Kapalı Salon & Mimari',
    title: 'Panoramik Oturma Düzeni ve Banket Masaları',
    description: 'Beyaz tiffany sandalyeler ve şampanya örtülü yuvarlak ziyafet masaları ile konforlu davetli yerleşimi.',
    src: '/images/venue/kosk-balo-salonu-panoramik-oturma-duzeni.webp',
    fallbackSrc: '/images/venue/kosk-balo-salonu-panoramik-oturma-duzeni.jpg',
  },
  {
    id: 'salon-genel-yerlesim-ve-ferah-mimari',
    category: 'salon',
    categoryName: 'Kapalı Salon & Mimari',
    title: 'Geniş İç Hacim ve Kolonsuz Ferah Salon',
    description: 'Hiçbir kolonun görüşü engellemediği, her masadan sahne ve dans pistinin rahatça izlendiği ferah salon düzeni.',
    src: '/images/venue/kosk-salon-genel-yerlesim-ve-ferah-mimari.webp',
    fallbackSrc: '/images/venue/kosk-salon-genel-yerlesim-ve-ferah-mimari.jpg',
  },
  {
    id: 'salon-oturma-plani-ve-isik-ambiyasi',
    category: 'salon',
    categoryName: 'Kapalı Salon & Mimari',
    title: 'Yan Kanat Yerleşimi ve Loş Ambiyans Işıkları',
    description: 'Çevre duvar aplikleri ve tavan aydınlatmalarıyla dengelenen zarif davet atmosferi.',
    src: '/images/venue/kosk-salon-oturma-plani-ve-isik-ambiyasi.webp',
    fallbackSrc: '/images/venue/kosk-salon-oturma-plani-ve-isik-ambiyasi.jpg',
  },
  {
    id: 'tiffany-sandalyeler-ve-genis-dans-pisti',
    category: 'salon',
    categoryName: 'Kapalı Salon & Mimari',
    title: 'Tiffany Sandalye Sıraları ve Dans Pisti',
    description: 'Davetlilerin rahat hareket edebileceği geniş geçiş koridorları ve mermer dans pisti geçişi.',
    src: '/images/venue/kosk-tiffany-sandalyeler-ve-genis-dans-pisti.webp',
    fallbackSrc: '/images/venue/kosk-tiffany-sandalyeler-ve-genis-dans-pisti.jpg',
  },

  // 2. Sahne, Ses & Işık Şovları
  {
    id: 'orkestra-sahnesi-ve-dans-pisti',
    category: 'sahne',
    categoryName: 'Sahne & Işık Şovları',
    title: 'Canlı Orkestra Sahnesi ve Sahne Işıklandırması',
    description: 'Geniş orkestra podyumu, renkli sahne ışıkları ve tavandaki mor salkım çiçek tentesi.',
    src: '/images/venue/kosk-orkestra-sahnesi-ve-dans-pisti.webp',
    fallbackSrc: '/images/venue/kosk-orkestra-sahnesi-ve-dans-pisti.jpg',
  },
  {
    id: 'dev-projeksiyon-ve-sahne-duzeni',
    category: 'sahne',
    categoryName: 'Sahne & Işık Şovları',
    title: 'Dev Projeksiyon Ekranı ve Sahne Rejisi',
    description: 'Düğün videosu, canlı yayın ve kurumsal sunumlar için sahne arkasında yüksek çözünürlüklü dev yansıtma ekranı.',
    src: '/images/venue/kosk-dev-projeksiyon-ve-sahne-duzeni.webp',
    fallbackSrc: '/images/venue/kosk-dev-projeksiyon-ve-sahne-duzeni.jpg',
  },
  {
    id: 'sahne-mor-isik-gosterisi',
    category: 'sahne',
    categoryName: 'Sahne & Işık Şovları',
    title: 'Kına ve Gece Kutlamaları İçin Mor Işık Ambiyansı',
    description: 'Derin mor ve menekşe tonlarında güçlü LED aydınlatma ile kına merasimlerine özel mistik atmosfer.',
    src: '/images/venue/kosk-sahne-mor-isik-gosterisi.webp',
    fallbackSrc: '/images/venue/kosk-sahne-mor-isik-gosterisi.jpg',
  },
  {
    id: 'sahne-turkuaz-led-ambiyans',
    category: 'sahne',
    categoryName: 'Sahne & Işık Şovları',
    title: 'Turkuaz & Camgöbeği Sahne LED Efekti',
    description: 'Canlı dans ve hareketli müzik performanslarında sahneyi aydınlatan ferahlatıcı turkuaz robot ışıklar.',
    src: '/images/venue/kosk-sahne-turkuaz-led-ambiyans.webp',
    fallbackSrc: '/images/venue/kosk-sahne-turkuaz-led-ambiyans.jpg',
  },
  {
    id: 'sahne-amber-sicak-isik-sov',
    category: 'sahne',
    categoryName: 'Sahne & Işık Şovları',
    title: 'Sıcak Amber & Altın Işık Şovu',
    description: 'Yemek ve karşılama esnasında göz yormayan, salona altın sarısı sıcaklık katan özel amber tonlaması.',
    src: '/images/venue/kosk-sahne-amber-sicak-isik-sov.webp',
    fallbackSrc: '/images/venue/kosk-sahne-amber-sicak-isik-sov.jpg',
  },
  {
    id: 'sahne-kirmizi-isik-ve-efektler',
    category: 'sahne',
    categoryName: 'Sahne & Işık Şovları',
    title: 'Dramatik Kırmızı Işık ve Pasta Kesim Efekti',
    description: 'Pasta seremonisi ve coşkulu kutlama anlarında sahneye dinamizm katan güçlü kırmızı ışık hüzmeleri.',
    src: '/images/venue/kosk-sahne-kirmizi-isik-ve-efektler.webp',
    fallbackSrc: '/images/venue/kosk-sahne-kirmizi-isik-ve-efektler.jpg',
  },
  {
    id: 'sahne-cok-renkli-robot-isik-demetleri',
    category: 'sahne',
    categoryName: 'Sahne & Işık Şovları',
    title: 'Çok Renkli Bilgisayarlı Hareketli Robot Işıklar',
    description: 'Orkestranın temposuna göre senkronize hareket eden çok renkli ışık demetleri ve parti coşkusu.',
    src: '/images/venue/kosk-sahne-cok-renkli-robot-isik-demetleri.webp',
    fallbackSrc: '/images/venue/kosk-sahne-cok-renkli-robot-isik-demetleri.jpg',
  },
  {
    id: 'sahne-yesil-ve-mavi-isik-armonisi',
    category: 'sahne',
    categoryName: 'Sahne & Işık Şovları',
    title: 'Zümrüt Yeşili ve Gece Mavisi Işık Armonisi',
    description: 'Halk oyunları ve özel şovlar için programlanan tematik renk geçişleri ve sahne aydınlatması.',
    src: '/images/venue/kosk-sahne-yesil-ve-mavi-isik-armonisi.webp',
    fallbackSrc: '/images/venue/kosk-sahne-yesil-ve-mavi-isik-armonisi.jpg',
  },
  {
    id: 'sahne-beyaz-isik-ve-cicek-tavani',
    category: 'sahne',
    categoryName: 'Sahne & Işık Şovları',
    title: 'Doğal Günışığı Beyazı ve Çiçekli Tavan Mimarisi',
    description: 'Fotoğraf ve video çekimlerinde yüzleri pürüzsüz gösteren yüksek CRI değerine sahip doğal beyaz aydınlatma.',
    src: '/images/venue/kosk-sahne-beyaz-isik-ve-cicek-tavani.webp',
    fallbackSrc: '/images/venue/kosk-sahne-beyaz-isik-ve-cicek-tavani.jpg',
  },

  // 3. İlk Dans & Özel Anlar
  {
    id: 'ilk-dans-sis-bulutu',
    category: 'dans',
    categoryName: 'İlk Dans & Özel Anlar',
    title: 'Bulutlar Üzerinde Masalsı İlk Dans',
    description: 'Ağır kuru buz dumanı teknolojisiyle zemine yayılan sis bulutu üzerinde büyülü ve romantik ilk dans anı.',
    src: '/images/venue/kosk-ilk-dans-sis-bulutu.webp',
    fallbackSrc: '/images/venue/kosk-ilk-dans-sis-bulutu.jpg',
  },
  {
    id: 'dans-pisti-spot-isik-sov',
    category: 'dans',
    categoryName: 'İlk Dans & Özel Anlar',
    title: 'Dans Pisti Takip Spotu & Tavan Çiçek Çemberi',
    description: 'Çiftimizin merkezde olduğu anları aydınlatan güçlü takip spotu ve tavandaki mor çiçek halkası.',
    src: '/images/venue/kosk-dans-pisti-spot-isik-sov.webp',
    fallbackSrc: '/images/venue/kosk-dans-pisti-spot-isik-sov.jpg',
  },
  {
    id: 'renkli-dans-pisti-isik-yansimasi',
    category: 'dans',
    categoryName: 'İlk Dans & Özel Anlar',
    title: 'Pist Üzerinde Hareketli Renk Yansımaları',
    description: 'Özel cilalı mermer pist üzerinde dans ederken oluşan canlı robot ışık kırılmaları ve görsel şölen.',
    src: '/images/venue/kosk-renkli-dans-pisti-isik-yansimasi.webp',
    fallbackSrc: '/images/venue/kosk-renkli-dans-pisti-isik-yansimasi.jpg',
  },

  // 4. Nişan, Nikah & Karşılama
  {
    id: 'gelin-damat-nikah-tahti-masasi',
    category: 'ozel',
    categoryName: 'Nişan, Nikah & Karşılama',
    title: 'Gelin & Damat Nikah Kürsüsü ve Özel Taht',
    description: 'Altın varak kaplama oymalı taht sandalyeleri, piliseli arka fon panelleri ve dikey amber LED hatları.',
    src: '/images/venue/kosk-gelin-damat-nikah-tahti-masasi.webp',
    fallbackSrc: '/images/venue/kosk-gelin-damat-nikah-tahti-masasi.jpg',
  },
  {
    id: 'nikah-kursusu-ve-dans-pisti-acisi',
    category: 'ozel',
    categoryName: 'Nişan, Nikah & Karşılama',
    title: 'Nikah Platformu ve Pistten Çapraz Bakış',
    description: 'Nikah töreninin tüm salon davetlileri tarafından net biçimde izlenebildiği yükseltilmiş platform konumu.',
    src: '/images/venue/kosk-nikah-kursusu-ve-dans-pisti-acisi.webp',
    fallbackSrc: '/images/venue/kosk-nikah-kursusu-ve-dans-pisti-acisi.jpg',
  },
  {
    id: 'nisan-soz-ozel-konsept-aynasi',
    category: 'ozel',
    categoryName: 'Nişan, Nikah & Karşılama',
    title: 'Özel Nişan & Söz Konsept Aynası ve Şamdanlar',
    description: 'Barok altın oymalı ayna, beş kollu kristal mumluklar ve taze çiçek buketleri ile bezenmiş karşılama kaidesi.',
    src: '/images/venue/kosk-nisan-soz-ozel-konsept-aynasi.webp',
    fallbackSrc: '/images/venue/kosk-nisan-soz-ozel-konsept-aynasi.jpg',
  },
  {
    id: 'soz-nisan-fotograf-kosesi',
    category: 'ozel',
    categoryName: 'Nişan, Nikah & Karşılama',
    title: 'Söz & Nişan Hatıra Fotoğraf Köşesi',
    description: 'Zümrüt yeşili kadife istiridye koltuklar, dairesel çiçek arkalığı ve çiftlere özel fotoğraf çekim alanı.',
    src: '/images/venue/kosk-soz-nisan-fotograf-kosesi.webp',
    fallbackSrc: '/images/venue/kosk-soz-nisan-fotograf-kosesi.jpg',
  },

  // 5. Masa Düzeni & Detaylar
  {
    id: 'karsilama-panosu-sovale-dekoru',
    category: 'masa',
    categoryName: 'Masa Düzeni & Detaylar',
    title: 'Giriş Şövalesi & Kişiselleştirilmiş Karşılama',
    description: 'Doğal ahşap şövale üzerinde davetlileri karşılayan altın aynalı Hoş Geldiniz panosu ve gül salkımları.',
    src: '/images/venue/kosk-karsilama-panosu-sovale-dekoru.webp',
    fallbackSrc: '/images/venue/kosk-karsilama-panosu-sovale-dekoru.jpg',
  },
  {
    id: 'ziyafet-masalari-ve-orkestra-gorunumu',
    category: 'masa',
    categoryName: 'Masa Düzeni & Detaylar',
    title: 'Gümüş Vazo Çiçek Tasarımları & Ziyafet Düzeni',
    description: 'Masalarda yüksek gümüş trompet vazolar, beyaz gül aranjmanları ve sahneye bakan ferah banket masaları.',
    src: '/images/venue/kosk-ziyafet-masalari-ve-orkestra-gorunumu.webp',
    fallbackSrc: '/images/venue/kosk-ziyafet-masalari-ve-orkestra-gorunumu.jpg',
  },
  {
    id: 'masa-duzeni-gold-vazo-samdan',
    category: 'masa',
    categoryName: 'Masa Düzeni & Detaylar',
    title: 'Gold Detaylı Vazo ve Zarif Masa Aksesuarları',
    description: 'Zarif masa örtüleri üzerinde yüksek altın şamdan-vazo, pudra tonlarında gül çiçekleri ve kaliteli servis takımları.',
    src: '/images/venue/kosk-masa-duzeni-gold-vazo-samdan.webp',
    fallbackSrc: '/images/venue/kosk-masa-duzeni-gold-vazo-samdan.jpg',
  },
];

export default function GaleriPage() {
  return (
    <div style={{ paddingTop: '1rem' }}>
      <section style={{ padding: '2.25rem 0 2rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.84rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-cashmere)', fontWeight: 500, display: 'block', marginBottom: '0.5rem' }}>
              Mekân Görünümleri
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', color: 'var(--color-anthracite)', marginBottom: '1.25rem', fontWeight: 450 }}>
              Kapalı Salonumuzdan Fotoğraflar
            </h1>
            <p style={{ fontSize: '1.12rem', color: 'var(--color-text-secondary)', lineHeight: '1.75' }}>
              Köşk Düğün Salonu’nun 1.200 m² kolonsuz ferah yapısını, yüksek tavanını ve 
              özenle hazırlanan davet masalarını inceleyin.
            </p>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '6rem' }}>
        <GalleryLightbox items={galleryItems} />

        <div
          style={{
            marginTop: '5rem',
            textAlign: 'center',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-stone)',
            borderBottom: '2px solid var(--color-powder)',
            padding: '3.5rem 2rem',
            borderRadius: 'var(--radius-xs)',
          }}
        >
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-anthracite)', marginBottom: '0.85rem' }}>
            Salonu Kendi Gözlerinizle Görmek İster Misiniz?
          </h3>
          <p style={{ maxWidth: '640px', margin: '0 auto 2rem auto', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
            Fotoğraflar atmosferi hissettirir; ancak yüksek tavan ferahlığını ve salonun genişliğini 
            yerinde görmek ve tarih müsaitliğini öğrenmek için bizimle hemen iletişime geçebilirsiniz.
          </p>
          <Link href="/iletisim" className="btn btn-primary">
            <CalendarCheck size={18} />
            <span>İletişime Geçin & Tarih Bilgisi Alın</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
