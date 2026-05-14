## Context

The current task manager application has a basic Vite + React 19 + TypeScript setup with minimal configuration. The project uses ESLint and has basic TypeScript configurations but lacks proper folder organization, testing infrastructure, and scalable architecture. Based on the previous conversation about renaming the Project Manager App, there's a need to establish a proper foundation that supports future development, team collaboration, and maintainability while preserving the existing modern tooling stack.

## Goals / Non-Goals

**Goals:**

- Establish a scalable, feature-based project architecture
- Improve developer experience with proper tooling and configuration
- Create clear separation of concerns with organized folder structure
- Enable efficient development workflows with proper TypeScript setup
- Provide foundation for reusable components and shared utilities
- Support testing infrastructure and documentation

**Non-Goals:**

- Implementing new features or functionality
- Changing the application's core business logic
- Modifying existing UI/UX design
- Database or backend architecture changes
- Deployment pipeline setup

## Decisions

**Feature-Based Structure over Component-Based Structure**

- Chosen feature-based organization (`features/`) over component-based (`components/`) as the primary organizational pattern
- Rationale: Better for scaling, encapsulates related components, hooks, and types together
- Alternative considered: Pure component-based structure - rejected as it doesn't scale well for larger apps

**TypeScript-First Approach**

- Implement strict TypeScript configuration with proper type definitions
- Rationale: Better type safety, developer experience, and maintainability
- Alternative considered: JavaScript with JSDoc - rejected for inferior type safety

**Shared Components Library**

- Create dedicated `components/ui/` for reusable components
- Rationale: Promotes consistency and reduces code duplication
- Alternative considered: Inline components - rejected for maintainability

**Configuration Management**

- Separate configuration files for different environments
- Rationale: Better deployment flexibility and environment management
- Alternative considered: Single configuration file - rejected for inflexibility

**React Router Evolution Strategy**

- Implement React Router pattern with co-located routes as foundation
- Rationale: Industry standard, scalable, ready for data loading evolution
- Alternative considered: Basic router with pages - rejected for scalability
- Evolution path: Lazy loading (current) + Data loading (future) + Full features (advanced)

**Architecture Rules (Mandatory)**

- See [ARCHITECTURE.md](../../ARCHITECTURE.md) for comprehensive rule set
- All team members must follow the 6 core rules:
  1. Feature-based structure (co-location by domain)
  2. Separation of concerns (presentational vs container)
  3. State management strategy (progressive escalation)
  4. Consistency & patterns (enforced by ESLint)
  5. Shared layer governance (promotion rules)
  6. Code quality gates (pre-commit enforcement)
- Rationale: Consistency is key for maintainability at scale
- Enforcement: ESLint rules + PR checklist + pre-commit hooks

**State Management Strategy**

- Start with React Context + useReducer for simple state management
- Rationale: Built-in, no additional dependencies, good for medium-sized apps
- Alternative considered: Redux/Zustand - deferred until complexity demands it

## Risks / Trade-offs

**[Migration Risk]** Breaking changes during reorganization

- Mitigation: Careful file migration plan with import path updates

**[Learning Curve]** New structure may require team adjustment

- Mitigation: Comprehensive documentation and README files

**[Over-engineering Risk]** Structure might be too complex for current needs

- Mitigation: Start simple and evolve complexity as needed

**[Tooling Dependency]** Additional configuration files increase maintenance

- Mitigation: Use standard, well-maintained tooling with minimal custom configuration

## Implementation Plan

### Phase 1: Foundation Setup

1. Create the foundational folder structure
2. Set up development environment configuration
3. Implement component library foundation
4. Create initial feature structure
5. Test and validate the setup

**Storybook Setup (Clean Separation):**

1. Initialize Storybook using official command: `npx storybook@latest init`
2. Verify Storybook auto-configuration in `.storybook/main.ts` and `.storybook/preview.ts`
3. Test Storybook startup: `pnpm run storybook`
4. Configure ESLint for Storybook compatibility
5. Add Prettier configuration for consistent formatting
6. Install and configure Material UI with theme provider
7. Setup MUI theme configuration (light/dark themes)
8. Configure MUI TypeScript interfaces and types
9. Create pure UI components (no Storybook dependencies)
10. Create component library barrel exports
11. Create Storybook stories that import from component library
12. Create interactive UI showcase and roadmap
13. Setup interactive learning patterns in Storybook stories
14. Implement visual testing workflow through Storybook interface
15. Update documentation for Storybook-based learning

