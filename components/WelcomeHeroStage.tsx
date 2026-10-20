'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MousePointerClick, ChevronDown } from 'lucide-react';
import HeroCalligraphy from './HeroCalligraphy';
import styles from './WelcomeHeroStage.module.css';

const SCROLL_THRESHOLD = 180; // Zor geçilmesi için gereken birikmiş kaydırma eşiği (px)
const TOUCH_THRESHOLD = 80;   // Mobilde gereken dikey parmak kaydırma mesafesi (px)

export default function WelcomeHeroStage() {
  const router = useRouter();
  const [isDismissed, setIsDismissed] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const hasCookie = document.cookie.indexOf('kosk_welcome_dismissed=true') !== -1;
      const hasStorage =
        localStorage.getItem('kosk_welcome_dismissed') === 'true' ||
        sessionStorage.getItem('kosk_welcome_dismissed') === 'true';
      const hasClass = document.documentElement.classList.contains('welcome-dismissed');
      const hasHash = Boolean(window.location.hash);
      return hasCookie || hasStorage || hasClass || hasHash;
    } catch {
      return false;
    }
  });
  const [isDismissing, setIsDismissing] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const accumulatedDelta = useRef(0);
  const resetTimer = useRef<NodeJS.Timeout | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isTransitioningRef = useRef(false);

  // Karşılama ekranını yukarı akıcı şekilde kaydırarak sahneden kaldırma
  const triggerDismiss = useCallback((scrollToBooking: boolean = false) => {
    if (isTransitioningRef.current || isDismissed) return;
    isTransitioningRef.current = true;

    setIsDismissing(true);
    setScrollProgress(1);

    // Bir kez geçildikten sonra sayfayı yenilese de, logoya tıklasa da bir daha ASLA çıkmasın
    try {
      document.cookie = 'kosk_welcome_dismissed=true; path=/; max-age=31536000; SameSite=Lax';
      localStorage.setItem('kosk_welcome_dismissed', 'true');
      sessionStorage.setItem('kosk_welcome_dismissed', 'true');
      document.documentElement.classList.add('welcome-dismissed');
    } catch {
      // noop
    }

    // 850ms'lik lüks bezier geçişi tamamlandığında kilidi aç ve DOM'dan kaldır
    setTimeout(() => {
      setIsDismissed(true);
      document.body.style.overflow = '';
      window.scrollTo({ top: 0, behavior: 'instant' });

      if (scrollToBooking) {
        setTimeout(() => {
          const target = document.getElementById('cta-banner') || document.getElementById('randevu');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            router.push('/iletisim#concierge-booking-form');
          }
        }, 100);
      }
    }, 850);
  }, [isDismissed, router]);

  // İlk yükleme kontrolü
  useEffect(() => {
    // Sayfa daha önce geçilmişse veya bir çapa (#randevu vb.) ile açıldıysa doğrudan atla
    try {
      const hasCookie = document.cookie.indexOf('kosk_welcome_dismissed=true') !== -1;
      const alreadyDismissed =
        hasCookie ||
        localStorage.getItem('kosk_welcome_dismissed') === 'true' ||
        sessionStorage.getItem('kosk_welcome_dismissed') === 'true' ||
        document.documentElement.classList.contains('welcome-dismissed') ||
        Boolean(window.location.hash);

      if (alreadyDismissed) {
        setIsDismissed(true);
        document.documentElement.classList.add('welcome-dismissed');
        document.cookie = 'kosk_welcome_dismissed=true; path=/; max-age=31536000; SameSite=Lax';
        try {
          localStorage.setItem('kosk_welcome_dismissed', 'true');
          sessionStorage.setItem('kosk_welcome_dismissed', 'true');
        } catch {}
        document.body.style.overflow = '';
        return;
      }
    } catch {
      // noop
    }

    // Karşılama ekranı etkinken gövde kaydırmasını kilitle
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // "Zor Geçilsin" — Mouse Wheel ve Dokunmatik Direnç Takibi
  useEffect(() => {
    if (isDismissed || isDismissing) return;

    const handleWheel = (e: WheelEvent) => {
      // Varsayılan sayfa kaydırmasını engelle (tam kontrol)
      e.preventDefault();

      if (e.deltaY > 0) {
        // Aşağı doğru kaydırma isteği
        accumulatedDelta.current += e.deltaY;
        const progress = Math.min(accumulatedDelta.current / SCROLL_THRESHOLD, 1);
        setScrollProgress(progress);

        // Kullanıcı kaydırmayı yarıda bırakırsa yay gibi geri sar (direnç hissi)
        if (resetTimer.current) clearTimeout(resetTimer.current);
        resetTimer.current = setTimeout(() => {
          accumulatedDelta.current = 0;
          setScrollProgress(0);
        }, 350);

        if (accumulatedDelta.current >= SCROLL_THRESHOLD) {
          if (resetTimer.current) clearTimeout(resetTimer.current);
          triggerDismiss();
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const currentY = e.touches[0].clientY;
      const diffY = touchStartY.current - currentY;

      if (diffY > 0) {
        e.preventDefault();
        const progress = Math.min(diffY / TOUCH_THRESHOLD, 1);
        setScrollProgress(progress);

        if (diffY >= TOUCH_THRESHOLD) {
          touchStartY.current = null;
          triggerDismiss();
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartY.current = null;
      if (!isTransitioningRef.current) {
        setScrollProgress(0);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) {
        e.preventDefault();
        triggerDismiss();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, [isDismissed, isDismissing, triggerDismiss]);

  if (isDismissed) {
    return null;
  }

  // Direnç uygulandığında hafif yukarı gerilme (rubber-band) efekti
  const tensionTranslateY = scrollProgress * -22;

  return (
    <aside
      data-welcome-stage="true"
      className={`${styles.welcomeStage} welcomeStageRoot ${isDismissing ? styles.stageDismissing : ''}`}
      style={{
        transform: isDismissing ? undefined : `translate3d(0, ${tensionTranslateY}px, 0)`,
      }}
      aria-label="Köşk Düğün Salonu Karşılama Ekranı"
    >
      {/* Atmosferik arka plan katmanı */}
      <div className={styles.bgLayer}>
        <Image
          src="/images/venue/kosk-sahne-beyaz-isik-ve-cicek-tavani.webp"
          alt="Köşk Düğün Salonu çiçek tavan süslemesi, sahne ışıkları ve KÖŞK logolu sahne"
          fill
          priority
          className={styles.backdropImg}
          sizes="100vw"
        />
        <div className={styles.vignette} />
        <div className={styles.gridLines} />
      </div>

      {/* Merkez Kaligrafi & Butonlar */}
      <div className={styles.centerContainer}>
        <HeroCalligraphy
          onScrollClick={() => triggerDismiss(false)}
          onBookingClick={() => triggerDismiss(true)}
        />

        {/* Zor Geçiş İpucu ve Dinamik İlerleme Çubuğu */}
        <div className={styles.scrollPromptWrap}>
          <button
            type="button"
            className={styles.promptPill}
            onClick={() => triggerDismiss(false)}
            aria-label="Salonu Keşfetmek İçin Geçin"
          >
            <ChevronDown size={14} className={styles.promptIcon} />
            <span className={styles.promptText}>
              {scrollProgress > 0 ? 'Geçiliyor...' : 'Salonu Keşfetmek İçin Kaydırın'}
            </span>
          </button>

          {/* İlerleme Çubuğu */}
          <div className={styles.progressBarTrack} aria-hidden="true">
            <div
              className={styles.progressBarFill}
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
