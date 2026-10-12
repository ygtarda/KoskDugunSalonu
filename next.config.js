const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      {
        source: '/randevu',
        destination: '/iletisim',
        permanent: false,
      },
      {
        source: '/rezervasyon',
        destination: '/iletisim',
        permanent: false,
      },
      {
        source: '/booking',
        destination: '/iletisim',
        permanent: false,
      },
      {
        source: '/teklif',
        destination: '/iletisim',
        permanent: false,
      },
      {
        source: '/fiyat-teklifi',
        destination: '/iletisim',
        permanent: false,
      },
      {
        source: '/fiyatlar',
        destination: '/sss',
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
