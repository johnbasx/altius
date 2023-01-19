/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mdbcdn.b-cdn.net', 'images.unsplash.com'],
  },
  eslint: {
    dirs: ['src', 'pages', 'components', 'content', 'hooks', 'store', 'utils'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
