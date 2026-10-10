import type { Metadata } from 'next';
import Link from 'next/link';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import { CalendarCheck, HelpCircle, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular & Yorumlar | Polatlı Köşk Düğün Salonu',
  description:
    'Polatlı Köşk Düğün Salonu kapasite, rezervasyon, iklimlendirme, otopark bilgileri ve Google Haritalar doğrulanmış gerçek misafir yorumları.',
};

const faqItems: FaqItem[] = [
  {
    question: 'Salonun tam kapasitesi nedir ve oturma düzeni nasıldır?',
    answer:
      'Köşk Düğün Salonu 1.200 m² yekpare kapalı alana sahiptir. Yuvarlak ziyafet masalarıyla banket düzeninde 800 ila 1.000 misafiri son derece konforlu şekilde ağırlayabiliyoruz. Kokteyl davetlerinde bu kapasite 1.200 kişiye ulaşmaktadır. Masalar arasında gelinlik ve servis görevlilerinin rahatça geçebileceği geniş sirkülasyon koridorları bırakılmaktadır.',
  },
  {
    question: 'Kapalı salonunuzda havalandırma ve klima sistemi nasıl çalışır?',
    answer:
      'Salonumuzda endüstriyel VRF iklimlendirme ve çift çevrimli taze hava santralleri bulunmaktadır. 1.000 davetlinin bulunduğu anlarda dahi saatte 14.000 m³ taze hava salona verilirken kullanılmış hava tahliye edilir. Yaz aylarında ferah bir serinlik, kış aylarında ise homojen bir oda sıcaklığı garanti edilir; basıklık ve havasızlık kesinlikle yaşanmaz.',
  },
  {
    question: 'Rezervasyon ve sözleşme süreci nasıl işler? Ne kadar önceden yer ayırtmalıyız?',
    answer:
      'Özellikle ilkbahar, yaz ve sonbahar hafta sonları yoğun talep gördüğünden, düğün tarihinizden 4 ila 9 ay öncesinde rezervasyon yaptırmanızı öneririz. Tarih belirleme sonrasında karşılıklı şartları güvenceye alan resmi bir sözleşme imzalanır ve kapora bedeli alınır. Kalan bakiye ise düğün haftasında taksitlendirilebilir.',
  },
  {
    question: 'Elektrik kesintisi veya arıza durumunda bir güvenceniz var mı?',
    answer:
      'Evet. Salonumuza ait 400 kVA gücünde sanayi tipi tam otomatik yedek jeneratör bulunmaktadır. Şehir şebekesinde elektrik kesintisi yaşansa dahi sistem 4 saniye içinde devreye girerek tüm salon aydınlatmasını, sahne ses-ışık sistemini ve klimaları tam güçte kesintisiz çalıştırmaya devam eder.',
  },
  {
    question: 'Dışarıdan catering, fotoğrafçı veya organizasyon şirketi getirebilir miyiz?',
    answer:
      'Salonumuz zengin ve hijyen sertifikalı menüleri, profesyonel HD çekim ekibi ve tecrübeli orkestrasıyla anahtar teslim hizmet verir. Ancak özel bir catering firması, fotoğrafçı ya da dış dekorasyon ekibiyle çalışmak isterseniz, teknik koordinasyon ve hijyen standartlarımıza uymak koşuluyla memnuniyetle esneklik sağlıyoruz.',
  },
  {
    question: 'Gelin ve damat için özel hazırlık odası var mı?',
    answer:
      'Evet, salonumuzda gelin ve damadımıza tahsis edilen 2 adet bağımsız VIP hazırlık süiti mevcuttur. İçerisinde özel banyo, profesyonel LED makyaj masası, dinlenme koltuğu, klima ve tören öncesi çifte özel ikram servisi yer alır.',
  },
  {
    question: 'Davetlilerimiz için otopark ve engelli erişimi mevcut mu?',
    answer:
      'Salonumuzun hemen bitişiğinde 250 araç kapasiteli geniş özel otoparkımız bulunmaktadır. Ayrıca salon girişimiz, fuayemiz ve lavabolarımız; tekerlekli sandalye, bebek arabası ve yaşlı misafirlerimizin konforla ulaşabileceği şekilde %100 engelsiz rampa ve geniş asansör sistemiyle donatılmıştır.',
  },
  {
    question: 'Menü tadımı yapıyor musunuz?',
    answer:
      'Yemekli organizasyonlarımızda düğün öncesi çiftimiz ve aileleri için menü tadımı planlıyoruz. Ana yemek, ara sıcak, meze ve pasta alternatiflerini önceden deneyimleyerek davet gününe özel damak tadınıza uygun reçeteleri birlikte netleştiriyoruz.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function SssPage() {
  return (
    <div style={{ paddingTop: '1rem', minHeight: '100vh', backgroundColor: 'var(--color-sand)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section style={{ padding: '2.5rem 0 2rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span
              style={{
                fontSize: '0.80rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--color-champagne)',
                fontWeight: 600,
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              Merak Edilenler & Gerçek Deneyimler
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                color: 'var(--color-anthracite)',
                marginBottom: '0.85rem',
                fontWeight: 450,
                lineHeight: 1.2,
              }}
            >
              Sıkça Sorulan Sorular & Yorumlar
            </h1>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.65',
                maxWidth: '650px',
                margin: '0 auto',
              }}
            >
              Düğün ve davet planlama sürecinde aklınıza takılabilecek tüm teknik detaylar
              ve salonumuzda evlenen çiftlerimizin Google Haritalar üzerindeki gerçek yorumları.
            </p>
          </div>
        </div>
      </section>

      {/* SSS Accordion Bölümü */}
      <section className="container" style={{ paddingBottom: '3.5rem' }}>
        <FaqAccordion items={faqItems} />
      </section>

      {/* SSS Altında Doğrudan Google Yorumları Bölümü */}
      <section
        style={{
          borderTop: '1px solid var(--color-stone)',
          paddingTop: '3.5rem',
          paddingBottom: '4.5rem',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
            <span
              style={{
                fontSize: '0.78rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-champagne)',
                fontWeight: 600,
                display: 'block',
                marginBottom: '0.4rem',
              }}
            >
              Gerçek Misafir Deneyimleri
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                color: 'var(--color-anthracite)',
                fontWeight: 500,
                marginBottom: '0.5rem',
              }}
            >
              Google Haritalar Değerlendirmeleri
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.96rem', lineHeight: 1.6 }}>
              Köşk Düğün Salonu’nda unutulmaz anılar biriktiren çiftlerimizin ve davetlilerimizin doğrudan Google üzerinden paylaştığı onaylı yorumlar.
            </p>
          </div>

          <GoogleReviewsWidget />
        </div>
      </section>

      {/* Farklı Bir Sorunuz Mu Var? CTA Kutusu */}
      <section className="container" style={{ padding: '3.5rem 0 5rem 0' }}>
        <div
          style={{
            textAlign: 'center',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-stone)',
            borderTop: '3px solid var(--color-champagne)',
            padding: '2.5rem 2rem',
            borderRadius: 'var(--radius-md)',
            maxWidth: '800px',
            margin: '0 auto',
            boxShadow: '0 8px 24px rgba(44, 40, 38, 0.04)',
          }}
        >
          <HelpCircle size={32} style={{ color: 'var(--color-champagne)', margin: '0 auto 0.75rem auto' }} />
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.65rem',
              color: 'var(--color-anthracite)',
              marginBottom: '0.5rem',
              fontWeight: 500,
            }}
          >
            Farklı Bir Sorunuz mu Var?
          </h3>
          <p
            style={{
              maxWidth: '560px',
              margin: '0 auto 1.75rem auto',
              color: 'var(--color-text-secondary)',
              lineHeight: '1.6',
              fontSize: '0.94rem',
            }}
          >
            Özel menü talepleri, salon müsaitliği ve kişiye özel bütçe planlaması için danışmanlarımızla doğrudan görüşebilirsiniz.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/iletisim" className="btn btn-primary" id="sss-cta-iletisim-btn">
              <CalendarCheck size={17} />
              <span>Keşif Randevusu & Teklif Alın</span>
            </Link>
            <a
              href="https://wa.me/903126230000?text=Merhaba,%20K%C3%B6%C5%9Fk%20D%C3%BC%C4%9F%C3%BCn%20Salonu%20hakk%C4%B1nda%20sorum%20var."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              id="sss-cta-whatsapp-btn"
            >
              <MessageSquare size={16} />
              <span>WhatsApp’tan Hemen Sorun</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
