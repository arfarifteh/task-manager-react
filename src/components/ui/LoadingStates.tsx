import { FcBox } from './FcBox';
import { FcCircularProgress } from './FcCircularProgress';
import { FcSkeleton } from './FcSkeleton';
import { FcTypography } from './FcTypography';

// Page skeleton with Fc Skeleton components
export function PageSkeleton() {
  return (
    <FcBox sx={{ p: 2.5 }}>
      <FcSkeleton text width={200} height={40} sx={{ mb: 2.5 }} />
      <FcSkeleton
        rectangular
        width="100%"
        height={100}
        sx={{ mb: 2.5, borderRadius: 1 }}
      />
      <FcBox sx={{ display: 'flex', gap: 1.5 }}>
        <FcSkeleton
          rectangular
          width={100}
          height={40}
          sx={{ borderRadius: 1 }}
        />
        <FcSkeleton
          rectangular
          width={100}
          height={40}
          sx={{ borderRadius: 1 }}
        />
      </FcBox>
    </FcBox>
  );
}

// Navigation/sidebar skeleton
export function NavigationSkeleton() {
  return (
    <FcBox component="nav" sx={{ p: 2.5, mb: 2.5 }}>
      <FcBox sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
        <FcSkeleton text width={150} height={28} />
        <FcSkeleton text width={80} height={28} />
        <FcSkeleton text width={120} height={28} />
      </FcBox>
    </FcBox>
  );
}

// Route loading fallback — shown during lazy-load Suspense
export function RouteLoadingFallback() {
  return (
    <FcBox
      sx={{
        p: 5,
        textAlign: 'center',
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2.5,
      }}>
      <FcCircularProgress size={36} />
      <FcTypography body2 secondary>
        Loading page...
      </FcTypography>
    </FcBox>
  );
}
