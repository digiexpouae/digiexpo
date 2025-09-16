// Performance utilities to prevent forced reflows and optimize DOM operations

/**
 * Batch DOM reads to prevent forced reflows
 * @param {Function[]} readOperations - Array of functions that read from DOM
 * @returns {Array} Results of read operations
 */
export function batchDOMReads(readOperations) {
  const results = [];
  
  // Perform all reads first
  for (const operation of readOperations) {
    results.push(operation());
  }
  
  return results;
}

/**
 * Batch DOM writes to prevent forced reflows
 * @param {Function[]} writeOperations - Array of functions that write to DOM
 */
export function batchDOMWrites(writeOperations) {
  // Use requestAnimationFrame to batch writes
  requestAnimationFrame(() => {
    for (const operation of writeOperations) {
      operation();
    }
  });
}

/**
 * Debounce function to limit expensive operations
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit expensive operations
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Optimize scroll event handlers
 * @param {Function} callback - Scroll callback function
 * @param {number} delay - Throttle delay (default: 16ms for 60fps)
 * @returns {Function} Optimized scroll handler
 */
export function optimizeScrollHandler(callback, delay = 16) {
  let ticking = false;
  
  return function(event) {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback(event);
        ticking = false;
      });
      ticking = true;
    }
  };
}

/**
 * Lazy load components with Intersection Observer
 * @param {HTMLElement} element - Element to observe
 * @param {Function} callback - Callback when element is visible
 * @param {Object} options - Intersection Observer options
 */
export function lazyLoad(element, callback, options = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);
  
  observer.observe(element);
  
  return observer;
}

/**
 * Preload critical resources
 * @param {string} href - Resource URL
 * @param {string} as - Resource type (script, style, font, etc.)
 * @param {string} type - MIME type (optional)
 */
export function preloadResource(href, as, type = null) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  if (as === 'font') link.crossOrigin = 'anonymous';
  
  document.head.appendChild(link);
}

/**
 * Measure and log performance metrics
 */
export function measurePerformance() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Measure Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
        if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
          console.log('CLS:', entry.value);
        }
      }
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    
    // Measure navigation timing
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      console.log('Navigation Timing:', {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalTime: navigation.loadEventEnd - navigation.fetchStart
      });
    });
  }
}
