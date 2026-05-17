## 1. Theme Context & Hook

- [x] 1.1 Create `src/theme/ThemeContext.tsx` — ThemeContext provider with `mode`, `toggleTheme`, `setTheme`
- [x] 1.2 Implement localStorage persistence (`'theme-mode'` key) with synchronous read on init
- [x] 1.3 Implement OS `prefers-color-scheme` detection as fallback when no localStorage value
- [x] 1.4 Create `useThemeMode()` hook that consumes ThemeContext
- [x] 1.5 Refactor `ThemeProviderWrapper` to use ThemeContext internally (remove hardcoded `theme` prop)
- [x] 1.6 Update `src/theme/index.ts` barrel to export new context, hook, and updated provider

## 2. Sidebar Color Adaptation

- [x] 2.1 Define dark-mode sidebar color tokens in `src/theme/themes.ts`
- [x] 2.2 Export `getSidebarColors(mode: ThemeMode)` function that returns per-mode tokens
- [x] 2.3 Update `root.tsx` Sidebar component to read sidebar colors from context/theme mode

## 3. FcThemeToggle Component

- [x] 3.1 Add `LightModeIcon` and `DarkModeIcon` to `src/components/ui/icons.ts`
- [x] 3.2 Create `src/components/ui/FcThemeToggle.tsx` — self-contained icon toggle using `useThemeMode()`
- [x] 3.3 Export `FcThemeToggle` from `src/components/ui/index.ts` barrel

## 4. Header Integration

- [x] 4.1 Add `<FcThemeToggle />` to `AppHeader` in `root.tsx` (next to notifications, top-right)

## 5. Settings Page

- [x] 5.1 Add "Theme" section to `settings.tsx` with labeled toggle (Dark Mode on/off)
- [x] 5.2 Ensure Settings toggle syncs with header toggle via shared context

## 6. Verification

- [x] 6.1 Run `pnpm type-check && pnpm lint && pnpm build` — all pass
- [x] 6.2 Manual test: toggle from header, verify UI switches and sidebar adapts
- [x] 6.3 Manual test: toggle from Settings, verify header icon syncs
- [x] 6.4 Manual test: refresh page, verify persisted theme is restored
- [x] 6.5 Manual test: clear localStorage, verify OS preference is detected
