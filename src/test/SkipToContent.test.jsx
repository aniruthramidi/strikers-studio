import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkipToContent from '../components/SkipToContent';

describe('SkipToContent Component', () => {
  it('renders with default target anchor and screen reader accessibility class', () => {
    render(<SkipToContent />);
    const link = screen.getByRole('link', { name: /skip to main content/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#main-content');
    expect(link).toHaveClass('sr-only');
  });

  it('supports custom target element ID', () => {
    render(<SkipToContent targetId="custom-view" />);
    const link = screen.getByRole('link', { name: /skip to main content/i });
    expect(link).toHaveAttribute('href', '#custom-view');
  });
});
