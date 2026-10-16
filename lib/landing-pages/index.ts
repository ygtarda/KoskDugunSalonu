import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/og';
import type { LandingPageData } from './types';
import { dugunPage } from './dugun';
import { nisanPage } from './nisan';
import { kinaPage } from './kina';
import { sunnetPage } from './sunnet';
import { mezuniyetPage } from './mezuniyet';
import { kurumsalPage } from './kurumsal';

export const landingPages: LandingPageData[] = [
  dugunPage,
  nisanPage,
  kinaPage,
  sunnetPage,
  mezuniyetPage,
  kurumsalPage,
];

export function getLandingPage(slug: string): LandingPageData | undefined {
  return landingPages.find((p) => p.slug === slug);
}

/** Landing sayfası için title (absolute), description, canonical, OG ve Twitter etiketleri üretir. */
export function buildLandingMetadata(page: LandingPageData): Metadata {
  const base = buildPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    canonicalPath: `/${page.slug}`,
    keywords: page.keywords,
    ogTitle: page.ogTitle,
    ogSubtitle: page.ogSubtitle,
    ogTag: page.ogTag,
  });
  // Başlığın layout şablonuyla uzamasını engelle (55–60 karakter hedefi)
  return { ...base, title: { absolute: page.metaTitle } };
}
