'use client';

import React, { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error('[Köşk Düğün Salonu Global Kök Hatası]:', error);
  }, [error]);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <html lang="tr">
      <head>
        <title>Sistem Hatası | Köşk Düğün Salonu</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#FAF8F5',
          color: '#2C2826',
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          boxSizing: 'border-box',
        }}
      >
        <main
          style={{
            maxWidth: '680px',
            width: '90%',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E8E4DF',
            borderRadius: '6px',
            padding: '3rem 2rem',
            textAlign: 'center',
            boxShadow: '0 12px 36px rgba(44, 40, 38, 0.04)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Üst Şampanya Vurgu Çizgisi */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #B8956E, transparent)',
            }}
          />

          {/* Rozet */}
          <div
            style={{
              display: 'inline-block',
              padding: '0.35rem 1rem',
              backgroundColor: '#F4F1EC',
              border: '1px solid #D4B59E',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#B8956E',
              marginBottom: '1.25rem',
            }}
          >
            KÖŞK DÜĞÜN SALONU · POLATLI
          </div>

          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: '1.75rem',
              fontWeight: 500,
              color: '#2C2826',
              margin: '0 0 1rem',
              lineHeight: 1.3,
            }}
          >
            Sistem Bağlantısı Yenileniyor
          </h1>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.65,
              color: '#524C48',
              maxWidth: '520px',
              margin: '0 auto 2rem',
            }}
          >
            Uygulama bileşenleri yüklenirken beklenmeyen bir aksaklık oluştu. Dilerseniz sayfayı
            yeniden başlatabilir veya doğrudan salon yetkilimizle iletişime geçebilirsiniz.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <button
              type="button"
              onClick={() => reset()}
              style={{
                backgroundColor: '#B8956E',
                color: '#FFFFFF',
                border: '1px solid #B8956E',
                fontSize: '0.94rem',
                fontWeight: 600,
                padding: '0.85rem 1.85rem',
                borderRadius: '4px',
                cursor: 'pointer',
                minHeight: '46px',
              }}
            >
              Yeniden Başlat
            </button>

            <button
              type="button"
              onClick={handleGoHome}
              style={{
                backgroundColor: 'transparent',
                color: '#2C2826',
                border: '1px solid #E8E4DF',
                fontSize: '0.94rem',
                fontWeight: 500,
                padding: '0.85rem 1.85rem',
                borderRadius: '4px',
                cursor: 'pointer',
                minHeight: '46px',
              }}
            >
              Anasayfaya Dön
            </button>
          </div>

          <div
            style={{
              borderTop: '1px solid #E8E4DF',
              paddingTop: '1.25rem',
              fontSize: '0.88rem',
              color: '#7A7471',
            }}
          >
            Acil bilgi ve rezervasyon için:{' '}
            <a
              href="tel:+903126230000"
              style={{
                color: '#2C2826',
                fontWeight: 600,
                textDecoration: 'none',
                marginLeft: '0.25rem',
              }}
            >
              0 (312) 623 00 00
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
