import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import Collapse from '@mui/material/Collapse';
import { FcAlert } from './FcAlert';
import { FcBox } from './FcBox';
import { FcButton } from './FcButton';
import { FcTypography } from './FcTypography';

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
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <FcBox role="alert" sx={{ p: 2.5, m: 2.5 }}>
      <FcAlert
        error
        title="Something went wrong"
        action={
          <FcButton text small sx={{ color: 'inherit' }} onClick={reset}>
            Try again
          </FcButton>
        }>
        We encountered an unexpected error. Please try again.
      </FcAlert>
      <FcBox sx={{ mt: 1.5 }}>
        <FcButton text small onClick={() => setShowDetails(prev => !prev)}>
          {showDetails ? 'Hide' : 'Show'} error details
        </FcButton>
        <Collapse in={showDetails}>
          <FcTypography
            body2
            component="pre"
            sx={{
              mt: 1,
              p: 1.5,
              bgcolor: 'grey.100',
              borderRadius: 1,
              fontSize: '0.75rem',
              overflow: 'auto',
            }}>
            {error.message}
          </FcTypography>
        </Collapse>
      </FcBox>
    </FcBox>
  );
}

// Route-specific error boundary — uses React Router's useRouteError()
export function RouteErrorBoundary() {
  const error = useRouteError();

  let title = 'Page Load Error';

  let message =
    'This page failed to load properly. Please check your connection and try again.';

  if (isRouteErrorResponse(error)) {
    title = `${error.status} — ${error.statusText}`;
    message =
      typeof error.data === 'string'
        ? error.data
        : 'An unexpected route error occurred.';
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <FcBox
      role="alert"
      sx={{
        p: 5,
        textAlign: 'center',
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}>
      <FcAlert error title={title} sx={{ maxWidth: 480 }}>
        {message}
      </FcAlert>
      <FcButton primary onClick={() => window.location.reload()} sx={{ mt: 1 }}>
        Reload Page
      </FcButton>
    </FcBox>
  );
}
