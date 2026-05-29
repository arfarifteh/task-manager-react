# Task Manager React

A modern React application built with advanced patterns, performance optimization, and scalable architecture practices.

## 🎯 Project Goals

This project demonstrates professional React development practices including:

- **Feature-based Architecture** - Scalable project organization patterns
- **Modern React Patterns** - Compound components, custom hooks, render props
- **Material UI + Fc Layer** - Component library customization, theming, and abstraction
- **Performance Optimization** - CSR-specific techniques and best practices
- **Testing Strategies** - Component testing with modern tools
- **TypeScript Mastery** - Advanced type patterns and safety
- **Build Optimization** - Code splitting and bundle analysis

## 🛠️ Tech Stack

### Core Technologies

- **React 19** - Latest React with concurrent features
- **TypeScript 6.0** - Strict type safety and modern patterns
- **Vite 8.0** - Fast build tool and development server

### UI & Styling

- **Material UI (MUI) v9** - Component library with advanced theming
- **Fc (Fusion Core) Layer** - Boolean-variant wrapper components over MUI (zero direct MUI imports in app code)
- **Emotion** - CSS-in-JS styling (MUI dependency)

### Routing & Navigation

- **React Router v7** - Declarative routing with TypeScript support

### Development Tools

- **ESLint 9** - Code quality and React-specific rules
- **Prettier** - Consistent code formatting
- **Husky** - Git hooks for code quality
- **Storybook** - Component development and interactive documentation

### Testing

- **Vitest** - Fast unit testing framework
- **React Testing Library** - Component testing utilities
- **MSW** - API mocking for integration tests

## 📁 Project Architecture

### Architecture Guidelines

**⚠️ IMPORTANT**: All developers must follow the architecture rules defined in [ARCHITECTURE.md](./ARCHITECTURE.md). This document contains 6 mandatory rules for:

1. **Feature-based structure** - Co-location by domain
2. **Separation of concerns** - Presentational vs Container components
3. **State management strategy** - Progressive escalation (Local → Feature → Global)
4. **Consistency & patterns** - Naming conventions and code organization
5. **Shared layer governance** - Promotion rules for reusable components
6. **Code quality gates** - Enforcement through ESLint and PR reviews

### Project Structure

```
src/
├── components/ui/           # Fc (Fusion Core) UI layer — wraps MUI
│   ├── Fc*.tsx             # Boolean-variant wrappers (FcButton, FcCard, etc.)
│   ├── icons.ts            # Re-exported MUI icons (single source)
│   ├── types.ts            # Shared Fc prop utility types
│   ├── ErrorBoundary.tsx   # Error boundary components
│   ├── LoadingStates.tsx   # Skeleton & spinner components
│   └── index.ts            # Barrel export (all Fc components + icons)
├── features/                # Domain features (MANDATORY structure)
│   └── dashboard/          # Dashboard feature (in progress)
├── types/                   # Domain model types
│   ├── task.ts             # Task (title, description, status, priority, dueDate), TaskFilter
│   ├── user.ts             # User, UserProfile
│   ├── activity.ts         # ActivityItem, ActivityType
│   ├── dashboard.ts        # DashboardStats, TaskOverview
│   └── index.ts            # Barrel export
├── services/                # Data layer (mock-first)
│   ├── mockData.ts         # Sample data matching UX mockup
│   ├── taskService.ts      # CRUD operations on tasks
│   ├── dashboardService.ts # Stats, overview, deadlines
│   └── activityService.ts  # Activity feed data
├── routes/                  # React Router co-located routes
│   ├── root.tsx            # App shell (sidebar + header)
│   ├── index.tsx           # Dashboard page
│   ├── tasks.tsx           # Tasks page
│   ├── analytics.tsx       # Analytics page
│   ├── calendar.tsx        # Calendar page
│   ├── settings.tsx        # Settings page
│   └── components.tsx      # Component library showcase
├── router/                  # Router configuration
│   └── index.tsx           # Route definitions with lazy loading
├── stories/UI/              # Storybook documentation
├── theme/                   # Shared theme configuration
│   ├── themes.ts           # Light/dark theme definitions
│   ├── ThemeProvider.tsx   # Theme wrapper + sidebar tokens
│   └── types.ts            # Theme type extensions
└── assets/                  # Static assets
```

### Key Principles

