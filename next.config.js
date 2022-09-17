/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ibb.co', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
// commenting