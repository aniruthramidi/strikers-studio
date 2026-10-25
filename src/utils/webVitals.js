/**
 * STRIKERS® Studio — Client Web Vitals & Real User Monitoring (RUM) Telemetry
 * Observes Core Web Vitals (FCP, LCP, CLS, FID) using the native browser PerformanceObserver API.
 */

/**
 * Rates performance metric against Google Core Web Vitals thresholds
 * @param {string} name
 * @param {number} value
 * @returns {'good' | 'needs-improvement' | 'poor'}
 */
export function getMetricRating(name, value) {
  switch (name) {
    case 'FCP':
      return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
    case 'LCP':
      return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
    case 'CLS':
      return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
    case 'FID':
      return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
    default:
      return 'good';
  }
}

/**
 * Initializes Core Web Vitals observer
 * @param {Function} [onReport] - Callback receiving metric payload { name, value, rating, timestamp }
 */
export function initWebVitals(onReport) {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  const report = (name, value) => {
    const rounded = Math.round(value * 100) / 100;
    const rating = getMetricRating(name, rounded);
    const metric = {
      name,
      value: rounded,
      rating,
      timestamp: Date.now(),
    };

    if (typeof onReport === 'function') {
      onReport(metric);
    } else if (import.meta.env?.DEV) {
      console.log(`[Web Vitals] ${name}: ${rounded} (${rating})`);
    }
  };

  try {
    // First Contentful Paint
    const paintObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          report('FCP', entry.startTime);
        }
      }
    });
    paintObserver.observe({ type: 'paint', buffered: true });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        report('LCP', lastEntry.startTime);
      }
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      report('CLS', clsValue);
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });
  } catch (err) {
    // Silently fall through if browser doesn't support specific observer entry types
    if (import.meta.env?.DEV) {
      console.warn('[Web Vitals] Observer registration notice:', err);
    }
  }
}

export default initWebVitals;
