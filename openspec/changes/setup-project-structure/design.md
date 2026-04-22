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
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest --coverage",
  "test:watch": "vitest --watch"
}
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

**Next Steps (Future):**

- Build component library based on Storybook patterns
- Create task management features using learned patterns
- Expand interactive learning examples with advanced patterns
- Add accessibility testing in Storybook

## Open Questions

**Resolved:**

- **Routing**: React Router (can migrate later if needed)
- **Styling**: Material UI (MUI) component library
- **State Management**: Wait until features demand it

**Additional Learning Opportunities:**

- What advanced React patterns do you want to explore (Compound Components, Render Props, etc.)?
- Any specific performance optimization techniques for CSR you want to practice?
- Should we add accessibility features as a learning focus?
- Want to explore build optimization and code splitting strategies for CSR?
- Interested in learning about client-side state management patterns?
- Want to experiment with progressive web app (PWA) features?
