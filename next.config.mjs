/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'Umer';

const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
};

export default nextConfig;