**Technical Implementation Details:**

### Storybook Configuration

- **Official Initialization**: `npx storybook@latest init` for React + Vite + TypeScript
- **Auto-Generated Config**: `.storybook/main.ts` and `.storybook/preview.ts` created automatically
- **Main Config**: Vite builder, TypeScript support, auto-generated stories
- **Preview Config**: Theme provider, global decorators, background controls
- **File Structure**: Stories in `src/stories/UI/` directory (completely separate from components)
- **Package Scripts**: Automatic addition of `storybook` and `build-storybook` scripts
- **Clean Separation**: UI components pure (no Storybook deps), stories import from library
- **Component Library**: `src/components/ui/` contains only pure components and tests
- **Documentation Only**: `src/stories/` contains only Storybook documentation and examples

### Component Development

- **Pure Components**: No Storybook dependencies in component files
- **Story Format**: CSF 3.0 with controls, actions, and documentation
- **Interactive Controls**: Args for props, variants, and state management
- **Learning Stories**: Dedicated stories for React patterns and best practices
- **Import Pattern**: Stories import components from `src/components/ui/`
- **Clean Exports**: Component library uses barrel exports for clean imports
- **Import Strategy**: Mixed approach - barrel for multiple components, individual for single
- **TypeScript Types**: Comprehensive type exports alongside component exports
- **Path Validation**: ESLint rules + TypeScript path mapping for consistency
- **Testing Strategy**: Unit tests only for component library (integration in applications)
- **Theme Strategy**: Shared theme configuration for Storybook and production consistency

### Integration Workflow

- **Development**: `pnpm run storybook` for component development
- **Testing**: Visual testing through Storybook interface
- **Documentation**: Auto-generated docs from stories with live examples
- **Architecture**: Clean separation between library and documentation
- **Reusability**: Component library can be used outside Storybook

### File Structure (Clean Separation & Improved Organization)

```
src/components/ui/           # Pure component library
  Button/
    Button.tsx               # Component (no Storybook deps)
    Button.test.tsx          # Component tests
    index.ts                 # Component export
  TextField/
  Card/
  index.ts                   # Library barrel export

src/stories/UI/              # Storybook documentation only
  Showcase.stories.tsx       # Main showcase (top-level entry point)
  Learning.stories.tsx       # Learning patterns overview
  Roadmap.stories.tsx       # Future components roadmap
  InputComponents/           # Input category
    Button.stories.tsx       # Button Playground, Variants, Accessibility
    TextField.stories.tsx    # TextField Playground, Variants, Accessibility
  DisplayComponents/         # Display category
    Card.stories.tsx         # Card Playground, Variants, Accessibility

src/theme/                  # Shared theme configuration
  light.ts                 # Light theme configuration
  dark.ts                  # Dark theme configuration
  index.ts                 # Theme exports and provider

assets/                     # Static assets
hooks/                      # Global custom hooks
types/                      # Global TypeScript types
utils/                      # Pure utility functions
services/                   # API and data layer
.storybook/                 # Storybook configuration
  main.ts                  # Storybook main configuration
  preview.ts               # Storybook preview settings
App.tsx                    # Root application component
```

### Storybook Organization (Improved Discovery)

````
UI Components/
  Showcase                    # Top-level entry point
  Learning Patterns

  Input Components
    Button Playground
    Button Variants
    Button Accessibility
    TextField Playground
    TextField Variants
    TextField Accessibility

  Display Components
    Card Playground
    Card Variants
    Card Accessibility
### Import Standardization Strategy

#### Component Library Exports
```typescript
// src/components/ui/index.ts
export * from './Button';
export * from './TextField';
export * from './Card';

// Grouped exports for better DX
export const InputComponents = { Button, TextField } as const;
export const DisplayComponents = { Card } as const;

// Type exports
export type { ButtonProps } from './Button';
export type { TextFieldProps } from './TextField';
export type { CardProps } from './Card';
````

#### Storybook Import Patterns

```typescript
// Multiple components - use barrel import
import { Button, TextField, Card } from '../../components/ui';

