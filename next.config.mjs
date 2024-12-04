/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Unoptimized images setting for static export (if using a CDN, consider optimized images)
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
  compress: true,
  swcMinify: true,

};

export default nextConfig;
