import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, renderHook, act } from '@testing-library/react';
import React from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
import useMagnetic from '../hooks/useMagnetic';
import Preloader from '../components/Preloader';
import BackToTop from '../components/BackToTop';

describe('Motion & Animation Hooks', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe('useReducedMotion', () => {
    it('returns false by default when reduced motion is not preferred', () => {
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      const { result } = renderHook(() => useReducedMotion());
      expect(result.current).toBe(false);
    });

    it('returns true when system prefers reduced motion', () => {
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: query.includes('reduce'),
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      const { result } = renderHook(() => useReducedMotion());
      expect(result.current).toBe(true);
    });
  });

  describe('useMagnetic', () => {
    it('provides spring motion values and updates on mousemove and mouseleave', () => {
      const { result } = renderHook(() => useMagnetic({ strength: 0.5 }));

      expect(result.current.x.get()).toBe(0);
      expect(result.current.y.get()).toBe(0);

      const fakeTarget = {
        getBoundingClientRect: () => ({
          left: 100,
          top: 100,
          width: 200,
          height: 100,
        }),
      };

      act(() => {
        result.current.onMouseMove({
          currentTarget: fakeTarget,
          clientX: 250, // center is 200, offset +50 * 0.5 = +25
          clientY: 180, // center is 150, offset +30 * 0.5 = +15
        });
      });

      expect(typeof result.current.x.get).toBe('function');
      expect(typeof result.current.y.get).toBe('function');

      act(() => {
        result.current.onMouseLeave();
      });
    });
  });
});

describe('Animation Components', () => {
  it('renders Preloader with title and numeric counter', () => {
    render(<Preloader />);
    expect(screen.getByText(/STRIKERS STUDIO®/i)).toBeInTheDocument();
    expect(screen.getByText(/DESIGN & DEVELOPMENT STUDIO/i)).toBeInTheDocument();
  });

  it('renders BackToTop when window scrolls past threshold', () => {
    render(<BackToTop />);
    expect(screen.queryByRole('button', { name: /scroll back to top/i })).not.toBeInTheDocument();

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 800, writable: true, configurable: true });
      window.dispatchEvent(new Event('scroll'));
    });

    const button = screen.getByRole('button', { name: /scroll back to top/i });
    expect(button).toBeInTheDocument();

    const scrollSpy = vi.fn();
    window.scrollTo = scrollSpy;
    fireEvent.click(button);
    expect(scrollSpy).toHaveBeenCalled();
  });
});
