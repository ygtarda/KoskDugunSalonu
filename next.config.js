const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/salon',
        destination: '/hizmetler',
        permanent: true,
      },
      {
        source: '/rehber',
        destination: '/sss',
        permanent: true,
      },
      {
        source: '/referanslar',
        destination: '/sss',
        permanent: true,
      },
    ];
  },

};

module.exports = nextConfig;
