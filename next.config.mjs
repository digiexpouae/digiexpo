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
    optimizePackageImports: ['react-icons', 'lodash', 'date-fns'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: { 
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  productionBrowserSourceMaps: false, // Disable in production for better performance
  compress: true,
  poweredByHeader: false,
  // Optimize bundle splitting
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20,
          },
          // Common chunk
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      };
    }
    return config;
  },
  env: {
    EMAIL_HOST: process.env.EMAIL_HOST,
    INTERNAL_EMAIL_USERNAME: process.env.INTERNAL_EMAIL_USERNAME,
    INTERNAL_EMAIL_PASSWORD: process.env.INTERNAL_EMAIL_PASSWORD,
    BUSINESS_EMAIL: process.env.BUSINESS_EMAIL,
    SITE_NAME: process.env.SITE_NAME,
  },
};

export default withBundleAnalyzer(nextConfig);
