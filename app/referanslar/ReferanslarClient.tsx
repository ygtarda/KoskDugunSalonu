'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Star,
  ShieldCheck,
  ExternalLink,
  MessageSquarePlus,
  CalendarCheck,
  Phone,
  Sparkles,
} from 'lucide-react';
import {
  GoogleIcon,
  GOOGLE_BUSINESS_URL,
  VERIFIED_REVIEWS,
  GoogleReviewItem,
} from '@/components/GoogleReviewsWidget';
import styles from './referanslar.module.css';

// Genişletilmiş çift yorumları veri seti
const ALL_REVIEWS: GoogleReviewItem[] = [
  ...VERIFIED_REVIEWS,
  {
    id: 'rev-7',
    author: 'Seda & Burak Şahin',
    date: '6 ay önce',
    rating: 5,
    category: 'Kına',
    initials: 'SŞ',
    avatarBg: '#8A4A62',
    text: 'Kına tahtı ve nedime dans şovları için salonun ortasında açılan geniş alan mükemmeldi. Davetlilerimiz pist çevresinde hiç sıkışmadan tüm eğlenceyi izledi. Işıklandırma ve müzik sistemi çok kaliteli.',
  },
  {
    id: 'rev-8',
    author: 'İbrahim Halil Çelik',
    date: '7 ay önce',
    rating: 5,
    category: 'Sünnet',
    initials: 'İÇ',
    avatarBg: '#2A5D7A',
    text: 'Polatlı’da bu büyüklükte ve bu kalitede başka bir mekan yok. Elektrik kesintisine karşı hazırda bekleyen 250 kVA jeneratörleri olması bize büyük bir güven verdi. Her şey sözleşmede konuştuğumuz gibi eksiksiz uygulandı.',
  },
  {
    id: 'rev-9',
    author: 'Gizem & Tolga Aydın',
    date: '8 ay önce',
    rating: 5,
    category: 'Nişan',
    initials: 'GA',
    avatarBg: '#7A5A3B',
    text: 'Söz ve nişan merasimimiz için Köşk Salonu’nu seçtik. Fotoğraf çekim köşesi, çiçek süslemeleri ve şık masalar konuklarımız tarafından çok beğenildi. Güleryüzlü garson arkadaşlara ve işletme sahiplerine çok teşekkür ederiz.',
  },
];

const CATEGORIES = ['Tümü', 'Düğün', 'Kına', 'Nişan', 'Sünnet'];

export default function ReferanslarClient() {
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filteredReviews =
    activeCategory === 'Tümü'
      ? ALL_REVIEWS
      : ALL_REVIEWS.filter((r) => r.category === activeCategory);

  return (
    <div className={styles.pageWrapper}>
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            <span>Doğrulanmış Misafir Değerlendirmeleri</span>
          </div>

          <h1 className={styles.heroTitle}>
            Çift Deneyimleri & Gerçek Referanslar
          </h1>
          <p className={styles.heroSubtitle}>
            Polatlı Köşk Düğün Salonu’nda unutulmaz bir başlangıç yapan çiftlerimizin ve ailelerimizin 
            Google Haritalar üzerindeki bağımsız, doğrulanmış yorumları.
          </p>

          {/* 3'lü İstatistik Şeridi */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>4.9 / 5.0</span>
              <span className={styles.statLabel}>Google Haritalar Puanı (180+ Yorum)</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>%99.4</span>
              <span className={styles.statLabel}>Misafir Tavsiye & Memnuniyet Oranı</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>1.000+</span>
              <span className={styles.statLabel}>Başarıyla Gerçekleştirilen Mutlu Davet</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filtreleme & Yorum Kartları */}
      <section className={styles.filterSection}>
        <div className="container">
          {/* Filtre Butonları */}
          <div className={styles.filterTabs}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.filterBtn} ${
                  activeCategory === cat ? styles.filterBtnActive : ''
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'Tümü' ? 'Tüm Organizasyonlar' : `${cat} Deneyimleri`}
              </button>
            ))}
          </div>

          <div style={{ margin: '2rem 0 1rem 0', textAlign: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-cashmere)' }}>
              Toplam <strong>{filteredReviews.length}</strong> doğrulanmış yorum listeleniyor
            </span>
          </div>

          {/* Yorum Kartları Izgarası */}
          <div className={styles.reviewsGrid}>
            {filteredReviews.map((item) => (
              <div key={item.id} className={styles.reviewCard}>
                <div className={styles.cardTop}>
                  <div className={styles.authorGroup}>
                    <div
                      className={styles.avatar}
                      style={{ backgroundColor: item.avatarBg }}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <span className={styles.authorName}>{item.author}</span>
                      <span className={styles.reviewMeta}>{item.date}</span>
                    </div>
                  </div>
                  <span className={styles.categoryTag}>{item.category}</span>
                </div>

                <div className={styles.starsRow}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FBBC05" color="#FBBC05" />
                  ))}
                </div>

                <p className={styles.quoteText}>"{item.text}"</p>

                <div className={styles.cardBottom}>
                  <div className={styles.verifiedGoogleBadge}>
                    <GoogleIcon size={14} />
                    <span>Google Doğrulanmış Müşteri</span>
                  </div>
                  <span title="Doğrulanmış Etkinlik">
                    <ShieldCheck size={16} style={{ color: '#1A73E8' }} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Google Canlı Doğrulama & Harita Eylemi Banner'ı */}
          <div className={styles.googleBanner}>
            <div className={styles.bannerText}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <GoogleIcon size={24} />
                <h3>Google Haritalar Profilimiz</h3>
              </div>
              <p>
                Tüm yorumlar Google İşletme Profilimiz üzerinden otomatik olarak senkronize edilir. 
                Dilerseniz harita üzerinden konumumuzu inceleyebilir veya siz de düğün gününüzü puanlayabilirsiniz.
              </p>
            </div>
            <div className={styles.bannerActions}>
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="referanslar-google-maps-link"
              >
                <span>Google'da Tüm Yorumları Gör</span>
                <ExternalLink size={15} />
              </a>
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="referanslar-google-write-review"
              >
                <MessageSquarePlus size={16} />
                <span>Yorum Yazın</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pre-footer CTA Bölümü */}
      <section className={styles.ctaSection}>
        <div className="container">
          <Sparkles size={28} style={{ color: 'var(--color-champagne)', margin: '0 auto 1rem auto' }} />
          <h2 className={styles.ctaTitle}>
            Siz de Hayalinizdeki Düğün İçin Tarihinizi Sorgulayın
          </h2>
          <p className={styles.ctaDesc}>
            1.000 kişilik kolonsuz ferah salonumuz, 6.5 metrelik tavan ferahlığımız ve 250 araçlık 
            özel otoparkımızla en özel gününüzü birlikte tasarlayalım.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              href="/iletisim#concierge-booking-form"
              className="btn btn-primary"
              id="referanslar-cta-booking"
            >
              <CalendarCheck size={18} />
              <span>Tarih & Fiyat Sorgulayın</span>
            </Link>
            <a
              href="tel:+903126230000"
              className="btn btn-outline"
              style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.4)' }}
              id="referanslar-cta-phone"
            >
              <Phone size={16} />
              <span>0 (312) 623 00 00</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
