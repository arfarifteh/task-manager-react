import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

// Page skeleton with MUI Skeleton components
export function PageSkeleton() {
  return (
    <Box sx={{ p: 2.5 }}>
      <Skeleton variant="text" width={200} height={40} sx={{ mb: 2.5 }} />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={100}
        sx={{ mb: 2.5, borderRadius: 1 }}
      />
      <Box sx={{ display: 'flex', gap: 1.5 }}>
        <Skeleton
          variant="rectangular"
          width={100}
          height={40}
          sx={{ borderRadius: 1 }}
        />
        <Skeleton
          variant="rectangular"
          width={100}
          height={40}
          sx={{ borderRadius: 1 }}
        />
      </Box>
    </Box>
  );
}

// Navigation/sidebar skeleton
export function NavigationSkeleton() {
  return (
    <Box component="nav" sx={{ p: 2.5, mb: 2.5 }}>
      <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
        <Skeleton variant="text" width={150} height={28} />
        <Skeleton variant="text" width={80} height={28} />
        <Skeleton variant="text" width={120} height={28} />
      </Box>
    </Box>
  );
}

// Route loading fallback — shown during lazy-load Suspense
export function RouteLoadingFallback() {
  return (
    <Box
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
      <CircularProgress size={36} />
      <Typography variant="body2" color="text.secondary">
        Loading page...
      </Typography>
    </Box>
  );
}
