import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  ErrorBoundary,
  RouteErrorBoundary,
} from '../components/ui/ErrorBoundary';
import { RouteLoadingFallback } from '../components/ui/LoadingStates';

// Lazy loaded routes with loading states
const Root = lazy(() => import('../routes/root'));
const Index = lazy(() => import('../routes/index'));
const Tasks = lazy(() => import('../routes/tasks'));
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
    errorElement: <RouteErrorBoundary reset={() => window.location.reload()} />,
    children: [
      {
        index: true,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<RouteLoadingFallback />}>
              <Index />
            </Suspense>
          </ErrorBoundary>
        ),
        errorElement: (
          <RouteErrorBoundary reset={() => window.location.reload()} />
        ),
      },
      {
        path: 'tasks',
        element: (
          <ErrorBoundary>
            <Suspense fallback={<RouteLoadingFallback />}>
              <Tasks />
            </Suspense>
          </ErrorBoundary>
        ),
        errorElement: (
          <RouteErrorBoundary reset={() => window.location.reload()} />
        ),
      },
      {
        path: 'components',
        element: (
          <ErrorBoundary>
            <Suspense fallback={<RouteLoadingFallback />}>
              <Components />
            </Suspense>
          </ErrorBoundary>
        ),
        errorElement: (
          <RouteErrorBoundary reset={() => window.location.reload()} />
        ),
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
