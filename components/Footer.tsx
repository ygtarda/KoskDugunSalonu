'use client';

import React from 'react';
import HalftoneWordmarkFooter, {
  FooterColumn,
} from '@/components/ui/halftone-wordmark-footer';

const KOSK_FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Keşfet & Kurumsal',
    links: [
      { label: 'Salon Mimarisi', href: '/salon' },
      { label: 'Fotoğraf Galerisi', href: '/galeri' },
      { label: 'Hizmetler & Paketler', href: '/hizmetler' },
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Misafir Yorumları', href: '/referanslar' },
    ],
  },
  {
    title: 'Davetler & Rehber',
    links: [
      { label: 'Düğün Merasimi (1.000 Kişi)', href: '/hizmetler#dugun' },
      { label: 'Geleneksel Kına Gecesi', href: '/hizmetler#kina' },
      { label: 'Nişan & Söz Töreni', href: '/hizmetler#nisan' },
      { label: 'Düğün Planlama Rehberi', href: '/rehber' },
      { label: 'Sıkça Sorulan Sorular', href: '/sss' },
    ],
  },
  {
    title: 'İletişim & Konum',
    links: [
      { label: '0 (312) 623 00 00', href: 'tel:+903126230000' },
      { label: 'WhatsApp Danışma Hattı', href: 'https://wa.me/903126230000' },
      { label: 'Gülveren, Kutluhan Sk. No: 2/2', href: '/iletisim' },
      { label: 'Keşif & Fiyat Teklifi Al', href: '/iletisim' },
    ],
  },
];

export default function Footer() {
  return (
    <HalftoneWordmarkFooter
      wordmark="KÖŞK"
      label="Köşk Düğün Salonu"
      meta="1.000 Kişilik Kolonsuz Kapalı Balo Salonu · Polatlı / Ankara"
      columns={KOSK_FOOTER_COLUMNS}
      backToTop={true}
      backToTopLabel="YUKARI ÇIK ↑"
      copyright="© 2026 Köşk Düğün Salonu Polatlı. Tüm Hakları Saklıdır."
      preset="kosk"
      palette={{
        background: '#1A1716',
        ink: '#EFECE6',
        warm: '#B8956E',
      }}
      dotGap={6.5}
      radius={84}
      crop={0.10}
      grain={0.35}
      fontWeight={800}
      height="560px"
      className="site-minimal-footer"
    />
  );
}