// Single component - use individual import (better tree-shaking)
import { Button } from '../../components/ui/Button';

// Grouped imports for categories
import { InputComponents } from '../../components/ui';
```

#### TypeScript Path Mapping

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@ui/*": ["src/components/ui/*"],
      "@ui": ["src/components/ui"]
    }
  }
}
```

#### ESLint Import Rules

```javascript
// .eslintrc.js
module.exports = {
  rules: {
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
  },
};
```

### Testing Strategy (Unit Tests Only)

#### Component Library Testing Scope

```typescript
// src/components/ui/Button/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  // Unit tests - Component behavior
  it('renders with correct label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(<Button label="Loading" loading />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  // Accessibility tests
  it('has correct ARIA attributes', () => {
    render(<Button label="Submit" variant="primary" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});
```

#### What to Test (Unit Tests)

- **Rendering** - Component renders without crashing
- **Props** - All props work correctly
- **State** - Internal state behavior
- **Events** - Event handlers work
- **Accessibility** - A11y attributes and behavior
- **Edge Cases** - Empty states, error states

#### What NOT to Test (Skip in Library)

- **Component Composition** - Button inside Form (application responsibility)
- **Application Workflows** - Form submission, navigation (application responsibility)
- **Integration Testing** - Component interactions (application responsibility)
- **User Journey Testing** - End-to-end scenarios (application responsibility)

#### Testing Tools Configuration

```json
// package.json scripts
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "type-check": "tsc --noEmit",
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest --coverage",
  "test:watch": "vitest --watch",
  "storybook": "storybook dev -p 6006",
  "build-storybook": "storybook build",
  "prepare": "husky install"
}
```

#### Pre-commit Hooks Configuration

```json
// package.json (husky + lint-staged)
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}
```

### React Router Implementation (React Router Pattern)

#### Route Structure (Co-located)

```typescript
// src/routes/root.tsx
import { Outlet } from 'react-router-dom';
import { ThemeProviderWrapper } from '../theme';

export default function Root() {
  return (
    <ThemeProviderWrapper theme="light">
      <AppLayout />
      <Outlet />
    </ThemeProviderWrapper>
  );
}

function AppLayout() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/components">Components</Link>
    </nav>
  );
}

// src/routes/index.tsx
export default function HomePage() {
  return <h1>Welcome to Task Manager</h1>;
}

// src/routes/tasks.tsx
import { Link } from 'react-router-dom';

export async function loader({ request }) {
  const response = await fetch('/api/tasks');
  return { tasks: await response.json() };
}

export default function TasksPage() {
  const { tasks } = useLoaderData();
  return (
    <div>
      <h1>Tasks</h1>
      {tasks.map(task => (
        <Link key={task.id} to={`/tasks/${task.id}`}>
          {task.title}
        </Link>
      ))}
    </div>
  );
}

// src/routes/components.tsx
export default function ComponentLibraryPage() {
  return <h1>Component Library</h1>;
}
```

#### Router Configuration

```typescript
// src/router/index.tsx
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    Component: lazy(() => import('../routes/root')),
    children: [
      {
        index: true,
        Component: lazy(() => import('../routes/index')),
        // Future: loader for dashboard stats
        // loader: async () => {
        //   const [tasks, user] = await Promise.all([
        //     fetch('/api/tasks/summary'),
        //     fetch('/api/user/profile')
        //   ]);
        //   return { tasks: await tasks.json(), user: await user.json() };
        // }
      },
      {
        path: 'tasks',
        Component: lazy(() => import('../routes/tasks')),
        // Future: loader for tasks list
        // loader: async ({ request }) => {
        //   const url = new URL(request.url);
        //   const status = url.searchParams.get('status') || 'all';
        //   const response = await fetch(`/api/tasks?status=${status}`);
        //   return response.json();
        // }
      },
      {
        path: 'tasks/:taskId',
        Component: lazy(() => import('../routes/tasks.$taskId')),
        // Future: loader for individual task
        // loader: async ({ params }) => {
        //   const response = await fetch(`/api/tasks/${params.taskId}`);
        //   if (!response.ok) throw new Response("Task not found", { status: 404 });
        //   return { task: await response.json() };
        // },
        // Future: action for form submissions
        // action: async ({ request, params }) => {
        //   const formData = await request.formData();
        //   await fetch(`/api/tasks/${params.taskId}`, {
        //     method: 'PUT',
        //     body: formData,
        //   });
        //   return redirect(`/tasks/${params.taskId}`);
        // }
      },
      {
        path: 'components',
        Component: lazy(() => import('../routes/components')),
        // Static page - no data loading needed
      },
    ],
  },
]);

export const router = router;
```

