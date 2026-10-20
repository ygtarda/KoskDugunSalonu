'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import styles from './VideoHeroSection.module.css';

interface VideoHeroSectionProps {
  videoSrc?: string;
  webmSrc?: string;
  posterSrc?: string;
}

export default function VideoHeroSection({
  videoSrc = '/hero-video.mp4',
  webmSrc,
  posterSrc = '/images/hero-video-poster.webp',
}: VideoHeroSectionProps) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLElement>(null);

  // Header yüksekliğini dinamik olarak ölçüp CSS değişkenine aktar
  useEffect(() => {
    const header = document.getElementById('main-site-header');

    const updateHeaderHeight = () => {
      const target = document.getElementById('main-site-header');
      if (target) {
        // Aşağı yuvarla: hero ekranı en az tam dolduracak şekilde 1px'lik açık çizgiyi önler
        const h = Math.floor(target.getBoundingClientRect().height);
        document.documentElement.style.setProperty('--header-actual-height', `${h}px`);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    let observer: ResizeObserver | null = null;
    if (header && 'ResizeObserver' in window) {
      observer = new ResizeObserver(updateHeaderHeight);
      observer.observe(header);
    }

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      observer?.disconnect();
    };
  }, []);

  // Performance-first: Intersection Observer ile lazy video yükleme
  useEffect(() => {
    if (!videoSrc && !webmSrc) return;

    if (!('IntersectionObserver' in window)) {
      setShouldLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    if (videoWrapperRef.current) {
      observer.observe(videoWrapperRef.current);
    }

    return () => observer.disconnect();
  }, [videoSrc, webmSrc]);

  // Video hazır olduğunda ve DOM'a bağlandığında otomatik başlatma
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Tarayıcı autoplay politikaları için DOM seviyesinde sessize alma zorunludur
    video.muted = isMuted;
    video.defaultMuted = isMuted;

    if (shouldLoadVideo && isPlaying) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Tarayıcı otomatik oynatmayı engellerse ses kapalı tekrar dene
            video.muted = true;
            setIsMuted(true);
            video.play().catch(() => {
              setIsPlaying(false);
            });
          });
      }
    }
  }, [shouldLoadVideo, isPlaying, isMuted]);

  // Kullanıcı durdurma / devam ettirme kontrolü
  const togglePlay = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn('Video oynatma hatası:', err));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  // Kullanıcı ses açma / kapama kontrolü
  const toggleMute = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  }, []);

  // Video bittiğinde kesintisiz baştan başlatma
  const handleEnded = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => { });
    }
  }, []);

  const handleLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      togglePlay();
    }
  };

  return (
    <section
      ref={videoWrapperRef}
      className={styles.videoHeroWrapper}
      aria-label="Salon Tanıtım ve Mimari Görünümü"
    >
      <div
        className={styles.videoContainer}
        onClick={() => togglePlay()}
      >
        {/* Poster Görseli: LCP için her zaman anında yüklenir */}
        <Image
          src={posterSrc}
          alt="Köşk Düğün Salonu 1.000 Kişilik Kapalı Düğün Salonu Genel Görünümü"
          fill
          priority
          className={`${styles.fallbackPosterImg} ${isVideoLoaded ? styles.posterHidden : ''}`}
          sizes="100vw"
          quality={85}
        />

        {/* Lazy-load video elementi */}
        {shouldLoadVideo && (videoSrc || webmSrc) && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={posterSrc}
            onLoadedData={handleLoadedData}
            onEnded={handleEnded}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className={`${styles.ambientVideo} ${isVideoLoaded ? styles.ambientVideoVisible : ''}`}
          >
            {webmSrc && <source src={webmSrc} type="video/webm" />}
            {videoSrc && <source src={videoSrc} type="video/mp4" />}
          </video>
        )}

        {/* Lüks yumuşak kenar geçiş katmanı */}
        <div className={styles.videoVignette} />

        {/* Video durdurulduğunda merkezde beliren zarif oynat butonu */}
        <div
          className={`${styles.centerPlayOverlay} ${!isPlaying ? styles.centerPlayOverlayActive : ''}`}
        >
          <button
            type="button"
            className={styles.centerPlayBtn}
            onClick={togglePlay}
            aria-label="Videoyu devam ettir"
          >
            <div className={styles.centerPlayIconWrapper}>
              <Play size={28} className={styles.centerPlayIcon} />
            </div>
            <span className={styles.centerPlayText}>Oynat</span>
          </button>
        </div>



        <div
          className={styles.controlsCluster}
          onClick={(e) => e.stopPropagation()}
          role="toolbar"
          aria-label="Video Oynatma Kontrolleri"
        >
          {/* Oynat / Durdur Butonu */}
          <button
            type="button"
            className={styles.controlBtn}
            onClick={togglePlay}
            aria-label={isPlaying ? 'Videoyu durdur' : 'Videoyu oynat'}
            title={isPlaying ? 'Videoyu durdur' : 'Videoyu oynat'}
            id="hero-video-play-pause-btn"
          >
            {isPlaying ? (
              <>
                <Pause size={16} />
                <span>Durdur</span>
              </>
            ) : (
              <>
                <Play size={16} />
                <span>Oynat</span>
              </>
            )}
          </button>

          <span className={styles.controlDivider} aria-hidden="true" />

          {/* Ses Aç / Kapa Butonu (Varsayılan: Sessiz) */}
          <button
            type="button"
            className={styles.controlBtn}
            onClick={toggleMute}
            aria-label={isMuted ? 'Sesi aç' : 'Sesi kapat'}
            title={isMuted ? 'Sesi aç' : 'Sesi kapat'}
            id="hero-video-mute-btn"
          >
            {isMuted ? (
              <>
                <VolumeX size={16} />
                <span>Sessiz</span>
              </>
            ) : (
              <>
                <Volume2 size={16} />
                <span>Ses Açık</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
