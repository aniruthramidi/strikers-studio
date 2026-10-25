import { describe, it, expect, vi } from 'vitest';
import { getMetricRating, initWebVitals } from '../utils/webVitals';

describe('Web Vitals Utility', () => {
  it('correctly calculates threshold ratings for FCP', () => {
    expect(getMetricRating('FCP', 1200)).toBe('good');
    expect(getMetricRating('FCP', 2200)).toBe('needs-improvement');
    expect(getMetricRating('FCP', 3500)).toBe('poor');
  });

  it('correctly calculates threshold ratings for LCP', () => {
    expect(getMetricRating('LCP', 2000)).toBe('good');
    expect(getMetricRating('LCP', 3200)).toBe('needs-improvement');
    expect(getMetricRating('LCP', 5000)).toBe('poor');
  });

  it('correctly calculates threshold ratings for CLS', () => {
    expect(getMetricRating('CLS', 0.05)).toBe('good');
    expect(getMetricRating('CLS', 0.15)).toBe('needs-improvement');
    expect(getMetricRating('CLS', 0.35)).toBe('poor');
  });

  it('gracefully handles missing PerformanceObserver without throwing', () => {
    const originalObserver = window.PerformanceObserver;
    delete window.PerformanceObserver;

    const callback = vi.fn();
    expect(() => initWebVitals(callback)).not.toThrow();
    expect(callback).not.toHaveBeenCalled();

    window.PerformanceObserver = originalObserver;
  });
});
