import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  ErrorBoundary,
  RouteErrorBoundary,
} from '../components/ui/ErrorBoundary';
import { RouteLoadingFallback } from '../components/ui/LoadingStates';

// Lazy loaded routes
const Root = lazy(() => import('../routes/root'));
const Index = lazy(() => import('../routes/index'));
const Tasks = lazy(() => import('../routes/tasks'));
const Analytics = lazy(() => import('../routes/analytics'));
const Calendar = lazy(() => import('../routes/calendar'));
const Settings = lazy(() => import('../routes/settings'));
const Components = lazy(() => import('../routes/components'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<RouteLoadingFallback />}>
          <Root />
        </Suspense>
      </ErrorBoundary>
    ),
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<RouteLoadingFallback />}>
            <Index />
          </Suspense>
        ),
        errorElement: <RouteErrorBoundary />,
      },
      {
        path: 'tasks',
        element: (
          <Suspense fallback={<RouteLoadingFallback />}>
            <Tasks />
          </Suspense>
        ),
        errorElement: <RouteErrorBoundary />,
      },
      {
        path: 'analytics',
        element: (
          <Suspense fallback={<RouteLoadingFallback />}>
            <Analytics />
          </Suspense>
        ),
        errorElement: <RouteErrorBoundary />,
      },
      {
        path: 'calendar',
        element: (
          <Suspense fallback={<RouteLoadingFallback />}>
            <Calendar />
          </Suspense>
        ),
        errorElement: <RouteErrorBoundary />,
      },
      {
        path: 'settings',
        element: (
          <Suspense fallback={<RouteLoadingFallback />}>
            <Settings />
          </Suspense>
        ),
        errorElement: <RouteErrorBoundary />,
      },
      {
        path: 'components',
        element: (
          <Suspense fallback={<RouteLoadingFallback />}>
            <Components />
          </Suspense>
        ),
        errorElement: <RouteErrorBoundary />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
