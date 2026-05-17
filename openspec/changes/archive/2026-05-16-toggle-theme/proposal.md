## Why

The application currently hardcodes `theme="light"` in the root layout. Users have no way to switch to dark mode. Adding a theme toggle improves usability (reduced eye strain, personal preference) and demonstrates the theming infrastructure already scaffolded in `src/theme/`.

## What Changes

- Add a `ThemeContext` and `useThemeMode()` hook for centralized theme state management
- Persist theme choice in `localStorage`; default to OS `prefers-color-scheme` on first visit
- Add a compact sun/moon toggle in the app header (top-right corner)
- Add a labeled theme toggle section in the Settings page
- Define per-mode sidebar color tokens so the sidebar adapts to light/dark mode
- Create `FcThemeToggle` Fc wrapper component for the toggle switch
- Add sun/moon icons to `icons.ts` re-export barrel

## Capabilities

### New Capabilities

- `theme-toggle`: Dark/light mode toggle with persistence, OS preference detection, header toggle, and settings page control

### Modified Capabilities

## Impact

- `src/theme/` — new context, refactored provider, per-mode sidebar tokens
- `src/components/ui/` — new FcThemeToggle component, updated icons and barrel
- `src/routes/root.tsx` — header toggle, context-driven sidebar colors
- `src/routes/settings.tsx` — theme settings section
- No breaking changes to existing components or APIs
