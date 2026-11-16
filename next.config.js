const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  output: isGithubPages ? 'export' : undefined,
  basePath: isGithubPages ? '/KoskDugunSalonu' : '',
  trailingSlash: isGithubPages ? true : false,
  experimental: {
    outputFileTracingExcludes: { '*': ['.env*', '_originals/**'] },
  },
  images: {
    unoptimized: isGithubPages ? true : false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    if (isGithubPages) return [];
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
      {
        source: '/galeri-modern',
        destination: '/galeri',
        permanent: false,
      },
    ];
  },
  async headers() {
    if (isGithubPages || process.env.NODE_ENV !== 'production') {
      return [];
    }
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
