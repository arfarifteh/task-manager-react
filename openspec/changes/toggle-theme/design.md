## Context

The app has light and dark MUI themes defined in `src/theme/themes.ts` but the root layout hardcodes `theme="light"`. The `ThemeProviderWrapper` accepts a `theme` prop but has no runtime switching. Sidebar color tokens are static constants. No persistence or OS preference detection exists.

## Goals / Non-Goals

**Goals:**

- Provide a React context for theme mode with toggle/set capabilities
- Persist user preference in `localStorage`; default to OS `prefers-color-scheme`
- Expose a compact toggle in the app header and a labeled control in Settings
- Adapt sidebar colors per theme mode
- Follow the Fc layer rule: toggle component is an Fc wrapper

**Non-Goals:**

- Custom theme creation UI (beyond light/dark)
- Per-page or per-component theme overrides
- Server-side persistence of theme preference
- Animated theme transition effects

## Decisions

### 1. Theme state via React Context (not Zustand)

**Choice**: `ThemeContext` + `useThemeMode()` hook in `src/theme/`.

**Rationale**: Theme is a cross-cutting concern but only needs two values (`'light' | 'dark'`) and a toggle function. A React context keeps it simple with zero extra dependencies. If state management grows, it can be migrated to Zustand later per Rule 3 (progressive escalation).

**Alternative rejected**: Zustand store — overkill for a single boolean-like value with no async logic.

### 2. localStorage + prefers-color-scheme fallback

**Choice**: On mount, read `localStorage('theme-mode')`. If absent, read `window.matchMedia('(prefers-color-scheme: dark)')`. On toggle, write to `localStorage`.

**Rationale**: Covers first-visit (OS default) and returning-visit (remembered choice) without any backend.

### 3. Per-mode sidebar color tokens

**Choice**: Export `sidebarColors` as a function of `ThemeMode` from `themes.ts`, returning different token sets for light and dark modes.

**Rationale**: The sidebar is a custom-styled area outside MUI's palette auto-switching. Explicit tokens per mode keep it consistent.

### 4. FcThemeToggle as an Fc component

**Choice**: `FcThemeToggle.tsx` wrapping an `FcIconButton` with sun/moon icons. Uses `useThemeMode()` internally.

**Rationale**: Follows the Fc layer pattern. Self-contained — consumers just drop `<FcThemeToggle />` with no props needed.

## Risks / Trade-offs

- **Flash of wrong theme on load** → Mitigated by reading localStorage synchronously in context initializer (no useEffect delay)
- **Sidebar hardcoded colors outside MUI palette** → Mitigated by making `sidebarColors` theme-aware and exporting from context
- **OS preference listener** → Not adding a live listener for `prefers-color-scheme` changes (user must toggle manually after first load). Low risk since explicit user choice takes priority.
