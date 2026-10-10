'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowRight, CalendarCheck } from 'lucide-react';
import styles from './HeroCalligraphy.module.css';

interface HeroCalligraphyProps {
  onScrollClick?: () => void;
}

export default function HeroCalligraphy({ onScrollClick }: HeroCalligraphyProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    if (onScrollClick) {
      onScrollClick();
    } else {
      const target = document.getElementById('sliding-content-start');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleScrollToBooking = () => {
    const target = document.getElementById('randevu');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = '/iletisim';
    }
  };

  return (
    <div className={`${styles.calligraphyHeroStage} ${isScrolled ? styles.scrolledAway : ''}`}>
      {/* Ambient Pulsing Warm Gold Halo */}
      <div className={styles.ambientGlow} />

      {/* 1. Köşk Düğün Salonu Resmi Marka Logosu */}
      <div className={styles.crestWrap}>
        <div className={styles.heroLogoWrapper}>
          <Image
            src="/logo-badge.png"
            alt="Köşk Düğün Salonu Logo"
            width={76}
            height={76}
            priority
            className={styles.heroLogoImg}
          />
        </div>
      </div>

      {/* 2. Pinyon Script — Ekranda Canlı Yazılan Kaligrafik Köşk Sanat Eseri */}
      <svg
        viewBox="0 0 1020 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svgStage}
        aria-label="Köşk Düğün Salonu"
        role="img"
      >
        <title>Köşk Düğün Salonu</title>

        <defs>
          {/* Lüks Şampanya ve Fildişi Altın Mürekkep Degradesi */}
          <linearGradient id="goldInkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
            <stop offset="30%" stopColor="#FAF8F5" stopOpacity="1" />
            <stop offset="65%" stopColor="#E4CCA8" stopOpacity="1" />
            <stop offset="100%" stopColor="#B8956E" stopOpacity="0.95" />
          </linearGradient>

          {/* Çizilen Hat İçin Parlak Altın Varak Konturu */}
          <linearGradient id="goldStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#FAF8F5" stopOpacity="1" />
            <stop offset="75%" stopColor="#D4B59E" stopOpacity="1" />
            <stop offset="100%" stopColor="#B8956E" stopOpacity="0.85" />
          </linearGradient>

          {/* Alt Süsleme Kurdelesi Degradesi */}
          <linearGradient id="flourishGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4B59E" stopOpacity="0" />
            <stop offset="25%" stopColor="#D4B59E" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="80%" stopColor="#B8956E" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#B8956E" stopOpacity="0" />
          </linearGradient>

          {/* 120 FPS Kesintisiz GPU Kırpma Yolları (Bézier Segment Atlama Kasmasını %100 Önler) */}
          <clipPath id="clipLetterK">
            <rect x="240" y="20" width="345" height="240" className={styles.clipRectK} />
          </clipPath>
          <clipPath id="clipLetterO">
            <rect x="460" y="130" width="125" height="120" className={styles.clipRectO} />
          </clipPath>
          <clipPath id="clipLetterS">
            <rect x="535" y="120" width="120" height="120" className={styles.clipRectS} />
          </clipPath>
          <clipPath id="clipLetterCedilla">
            <rect x="545" y="225" width="45" height="55" className={styles.clipRectCedilla} />
          </clipPath>
          <clipPath id="clipLetterLastK">
            <rect x="610" y="20" width="160" height="240" className={styles.clipRectLastK} />
          </clipPath>
        </defs>

        {/* 1. Harf 'K' — Asil Fransız Saray Başlangıç Döngüsü ve İniş */}
        <path
          d="M 274.88 230.25 Q 263.12 230.25, 256.56 225.31 Q 250.0 220.38, 250.0 213.5 Q 250.0 207.75, 253.88 205.44 Q 257.75 203.12, 261.62 203.12 Q 263.62 203.12, 265.75 204.38 Q 267.88 205.62, 267.88 208.75 Q 267.88 211.12, 265.75 213.0 Q 263.62 214.88, 260.75 214.88 Q 259.12 214.88, 257.62 214.69 Q 256.12 214.5, 254.88 213.75 L 254.88 214.5 Q 254.88 219.88, 260.25 223.44 Q 265.62 227.0, 274.75 227.0 Q 284.25 227.0, 296.38 220.88 Q 308.5 214.75, 323.81 200.12 Q 339.12 185.5, 357.88 160.0 Q 368.25 145.88, 386.25 128.0 Q 404.25 110.12, 425.38 90.62 Q 413.62 98.5, 403.25 102.81 Q 392.88 107.12, 382.88 107.12 Q 377.38 107.12, 373.88 104.56 Q 370.38 102.0, 370.38 97.0 Q 370.38 85.0, 389.0 71.62 Q 394.88 67.5, 394.88 64.88 Q 394.88 60.75, 391.19 58.94 Q 387.5 57.12, 381.25 57.12 Q 369.5 57.12, 359.31 62.0 Q 349.12 66.88, 341.19 74.56 Q 333.25 82.25, 328.19 90.75 Q 323.12 99.25, 321.5 106.5 Q 320.5 109.75, 319.75 109.75 Q 318.38 109.75, 318.38 107.5 Q 318.38 106.25, 318.62 105.5 Q 320.0 100.12, 324.56 91.5 Q 329.12 82.88, 336.88 74.19 Q 344.62 65.5, 355.94 59.56 Q 367.25 53.62, 382.12 53.62 Q 390.75 53.62, 396.38 57.19 Q 402.0 60.75, 402.0 66.12 Q 402.0 72.5, 397.75 79.44 Q 393.5 86.38, 383.5 92.62 Q 380.0 94.88, 378.0 96.19 Q 376.0 97.5, 376.0 99.62 Q 376.0 101.25, 377.94 102.44 Q 379.88 103.62, 382.88 103.62 Q 396.62 103.62, 411.75 95.56 Q 426.88 87.5, 443.88 73.12 Q 456.0 63.38, 463.62 58.25 Q 471.25 53.12, 475.5 51.19 Q 479.75 49.25, 481.62 49.25 Q 483.38 49.25, 483.38 50.25 Q 483.38 51.38, 482.12 51.75 Q 478.12 52.88, 471.12 57.25 Q 464.12 61.62, 453.12 71.94 Q 442.12 82.25, 426.19 100.75 Q 410.25 119.25, 388.38 148.62 Q 356.0 191.62, 326.38 210.94 Q 296.75 230.25, 274.88 230.25 Z M 402.12 231.75 Q 385.12 231.75, 385.12 218.75 Q 385.12 213.5, 387.94 206.19 Q 390.75 198.88, 398.75 188.25 Q 406.75 177.62, 422.12 162.5 Q 426.88 157.88, 428.88 152.56 Q 430.88 147.25, 430.88 144.38 Q 430.88 143.12, 430.5 142.0 Q 423.0 144.38, 416.38 144.5 Q 410.25 144.75, 406.44 142.62 Q 402.62 140.5, 402.62 138.12 Q 402.62 136.0, 405.88 134.19 Q 409.12 132.38, 415.38 132.25 Q 420.5 132.12, 424.88 133.31 Q 429.25 134.5, 432.12 137.38 Q 439.62 133.62, 447.81 126.12 Q 456.0 118.62, 466.25 107.12 Q 483.25 88.5, 500.06 76.69 Q 516.88 64.88, 531.19 59.19 Q 545.5 53.5, 554.75 53.5 Q 566.88 53.5, 572.0 58.19 Q 577.12 62.88, 575.88 69.88 Q 574.88 75.62, 571.19 79.0 Q 567.5 82.38, 563.62 82.38 Q 559.88 82.38, 558.38 80.06 Q 556.88 77.75, 557.38 75.12 Q 557.75 72.62, 560.25 70.56 Q 562.75 68.5, 565.88 68.5 Q 569.38 68.5, 571.38 70.38 L 571.88 68.12 Q 572.62 64.88, 569.0 60.62 Q 565.38 56.38, 554.75 56.38 Q 549.25 56.38, 542.69 59.44 Q 536.12 62.5, 526.38 70.25 Q 516.62 78.0, 501.38 92.25 Q 483.38 110.0, 466.62 122.56 Q 449.88 135.12, 434.62 140.62 Q 436.88 144.88, 436.88 150.25 Q 436.88 157.25, 434.44 165.25 Q 432.0 173.25, 424.81 183.19 Q 417.62 193.12, 403.38 205.88 Q 396.12 212.38, 393.94 215.88 Q 391.75 219.38, 391.75 221.62 Q 391.75 224.88, 394.31 226.56 Q 396.88 228.25, 403.75 228.25 Q 409.62 228.25, 417.75 224.06 Q 425.88 219.88, 434.25 212.06 Q 442.62 204.25, 449.5 193.25 Q 456.38 182.25, 459.75 168.75 Q 460.75 164.88, 461.5 164.88 Q 463.0 164.88, 463.0 169.62 Q 463.0 176.75, 459.12 185.12 Q 455.25 193.5, 448.69 201.75 Q 442.12 210.0, 434.12 216.75 Q 426.12 223.5, 417.81 227.62 Q 409.5 231.75, 402.12 231.75 Z M 418.12 141.0 Q 423.62 140.75, 428.5 138.88 Q 426.25 136.75, 422.69 135.75 Q 419.12 134.75, 415.62 135.0 Q 412.88 135.12, 410.81 136.19 Q 408.75 137.25, 408.75 138.0 Q 408.75 139.12, 410.94 140.12 Q 413.12 141.12, 418.12 141.0 Z"
          clipPath="url(#clipLetterK)"
          className={styles.letterK}
        />

        {/* 2. Harf 'ö' — Akıcı Oval Gövde */}
        <path
          d="M 487.0 230.25 Q 476.5 230.25, 471.5 225.44 Q 466.5 220.62, 465.88 213.62 Q 465.5 205.12, 469.44 195.38 Q 473.38 185.62, 478.0 179.0 Q 484.12 170.38, 492.88 162.44 Q 501.62 154.5, 512.06 149.44 Q 522.5 144.38, 533.5 144.38 Q 540.12 144.38, 544.94 147.81 Q 549.75 151.25, 550.25 158.75 Q 550.88 169.38, 546.12 181.06 Q 541.38 192.75, 533.25 202.75 Q 534.12 206.38, 538.88 206.38 Q 543.5 206.38, 549.0 202.69 Q 554.5 199.0, 559.69 194.0 Q 564.88 189.0, 568.62 184.75 Q 572.38 180.5, 573.62 179.25 L 576.38 181.38 Q 574.0 183.62, 569.62 188.31 Q 565.25 193.0, 559.94 197.94 Q 554.62 202.88, 549.06 206.38 Q 543.5 209.88, 538.62 209.88 Q 532.62 209.88, 530.5 206.12 Q 521.25 216.62, 509.69 223.44 Q 498.12 230.25, 487.0 230.25 Z  M 490.25 226.5 Q 494.62 226.5, 500.38 224.0 Q 506.12 221.5, 511.88 217.38 Q 521.5 210.5, 529.25 201.25 L 529.25 200.75 Q 529.25 193.0, 533.31 188.44 Q 537.38 183.88, 541.25 182.62 Q 547.38 169.88, 546.75 159.75 Q 546.38 153.62, 543.56 151.25 Q 540.75 148.88, 537.38 148.88 Q 530.12 148.88, 519.56 157.44 Q 509.0 166.0, 496.0 182.12 Q 486.75 193.75, 483.06 201.75 Q 479.38 209.75, 479.88 215.62 Q 479.88 219.0, 482.19 222.75 Q 484.5 226.5, 490.25 226.5 Z "
          clipPath="url(#clipLetterO)"
          className={styles.letterO}
        />

        {/* 'ö' Sol Aksan Noktası (Yukarıdan Konar & Işıldar — Kesilme Riski %0) */}
        <path
          d="M 562.38 127.88 Q 559.0 127.88, 556.88 125.69 Q 554.75 123.5, 554.75 120.12 Q 554.75 115.75, 558.5 112.06 Q 562.25 108.38, 567.38 108.38 Q 570.88 108.38, 572.94 110.69 Q 575.0 113.0, 575.0 116.25 Q 575.0 120.88, 571.0 124.38 Q 567.0 127.88, 562.38 127.88 Z "
          className={styles.letterDot1}
        />

        {/* 'ö' Sağ Aksan Noktası (Yukarıdan Konar & Işıldar — Kesilme Riski %0) */}
        <path
          d="M 525.0 127.88 Q 521.75 127.88, 519.62 125.69 Q 517.5 123.5, 517.5 120.12 Q 517.5 115.75, 521.19 112.06 Q 524.88 108.38, 529.88 108.38 Q 533.5 108.38, 535.44 110.69 Q 537.38 113.0, 537.38 116.25 Q 537.38 120.88, 533.5 124.38 Q 529.62 127.88, 525.0 127.88 Z"
          className={styles.letterDot2}
        />

        {/* 3. Harf 'ş' — Zarif S Kıvrımı */}
        <path
          d="M 566.75 232.88 Q 562.88 232.88, 556.75 231.88 Q 550.62 230.88, 545.81 227.62 Q 541.0 224.38, 541.0 217.5 Q 541.0 211.25, 544.81 207.19 Q 548.62 203.12, 553.25 201.12 Q 557.88 199.12, 560.12 199.12 Q 565.25 199.12, 565.25 203.88 Q 565.12 205.88, 562.44 207.56 Q 559.75 209.25, 556.5 209.25 Q 555.0 209.25, 553.56 208.19 Q 552.12 207.12, 551.25 206.62 Q 549.88 208.0, 547.06 210.69 Q 544.25 213.38, 544.25 217.62 Q 544.25 222.38, 548.06 224.69 Q 551.88 227.0, 556.62 227.69 Q 561.38 228.38, 563.88 228.38 Q 569.12 228.38, 577.0 224.19 Q 584.88 220.0, 591.69 210.12 Q 598.5 200.25, 600.5 183.25 Q 601.12 177.25, 601.69 166.62 Q 602.25 156.0, 605.62 146.25 Q 605.75 145.88, 605.75 145.12 Q 601.0 151.0, 595.5 157.75 Q 590.0 164.5, 584.94 170.75 Q 579.88 177.0, 576.25 181.38 Q 573.75 184.38, 572.62 185.25 Q 571.5 186.12, 571.62 186.12 Q 571.5 186.12, 570.69 186.19 Q 569.88 186.25, 569.38 185.38 Q 569.12 184.75, 570.56 183.0 Q 572.0 181.25, 573.62 179.25 Q 576.5 176.0, 582.5 168.88 Q 588.5 161.75, 595.19 153.62 Q 601.88 145.5, 606.75 139.25 Q 607.5 135.5, 609.0 132.5 Q 610.5 129.5, 613.25 129.5 Q 618.25 129.5, 618.25 133.62 Q 618.12 136.0, 612.5 142.5 Q 609.12 146.5, 608.88 147.69 Q 608.62 148.88, 608.62 150.75 Q 608.5 155.25, 609.56 161.94 Q 610.62 168.62, 611.88 175.94 Q 613.12 183.25, 613.5 189.88 Q 613.88 199.75, 611.25 207.0 Q 613.25 207.25, 614.62 207.25 Q 618.62 207.25, 623.81 203.62 Q 629.0 200.0, 634.12 195.0 Q 639.25 190.0, 643.06 185.5 Q 646.88 181.0, 648.12 179.25 L 650.88 181.38 Q 648.75 183.62, 644.62 188.31 Q 640.5 193.0, 635.25 198.06 Q 630.0 203.12, 624.56 206.69 Q 619.12 210.25, 614.25 210.25 Q 613.12 210.25, 612.12 210.19 Q 611.12 210.12, 610.12 210.0 Q 604.25 223.0, 592.75 227.94 Q 581.25 232.88, 566.75 232.88 Z "
          clipPath="url(#clipLetterS)"
          className={styles.letterS}
        />

        {/* 'ş' Alt Sedil Kuyruğu (Cedilla Terminali) */}
        <path
          d="M 550.38 274.88 Q 548.25 274.88, 548.25 273.12 Q 548.25 271.88, 550.88 271.0 Q 561.62 267.5, 567.31 262.75 Q 573.0 258.0, 573.0 251.12 Q 573.0 245.62, 564.5 245.62 Q 561.88 245.62, 559.12 246.5 L 572.88 226.5 L 576.38 227.5 L 568.62 238.12 Q 570.75 237.5, 573.0 237.5 Q 578.25 237.5, 581.38 240.44 Q 584.5 243.38, 584.5 247.5 Q 584.5 252.75, 580.81 257.12 Q 577.12 261.5, 572.38 264.88 Q 565.75 269.5, 559.19 272.19 Q 552.62 274.88, 550.38 274.88 Z"
          clipPath="url(#clipLetterCedilla)"
          className={styles.letterCedilla}
        />

        {/* 4. Son Harf 'k' — Yüksek Aristokratik Döngü ve Çıkış */}
        <path
          d="M 613.88 228.25 L 752.25 30.62 Q 753.75 30.75, 756.5 31.0 Q 759.25 31.25, 764.25 31.12 Q 765.25 31.12, 766.56 30.94 Q 767.88 30.75, 769.5 30.62 L 682.75 151.25 Q 665.38 175.38, 652.75 193.75 Q 640.12 212.12, 630.0 227.62 Q 627.12 227.0, 622.75 227.0 Q 621.12 227.0, 618.19 227.44 Q 615.25 227.88, 613.88 228.25 Z M 692.25 230.25 Q 685.38 230.25, 682.56 226.19 Q 679.75 222.12, 679.75 216.88 Q 679.75 212.12, 682.88 205.88 Q 686.0 199.62, 695.0 190.88 Q 698.62 187.12, 699.88 185.25 Q 701.12 183.38, 701.12 182.0 Q 701.12 177.25, 693.75 174.75 Q 688.75 177.5, 684.69 178.19 Q 680.62 178.88, 678.5 178.88 Q 675.0 178.88, 673.19 177.69 Q 671.38 176.5, 671.38 175.0 Q 671.38 172.75, 674.94 171.0 Q 678.5 169.25, 683.38 169.25 Q 688.88 169.25, 693.62 170.62 Q 696.5 169.25, 698.56 167.44 Q 700.62 165.62, 704.0 161.88 Q 708.5 156.75, 713.5 150.94 Q 718.5 145.12, 724.62 141.06 Q 730.75 137.0, 738.25 137.0 Q 744.25 137.0, 747.94 140.12 Q 751.62 143.25, 751.5 147.38 Q 751.38 152.0, 748.75 154.0 Q 746.12 156.0, 742.62 156.0 Q 739.88 156.0, 737.56 153.88 Q 735.25 151.75, 735.5 148.5 Q 735.62 146.12, 737.06 144.5 Q 738.5 142.88, 740.5 142.25 Q 738.62 140.75, 735.62 140.75 Q 730.0 140.75, 723.81 145.5 Q 717.62 150.25, 707.38 163.25 Q 705.0 166.12, 702.56 168.31 Q 700.12 170.5, 697.75 172.25 Q 709.62 177.75, 709.62 188.5 Q 709.62 193.5, 706.81 199.56 Q 704.0 205.62, 692.5 216.0 Q 690.5 218.0, 689.12 219.75 Q 687.75 221.5, 687.75 222.88 Q 687.75 224.62, 689.0 225.69 Q 690.25 226.75, 693.62 226.75 Q 701.38 226.75, 709.75 222.12 Q 718.12 217.5, 726.12 210.56 Q 734.12 203.62, 740.75 196.62 Q 747.38 189.62, 751.44 184.62 Q 755.5 179.62, 756.0 179.12 L 758.5 181.38 Q 757.88 181.88, 753.5 187.0 Q 749.12 192.12, 742.19 199.31 Q 735.25 206.5, 726.81 213.62 Q 718.38 220.75, 709.44 225.5 Q 700.5 230.25, 692.25 230.25 Z"
          clipPath="url(#clipLetterLastK)"
          className={styles.letterLastK}
        />

        {/* 5. Altın Süsleme Kurdele Çizgisi (Flourish Ribbon Underline) */}
        <path
          d="M 235 258 C 390 274, 610 270, 795 234"
          className={styles.underlineFlourish}
        />

        {/* 'ö' Noktaları Konduğunda Çakan Mikro Altın Parıltılar */}
        <g className={`${styles.sparkleDot} ${styles.sparkleDot1}`}>
          <polygon points="525,116 527,121 532,122 528,125 529,130 525,127 521,130 522,125 518,122 523,121" fill="#FFFFFF" />
        </g>
        <g className={`${styles.sparkleDot} ${styles.sparkleDot2}`}>
          <polygon points="562,116 564,121 569,122 565,125 566,130 562,127 558,130 559,125 555,122 560,121" fill="#FFFFFF" />
        </g>
        <g className={`${styles.sparkleDot} ${styles.sparkleDotFinal}`}>
          <polygon points="795,234 797,239 802,240 798,243 799,248 795,245 791,248 792,243 788,240 793,239" fill="#FFFFFF" />
        </g>
      </svg>

      {/* 3. Alt Başlık ve Konum Bilgisi */}
      <div className={styles.metaGroup}>
        <div className={styles.subBrandText}>DÜĞÜN SALONU</div>
        <div className={styles.locationBadge}>
          <span>POLATLI</span>
          <span className={styles.locationDot} />
          <span>ANKARA</span>
        </div>
        <p className={styles.tagline}>
          1.000 Kişilik Kapalı Balo Mimarisi · Dört Mevsim Kesintisiz İhtişam
        </p>
      </div>

      {/* 4. Dengeli Lüks Eylem Butonları (Karma 1-2, Abartısız Zarafet) */}
      <div className={styles.heroActions}>
        <button
          type="button"
          onClick={handleScrollDown}
          className={styles.btnPrimary}
          id="hero-explore-hall-btn"
        >
          <span>Salonu Keşfet</span>
          <ArrowRight size={16} />
        </button>

        <button
          type="button"
          onClick={handleScrollToBooking}
          className={styles.btnSecondary}
          id="hero-book-date-btn"
        >
          <CalendarCheck size={16} />
          <span>Tarih & Fiyat Sorgula</span>
        </button>
      </div>

      {/* 5. Aşağı Kaydırma Butonu (Scroll yapıldığı an anında kaybolur) */}
      <div className={`${styles.scrollDownWrap} ${isScrolled ? styles.scrollDownHidden : ''}`}>
        <button
          type="button"
          onClick={handleScrollDown}
          className={styles.scrollCircleBtn}
          aria-label="Aşağı kaydır ve salon özelliklerini incele"
          id="hero-scroll-down-btn"
        >
          <ChevronDown size={22} />
        </button>
      </div>
    </div>
  );
}
