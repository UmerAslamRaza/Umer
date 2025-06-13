/** @type {import('next').NextConfig} */
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const isProd = process.env.NODE_ENV === 'production';
const repo = 'Umer';

const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
};

export default nextConfig;