- **Progressive Complexity**: Start simple, add complexity only when proven necessary
- **Feature Co-location**: Each domain owns its components, hooks, services, and types
- **Clean Separation**: Presentational components (UI) + Container components (logic)
- **State Escalation**: Local → Feature → Global (in that order)

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0.0 or higher
- **pnpm** 8.0.0 or higher (recommended)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd task-manager-react

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:5173
```

### Development Scripts

```bash
# Development
pnpm dev              # Start development server with HMR
pnpm preview          # Preview production build locally
pnpm storybook         # Start Storybook for component development

# Building
pnpm build            # Build for production
pnpm build:analyze    # Build with bundle analyzer
pnpm build-storybook   # Build static Storybook for deployment

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm format           # Format code with Prettier
pnpm type-check       # Run TypeScript type checking

# Testing
pnpm test             # Run unit tests
```

## 🧪 Testing Strategy (Unit Tests Only)

### Component Library Testing

The UI component library uses **unit tests only** to maintain clean boundaries and reusability:

```typescript
// What we test in the library
describe('Button Component', () => {
  it('renders with correct label', () => {
    /* ... */
  });
  it('handles click events', () => {
    /* ... */
  });
  it('shows loading state', () => {
    /* ... */
  });
  it('has correct ARIA attributes', () => {
    /* ... */
  });
});

// What we DON'T test in the library (application responsibility)
describe('Button in Form', () => {
  it('submits form when clicked', () => {
    /* Skip - belongs in application */
  });
});
```

#### Testing Scope

**Unit Tests (Component Library):**
• Component rendering and props
• Event handling and state
• Accessibility attributes
• Edge cases and error states

**Integration Tests (Applications):**
• Component composition
• User workflows
• Form submissions
• Navigation flows

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests in watch mode
pnpm test

# Run tests with UI
pnpm test:ui
```

## 📚 Learning Resources

### Storybook Interactive Learning

