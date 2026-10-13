import type { Metadata } from 'next';
import { Fraunces, DM_Sans, Cinzel, Cormorant_Garamond } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FloatingContactBar = dynamic(() => import('@/components/FloatingContactBar'), { ssr: false });
const ScrollRevealProvider = dynamic(() => import('@/components/ScrollRevealProvider'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-royal',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://koskdugunsalonu.com'),
  title: {
    default: 'Köşk Düğün Salonu Polatlı | 1.000 Kişilik Kapalı Düğün Salonu',
    template: '%s | Köşk Düğün Salonu Polatlı',
  },
  description:
    'Polatlı Ankara’da 1.000 kişilik ferah kapalı düğün salonu, yüksek tavanı, güçlü havalandırması ve rahat salon düzeniyle Köşk Düğün Salonu.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Polatlı düğün salonu',
    'Ankara Polatlı düğün salonu',
    'Polatlı 1.000 kişilik düğün salonu',
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
    title: 'Köşk Düğün Salonu Polatlı | 1.000 Kişilik Kapalı Düğün Salonu',
    description:
      '1.000 kişilik ferah salonu, yüksek tavanı, rahat park imkânı ve güler yüzlü ekibiyle Polatlı’nın en ferah düğün salonlarından biri.',
    images: [
      {
        url: '/api/og?title=K%C3%B6%C5%9Fk%20D%C3%BC%C4%9F%C3%BCn%20Salonu&subtitle=Polatl%C4%B1%20Ankara%27da%201.000%20Ki%C5%9Filik%20Kapal%C4%B1%20D%C3%BC%C4%9F%C3%BCn%20Salonu&tag=ANKARA%20%C2%B7%20POLATLI',
        width: 1200,
        height: 630,
        alt: 'Köşk Düğün Salonu Polatlı Kapalı Düğün Salonu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Köşk Düğün Salonu Polatlı | 1.000 Kişilik Kapalı Düğün Salonu',
    description: 'Polatlı Ankara’da 1.000 kişilik ferah kapalı düğün salonu ve davet merkezi.',
    images: [
      '/api/og?title=K%C3%B6%C5%9Fk%20D%C3%BC%C4%9F%C3%BCn%20Salonu&subtitle=Polatl%C4%B1%20Ankara%27da%201.000%20Ki%C5%9Filik%20Kapal%C4%B1%20D%C3%BC%C4%9F%C3%BCn%20Salonu&tag=ANKARA%20%C2%B7%20POLATLI',
    ],
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
  alternateName: 'Köşk Düğün ve Davet Salonu',
  description:
    'Ankara Polatlı’da 800 – 1.000 kişi kapasiteli, kolonsuz, yüksek tavanlı, geniş dans pistine sahip tam donanımlı kapalı düğün ve davet salonu.',
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
    'https://koskdugunsalonu.com/images/polatli-kapali-dugun-salonu-ana-salon.webp',
    'https://koskdugunsalonu.com/images/polatli-dugun-salonu-sahne-ve-isik.webp',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gülveren, Kutluhan Sk. No: 2/2',
    addressLocality: 'Polatlı',
    addressRegion: 'Ankara',
    postalCode: '06960',
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
    <html
      lang="tr"
      className={`${fraunces.variable} ${dmSans.variable} ${cinzel.variable} ${cormorant.variable}`}
    >
      <head>
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