#### Enhanced Route Components with ComponentProps

```typescript
// src/routes/tasks.tsx - Enhanced with data loading
import type { Route } from "react-router";

export default function TasksPage({ loaderData }: Route.ComponentProps) {
  const { tasks } = loaderData;  // Automatically provided by router

  return (
    <div>
      <h1>Tasks</h1>
      {tasks.map(task => (
        <Link key={task.id} to={`/tasks/${task.id}`}>
          {task.title}
        </Link>
      ))}
    </div>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const response = await fetch('/api/tasks');
  if (!response.ok) {
    throw new Response("Failed to load tasks", { status: 500 });
  }
  return response.json();
}

// src/routes/tasks.$taskId.tsx - Individual task with params
export default function TaskDetailPage({
  loaderData,
  params
}: Route.ComponentProps) {
  const { task } = loaderData;  // From loader function
  const { taskId } = params;     // From URL /tasks/123

  return (
    <div>
      <h1>{task.title}</h1>
      <p>Status: {task.status}</p>
      <Form method="put">
        <input name="title" defaultValue={task.title} />
        <button type="submit">Update</button>
      </Form>
    </div>
  );
}
```

#### ComponentProps Benefits

| Prop         | Source            | Use Case                    |
| ------------ | ----------------- | --------------------------- |
| `loaderData` | `loader` function | Pre-fetched data on render  |
| `actionData` | `action` function | Form submission results     |
| `params`     | URL parameters    | Route params like `:taskId` |
| `matches`    | Route hierarchy   | Current route context       |

#### Evolution Path

**Phase 1: Current (Basic)**

```typescript
// Lazy loading only
Component: lazy(() => import('../routes/tasks'));
```

**Phase 2: Data Loading**

```typescript
// Lazy + loader
{
  path: 'tasks',
  Component: lazy(() => import('../routes/tasks')),
  loader: async () => ({ tasks: await fetch('/api/tasks') })
}
```

**Phase 3: Full Features**

```typescript
// Lazy + loader + action + error handling
{
  path: 'tasks/:taskId',
  Component: lazy(() => import('../routes/tasks.$taskId')),
  loader: async ({ params }) => ({ task: await fetch(`/api/tasks/${params.taskId}`) }),
  action: async ({ request, params }) => { /* handle form */ },
  errorElement: <TaskErrorBoundary />
}
```

#### Navigation Components

```typescript
// src/components/ui/Navigation.tsx
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <Link to="/">
        <Button variant={location.pathname === '/' ? 'primary' : 'secondary'}>
          Home
        </Button>
      </Link>
      <Link to="/tasks">
        <Button variant={location.pathname === '/tasks' ? 'primary' : 'secondary'}>
          Tasks
        </Button>
      </Link>
      <Link to="/components">
        <Button variant={location.pathname === '/components' ? 'primary' : 'secondary'}>
          Components
        </Button>
      </Link>
    </nav>
  );
};
```

#### Route Organization Pattern

```typescript
// src/pages/HomePage.tsx
import { Button, Card } from '../components/ui';

export const HomePage = () => (
  <div>
    <h1>Welcome to Task Manager</h1>
    <Card>
      <h2>UI Component Library</h2>
      <p>Explore our reusable components</p>
      <Button variant="primary">View Components</Button>
    </Card>
  </div>
);
```

### Theme Strategy (Shared Configuration)

