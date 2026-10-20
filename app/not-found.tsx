import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Phone, ArrowRight, MessageCircle, ChevronRight, HelpCircle } from 'lucide-react';
import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: '404 - Sayfa Bulunamadı | Köşk Düğün Salonu',
  description: 'Aradığınız sayfa bulunamadı ya da taşınmış olabilir.',
  robots: {
    index: false,
    follow: false,
  },
};

const navigationSuggestions = [
  {
    href: '/salon',
    title: 'Salonumuz & Mimari',
    desc: '1.000 kişilik ferah kolonsuz salon ve 6.5 m tavan',
  },
  {
    href: '/hizmetler',
    title: 'Organizasyon Paketleri',
    desc: 'Düğün, kına gecesi, nişan ve kurumsal ziyafetler',
  },
  {
    href: '/galeri',
    title: 'Fotoğraf Galerisi',
    desc: 'Dans pisti, masa düzeni ve gerçek davet kareleri',
  },
  {
    href: '/sss',
    title: 'Sıkça Sorulan Sorular',
    desc: 'Fiyatlandırma, ikram seçenekleri ve seans saatleri',
  },
];

export default function NotFound() {
  return (
    <div className={styles.errorWrapper}>
      <article className={styles.errorCard} aria-labelledby="not-found-heading">
        {/* Üst Rozet */}
        <div className={styles.badge}>
          <span>POLATLI · KÖŞK DÜĞÜN SALONU</span>
        </div>

        {/* İnce ve Zarif 404 Kodu */}
        <div className={styles.errorCode} aria-hidden="true">
          404
        </div>

        {/* İnce Mimari Çizgi Motif SVG Bölücü */}
        <div className={styles.ornamentDivider} aria-hidden="true">
          <span className={styles.dividerLine} />
          <span className={styles.dividerDiamond} />
          <span className={styles.dividerLineRight} />
        </div>

        {/* Anlamsal h1 Başlığı */}
        <h1 id="not-found-heading" className={styles.title}>
          Aradığınız Sayfa Bulunamadı veya Taşınmış Olabilir
        </h1>

        {/* Nazik, Konuksever Açıklama */}
        <p className={styles.desc}>
          Ulaşmaya çalıştığınız sayfa güncellenmiş, taşınmış ya da geçici olarak erişilemiyor olabilir.
          Sizi salonumuzun olanaklarını ve güncel davet takvimini keşfedebileceğiniz ana bölümlerimize
          yönlendirmekten memnuniyet duyarız.
        </p>

        {/* Ana Çıkış Butonları */}
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryBtn} id="not-found-home-btn">
            <Home size={18} />
            <span>Anasayfaya Dön</span>
          </Link>
          <Link href="/iletisim" className={styles.outlineBtn} id="not-found-contact-btn">
            <span>Keşif & Fiyat Teklifi Alın</span>
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Hızlı Yönlendirme Kartları */}
        <section className={styles.suggestionsWrapper} aria-label="Sitenin Önemli Bölümleri">
          <h2 className={styles.suggestionsTitle}>Sitenin Ana Bölümlerini İnceleyin</h2>
          <div className={styles.suggestionsGrid}>
            {navigationSuggestions.map((item) => (
              <Link key={item.href} href={item.href} className={styles.suggestionCard}>
                <div className={styles.suggestionLabel}>
                  <span>{item.title}</span>
                  <ChevronRight size={16} className={styles.suggestionChevron} />
                </div>
                <span className={styles.suggestionDesc}>{item.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Danışma & İletişim Şeridi */}
        <aside className={styles.conciergeStrip} aria-label="Salon Yetkilisi Danışma Hattı">
          <div className={styles.conciergeText}>
            <HelpCircle size={18} className={styles.conciergeIcon} />
            <span>Doğrudan bir soru iletmek ya da tarih sorgulamak için:</span>
          </div>
          <div className={styles.conciergeActions}>
            <a href="tel:+905382969079" className={styles.conciergeLink} id="not-found-call-link">
              <Phone size={14} />
              <span>0538 296 90 79</span>
            </a>
            <a
              href="https://wa.me/905382969079?text=Merhaba%2C%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.%20Bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.conciergeLink}
              id="not-found-wa-link"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </aside>
      </article>
    </div>
  );
}
