import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import ReferanslarClient from './ReferanslarClient';

export const metadata: Metadata = {
  title: 'Misafir Yorumları & Çift Deneyimleri | Polatlı Köşk Düğün Salonu',
  description:
    'Polatlı Köşk Düğün Salonu’nda dünyaevine giren çiftlerimizin gerçek Google yorumları ve deneyimleri. 4.9/5 yıldızlı doğrulanmış müşteri memnuniyeti.',
  alternates: {
    canonical: '/referanslar',
  },
  keywords: [
    'Polatlı düğün salonu yorumları',
    'Köşk düğün salonu referanslar',
    'Polatlı düğün tavsiyeleri',
    'Google haritalar Polatlı düğün salonu',
    'Köşk düğün salonu çift deneyimleri',
  ],
  openGraph: {
    title: 'Misafir Yorumları & Referanslar | Polatlı Köşk Düğün Salonu',
    description:
      '1.000 kişilik kolonsuz ferah salonumuzda gerçekleşen düğün, kına ve nişan davetleri hakkında gerçek çift yorumları.',
    url: 'https://koskdugunsalonu.com/referanslar',
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Misafir Yorumları | Polatlı Köşk Düğün Salonu',
    description: 'Polatlı Köşk Düğün Salonu hakkında Google Haritalar onaylı gerçek çift değerlendirmeleri.',
  },
};

const reviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Köşk Düğün Salonu',
  image: 'https://koskdugunsalonu.com/images/venue/kosk-ana-balo-salonu-genel-perspektif.webp',
  telephone: '+903126230000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gülveren, Kutluhan Sk. No: 2/2',
    addressLocality: 'Polatlı',
    addressRegion: 'Ankara',
    postalCode: '06960',
    addressCountry: 'TR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5.0',
    worstRating: '1.0',
    ratingCount: '184',
    reviewCount: '184',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ayşenur Kılıç' },
      datePublished: '2024-08-15',
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        '1.000 kişilik düğünümüzde en ufak bir sıkışıklık yaşanmadı. Kolonsuz ferah mimari sayesinde her misafirimiz sahneyi rahatlıkla izledi.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Mehmet Ali Bozkurt' },
      datePublished: '2024-07-20',
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        '250 araçlık özel otopark alanı sayesinde uzaktan gelen misafirlerimiz hiç park sorunu yaşamadı. Personel son derece saygılı ve organizeydi.',
    },
  ],
};

export default function ReferanslarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <Breadcrumb items={[{ label: 'Misafir Yorumları & Referanslar' }]} />
      <ReferanslarClient />
    </>
  );
}
