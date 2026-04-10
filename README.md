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

### Testing
- **Vitest** - Fast unit testing framework
- **React Testing Library** - Component testing utilities
- **MSW** - API mocking for integration tests

## 📁 Project Architecture

```
src/
├── features/                 # Feature-based modules
│   ├── task-management/      # Task CRUD functionality
│   │   ├── components/       # Feature-specific components
│   │   ├── hooks/           # Feature-specific hooks
│   │   ├── types/           # Feature-specific types
│   │   └── index.ts         # Public API exports
│   └── user-management/     # User-related features
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button/         # MUI extensions
│   │   ├── TextField/      # Custom input components
│   │   └── index.ts        # Barrel exports
│   └── layout/            # Layout components
├── pages/                 # Route-level components
│   ├── Dashboard/          # Main dashboard page
│   ├── Tasks/             # Task management pages
│   └── Profile/           # User profile pages
├── services/              # API and data layer
│   ├── api/               # API client configuration
│   ├── hooks/             # Data fetching hooks
│   └── types/             # API type definitions
├── hooks/                 # Global custom hooks
│   ├── useLocalStorage.ts  # Local storage utilities
│   ├── useDebounce.ts     # Performance utilities
│   └── index.ts           # Hook exports
├── utils/                 # Pure utility functions
│   ├── date.ts            # Date formatting utilities
│   ├── validation.ts      # Form validation helpers
│   └── constants.ts       # Application constants
├── types/                 # Global TypeScript types
│   ├── api.ts             # API response types
│   ├── common.ts          # Shared utility types
│   └── index.ts           # Type exports
├── assets/                # Static assets
│   ├── images/            # Image files
│   ├── icons/             # SVG icons
│   └── styles/            # Global styles
├── theme/                 # MUI theme configuration
│   ├── light.ts           # Light theme
│   ├── dark.ts            # Dark theme
│   └── index.ts           # Theme provider setup
└── App.tsx               # Root application component
```

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

# Building
pnpm build            # Build for production
pnpm build:analyze    # Build with bundle analyzer

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm format           # Format code with Prettier
pnpm type-check       # Run TypeScript type checking

# Testing
pnpm test             # Run tests in watch mode
pnpm test:run         # Run tests once
pnpm test:coverage    # Run tests with coverage report
pnpm test:ui          # Run tests with Vitest UI
```

## 🧪 Testing Strategy

### Unit Testing
- **Component Tests**: Individual component behavior
- **Hook Tests**: Custom hook functionality
- **Utility Tests**: Pure function validation

### Integration Testing
- **User Workflows**: Complete user journey testing
- **API Integration**: Mocked API responses
- **Routing**: Navigation and route guards

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

### Feature Development
1. Create feature branch: `git checkout -b feature/feature-name`
2. Follow project structure for new features
3. Write tests for new functionality
4. Ensure all tests pass: `pnpm test`
5. Run linting and formatting: `pnpm lint && pnpm format`
6. Submit pull request for review

### Code Quality Standards
- **TypeScript**: Strict mode enabled, no `any` types
- **ESLint**: All rules must pass
- **Testing**: Minimum 80% code coverage
- **Components**: Must have accompanying tests and documentation

## 🎨 Theming and Styling

### Theme Customization
The application uses Material UI's theming system with support for:
- **Light/Dark modes** with system preference detection
- **Custom color palettes** for brand consistency
- **Responsive typography** scaling
- **Component-specific overrides** for custom styling

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
