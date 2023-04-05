/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com', 'cdn.pixabay.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com, cdn.pixabay.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
}

module.exports = nextConfig
