# Development Workflow Guide

This guide helps you get started with the development workflow for your React learning project.

## Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Run Storybook (for component development):**
   ```bash
   npm run storybook
   ```

## Available Scripts

### Development

- `npm run dev` - Start Vite development server
- `npm run storybook` - Start Storybook for component development
- `npm run preview` - Preview production build

### Code Quality

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

### Testing

- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Run tests with coverage
- `npm run test:ui` - Open Vitest UI

### Build

- `npm run build` - Build for production
- `npm run build:analyze` - Build and analyze bundle size
- `npm run build-storybook` - Build Storybook static site

## Development Workflow

### 1. Feature Development

1. Create feature branch: `git checkout -b feature/your-feature`
2. Work on your feature in `src/features/`
3. Test with Storybook: `npm run storybook`
4. Run tests: `npm run test`
5. Check types: `npm run type-check`
6. Format code: `npm run format`
7. Lint code: `npm run lint:fix`

### 2. Component Development

1. Create component in `src/components/ui/`
2. Add Storybook stories: `ComponentName.stories.tsx`
3. Write tests: `ComponentName.test.tsx`
4. Update documentation: `src/components/ui/README.md`
5. Test in Storybook: `npm run storybook`

### 3. Code Quality Checks

Before committing, run:

```bash
npm run type-check
npm run lint:fix
npm run format
npm run test
```

## Learning Resources

### Interactive Learning

- **Storybook Learning Section** - Access via `pnpm run storybook` → "Learning/React Patterns"
- Interactive demonstrations of React patterns with live examples

### Project Structure

- `src/features/` - Feature-based organization
- `src/components/ui/` - Reusable UI components
- `src/hooks/` - Custom React hooks
- `src/utils/` - Utility functions
- `src/types/` - TypeScript type definitions

### Development Tools

- **Storybook** - Component development and documentation
- **Vitest** - Unit testing
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **TypeScript** - Type safety

## Troubleshooting

### TypeScript Errors

Many TypeScript errors are expected until dependencies are installed:

```bash
npm install
```

### Prettier Auto-Format

If auto-format on save doesn't work:

1. Install Prettier VS Code extension
2. Check `.vscode/settings.json` configuration
3. Restart VS Code

### Storybook Issues

If Storybook doesn't start:

```bash
npm install @storybook/react-vite @storybook/addon-essentials --save-dev
```

## Next Steps

1. **Explore the components** in Storybook
2. **Learn React patterns** in Storybook's "Learning/React Patterns" section
3. **Create your first feature** in `src/features/`
4. **Write tests** for your components
5. **Experiment with patterns** from the interactive learning examples

Happy coding!
