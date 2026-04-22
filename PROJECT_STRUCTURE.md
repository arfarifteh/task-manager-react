# Project Structure Guidelines

## Current Structure (Organic Growth)

```
src/
components/ui/          # Reusable UI components (created as needed)
stories/                # Storybook stories (separate from components)
assets/                 # Static assets (organized as needed)
```

## Growth Principles

1. **Create directories only when needed** - Don't pre-create empty folder structures
2. **Organic development** - Structure evolves with component development
3. **Avoid over-engineering** - Start simple, add complexity as required
4. **Clean separation** - Keep UI components pure, stories separate

## Future Directories (Create When Needed)

- `src/hooks/` - Custom React hooks (when first hook is created)
- `src/types/` - TypeScript types (when complex types are needed)
- `src/utils/` - Utility functions (when first utility is needed)
- `src/services/` - API layer (when API integration is needed)
- `src/features/` - Feature modules (when first feature is implemented)

## Component Structure

Each UI component will follow this pattern when created:

```
src/components/ui/ComponentName/
  ComponentName.tsx
  ComponentName.test.tsx
  index.ts
```
