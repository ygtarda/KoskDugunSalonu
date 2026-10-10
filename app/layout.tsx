import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactBar from '@/components/FloatingContactBar';
import ScrollRevealProvider from '@/components/ScrollRevealProvider';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  metadataBase: new URL('https://koskdugunsalonu.com'),
  title: {
    default: 'Köşk Düğün Salonu Polatlı | 1000 Kişilik Lüks Kapalı Balo Salonu',
    template: '%s | Köşk Düğün Salonu Polatlı',
  },
  description:
    'Polatlı Ankara’da 1000 kişilik kolonsuz ferah salonu, yüksek tavanı, havadar ortamı ve geniş dans pistiyle Köşk Düğün Salonu hizmetinizde.',
  keywords: [
    'Polatlı düğün salonu',
    'Ankara Polatlı düğün salonu',
    'Polatlı 1000 kişilik düğün salonu',
    'Polatlı kına salonu',
    'Polatlı nişan mekanları',
    'Polatlı kapalı düğün salonu',
    'Köşk düğün salonu Polatlı',
  ],
  authors: [{ name: 'Köşk Düğün Salonu' }],
  creator: 'Köşk Düğün Salonu',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://koskdugunsalonu.com',
    siteName: 'Köşk Düğün Salonu Polatlı',
    title: 'Köşk Düğün Salonu Polatlı | 1000 Kişilik Kapalı Düğün Salonu',
    description:
      'Polatlı’nın en geniş kapalı düğün salonu. 1000 kişilik kolonsuz ferah salon, yüksek tavan ve profesyonel organizasyon ekibi.',
    images: [
      {
        url: '/images/polatli-kapali-dugun-salonu-ana-salon.jpg',
        width: 1200,
        height: 675,
        alt: 'Köşk Düğün Salonu Polatlı Kapalı Ana Balo Salonu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Köşk Düğün Salonu Polatlı | 1000 Kişilik Kapalı Salon',
    description: 'Polatlı Ankara’da 1000 kişilik ferah kapalı balo salonu ve davet merkezi.',
    images: ['/images/polatli-kapali-dugun-salonu-ana-salon.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['EventVenue', 'LocalBusiness'],
  '@id': 'https://koskdugunsalonu.com/#venue',
  name: 'Köşk Düğün Salonu Polatlı',
  alternateName: 'Köşk Davet ve Balo Salonu',
  description:
    'Ankara Polatlı’da 800-1000 kişi kapasiteli, kolonsuz, yüksek tavanlı, geniş dans pistine sahip tam donanımlı kapalı düğün ve davet salonu.',
  url: 'https://koskdugunsalonu.com',
  telephone: '+903126230000',
  sameAs: ['https://share.google/Ut9Fd72yIZ5c9Tg4P'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5.0',
    worstRating: '1.0',
    ratingCount: '128',
    reviewCount: '128',
  },
  priceRange: '₺₺',
  image: [
    'https://koskdugunsalonu.com/images/polatli-kapali-dugun-salonu-ana-salon.jpg',
    'https://koskdugunsalonu.com/images/polatli-dugun-salonu-sahne-ve-isik.jpg',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Cumhuriyet Mah. Ankara Cad. No: 42',
    addressLocality: 'Polatlı',
    addressRegion: 'Ankara',
    postalCode: '06900',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.5841,
    longitude: 32.1448,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '23:30',
    },
  ],
  maximumAttendeeCapacity: 1000,
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Kolonsuz Geniş Kapalı Salon',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Yüksek Tavan ve Düzenli Havalandırma',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Geniş Dans Pisti ve Sahne Işıklandırması',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Gelin ve Damat Özel Hazırlık Odası',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Geniş Misafir Otoparkı',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Kesintisiz Jeneratör Güvencesi',
      value: true,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href="https://koskdugunsalonu.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="sr-only-skip">
          İçeriğe Atla
        </a>
        <CustomCursor />
        <ScrollRevealProvider />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingContactBar />
      </body>
    </html>
  );
}
