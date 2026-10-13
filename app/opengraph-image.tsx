import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';
import { OpenGraphCard } from '@/components/OpenGraphCard';

export const runtime = 'nodejs';
export const alt = 'Köşk Düğün Salonu Polatlı Ankara | 1.000 Kişilik Kapalı Düğün Salonu';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

function getLogoBase64(): string {
  try {
    const logoPath = path.join(process.cwd(), 'public', 'kosk_logo.jpg');
    if (fs.existsSync(logoPath)) {
      const buf = fs.readFileSync(logoPath);
      return `data:image/jpeg;base64,${buf.toString('base64')}`;
    }
  } catch {
    // ignore
  }
  return '';
}

export default async function Image() {
  const logoSrc = getLogoBase64();

  return new ImageResponse(
    (
      <OpenGraphCard
        title="Köşk Düğün Salonu"
        subtitle="Polatlı Ankara'da 1.000 Kişilik Ferah Kapalı Düğün Salonu"
        tag="ANKARA · POLATLI"
        logoSrc={logoSrc}
      />
    ),
    {
      ...size,
    }
  );
}
