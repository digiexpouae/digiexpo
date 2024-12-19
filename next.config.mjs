/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog", // The path you want to redirect from
        destination: "/blogs", // The path you want to redirect to
        permanent: true, // Use true for a 308 permanent redirect, or false for a 307 temporary redirect
      },
      {
        source: "/service-details", 
        destination: "/services", 
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    // Unoptimized images setting for static export (if using a CDN, consider optimized images)
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
  compress: true,
  swcMinify: true,
  env: {
    EMAIL_HOST: process.env.EMAIL_HOST,
    INTERNAL_EMAIL_USERNAME: process.env.INTERNAL_EMAIL_USERNAME,
    INTERNAL_EMAIL_PASSWORD: process.env.INTERNAL_EMAIL_PASSWORD,
    BUSINESS_EMAIL: process.env.BUSINESS_EMAIL,
    SITE_NAME: process.env.SITE_NAME,
  },
};

export default nextConfig;
