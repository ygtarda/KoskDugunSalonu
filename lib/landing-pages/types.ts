export interface LandingSection {
  /** H2 başlığı */
  h2: string;
  /** Paragraflar. `[metin](/yol)` biçimi bağlamsal iç link üretir. */
  paragraphs: string[];
  /** Opsiyonel madde listesi (aynı biçimde link destekler) */
  bullets?: string[];
}

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingPageData {
  slug: string;
  /** Ana (birincil) anahtar kelime */
  keyword: string;
  /** 55–60 karakter, absolute title */
  metaTitle: string;
  /** 150–160 karakter */
  metaDescription: string;
  keywords: string[];
  ogTitle: string;
  ogSubtitle: string;
  ogTag: string;
  breadcrumbLabel: string;
  eyebrow: string;
  h1: string;
  /** İlk paragraf — birincil anahtar kelimeyi doğal içerir */
  lead: string;
  heroImage: string;
  heroAlt: string;
  gallery: { src: string; alt: string }[];
  facts: { label: string; value: string }[];
  sections: LandingSection[];
  faqs: LandingFaq[];
  /** /hizmetler içindeki ilgili bölüm */
  serviceAnchor: 'dugun' | 'kina' | 'nisan' | 'sunnet' | 'kurumsal';
  serviceName: string;
  /** Sayfa sonunda önerilen kardeş sayfa slug'ları */
  related: string[];
  lastModified: string;
}
