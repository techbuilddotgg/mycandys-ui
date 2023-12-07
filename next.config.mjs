import './src/env.mjs';

/** @type {import('next').NextConfig} */
const config = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        hostname: 'monpanierlatin.co.uk',
      },
      {
        hostname: 'allcitycandy.com',
      },
      {
        hostname: 'assets.haribo.com',
      },
      {
        hostname: 'cdn11.bigcommerce.com',
      },
      {
        hostname: 'i5.walmartimages.com',
      },
      {
        hostname: 'www.candystore.com',
      },
    ],
  },
};

export default config;

