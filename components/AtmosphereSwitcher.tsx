'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Moon, Music, UtensilsCrossed } from 'lucide-react';
import styles from './AtmosphereSwitcher.module.css';

interface MoodItem {
  id: string;
  tabLabel: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  desc: string;
  imageSrc: string;
  imageAlt: string;
  highlights: string[];
}

const moods: MoodItem[] = [
  {
    id: 'ilk-dans',
    tabLabel: 'Romantik İlk Dans',
    icon: <Heart size={18} />,
    badge: 'Sis Bulutu & Takip Spotu',
    title: 'Bulutlar Üzerinde Masalsı İlk Dans',
    desc: 'Zemine yayılan ağır sis bulutları ve çiftimizin adımlarına eşlik eden sıcak takip spotlarıyla ilk dansınıza eşlik eden özel bir sahne aydınlatması.',
    imageSrc: '/images/venue/kosk-ilk-dans-sis-bulutu.webp',
    imageAlt: 'Köşk Düğün Salonu Sisli İlk Dans Anı',
    highlights: ['Sis Bulutu Efekti', 'Özel Takip Spotu', 'Romantik Müzik Akışı'],
  },
  {
    id: 'kina',
    tabLabel: 'Geleneksel Kına',
    icon: <Moon size={18} />,
    badge: 'Mistik Mor LED & Kına Sahnesi',
    title: 'Zarafet ve Coşkunun Buluştuğu Kına Ambiyansı',
    desc: 'Derin mor ve menekşe tonlarında programlanan sahne ışıkları, şık kadife kına tahtı ve kadın davetlilerinize özel rahat salon düzeni.',
    imageSrc: '/images/venue/kosk-sahne-mor-isik-gosterisi.webp',
    imageAlt: 'Köşk Düğün Salonu Kına Gecesi Mor Işık Sahnesi',
    highlights: ['Özel Kına Tahtı', 'Koreografili Çıkış Alanı', 'Mor Sahne Işıkları'],
  },
  {
    id: 'eglence',
    tabLabel: 'Dans Pisti & Eğlence',
    icon: <Music size={18} />,
    badge: 'Geniş Mermer Pist & Işık Şovları',
    title: 'Sıkışmadan, Doyasıya Oynanabilen Geniş Dans Pisti',
    desc: 'Müziğin ritmine eşlik eden hareketli ışık geçişleri ve tüm davetlilerin aynı anda rahatça oynayıp dans edebileceği geniş mermer pist ferahlığı.',
    imageSrc: '/images/venue/kosk-renkli-dans-pisti-isik-yansimasi.webp',
    imageAlt: 'Köşk Düğün Salonu Renkli Dans Pisti ve Eğlence',
    highlights: ['Geniş Mermer Pist', 'Hareketli Sahne Işıkları', 'Canlı Orkestra Alanı'],
  },
  {
    id: 'ziyafet',
    tabLabel: 'Zarif Ziyafet',
    icon: <UtensilsCrossed size={18} />,
    badge: 'Sıcak Amber Işık & Ziyafet Düzeni',
    title: 'Göz Yormayan Sıcak Işıklar ve Ferah Masalar',
    desc: 'Yemek ve ikram servisi boyunca göz yormayan amber tonlaması, şık masa süslemeleri ve masalar arasında rahatça geçilen geniş servis koridorları.',
    imageSrc: '/images/venue/kosk-ziyafet-masalari-ve-orkestra-gorunumu.webp',
    imageAlt: 'Köşk Düğün Salonu Ziyafet Masaları ve Oturma Planı',
    highlights: ['Ferah Masa Düzeni', 'Sıcak Amber Aydınlatma', 'Geniş Geçiş Alanları'],
  },
];

export default function AtmosphereSwitcher() {
  const [activeMoodId, setActiveMoodId] = useState('ilk-dans');
  const activeMood = moods.find((m) => m.id === activeMoodId) || moods[0];

  return (
    <div className={styles.switcherRoot}>
      {/* Tab Navigation Buttons */}
      <div className={styles.tabsScroller}>
        <div className={styles.tabsList} role="tablist" aria-label="Salon Ambiyans Seçimi">
          {moods.map((mood) => {
            const isActive = mood.id === activeMoodId;
            return (
              <button
                key={mood.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveMoodId(mood.id)}
              >
                <span className={styles.tabIcon}>{mood.icon}</span>
                <span className={styles.tabText}>{mood.tabLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Showcase Card */}
      <div className={styles.moodDisplayCard}>
        {/* Left: Media Display with smooth visual transition */}
        <div className={styles.moodMediaWrap}>
          <Image
            key={activeMood.id}
            src={activeMood.imageSrc}
            alt={activeMood.imageAlt}
            fill
            className={styles.moodImage}
            sizes="(max-width: 1024px) 100vw, 55vw"
            loading="lazy"
          />
        </div>

        {/* Right: Detailed Atmosphere Information */}
        <div className={styles.moodContent}>
          <div className={styles.preBadge}>Ambiyans Deneyimi</div>
          <h3 className={styles.moodTitle}>{activeMood.title}</h3>
          <p className={styles.moodDesc}>{activeMood.desc}</p>

          <div className={styles.highlightsWrap}>
            <span className={styles.highlightsLabel}>Öne Çıkan Detaylar:</span>
            <div className={styles.highlightPills}>
              {activeMood.highlights.map((item, idx) => (
                <div key={idx} className={styles.pillItem}>
                  <span className={styles.pillDot} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
