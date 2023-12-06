import "./src/env.mjs"

/** @type {import('next').NextConfig} */
const config = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        hostname: 'monpanierlatin.co.uk',
      },
    ],
  },
};

export default config;

