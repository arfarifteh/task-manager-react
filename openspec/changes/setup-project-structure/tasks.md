## 1. Project Structure Setup

- [x] 1.1 Create basic `src/components/ui/` directory for components
- [x] 1.2 Create `src/stories/` directory for Storybook stories (separate from components)
- [x] 1.3 Create `.storybook/` configuration directory
- [x] 1.4 Organize assets under `src/assets/` as needed
- [x] 1.5 Create simple project structure as components are developed
- [x] 1.6 Avoid pre-creating complex folder structure
- [x] 1.7 Build structure organically with component development
- [x] 1.8 Create hooks directory `src/hooks/` for custom React hooks
- [x] 1.9 Create types directory `src/types/` for TypeScript types
- [x] 1.10 Create utils directory `src/utils/` for utility functions
- [x] 1.11 Create services directory `src/services/` for API layer

## 2. Storybook Environment Setup

- [x] 2.1 Initialize Storybook using official command: `npx storybook@latest init`
- [x] 2.2 Verify Storybook auto-configuration in .storybook/main.ts and .storybook/preview.ts
- [x] 2.3 Test Storybook startup: `pnpm run storybook`
- [x] 2.4 Configure ESLint for Storybook compatibility
- [x] 2.5 Add Prettier configuration for consistent formatting
- [x] 2.6 Install and configure Material UI with theme provider
- [x] 2.7 Setup MUI theme configuration (light/dark themes)
- [x] 2.8 Configure MUI TypeScript interfaces and types

## 3. Development Environment Setup

- [x] 3.1 Install and configure React Router with TypeScript support
- [x] 3.2 Configure Vitest with React Testing Library
- [x] 3.3 Add comprehensive npm scripts for testing, linting, and formatting
- [x] 3.4 Configure TypeScript path mapping for clean imports (@ui/\* aliases)
- [x] 3.5 Setup ESLint import rules for consistency and validation
- [x] 3.6 Configure pre-commit hooks with husky and lint-staged
- [x] 3.7 Refactor to React Router pattern (co-located routes)
  - [x] 3.7.1 Create `src/routes/` directory structure
  - [x] 3.7.2 Create `src/routes/root.tsx` with layout and ThemeProvider
  - [x] 3.7.3 Create `src/routes/index.tsx` (home page)
  - [x] 3.7.4 Create `src/routes/tasks.tsx` (tasks page)
  - [x] 3.7.5 Create `src/routes/components.tsx` (component library page)
  - [x] 3.7.6 Update router configuration to use co-located components
  - [x] 3.7.7 Remove old `src/pages/` directory
  - [x] 3.7.8 Update imports and ensure proper navigation

## 3.8 Immediate Router Enhancements (Production Readiness)

- [x] 3.8.1 Add error boundaries for robust error handling
  - [x] 3.8.1.1 Create generic ErrorBoundary component
  - [x] 3.8.1.2 Create route-specific error boundaries
  - [x] 3.8.1.3 Add errorElement to router configuration
  - [x] 3.8.1.4 Test error scenarios and fallback UI
- [x] 3.8.2 Enhance navigation with active states and UX improvements
  - [x] 3.8.2.1 Add active link styling based on current route
  - [x] 3.8.2.2 Add loading indicators for route transitions
  - [x] 3.8.2.3 Improve navigation accessibility (ARIA labels)
  - [x] 3.8.2.4 Replace inline styles with theme-based styling
- [x] 3.8.3 Add loading states for lazy-loaded components
  - [x] 3.8.3.1 Create Suspense wrapper with loading fallback
  - [x] 3.8.3.2 Add skeleton loading components
  - [x] 3.8.3.3 Implement route transition loading states

## 3.9 Future Router Enhancements (Data Loading & ComponentProps)

- [ ] 3.9.1 Add data loading to routes with loader functions
  - [ ] 3.9.1.1 Add loader to tasks route for API integration
  - [ ] 3.9.1.2 Add loader to individual task route (tasks.$taskId)
  - [ ] 3.9.1.3 Update route components to use Route.ComponentProps
  - [ ] 3.9.1.4 Add error boundaries for failed data loading
