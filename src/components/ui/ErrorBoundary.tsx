import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error!} reset={this.reset} />;
    }

    return this.props.children;
  }
}

function DefaultErrorFallback({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div
      role="alert"
      style={{
        padding: '20px',
        margin: '20px',
        border: '1px solid #ff6b6b',
        borderRadius: '8px',
        backgroundColor: '#ffe0e0',
        color: '#d63031',
      }}>
      <h2>Something went wrong</h2>
      <p>We encountered an unexpected error. Please try again.</p>
      <details style={{ marginTop: '10px' }}>
        <summary>Error details</summary>
        <pre style={{ fontSize: '12px', marginTop: '10px' }}>
          {error.message}
        </pre>
      </details>
      <button
        onClick={reset}
        style={{
          marginTop: '15px',
          padding: '8px 16px',
          backgroundColor: '#d63031',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
        Try again
      </button>
    </div>
  );
}

// Route-specific error boundaries
export function RouteErrorBoundary({ reset }: { reset: () => void }) {
  return (
    <div
      role="alert"
      style={{
        padding: '40px 20px',
        textAlign: 'center',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <h2 style={{ color: '#d63031', marginBottom: '10px' }}>
        Page Load Error
      </h2>
      <p style={{ color: '#636e72', marginBottom: '20px' }}>
        This page failed to load properly. Please check your connection and try
        again.
      </p>
      <button
        onClick={reset}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0984e3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
        Reload Page
      </button>
    </div>
  );
}
