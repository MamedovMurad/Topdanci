/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['api.artelie.az','picsum.photos'],
  },
}

module.exports = nextConfig