- [ ] 3.9.2 Add form handling with action functions
  - [ ] 3.9.2.1 Add action for task creation/update
  - [ ] 3.9.2.2 Add action for task deletion
  - [ ] 3.9.2.3 Update components to use React Router Form
- [ ] 3.9.3 Add route parameters and dynamic routing
  - [ ] 3.9.3.1 Create tasks.$taskId route for individual tasks
  - [ ] 3.9.3.2 Add TypeScript types for route parameters
  - [ ] 3.9.3.3 Update navigation to use dynamic links

## 3.10 Architecture Guidelines Implementation

- [x] 3.10.1 Create ARCHITECTURE.md with feature-based structure rules
  - [x] 3.10.1.1 Document Rule 1: Feature-based structure (mandatory)
  - [x] 3.10.1.2 Document Rule 2: Separation of concerns (mandatory)
  - [x] 3.10.1.3 Document Rule 3: State management strategy (mandatory)
  - [x] 3.10.1.4 Document Rule 4: Consistency and patterns (mandatory)
  - [x] 3.10.1.5 Document Rule 5: Shared layer governance (mandatory)
  - [x] 3.10.1.6 Document Rule 6: Code quality gates (mandatory)
- [x] 3.10.2 Set up ESLint rules to enforce architecture patterns
  - [x] 3.10.2.1 Add import order rules (React → libs → shared → feature → relative)
  - [x] 3.10.2.2 Add folder structure enforcement rules
  - [x] 3.10.2.3 Add component size warnings (>150 lines)
  - [x] 3.10.2.4 Add forbidden pattern rules (no cross-feature imports) — implemented Fc layer no-restricted-imports
- [ ] 3.10.3 Create feature structure templates
  - [ ] 3.10.3.1 Create feature generator script/template
  - [ ] 3.10.3.2 Add component boilerplate with proper structure
  - [ ] 3.10.3.3 Add hook boilerplate with documentation
  - [ ] 3.10.3.4 Add service/api boilerplate
- [x] 3.10.4 Set up pre-commit enforcement
  - [x] 3.10.4.1 Verify architecture rules in pre-commit hook
  - [x] 3.10.4.2 Add architecture checklist to PR template
  - [x] 3.10.4.3 Document architecture review process
- [x] 3.10.5 Update documentation to reference architecture rules
  - [x] 3.10.5.1 Update README.md with architecture section
  - [x] 3.10.5.2 Add ARCHITECTURE.md reference to project structure
  - [x] 3.10.5.3 Update feature development workflow with rules
  - [x] 3.10.5.4 Update spec.md with architecture requirements

## 4. Pre-Dashboard Cleanup (MUI Migration & Route Alignment)

### 4.1 Replace Inline Styles with MUI (CRITICAL)

- [x] 4.1.1 Refactor `root.tsx` to use MUI components (AppBar, Drawer, Box, Typography)
- [x] 4.1.2 Remove all inline styles and JS hover handlers from navigation
- [x] 4.1.3 Refactor `ErrorBoundary.tsx` to use MUI Alert, Button, Typography
- [x] 4.1.4 Refactor `LoadingStates.tsx` to use MUI Skeleton, CircularProgress
- [x] 4.1.5 Update `RouteErrorBoundary` to use `useRouteError()` from React Router

### 4.2 Update Theme to Match Mockup

- [x] 4.2.1 Update theme palette to match mockup colors (dark sidebar: `#1e2a3a`, primary: `#3a7bd5`)
- [x] 4.2.2 Add sidebar-specific color tokens to theme
- [x] 4.2.3 Configure MUI component default overrides in theme (Button, Card, Chip, Tab)

### 4.3 Update Routes to Match Mockup Pages

- [x] 4.3.1 Add `/analytics` route (placeholder)
- [x] 4.3.2 Add `/calendar` route (placeholder)
- [x] 4.3.3 Add `/settings` route (placeholder)
- [x] 4.3.4 Rename home route to Dashboard
- [x] 4.3.5 Update router configuration with new routes

### 4.4 Create Fc (Fusion Core) UI Component Library

> **Rule: Zero direct MUI imports in application code.** All MUI usage is encapsulated inside `src/components/ui/Fc*.tsx` wrappers. Variants are exposed as boolean props.

