import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Düğün Rehberi & Tavsiyeler | Polatlı Köşk Düğün Salonu',
  description:
    'Polatlı ve Ankara’da düğün salonu seçimi, 1000 kişilik davet planlaması, kapalı mekan iklimlendirme ve akustik kriterleri üzerine uzman rehber yazıları.',
};

const guideArticles = [
  {
    slug: 'polatlida-dugun-salonu-secerken-dikkat-edilmesi-gerekenler',
    title: 'Polatlı’da Düğün Salonu Seçerken Bilmeniz Gereken 7 Kritik Kriter',
    date: 'Şubat 2026',
    readTime: '5 dk okuma',
    category: 'Salon Seçimi',
    summary:
      'Düğün salonu seçerken yalnızca fiyata veya süslemelere bakmak büyük riskler barındırır. Tavan yüksekliği, taze hava kapasitesi, jeneratör gücü ve otopark gibi düğününüzün kaderini belirleyen 7 teknik unsuru inceleyin.',
    highlights: [
      'Neden en az 6 metre tavan yüksekliği aranmalı?',
      'Klima ile taze hava sirkülasyonu arasındaki hayati fark',
      'Beklenmedik elektrik kesintilerine karşı yedek jeneratör standardı',
      'Masa aralıkları ve gelinlik hareket serbestliği',
    ],
  },
  {
    slug: 'kapali-dugun-salonunda-iklimlendirme-ve-akustik-onemi',
    title: 'Kapalı Salonda Kusursuz Akustik ve Havalandırma Neden Hayatidir?',
    date: 'Ocak 2026',
    readTime: '6 dk okuma',
    category: 'Teknik Standartlar',
    summary:
      '1.000 kişinin bir arada bulunduğu bir salonda saatler ilerledikçe havanın ağırlaşması veya orkestra sesinin uğultuya dönüşmesi en sık yaşanan sorunlardır. Doğru mimari mühendisliğin bu sorunları nasıl çözdüğünü keşfedin.',
    highlights: [
      'VRF sistemler ve saatlik taze hava emiş debisi',
      'Akustik tavan panellerinin konuşma anlaşılırlığına etkisi',
      'Orkestra sesiyle misafir sohbeti arasındaki dengeli ses dağılımı',
      'Hava değişiminin yaşlı ve çocuk konuklar üzerindeki rahatlatıcı etkisi',
    ],
  },
  {
    slug: '1000-kisilik-buyuk-dugunlerde-masa-duzeni-ve-misafir-konforu',
    title: '800–1.000 Kişilik Büyük Düğünlerde Masa Düzeni ve Misafir Konforu',
    date: 'Aralık 2025',
    readTime: '4 dk okuma',
    category: 'Organizasyon Planlama',
    summary:
      'Geniş ailelerin ve kalabalık çevrelerin katıldığı büyük düğünlerde karmaşa yaşamamak için banket düzeni, servis koridorları ve sahne görüş açısı nasıl kurgulanmalı?',
    highlights: [
      'Yuvarlak banket masalarının sosyal iletişime katkısı',
      'Kolonsuz ve sütunsuz geniş görüş açısının avantajları',
      'Yemek servisinde sıcak zincirin korunması stratejisi',
      'Tebrik ve takı merasimi sırasında oluşabilecek yığılmanın önlenmesi',
    ],
  },
];

export default function RehberPage() {
  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Header */}
      <section style={{ padding: '5rem 0 3.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.84rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-cashmere)', fontWeight: 500, display: 'block', marginBottom: '0.5rem' }}>
              Uzman Tavsiyeleri
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', color: 'var(--color-anthracite)', marginBottom: '1.25rem', fontWeight: 450 }}>
              Polatlı Düğün ve Davet Rehberi
            </h1>
            <p style={{ fontSize: '1.12rem', color: 'var(--color-text-secondary)', lineHeight: '1.75' }}>
              Düğün hazırlık sürecinde doğru kararlar vermeniz ve en özel gecenizi kusursuz bir anıya 
              dönüştürmeniz için derlediğimiz bilgilendirici içerikler.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container" style={{ paddingBottom: '6rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {guideArticles.map((article) => (
            <article
              key={article.slug}
              id={article.slug}
              className="arch-card"
              style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    padding: '0.25rem 0.75rem',
                    background: 'var(--color-surface-subtle)',
                    border: '1px solid var(--color-stone)',
                    borderRadius: 'var(--radius-xs)',
                    color: 'var(--color-anthracite)',
                    fontSize: '0.76rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {article.category}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-cashmere)', fontSize: '0.84rem' }}>
                  <Calendar size={14} />
                  <span>{article.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-cashmere)', fontSize: '0.84rem' }}>
                  <Clock size={14} />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', color: 'var(--color-anthracite)', marginBottom: '1rem', lineHeight: '1.25', fontWeight: 450 }}>
                {article.title}
              </h2>

              <p style={{ fontSize: '1.04rem', color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                {article.summary}
              </p>

              <div
                style={{
                  background: 'var(--color-surface-subtle)',
                  border: '1px solid var(--color-stone)',
                  borderRadius: 'var(--radius-xs)',
                  padding: '1.5rem',
                  marginBottom: '2rem',
                }}
              >
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--color-anthracite)', marginBottom: '0.75rem' }}>
                  Yazıda Öne Çıkan Başlıklar
                </h4>
                <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
                  {article.highlights.map((item, hIdx) => (
                    <li key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-champagne)', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <span style={{ fontSize: '0.84rem', color: 'var(--color-cashmere)' }}>
                  Köşk Düğün Salonu Organizasyon & Mimarlık Danışmanlığı
                </span>
                <Link href="/iletisim" className="btn btn-outline">
                  <span>Bu Konuda Danışmanımızla Görüşün</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
