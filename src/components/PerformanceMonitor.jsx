import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    // Monitor Core Web Vitals
    const observeWebVitals = () => {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
            // Send to analytics if needed
            if (typeof gtag !== 'undefined') {
              gtag('event', 'web_vitals', {
                name: 'LCP',
                value: Math.round(entry.startTime),
                event_category: 'Performance'
              });
            }
          }
        }
      });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            const fid = entry.processingStart - entry.startTime;
            console.log('FID:', fid);
            if (typeof gtag !== 'undefined') {
              gtag('event', 'web_vitals', {
                name: 'FID',
                value: Math.round(fid),
                event_category: 'Performance'
              });
            }
          }
        }
      });

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
      });

      // FCP (First Contentful Paint)
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
            if (typeof gtag !== 'undefined') {
              gtag('event', 'web_vitals', {
                name: 'FCP',
                value: Math.round(entry.startTime),
                event_category: 'Performance'
              });
            }
          }
        }
      });

      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        fidObserver.observe({ entryTypes: ['first-input'] });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.warn('Performance Observer not supported:', error);
      }

      // Report CLS on page unload
      const reportCLS = () => {
        console.log('CLS:', clsValue);
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(clsValue * 1000) / 1000,
            event_category: 'Performance'
          });
        }
      };

      window.addEventListener('beforeunload', reportCLS);
      
      return () => {
        window.removeEventListener('beforeunload', reportCLS);
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
      };
    };

    // Monitor resource loading performance
    const monitorResources = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.transferSize > 100000) { // Log resources > 100KB
            console.warn('Large resource detected:', {
              name: entry.name,
              size: Math.round(entry.transferSize / 1024) + 'KB',
              duration: Math.round(entry.duration) + 'ms'
            });
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['resource'] });
      } catch (error) {
        console.warn('Resource Observer not supported:', error);
      }

      return () => observer.disconnect();
    };

    // Monitor long tasks that block the main thread
    const monitorLongTasks = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.warn('Long task detected:', {
            duration: Math.round(entry.duration) + 'ms',
            startTime: Math.round(entry.startTime) + 'ms'
          });
        }
      });

      try {
        observer.observe({ entryTypes: ['longtask'] });
      } catch (error) {
        console.warn('Long Task Observer not supported:', error);
      }

      return () => observer.disconnect();
    };

    const cleanupWebVitals = observeWebVitals();
    const cleanupResources = monitorResources();
    const cleanupLongTasks = monitorLongTasks();

    return () => {
      if (cleanupWebVitals) cleanupWebVitals();
      if (cleanupResources) cleanupResources();
      if (cleanupLongTasks) cleanupLongTasks();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
