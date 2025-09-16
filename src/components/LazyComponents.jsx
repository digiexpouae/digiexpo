import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load heavy components with loading fallbacks
export const LazyLottiePlayer = dynamic(
  () => import('react-lottie'),
  {
    loading: () => <div className="animate-pulse bg-gray-200 h-64 w-64 rounded"></div>,
    ssr: false
  }
);

export const LazySlider = dynamic(
  () => import('react-slick'),
  {
    loading: () => <div className="animate-pulse bg-gray-200 h-48 w-full rounded"></div>,
    ssr: false
  }
);

export const LazySwiper = dynamic(
  () => import('swiper/react').then(mod => ({ default: mod.Swiper })),
  {
    loading: () => <div className="animate-pulse bg-gray-200 h-48 w-full rounded"></div>,
    ssr: false
  }
);

export const LazyModalVideo = dynamic(
  () => import('react-modal-video'),
  {
    loading: () => <div className="animate-pulse bg-gray-200 h-64 w-64 rounded"></div>,
    ssr: false
  }
);

export const LazyCountUp = dynamic(
  () => import('react-countup'),
  {
    loading: () => <span className="animate-pulse bg-gray-200 h-6 w-16 rounded inline-block"></span>,
    ssr: false
  }
);

// Lazy load form components
export const LazyContactForm = dynamic(
  () => import('@/forms/contact-us-form-muz'),
  {
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
        <div className="h-12 bg-gray-200 rounded w-32"></div>
      </div>
    ),
    ssr: false
  }
);

// Higher-order component for lazy loading with intersection observer
export const withLazyLoading = (Component, fallback = null) => {
  return dynamic(() => Promise.resolve(Component), {
    loading: () => fallback || <div className="animate-pulse bg-gray-200 h-48 w-full rounded"></div>,
    ssr: false
  });
};

// Wrapper component for conditional loading
export const ConditionalLoader = ({ condition, children, fallback }) => {
  if (!condition) return fallback || null;
  
  return (
    <Suspense fallback={fallback || <div className="animate-pulse bg-gray-200 h-48 w-full rounded"></div>}>
      {children}
    </Suspense>
  );
};
