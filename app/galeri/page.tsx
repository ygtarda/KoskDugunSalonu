import type { Metadata } from 'next';
import Link from 'next/link';
import GalleryLightbox, { GalleryItem } from '@/components/GalleryLightbox';
import { CalendarCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fotoğraf Galerisi | Polatlı Köşk Kapalı Düğün Salonu',
  description:
    'Köşk Düğün Salonu’nun 1000 kişilik kapalı balo salonu, masa düzeni, sahne ışıklandırması ve VIP gelin süitinden mimari açıları ve detayları inceleyin.',
};

const galleryItems: GalleryItem[] = [
  {
    id: 'ana-salon',
    category: 'salon',
    categoryName: 'Kapalı Salon & Mimari',
    title: '1.000 Kişilik Ana Balo Salonu',
    description:
      'Geniş yekpare zemin, kristal avizeler ve sütunsuz 1.200 m² ferah kapalı balo alanı. Her noktadan engelsiz görüş açısı sunar.',
    dimensions: '1920 × 1080 · 16:9 Mimari Plan',
    aspectRatio: '16/9',
  },
  {
    id: 'sahne-isik',
    category: 'sahne',
    categoryName: 'Sahne & Akustik Işık',
    title: 'Bilgisayarlı Sahne & Truss Işıklandırma',
    description:
      'Canlı orkestra performansları için yükseltilmiş sahne, bilgisayarlı hareketli robot ışıklar ve dengeli ses dağılım mimarisi.',
    dimensions: '1600 × 900 · 16:9 Truss Detayı',
    aspectRatio: '16/9',
  },
  {
    id: 'masa-duzeni',
    category: 'masa',
    categoryName: 'Masa Düzeni & Lobi',
    title: 'Lüks Banket Masaları & Ziyafet Düzeni',
    description:
      'Şampanya ve pudra tonlarında masa giydirmeleri, kaliteli servis takımları ve zarif çiçek sunumlarıyla 10 kişilik yuvarlak masalar.',
    dimensions: '1600 × 900 · 16:9 Masa Perspektifi',
    aspectRatio: '16/9',
  },
  {
    id: 'karsilama-lobi',
    category: 'masa',
    categoryName: 'Masa Düzeni & Lobi',
    title: 'Geniş İç Karşılama Fuayesi & Lobi',
    description:
      'Davetlilerinizi ilk andan itibaren karşılayan zarif mermer karşılama lobisi, konforlu bekleme locaları ve ikram standı.',
    dimensions: '1600 × 900 · 16:9 Fuaye Alanı',
    aspectRatio: '16/9',
  },
  {
    id: 'gelin-odasi',
    category: 'ozel',
    categoryName: 'Özel Alanlar (VIP Süit)',
    title: 'VIP Gelin & Damat Hazırlık Süiti',
    description:
      'Düğün öncesinde huzurla dinlenebileceğiniz müstakil banyolu, profesyonel LED makyaj masalı ve özel iklimlendirmeli konforlu süit.',
    dimensions: '1600 × 900 · 16:9 Süit Detayı',
    aspectRatio: '16/9',
  },
  {
    id: 'ilk-dans',
    category: 'ozel',
    categoryName: 'Özel Alanlar (VIP Süit)',
    title: 'İlk Dans ve Salon İçi Işık Şovu',
    description:
      'Kapalı salon güvenliğine uygun dumansız soğuk volkan efektleri ve romantik ambiyans aydınlatması altında ilk dans pisti.',
    dimensions: '1600 × 900 · 16:9 Sahne Pisti',
    aspectRatio: '16/9',
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
              Kapalı Balo Salonumuzdan Mimari Kareler
            </h1>
            <p style={{ fontSize: '1.12rem', color: 'var(--color-text-secondary)', lineHeight: '1.75' }}>
              Köşk Düğün Salonu’nun 1.200 m² kolonsuz ferah yapısını, 6.5 metre tavan yüksekliğini ve 
              lüks iç mekân detaylarını inceleyin.
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
            Fotoğraflar atmosferi hissettirir; ancak 6.5 metrelik tavan ferahlığını ve salonun ihtişamını 
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