- **[Component Showcase](http://localhost:6006)** - Main component overview and playground
- **[Learning Patterns](http://localhost:6006)** - Interactive React pattern demonstrations
- **[Component Categories](http://localhost:6006)** - Organized by Input, Display, Layout components
- **[Visual Testing](http://localhost:6006)** - Component testing and documentation

### Storybook Organization

```
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
```

### Advanced React Patterns

- **[Compound Components](docs/patterns/compound-components.md)** - Building flexible component APIs
- **[Custom Hooks](docs/patterns/custom-hooks.md)** - Reusable stateful logic
- **[Render Props](docs/patterns/render-props.md)** - Component composition patterns

### Performance Optimization

- **[Code Splitting](docs/performance/code-splitting.md)** - Lazy loading strategies
- **[Memoization](docs/performance/memoization.md)** - React.memo and useMemo patterns
- **[Bundle Optimization](docs/performance/bundle-optimization.md)** - Build analysis and optimization

### Material UI Mastery

- **[Theming System](docs/mui/theming.md)** - Custom theme creation
- **[Component Extension](docs/mui/component-extension.md)** - Customizing MUI components
- **[Design Tokens](docs/mui/design-tokens.md)** - Consistent design system

## 🔧 Development Workflow

### OpenSpec-Driven Development

This project uses a spec-driven development workflow to simulate production-style feature planning and incremental implementation. OpenSpec provides a structured workflow for planning, implementing, and archiving features with complete artifact generation.

#### OpenSpec Workflow

1. **Propose Change** — Generate a change proposal with artifacts (proposal.md, design.md, specs, tasks.md)
2. **Apply Change** — Implement features following the generated task list
3. **Archive Change** — Sync delta specs to main specs and archive the change

#### OpenSpec Commands

```bash
# List available changes
openspec list

# Create a new change (spec-driven schema)
openspec propose <change-name> --schema spec-driven

# Apply a change (start implementation)
openspec apply <change-name>

# Check change status
openspec status --change <change-name>

# Archive a completed change
openspec archive <change-name>
```

#### Change Artifacts

Each OpenSpec change generates:

- **proposal.md** — Feature overview and objectives
- **design.md** — Technical design decisions and architecture
- **specs/** — Delta specifications for new/modified capabilities
- **tasks.md** — Detailed implementation task list

#### Spec Sync

Delta specs from completed changes are synced to `openspec/specs/` as permanent capability documentation. Currently documented capabilities:

- `activity-feed` — Activity feed component specifications
- `dashboard-layout` — Dashboard grid layout specifications
- `task-crud` — Task CRUD operations specifications
- `task-list` — Task list component specifications
- `task-overview-chart` — Task overview chart specifications
- `task-editing` — Task editing modal specifications
- `theme-toggle` — Theme toggle component specifications

### Component Development (Clean Separation)

1. Create pure component: `src/components/ui/ComponentName/ComponentName.tsx` (no Storybook deps)
2. Create component test: `src/components/ui/ComponentName/ComponentName.test.tsx`
3. Create Storybook story: `src/stories/UI/Components/ComponentName.stories.tsx` (imports from library)
4. Start Storybook: `pnpm storybook`
5. Develop component with live preview and controls
6. Run tests: `pnpm test`
7. Ensure linting and formatting: `pnpm lint && pnpm format`
8. Update library exports: `src/components/ui/index.ts`

### Import Patterns (Standardized)

#### Fc Component Imports (Mandatory)

```typescript
// ✅ CORRECT: Import from Fc barrel
import { FcButton, FcCard, FcTypography, DashboardIcon } from '../components/ui';

// ✅ CORRECT: Boolean variant API
<FcButton primary>Save</FcButton>
<FcButton outlined small>Cancel</FcButton>
<FcTypography h2>Title</FcTypography>
<FcChip high>Urgent</FcChip>

// ❌ FORBIDDEN: Direct MUI imports in app code (enforced by ESLint)
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
```

#### Domain Type Imports

```typescript
import type { Task, TaskFilter, DashboardStats } from '../types';
```

### Feature Development

1. **Read Architecture Guidelines**: Review [ARCHITECTURE.md](./ARCHITECTURE.md) before starting
2. **Create feature branch**: `git checkout -b feature/feature-name`
3. **Follow feature structure**:
   ```
   src/features/[feature-name]/
   ├── components/         # Presentational components
   ├── hooks/             # Feature-specific hooks
   ├── services/          # API layer
   └── types.ts           # TypeScript definitions
   ```
4. **Apply separation of concerns**: Container components (logic) + Presentational components (UI)
5. **Escalate state progressively**: Local → Feature → Global (only when needed)
6. **Write tests for presentational components** (unit tests only)
7. **Ensure all checks pass**: `pnpm type-check && pnpm lint && pnpm test:ci`
8. **Complete PR checklist**: All 6 architecture rules must be checked
9. **Submit pull request** for review using provided template

### Code Quality Standards

- **TypeScript**: Strict mode enabled, no `any` types
- **ESLint**: All rules must pass
- **Testing**: Minimum 80% code coverage
- **Components**: Must have accompanying tests and documentation

## 🎨 Theming and Styling

### Shared Theme Strategy

The project uses a **shared theme configuration** that ensures consistency between Storybook and production:

```typescript
// Both Storybook and production use the same theme
import { ThemeProviderWrapper } from './src/theme';

<ThemeProviderWrapper theme="light">
  {/* Components */}
</ThemeProviderWrapper>
```

### Theme Structure

- **src/theme/themes.ts** - Light and dark theme definitions with sidebar color tokens
- **src/theme/ThemeProvider.tsx** - Theme provider wrapper and sidebar colors export
- **src/theme/types.ts** - Custom palette type extensions
- **src/theme/index.ts** - Barrel export

### Theme Customization

The application uses Material UI's theming system with support for:

- **Light/Dark modes** with consistent configuration across Storybook and production
- **Shared color palettes** for brand consistency
- **Responsive typography** scaling
- **Component-specific overrides** for custom styling
- **Theme switching** controls in Storybook for testing

### Adding New Themes

```typescript
// theme/custom.ts
import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#your-brand-color',
    },
  },
  // ... custom theme configuration
});
```

## 🚀 Performance Considerations

### Optimization Techniques Implemented

- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination
- **Image Optimization**: Lazy loading and modern formats
- **Bundle Analysis**: Regular bundle size monitoring

### Performance Monitoring

```bash
# Analyze bundle size
pnpm build:analyze

# Lighthouse performance audit
pnpm build && npx lighthouse http://localhost:4173
```

## 🎨 Design Resources

### UX Mockups

- [Main Application Mockup](./docs/ux/mockups/task-manager-dashboard-mockup-design.png) - Complete UI design reference

View all mockups in the [`docs/ux/mockups/`](./docs/ux/mockups/) directory.

## 🤝 Contributing

This is a React application demonstrating best practices. Feel free to:

- **Use as reference** for your own projects
- **Suggest improvements** via issues
- **Learn from the code** and documentation
- **Share your own** learning experiences

## 📄 License

MIT License - feel free to use this project for learning and development.

---

**Built with ❤️ for the React community**
