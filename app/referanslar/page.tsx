import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import ReferanslarClient from './ReferanslarClient';

import { buildPageMetadata } from '@/lib/og';

export const metadata: Metadata = buildPageMetadata({
  title: 'Misafir Yorumları & Çift Deneyimleri | Polatlı Köşk Düğün Salonu',
  description:
    'Polatlı Köşk Düğün Salonu’nda dünyaevine giren çiftlerimizin gerçek Google yorumları ve deneyimleri. 4.9/5 yıldızlı doğrulanmış müşteri memnuniyeti.',
  canonicalPath: '/referanslar',
  keywords: [
    'Polatlı düğün salonu yorumları',
    'Köşk düğün salonu referanslar',
    'Polatlı düğün tavsiyeleri',
    'Google haritalar Polatlı düğün salonu',
    'Köşk düğün salonu çift deneyimleri',
  ],
  ogTitle: 'Referanslar & Misafir Yorumları',
  ogSubtitle: '4.9 / 5.0 Google Değerlendirmesi ile Doğrulanmış Çift Deneyimleri',
  ogTag: '★ 4.9 GOOGLE DEĞERLENDİRMESİ',
});

const reviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Köşk Düğün Salonu',
  image: 'https://koskdugunsalonu.com/images/venue/kosk-ana-balo-salonu-genel-perspektif.webp',
  telephone: '+905382969079',
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
        'Geniş otopark alanı sayesinde uzaktan gelen misafirlerimiz hiç park sorunu yaşamadı. Personel son derece saygılı ve organizeydi.',
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
