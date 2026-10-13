import type { Metadata } from 'next';

export interface OgConfig {
  title: string;
  subtitle: string;
  tag: string;
  makale?: string;
}

/**
 * Returns the relative URL to the dynamic Open Graph image endpoint
 * with URL-encoded query parameters.
 */
export function getOgImageUrl(config: Partial<OgConfig>): string {
  const params = new URLSearchParams();
  if (config.makale) {
    params.set('makale', config.makale);
  } else {
    if (config.title) params.set('title', config.title);
    if (config.subtitle) params.set('subtitle', config.subtitle);
    if (config.tag) params.set('tag', config.tag);
  }
  return `/api/og?${params.toString()}`;
}

export interface BuildMetadataParams {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string[];
  ogTitle: string;
  ogSubtitle: string;
  ogTag: string;
  makale?: string;
  ogType?: 'website' | 'article';
}

/**
 * Generates comprehensive Next.js Metadata with canonical alternates,
 * complete Open Graph tags, and Twitter Cards pointing to our dynamic 1200x630 OG image.
 */
export function buildPageMetadata(params: BuildMetadataParams): Metadata {
  const ogImgUrl = getOgImageUrl({
    title: params.ogTitle,
    subtitle: params.ogSubtitle,
    tag: params.ogTag,
    makale: params.makale,
  });

  return {
    title: params.title,
    description: params.description,
    alternates: {
      canonical: params.canonicalPath,
    },
    ...(params.keywords ? { keywords: params.keywords } : {}),
    openGraph: {
      type: params.ogType || 'website',
      locale: 'tr_TR',
      url: `https://koskdugunsalonu.com${params.canonicalPath}`,
      siteName: 'Köşk Düğün Salonu Polatlı',
      title: params.ogTitle,
      description: params.ogSubtitle,
      images: [
        {
          url: ogImgUrl,
          width: 1200,
          height: 630,
          alt: `${params.ogTitle} | Köşk Düğün Salonu Polatlı`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: params.ogTitle,
      description: params.ogSubtitle,
      images: [ogImgUrl],
    },
  };
}
