import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';

function ProblemChild({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('Test exploding error');
  }
  return <div>Healthy component tree</div>;
}

describe('ErrorBoundary Component', () => {
  it('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <ProblemChild shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Healthy component tree')).toBeInTheDocument();
  });

  it('catches render error and displays editorial fallback alert UI', () => {
    // Suppress console.error in test runner output
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblemChild shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(/Something unexpected broke the flow/i)).toBeInTheDocument();
    expect(screen.getByText(/Test exploding error/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reload experience/i })).toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  it('renders custom fallback element when supplied', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary fallback={<div>Custom agency fallback</div>}>
        <ProblemChild shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Custom agency fallback')).toBeInTheDocument();

    consoleSpy.mockRestore();
  });
});
