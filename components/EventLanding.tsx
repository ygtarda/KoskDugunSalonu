import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarCheck, Phone } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import FaqAccordion from '@/components/FaqAccordion';
import { getLandingPage } from '@/lib/landing-pages';
import type { LandingPageData } from '@/lib/landing-pages/types';
import styles from './EventLanding.module.css';

const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDMnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzMnIGZpbGw9JyNlNmRmZDQnLz48L3N2Zz4=";

/** `[metin](/yol)` biçimini <Link> öğelerine dönüştürür (bağlamsal iç linkler). */
function renderRichText(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    nodes.push(
      <Link key={`l-${key++}`} href={match[2]} className={styles.inlineLink}>
        {match[1]}
      </Link>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** Sayfa içindeki bağlantı metinleri markdown biçiminden düz metne indirilir (schema için). */
function stripLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
}

export default function EventLanding({ page }: { page: LandingPageData }) {
  const canonical = `https://koskdugunsalonu.com/${page.slug}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: stripLinks(f.answer) },
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: page.metaTitle,
    description: page.metaDescription,
    inLanguage: 'tr-TR',
    about: { '@id': 'https://koskdugunsalonu.com/#venue' },
    isPartOf: { '@type': 'WebSite', url: 'https://koskdugunsalonu.com' },
  };

  const related = page.related
    .map((slug) => getLandingPage(slug))
    .filter((p): p is LandingPageData => Boolean(p));

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        items={[
          { label: 'Hizmetler & Paketler', href: '/hizmetler' },
          { label: page.breadcrumbLabel },
        ]}
      />

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrow}>{page.eyebrow}</span>
              <h1 className={styles.h1}>{page.h1}</h1>
              <p className={styles.lead}>{renderRichText(page.lead)}</p>
              <div className={styles.heroActions}>
                <Link
                  href={`/iletisim?paket=${page.serviceAnchor}#concierge-booking-form`}
                  className="btn btn-primary"
                >
                  <CalendarCheck size={18} />
                  <span>Keşif &amp; Fiyat Teklifi Alın</span>
                </Link>
                <a href="tel:+905382969079" className="btn btn-outline">
                  <Phone size={17} />
                  <span>0538 296 90 79</span>
                </a>
              </div>
            </div>
            <div className={styles.heroMedia}>
              <Image
                src={page.heroImage}
                alt={page.heroAlt}
                fill
                className={styles.heroImg}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
                loading="eager"
              />
            </div>
          </div>

          <div className={styles.factsBar}>
            {page.facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <span className={styles.factLabel}>{fact.label}</span>
                <strong className={styles.factValue}>{fact.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <article className={styles.article}>
          {page.sections.map((section, idx) => (
            <React.Fragment key={section.h2}>
              <div className={styles.section}>
                <h2 className={styles.h2}>{section.h2}</h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className={styles.para}>
                    {renderRichText(p)}
                  </p>
                ))}
                {section.bullets && (
                  <ul className={styles.bullets}>
                    {section.bullets.map((b, bIdx) => (
                      <li key={bIdx} className={styles.bulletItem}>
                        {renderRichText(b)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {idx === 1 && (
                <div className={styles.galleryRow}>
                  {page.gallery.map((img) => (
                    <div key={img.src} className={styles.galleryItem}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className={styles.galleryImg}
                        sizes="(max-width: 600px) 100vw, 430px"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                      />
                    </div>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}

          <div className={styles.faqWrap}>
            <h2 className={styles.h2}>Sıkça Sorulan Sorular</h2>
            <FaqAccordion
              items={page.faqs.map((f) => ({
                question: f.question,
                answer: stripLinks(f.answer),
              }))}
            />
          </div>

          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Randevu Alın</h2>
            <p className={styles.ctaText}>
              Salonu yerinde görmek, tarih müsaitliğini öğrenmek ve davetinize özel net bir teklif almak
              için bize ulaşın. Bu etkinlik türünün tüm paket kapsamını{' '}
              <Link href={`/hizmetler#${page.serviceAnchor}`} className={styles.inlineLink}>
                {page.serviceName} hizmet sayfamızda
              </Link>{' '}
              görebilir, salon fotoğraflarını{' '}
              <Link href="/galeri" className={styles.inlineLink}>
                galeride
              </Link>{' '}
              inceleyebilirsiniz.
            </p>
            <div className={styles.ctaActions}>
              <Link
                href={`/iletisim?paket=${page.serviceAnchor}#concierge-booking-form`}
                className="btn btn-primary"
              >
                <CalendarCheck size={18} />
                <span>Keşif Randevusu Alın</span>
              </Link>
              <a href="https://wa.me/905382969079" className="btn btn-outline">
                <span>WhatsApp ile Yazın</span>
              </a>
            </div>
          </div>

          {related.length > 0 && (
            <div className={styles.relatedWrap}>
              <h2 className={styles.relatedTitle}>Diğer Etkinlik Türleri İçin Rehberler</h2>
              <div className={styles.relatedGrid}>
                {related.map((r) => (
                  <Link key={r.slug} href={`/${r.slug}`} className={styles.relatedCard}>
                    <span className={styles.relatedName}>{r.breadcrumbLabel}</span>
                    <span className={styles.relatedHint}>{r.ogSubtitle}</span>
                  </Link>
                ))}
              </div>
              <p className={styles.para} style={{ marginTop: '1.5rem', marginBottom: 0 }}>
                Ana sayfaya dönmek için{' '}
                <Link href="/" className={styles.inlineLink}>
                  Köşk Düğün Salonu
                </Link>
                , salonun mimari özellikleri için{' '}
                <Link href="/salon" className={styles.inlineLink}>
                  salon sayfamız
                </Link>
                , planlama ipuçları için{' '}
                <Link href="/rehber" className={styles.inlineLink}>
                  düğün rehberimiz
                </Link>{' '}
                ve genel sorular için{' '}
                <Link href="/sss" className={styles.inlineLink}>
                  SSS sayfamız
                </Link>{' '}
                yardımcı olur.
              </p>
            </div>
          )}
        </article>
      </section>
    </div>
  );
}