#### Shared Theme Structure

```typescript
// src/theme/light.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

// src/theme/dark.ts
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

// src/theme/index.ts
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './index';

export { lightTheme, darkTheme };
export const themes = { light: lightTheme, dark: darkTheme } as const;

export const ThemeProviderWrapper = ({ children, theme = 'light' }) => (
  <ThemeProvider theme={themes[theme]}>
    {children}
  </ThemeProvider>
);
```

#### Storybook Theme Integration

```typescript
// .storybook/preview.ts
import { ThemeProviderWrapper } from '../src/theme';

const preview = {
  decorators: [
    (Story) => (
      <ThemeProviderWrapper theme="light">
        <Story />
      </ThemeProviderWrapper>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
  },
};
```

#### Production App Integration

```typescript
// App.tsx
import { ThemeProviderWrapper } from './src/theme';

function App() {
  return (
    <ThemeProviderWrapper theme="light">
      {/* Your app components */}
    </ThemeProviderWrapper>
  );
}
```

### Fc (Fusion Core) UI Component Layer

**Decision: Zero direct MUI imports in application code.**

All Material UI components are wrapped inside `src/components/ui/Fc*.tsx` files. Application code (routes, features, pages) imports exclusively from the Fc layer.

**Rationale:**

- Decouples app code from MUI — enables easy library swap or upgrade
- Enforces consistent variants across the entire app
- Simplifies consumption — boolean props instead of MUI's verbose prop API
- Centralizes styling changes to one location per component

**Naming Convention:** `Fc` prefix + component purpose → `FcButton`, `FcCard`, `FcTypography`

**Variant API:** Boolean props that map to internal MUI configuration:

```tsx
// Application code — clean, declarative
<FcButton primary>Save Task</FcButton>
<FcButton danger outlined small>Delete</FcButton>
<FcChip high>High Priority</FcChip>
<FcTypography h2>Dashboard</FcTypography>
<FcCard elevated>...</FcCard>

// Internal implementation (hidden from app code)
// FcButton maps: primary → variant="contained" color="primary"
// FcChip maps: high → color="error"
```

**Directory Structure:**

```
src/components/ui/
├── FcBox.tsx              # Layout
├── FcStack.tsx
├── FcGrid.tsx
├── FcTypography.tsx       # Text
├── FcButton.tsx           # Interactive
├── FcIconButton.tsx
├── FcTextField.tsx
├── FcSelect.tsx
├── FcCard.tsx             # Data display
├── FcChip.tsx
├── FcBadge.tsx
├── FcAvatar.tsx
├── FcTabs.tsx
├── FcAlert.tsx            # Feedback
├── FcSkeleton.tsx
├── FcCircularProgress.tsx
├── FcDrawer.tsx           # Navigation
├── FcList.tsx
├── index.ts              # Barrel export
└── types.ts              # Shared Fc prop types
```

**Import Restriction:**

```
✅ import { FcButton, FcCard } from '@/components/ui';
❌ import Button from '@mui/material/Button';  // FORBIDDEN in app code
```

Only files inside `src/components/ui/` may import from `@mui/material` or `@mui/icons-material`.

---

### Dashboard-First Implementation Strategy

> Reference mockup: `docs/ux/mockups/task-manager-dashboard-mockup-design.png`

**Decision: Build features top-down from mockup, not bottom-up from generic components.**

- Rationale: The mockup defines exact component needs. New Fc wrappers are added as the dashboard requires them.
- Higher-level Fc composites (e.g., `FcSummaryCard`, `FcStatusChip`) emerge when patterns repeat across features.

#### Mockup Decomposition

