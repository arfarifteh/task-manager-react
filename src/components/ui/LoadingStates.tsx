import React from 'react';

// Skeleton loading components
export function SkeletonLoader({
  width = '100%',
  height = '20px',
  style = {},
}: {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: '#e1e8ed',
        borderRadius: '4px',
        animation: 'pulse 1.5s ease-in-out infinite',
        ...style,
      }}
    />
  );
}

export function PageSkeleton() {
  return (
    <div style={{ padding: '20px' }}>
      <SkeletonLoader
        width="200px"
        height="32px"
        style={{ marginBottom: '20px' }}
      />
      <SkeletonLoader
        width="100%"
        height="100px"
        style={{ marginBottom: '20px' }}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <SkeletonLoader width="100px" height="40px" />
        <SkeletonLoader width="100px" height="40px" />
      </div>
    </div>
  );
}

export function NavigationSkeleton() {
  return (
    <nav style={{ padding: '20px', marginBottom: '20px' }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <SkeletonLoader width="150px" height="24px" />
        <SkeletonLoader width="80px" height="24px" />
        <SkeletonLoader width="120px" height="24px" />
      </div>
    </nav>
  );
}

// Loading spinner
export function LoadingSpinner({
  size = 'small',
}: {
  size?: 'small' | 'medium' | 'large';
}) {
  const sizeMap = {
    small: 16,
    medium: 24,
    large: 32,
  };

  return (
    <div
      style={{
        width: `${sizeMap[size]}px`,
        height: `${sizeMap[size]}px`,
        border: '2px solid #e1e8ed',
        borderTop: '2px solid #0984e3',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }}
    />
  );
}

// Route loading fallback
export function RouteLoadingFallback() {
  return (
    <div
      style={{
        padding: '40px 20px',
        textAlign: 'center',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}>
      <LoadingSpinner size="large" />
      <p style={{ color: '#636e72', margin: 0 }}>Loading page...</p>
    </div>
  );
}

// Add CSS animations to index.css or create a separate CSS file
export const LoadingStyles = `
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
