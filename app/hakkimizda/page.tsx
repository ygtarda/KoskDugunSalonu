import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Award, HeartHandshake, ShieldCheck, Clock, CalendarCheck } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export const metadata: Metadata = {
  title: 'Hakkımızda | Polatlı Köşk Düğün Salonu Hikayesi ve Felsefesi',
  description:
    'Polatlı’da 1000 kişilik kapalı balo salonu vizyonuyla kurulan Köşk Düğün Salonu’nun hikayesi, hizmet ilkeleri ve misafir memnuniyeti odaklı organizasyon felsefesi.',
};

export default function HakkimizdaPage() {
  return (
    <div style={{ paddingTop: '1rem' }}>
      {/* Header */}
      <section style={{ padding: '2.25rem 0 2rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.84rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-cashmere)', fontWeight: 500, display: 'block', marginBottom: '0.5rem' }}>
              Köklü Bir Vizyon
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', color: 'var(--color-anthracite)', marginBottom: '1.25rem', fontWeight: 450 }}>
              Polatlı’da Zarafetin ve Güvenin Adresi
            </h1>
            <p style={{ fontSize: '1.12rem', color: 'var(--color-text-secondary)', lineHeight: '1.75' }}>
              Köşk Düğün Salonu, Polatlı ve çevre ilçelerdeki çiftlerin en mutlu günlerini tesadüflere 
              bırakmamak, hava koşullarından etkilenmeyen lüks bir kapalı balo salonu deneyimi sunmak 
              amacıyla kuruldu.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="container" style={{ marginBottom: '5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 'var(--radius-xs)', overflow: 'hidden', boxShadow: '0 12px 32px rgba(44, 40, 38, 0.08)', border: '1px solid var(--color-stone)' }}>
            <Image
              src="/images/venue/kosk-karsilama-panosu-sovale-dekoru.webp"
              alt="Köşk Düğün Salonu Giriş Fuayesi ve Karşılama Şövale Dekoru"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              unoptimized
            />
          </div>

          <div>
            <span style={{ fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-cashmere)', fontWeight: 500, display: 'block', marginBottom: '0.4rem' }}>
              Hikayemiz
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--color-anthracite)', marginBottom: '1.2rem', fontWeight: 450 }}>
              Büyük Davetlerde Konfor Standartlarını Yeniden Tanımladık
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.2rem', lineHeight: '1.75' }}>
              Yıllar boyunca Polatlı’daki düğün organizasyonlarını gözlemlediğimizde, ailelerin ve çiftlerin 
              en büyük endişelerinin kapalı salonlardaki havasızlık, basık tavanlar ve orkestra sesinin 
              yarattığı uğultu olduğunu fark ettik.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: '1.75' }}>
              Bu eksikliği gidermek için yola çıktık: 1.200 m² kolonsuz ve geniş salon yapımız, 
              6.5 metrelik yüksek tavanımız ve düzenli havalandırma sistemimizle tüm davetlilere ferah 
              bir ortam sunuyoruz. Salonda kolon bulunmaması ve geniş dans pistimiz sayesinde 1.000 kişilik 
              davetlerde bile herkes eğlenceyi rahatça takip edebilir.
            </p>
            <div style={{ display: 'flex', gap: '2.5rem', borderTop: '1px solid var(--color-stone)', paddingTop: '1.5rem' }}>
              <div>
                <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-anthracite)', fontWeight: 500 }}>
                  1.000+
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-cashmere)' }}>Mutlu Çift & Aile</span>
              </div>
              <div>
                <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-anthracite)', fontWeight: 500 }}>
                  %99.4
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-cashmere)' }}>Misafir Memnuniyeti</span>
              </div>
              <div>
                <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-anthracite)', fontWeight: 500 }}>
                  15+ Yıl
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-cashmere)' }}>Sektörel Deneyim</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Köşk */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-header-inner">
              <div className="editorial-indicator" />
              <div className="section-title-wrap">
                <div className="section-category">Hizmet Felsefemiz</div>
                <h2>Bizi Farklı Kılan Dört Temel İlke</h2>
                <p className="section-subtitle">
                  Sıradan bir düğün salonu işletmeciliğinin ötesinde, her davete bir sanat eseri titizliğiyle yaklaşıyoruz.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.75rem',
            }}
          >
            <TiltCard className="arch-card" maxTilt={5} glare>
              <div style={{ color: 'var(--color-champagne)', marginBottom: '1.25rem' }}>
                <Clock size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-anthracite)', marginBottom: '0.65rem' }}>
                Dakik Zaman Yönetimi
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--color-text-secondary)', lineHeight: '1.65' }}>
                Karşılama kokteylinden nikâh seremonisine, ilk danstan pasta kesimine kadar tüm akış 
                deneyimli organizasyon şefimiz tarafından koordine edilir.
              </p>
            </TiltCard>

            <TiltCard className="arch-card" maxTilt={5} glare>
              <div style={{ color: 'var(--color-champagne)', marginBottom: '1.25rem' }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-anthracite)', marginBottom: '0.65rem' }}>
                Sıfır Aksaklık Garantisi
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--color-text-secondary)', lineHeight: '1.65' }}>
                Elektrik kesintilerine karşı tam otomatik kesintisiz jeneratör desteği ve düzenli havalandırma 
                ile geceniz en ufak bir aksamaya uğramaz.
              </p>
            </TiltCard>

            <TiltCard className="arch-card" maxTilt={5} glare>
              <div style={{ color: 'var(--color-champagne)', marginBottom: '1.25rem' }}>
                <HeartHandshake size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-anthracite)', marginBottom: '0.65rem' }}>
                Şeffaf ve Dürüst İletişim
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--color-text-secondary)', lineHeight: '1.65' }}>
                Sözleşmede ne konuştuysak düğün günü harfiyen onu uygularız. Gizli maliyetler veya sürpriz 
                ek ücretler Köşk prensiplerinde asla yer almaz.
              </p>
            </TiltCard>

            <TiltCard className="arch-card" maxTilt={5} glare>
              <div style={{ color: 'var(--color-champagne)', marginBottom: '1.25rem' }}>
                <Award size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-anthracite)', marginBottom: '0.65rem' }}>
                Seçkin Ziyafet Standardı
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--color-text-secondary)', lineHeight: '1.65' }}>
                İkram edilen kuru pasta, yaş pasta ve yemekli menülerimizin her biri günlük taze üretimdir. 
                Sıcak servisler aynı anda ve nezaketle masalara ulaştırılır.
              </p>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span style={{ fontSize: '0.84rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-cashmere)', fontWeight: 500, display: 'block', marginBottom: '0.4rem' }}>
            Birlikte Planlayalım
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--color-anthracite)', marginBottom: '1.25rem', fontWeight: 450 }}>
            Kahvemizi İçmeye ve Salonumuzu Gezmeye Davetlisiniz
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2.5rem', lineHeight: '1.75' }}>
            Düğün tarihinizi netleştirmeden önce salonumuzu ziyaret edin, geniş iç mekân ferahlığını hissedin 
            ve aklınızdaki tüm soruları yöneticilerimizle yüz yüze değerlendirin.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <Link href="/iletisim" className="btn btn-primary">
              <CalendarCheck size={18} />
              <span>İletişime Geçin & Teklif Alın</span>
            </Link>
            <Link href="/referanslar" className="btn btn-outline">
              <span>Evlenen Çiftlerin Yorumlarını Okuyun</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