```
┌──────────────────────────────────────────────────────────────┐
│ Sidebar (Drawer)    │  AppHeader (Welcome, Notifications)    │
│ ─ Logo              │────────────────────────────────────────│
│ ─ Dashboard         │  StatsCardsRow                         │
│ ─ My Tasks          │  [Tasks Today] [In Progress] [Completed]│
│ ─ Analytics         │────────────────────────────────────────│
│ ─ Calendar          │  QuickAddTask        │ TaskOverview    │
│ ─ Settings          │  [Title] [Priority]  │ (Donut Chart)   │
│                     │  [Date] [+ Add Task] │                 │
│                     │──────────────────────│ UpcomingDeadlines│
│                     │  TaskList            │ ─ Item 1        │
│                     │  Tabs: All|IP|Done   │ ─ Item 2        │
│                     │  TaskRow x N         │                 │
│                     │──────────────────────│                 │
│  User Avatar        │  ActivityFeed        │                 │
│  [Alireza]          │  ─ Activity 1        │                 │
│                     │  ─ Activity 2        │                 │
└──────────────────────────────────────────────────────────────┘
```

#### Feature Structure

```
src/features/dashboard/
├── components/                    # Presentational (pure UI)
│   ├── Sidebar.tsx               # MUI Drawer + navigation
│   ├── AppHeader.tsx             # Welcome, notifications, logout
│   ├── StatsCard.tsx             # Single stat card
│   ├── StatsCardsRow.tsx         # 3-card row
│   ├── QuickAddTask.tsx          # Add task form
│   ├── TaskTabs.tsx              # All/In Progress/Completed tabs
│   ├── TaskFilters.tsx           # Filter + Sort dropdowns
│   ├── TaskRow.tsx               # Single task row with actions
│   ├── TaskList.tsx              # Composes tabs + filters + rows
│   ├── TaskOverviewChart.tsx     # Donut chart
│   ├── UpcomingDeadlines.tsx     # Deadline list
│   ├── ActivityFeed.tsx          # Activity timeline
│   ├── ActivityItem.tsx          # Single activity entry
│   └── DashboardLayout.tsx       # Grid layout (container)
├── hooks/                         # Business logic
│   ├── useDashboard.ts           # Aggregate dashboard data
│   ├── useTaskActions.ts         # Add, complete, delete tasks
│   └── useTaskFilters.ts         # Filter and sort logic
├── services/
│   └── dashboardApi.ts           # API layer (mock initially)
└── types.ts                       # Dashboard-specific types
```

#### Component → Fc Mapping

| Mockup Element     | Fc Components Used                                         |
| ------------------ | ---------------------------------------------------------- |
| Sidebar            | FcDrawer, FcList, FcListItemButton, FcAvatar, FcTypography |
| Header             | FcBox, FcTypography, FcBadge, FcIconButton, FcButton       |
| Stats Cards        | FcCard, FcTypography, FcChip                               |
| Quick Add Task     | FcTextField, FcSelect, FcButton                            |
| Task Tabs          | FcTabs, FcTab                                              |
| Task Row           | FcChip, FcTypography, FcIconButton                         |
| Task Overview      | FcBox + chart library (recharts or nivo)                   |
| Upcoming Deadlines | FcList, FcTypography                                       |
| Activity Feed      | FcBox, FcTypography, FcAvatar                              |

### Code Review Findings (Resolved)

The following issues were identified during a senior-level code review and addressed in the pre-dashboard cleanup phase:

1. **MUI adoption** — Replaced raw inline styles with MUI components and `sx` prop across all routes and UI components.
2. **Hover handling** — Removed JS `onMouseOver`/`onMouseOut` handlers; hover effects now use CSS via MUI `sx` `'&:hover'` selectors.
3. **Route alignment** — Updated routes to match mockup pages (Dashboard, My Tasks, Analytics, Calendar, Settings).
4. **Domain types** — TypeScript types for Task, User, Priority, Status to be defined before building UI (Section 5).
5. **Route error handling** — `RouteErrorBoundary` now uses `useRouteError()` from React Router for meaningful error context.
6. **Theme consistency** — All colors reference `theme.palette` or exported sidebar tokens; no hardcoded hex values in components.

## Open Questions

**Resolved:**

- **Routing**: React Router with co-located routes
- **Styling**: Material UI — MUST use MUI components, not inline styles
- **State Management**: Local + feature hooks first, global when proven needed
- **Implementation Strategy**: Dashboard-first, mockup-driven, feature-based
- **Component Promotion**: Build in feature first, promote to shared after 3+ uses
- **Chart Library**: TBD — recharts or nivo for TaskOverview donut chart
