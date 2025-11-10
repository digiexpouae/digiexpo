import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  async redirects() {
    return [
      { source: "/blog", destination: "/blogs", permanent: true },
      { source: "/service-details", destination: "/services", permanent: true },
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
    // unoptimized: true,
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

        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react-vendor',
          chunks: 'all',
          priority: 40,
        },
        nextVendor: {
          test: /[\\/]node_modules[\\/]next[\\/]/,
          name: 'next-vendor',
          chunks: 'all',
          priority: 35,
        },
        utilsVendor: {
          test: /[\\/]node_modules[\\/](lodash|date-fns|react-use)[\\/]/,
          name: 'utils-vendor',
          chunks: 'all',
          priority: 30,
        },
        swiperVendor: {
          test: /[\\/]node_modules[\\/]swiper[\\/]/,
          name: 'swiper-vendor',
          chunks: 'all',
          priority: 28,
          enforce: true,
        },
        gsapVendor: {
          test: /[\\/]node_modules[\\/]gsap[\\/]/,
          name: 'gsap-vendor',
          chunks: 'all',
          priority: 27,
          enforce: true,
        },
        lottieVendor: {
          test: /[\\/]node_modules[\\/](lottie-web|react-lottie)[\\/]/,
          name: 'lottie-vendor',
          chunks: 'all',
          priority: 26,
          enforce: true,
        },
        slickVendor: {
          test: /[\\/]node_modules[\\/](react-slick|slick-carousel)[\\/]/,
          name: 'slick-vendor',
          chunks: 'all',
          priority: 25,
          enforce: true,
        },
        videoVendor: {
          test: /[\\/]node_modules[\\/]react-modal-video[\\/]/,
          name: 'video-vendor',
          chunks: 'all',
          priority: 24,
          enforce: true,
        },
        wowVendor: {
          test: /[\\/]node_modules[\\/]wowjs[\\/]/,
          name: 'wowjs-vendor',
          chunks: 'all',
          priority: 23,
          enforce: true,
        },
        bootstrapVendor: {
          test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
          name: 'bootstrap-vendor',
          chunks: 'all',
          priority: 22,
          enforce: true,
        },
        sanityVendor: {
          test: /[\\/]node_modules[\\/]@sanity[\\/]/,
          name: 'sanity-vendor',
          chunks: 'all',
          priority: 21,
          enforce: true,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          priority: 10,
        },
        //     vendor: {
        //   name: 'vendor',
        //   chunks: 'all',
        //     test: /node_modules/,
        //     priority: 20,
        // },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 5,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    };

    config.optimization.runtimeChunk = 'single';
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
