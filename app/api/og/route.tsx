import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
import { OpenGraphCard } from '@/components/OpenGraphCard';

export const runtime = 'nodejs';

// Pre-load base64 logo for zero network latency and reliable rendering
let logoBase64Cache = '';
function getLogoBase64(): string {
  if (logoBase64Cache) return logoBase64Cache;
  try {
    const logoPath = path.join(process.cwd(), 'public', 'kosk_logo.jpg');
    if (fs.existsSync(logoPath)) {
      const buf = fs.readFileSync(logoPath);
      logoBase64Cache = `data:image/jpeg;base64,${buf.toString('base64')}`;
      return logoBase64Cache;
    }
  } catch {
    // fallback if file read fails
  }
  return '';
}

// Rehber articles mapping for long-tail social share optimization
const REHBER_ARTICLES: Record<string, { title: string; subtitle: string; tag: string }> = {
  'polatlida-dugun-salonu-secerken-dikkat-edilmesi-gerekenler': {
    title: 'Polatlı’da Salon Seçerken 7 Kritik Kriter',
    subtitle: 'Kolonsuz Görüş, Yüksek Tavan, Havalandırma ve Otopark Rehberi',
    tag: 'DÜĞÜN REHBERİ · SEÇİM STRATEJİSİ',
  },
  '1000-kisilik-buyuk-dugunlerde-masa-duzeni-ve-misafir-konforu': {
    title: '1.000 Kişilik Büyük Düğünlerde Masa Düzeni',
    subtitle: 'Geniş Dans Pisti, Ergonomi, Sirkülasyon ve Misafir Konforu',
    tag: 'DÜĞÜN REHBERİ · MASA DÜZENİ',
  },
  'gunduz-ve-aksam-dugun-seansi-farklari': {
    title: 'Gündüz Seansı mı, Akşam Seansı mı?',
    subtitle: 'Öğle & İkindi Merasimleri ile Akşam Düğünü Karşılaştırması',
    tag: 'DÜĞÜN REHBERİ · SEANS SEÇİMİ',
  },
  'kapali-dugun-salonunda-havadar-ortam-ve-ses-duzeni': {
    title: 'Kapalı Salonda Havadar Ortam & Akustik Ses',
    subtitle: '6.5 Metre Tavan, Endüstriyel Taze Hava ve Uğultusuz Ses Sistemi',
    tag: 'DÜĞÜN REHBERİ · İKLİMLENDİRME & SES',
  },
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const makaleSlug = searchParams.get('makale');

    let title = searchParams.get('title') || 'Köşk Düğün Salonu';
    let subtitle =
      searchParams.get('subtitle') || 'Polatlı Ankara · 1.000 Kişilik Kapalı Düğün Salonu';
    let tag = searchParams.get('tag') || 'ANKARA · POLATLI';

    // If a specific article slug is provided, override with curated article copy
    if (makaleSlug && REHBER_ARTICLES[makaleSlug]) {
      const art = REHBER_ARTICLES[makaleSlug];
      title = art.title;
      subtitle = art.subtitle;
      tag = art.tag;
    }

    const logoSrc = getLogoBase64();

    return new ImageResponse(
      <OpenGraphCard title={title} subtitle={subtitle} tag={tag} logoSrc={logoSrc} />,
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate Open Graph image: ${e.message}`, { status: 500 });
  }
}