#### 4.4.1 Layout Primitives

- [x] `FcBox` — wraps MUI Box (pass-through `sx`, `component`)
- [x] `FcStack` — wraps MUI Stack (boolean: `row`, `column`, spacing shortcuts)
- [x] `FcGrid` — wraps MUI Grid (responsive layout)

#### 4.4.2 Typography

- [x] `FcTypography` — wraps MUI Typography (boolean: `h1`, `h2`, `h3`, `body`, `caption`, `secondary`)

#### 4.4.3 Interactive Components

- [x] `FcButton` — wraps MUI Button (boolean: `primary`, `secondary`, `danger`, `outlined`, `small`, `large`)
- [x] `FcIconButton` — wraps MUI IconButton (boolean: `small`, `primary`)
- [x] `FcTextField` — wraps MUI TextField (boolean: `fullWidth`, `error`)
- [x] `FcSelect` — wraps MUI Select + MenuItem

#### 4.4.4 Data Display

- [x] `FcCard` — wraps MUI Card + CardContent (boolean: `elevated`, `outlined`, `noPadding`)
- [x] `FcChip` — wraps MUI Chip (boolean: `high`, `medium`, `low`, `success`, `warning`, `error`)
- [x] `FcBadge` — wraps MUI Badge (boolean: `error`, `primary`)
- [x] `FcAvatar` — wraps MUI Avatar (boolean: `small`, `medium`, `large`)
- [x] `FcTabs` / `FcTab` — wraps MUI Tabs + Tab

#### 4.4.5 Feedback

- [x] `FcAlert` — wraps MUI Alert + AlertTitle (boolean: `error`, `warning`, `success`, `info`)
- [x] `FcSkeleton` — wraps MUI Skeleton (boolean: `text`, `rectangular`, `circular`)
- [x] `FcCircularProgress` — wraps MUI CircularProgress

#### 4.4.6 Navigation

- [x] `FcDrawer` — wraps MUI Drawer (boolean: `permanent`, `temporary`)
- [x] `FcList` / `FcListItemButton` — wraps MUI List, ListItemButton, ListItemIcon, ListItemText

#### 4.4.7 Infrastructure

- [x] Create `src/components/ui/index.ts` barrel export for all Fc components
- [x] Create `src/components/ui/types.ts` shared Fc prop utility types
- [x] Add ESLint rule or import restriction: disallow `@mui/material` imports outside `src/components/ui/`

#### 4.4.8 Refactor Existing Code to Use Fc Layer

- [x] Refactor `root.tsx` — replace all direct MUI imports with Fc components
- [x] Refactor `ErrorBoundary.tsx` — use FcAlert, FcButton, FcBox, FcTypography
- [x] Refactor `LoadingStates.tsx` — use FcBox, FcSkeleton, FcCircularProgress, FcTypography
- [x] Refactor all route pages (analytics, calendar, settings, tasks, components, index) — use Fc components

## 5. Domain Model & Data Layer (Foundation)

### 5.1 Define Core TypeScript Types

- [x] 5.1.1 Create `src/types/task.ts` — Task, TaskStatus, TaskPriority, TaskFilter
- [x] 5.1.2 Create `src/types/user.ts` — User, UserProfile
- [x] 5.1.3 Create `src/types/activity.ts` — ActivityItem, ActivityType
- [x] 5.1.4 Create `src/types/dashboard.ts` — DashboardStats, TaskOverview
- [x] 5.1.5 Create `src/types/index.ts` barrel export

### 5.2 Create Mock Data Layer

- [x] 5.2.1 Create `src/services/mockData.ts` — sample tasks matching mockup
- [x] 5.2.2 Create `src/services/taskService.ts` — CRUD operations on mock data
- [x] 5.2.3 Create `src/services/dashboardService.ts` — stats, overview, deadlines
- [x] 5.2.4 Create `src/services/activityService.ts` — activity feed data

---

> **Sections 6–9 (Dashboard Feature, Fc Layer Expansion, Storybook Documentation, Testing & Validation) have been extracted to the `build-dashboard` change.**
> See: `openspec/changes/build-dashboard/`
