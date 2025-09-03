import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  async redirects() {
    return [
      { source: "/blog", destination: "/blogs", permanent: true },
      { source: "/service-details", destination: "/services", permanent: true },
      { source: "/about", destination: "/contact", permanent: true },
      { source: "/blog-details", destination: "/blogs", permanent: true },
      { source: "/mobile-app-development-company-dubai", destination: "/application-development-dubai", permanent: true },
    ];
  },
  reactStrictMode: true,
    experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
  images: { unoptimized: true },
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

export default withBundleAnalyzer(nextConfig);
