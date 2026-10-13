import React from 'react';

export interface OpenGraphCardProps {
  title: string;
  subtitle: string;
  tag: string;
  logoSrc?: string;
}

export function OpenGraphCard({
  title,
  subtitle,
  tag,
  logoSrc,
}: OpenGraphCardProps) {
  // Adjust title font size based on length for flawless visual balance
  const titleFontSize = title.length > 40 ? 44 : title.length > 25 ? 52 : 62;

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#1E1B19',
        backgroundImage:
          'radial-gradient(circle at 50% 25%, #2A2421 0%, #161413 100%)',
        padding: '54px 64px',
        position: 'relative',
        fontFamily: 'sans-serif',
        color: '#FAF8F5',
        boxSizing: 'border-box',
      }}
    >
      {/* Outer Gold Decorative Border */}
      <div
        style={{
          position: 'absolute',
          top: 24,
          left: 24,
          right: 24,
          bottom: 24,
          border: '1px solid rgba(184, 149, 110, 0.45)',
          borderRadius: 6,
          display: 'flex',
        }}
      />

      {/* Inner Delicate Line Border */}
      <div
        style={{
          position: 'absolute',
          top: 32,
          left: 32,
          right: 32,
          bottom: 32,
          border: '1px solid rgba(212, 181, 158, 0.20)',
          borderRadius: 4,
          display: 'flex',
        }}
      />

      {/* 4 Architectural L-shaped Corner Accents */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          width: 18,
          height: 18,
          borderTop: '2px solid #B8956E',
          borderLeft: '2px solid #B8956E',
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          width: 18,
          height: 18,
          borderTop: '2px solid #B8956E',
          borderRight: '2px solid #B8956E',
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          width: 18,
          height: 18,
          borderBottom: '2px solid #B8956E',
          borderLeft: '2px solid #B8956E',
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: 18,
          height: 18,
          borderBottom: '2px solid #B8956E',
          borderRight: '2px solid #B8956E',
          display: 'flex',
        }}
      />

      {/* TOP BAR: Brand Identity & Page Pill */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Brand Logo & Name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          {logoSrc ? (
            <div
              style={{
                width: 62,
                height: 62,
                borderRadius: '50%',
                border: '2px solid #B8956E',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 4px 14px rgba(0,0,0,0.5)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoSrc}
                alt="Köşk Düğün Salonu Logo"
                width={62}
                height={62}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ) : null}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span
              style={{
                fontSize: 19,
                fontWeight: 700,
                letterSpacing: '0.16em',
                color: '#B8956E',
                textTransform: 'uppercase',
              }}
            >
              Köşk Düğün Salonu
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.20em',
                color: '#A8A09A',
                textTransform: 'uppercase',
                marginTop: 2,
              }}
            >
              Polatlı · Ankara
            </span>
          </div>
        </div>

        {/* Page Category Tag Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(184, 149, 110, 0.14)',
            border: '1px solid rgba(184, 149, 110, 0.55)',
            padding: '7px 18px',
            borderRadius: 999,
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: '#D4B59E',
              textTransform: 'uppercase',
            }}
          >
            {tag}
          </span>
        </div>
      </div>

      {/* MAIN BODY: Page Headline & Subtitle */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          margin: '28px 0',
        }}
      >
        <div
          style={{
            fontSize: titleFontSize,
            fontWeight: 700,
            color: '#FAF8F5',
            lineHeight: 1.16,
            letterSpacing: '-0.015em',
            maxWidth: 1020,
            display: 'flex',
          }}
        >
          {title}
        </div>

        {/* Subtle Champagne Accent Divider */}
        <div
          style={{
            display: 'flex',
            width: 90,
            height: 3,
            backgroundColor: '#B8956E',
            borderRadius: 2,
            marginTop: 18,
            marginBottom: 16,
          }}
        />

        <div
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: '#D4B59E',
            lineHeight: 1.42,
            maxWidth: 960,
            display: 'flex',
          }}
        >
          {subtitle}
        </div>
      </div>

      {/* FOOTER BAR: 3 Venue Pillars & Official Domain */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* 3 Venue Feature Chips with SVG Diamonds */}
        <div
          style={{
            display: 'flex',
            gap: 12,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(232, 228, 223, 0.16)',
              padding: '7px 14px',
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 500,
              color: '#FAF8F5',
              letterSpacing: '0.04em',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" style={{ marginRight: 8 }}>
              <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="#B8956E" />
            </svg>
            1.000 Kişilik Ferah Salon
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(232, 228, 223, 0.16)',
              padding: '7px 14px',
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 500,
              color: '#FAF8F5',
              letterSpacing: '0.04em',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" style={{ marginRight: 8 }}>
              <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="#B8956E" />
            </svg>
            Yüksek Tavan & Havalandırma
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(232, 228, 223, 0.16)',
              padding: '7px 14px',
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 500,
              color: '#FAF8F5',
              letterSpacing: '0.04em',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" style={{ marginRight: 8 }}>
              <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="#B8956E" />
            </svg>
            Rahat Park İmkânı
          </div>
        </div>

        {/* Official Website Domain */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: '#B8956E',
              letterSpacing: '0.06em',
            }}
          >
            koskdugunsalonu.com
          </span>
        </div>
      </div>
    </div>
  );
}
