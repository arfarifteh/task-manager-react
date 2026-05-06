# Task Manager React

A learning-focused React application built with modern technologies to explore advanced React patterns, performance optimization, and scalable architecture practices.

## 🎯 Learning Objectives

This project demonstrates professional React development practices and serves as a comprehensive learning resource for:

- **Feature-based Architecture** - Scalable project organization patterns
- **Modern React Patterns** - Compound components, custom hooks, render props
- **Material UI Integration** - Component library customization and theming
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

- **Material UI (MUI) v6** - Component library with advanced theming
- **Emotion** - CSS-in-JS styling (MUI dependency)

### Routing & Navigation

- **React Router v6** - Declarative routing with TypeScript support

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
├── features/                # Domain features (MANDATORY structure)
│   ├── tasks/              # Task management domain
│   │   ├── components/     # Task-specific UI components
│   │   ├── hooks/          # Task business logic hooks
│   │   ├── services/       # Task API layer
│   │   └── types.ts        # Task TypeScript definitions
│   └── auth/               # Authentication domain (future)
├── components/ui/           # Shared design system (REUSABLE ONLY)
│   ├── Button/             # Button component (3+ use cases required)
│   ├── TextField/          # TextField component
│   └── Card/               # Card component
├── shared/                  # Cross-cutting concerns
│   ├── hooks/              # Generic hooks (useDebounce, etc.)
│   ├── services/           # API client, error handling
│   └── utils/              # Date, validation, formatting
├── routes/                  # React Router co-located routes
│   ├── root.tsx            # Layout with ThemeProvider
│   ├── index.tsx           # Home page
│   └── tasks.tsx           # Tasks page
├── stories/UI/              # Storybook documentation
├── theme/                   # Shared theme configuration
├── assets/                  # Static assets
└── App.tsx                  # Root application component
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

#### Component Library Imports

```typescript
// Multiple components - use barrel import
import { Button, TextField, Card } from '../components/ui';

// Single component - use individual import (better tree-shaking)
import { Button } from '../components/ui/Button';

// Grouped imports for categories
import { InputComponents, DisplayComponents } from '../components/ui';

// TypeScript types
import type { ButtonProps, TextFieldProps } from '../components/ui';
```

#### Path Aliases (Configured)

```typescript
// Using path aliases for cleaner imports
import { Button } from '@ui/Button';
import { Button, TextField } from '@ui';
import type { ButtonProps } from '@ui';
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

- **src/theme/light.ts** - Light theme configuration
- **src/theme/dark.ts** - Dark theme configuration
- **src/theme/index.ts** - Theme provider wrapper and exports

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

## 🤝 Contributing

This is a personal learning project designed to demonstrate React best practices. Feel free to:

- **Use as reference** for your own projects
- **Suggest improvements** via issues
- **Learn from the code** and documentation
- **Share your own** learning experiences

## 📄 License

MIT License - feel free to use this project for learning and development.

---

**Built with ❤️ for the React community**
