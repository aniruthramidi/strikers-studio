import React, { Component } from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

/**
 * Editorial Brutalist Error Boundary Component
 * Catches downstream React runtime exceptions and displays a graceful fallback screen.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    // In production, send to telemetry/logging service
    if (process.env.NODE_ENV !== 'test') {
      console.error('[STRIKERS Studio ErrorBoundary caught error]:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          role="alert"
          aria-live="assertive"
          className="min-h-screen bg-paper text-ink flex flex-col justify-between p-8 md:p-16 grid-lines"
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b border-ink/20 pb-4 text-xs font-mono tracking-widest uppercase text-ink-soft">
            <span className="flex items-center gap-2 text-rose-600 font-bold">
              <AlertTriangle size={16} /> SYSTEM_EXCEPTION
            </span>
            <span>ERROR CODE: 500_CLIENT</span>
          </div>

          {/* Central Message */}
          <div className="max-w-2xl my-auto py-12">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-3">
              [ RUNTIME INTERRUPT ]
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight mb-6">
              Something unexpected broke the flow.
            </h1>
            <p className="text-base md:text-lg text-ink-soft leading-relaxed mb-8">
              We encountered an unhandled error while rendering this view. Our design system was preserved safely.
            </p>

            {this.state.error && (
              <div className="bg-ink/5 border border-ink/15 rounded-md p-4 mb-8 font-mono text-xs text-ink/80 overflow-x-auto">
                <span className="font-bold text-rose-600 block mb-1">
                  {this.state.error.name}: {this.state.error.message}
                </span>
                {this.state.errorInfo?.componentStack && (
                  <pre className="text-[11px] text-ink-soft mt-2 whitespace-pre-wrap">
                    {this.state.errorInfo.componentStack.slice(0, 300)}...
                  </pre>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={this.handleReset}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-ink text-paper font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:bg-ink-soft transition-colors cursor-pointer"
            >
              <RotateCcw size={16} />
              Reload Experience
            </button>
          </div>

          {/* Footer */}
          <div className="border-t border-ink/20 pt-4 text-xs font-mono text-ink-soft flex justify-between">
            <span>STRIKERS STUDIO® RECOVERY AGENT</span>
            <span>SECURE SANDBOX</span>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
