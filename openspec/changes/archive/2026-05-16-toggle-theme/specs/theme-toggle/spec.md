## ADDED Requirements

### Requirement: Theme mode context

The system SHALL provide a React context that manages the current theme mode (`'light'` or `'dark'`) and exposes it to all components via a `useThemeMode()` hook.

#### Scenario: Context provides mode and toggle

- **WHEN** a component calls `useThemeMode()`
- **THEN** it SHALL receive the current `mode` (`'light'` or `'dark'`), a `toggleTheme()` function, and a `setTheme(mode)` function

#### Scenario: Context wraps the MUI ThemeProvider

- **WHEN** the app renders
- **THEN** the `ThemeContext` provider SHALL wrap MUI's `ThemeProvider` and pass the active MUI theme object corresponding to the current mode

---

### Requirement: Theme persistence in localStorage

The system SHALL persist the user's theme choice in `localStorage` under the key `'theme-mode'`.

#### Scenario: User toggles theme

- **WHEN** user toggles the theme
- **THEN** the new mode SHALL be written to `localStorage('theme-mode')`
- **AND** the UI SHALL immediately reflect the new theme

#### Scenario: Returning visit

- **WHEN** user loads the app and `localStorage('theme-mode')` contains a valid value
- **THEN** the app SHALL use that value as the initial theme mode

---

### Requirement: OS preference detection as default

The system SHALL detect the operating system's preferred color scheme on first visit when no localStorage value exists.

#### Scenario: First visit with dark OS preference

- **WHEN** user visits for the first time (no localStorage value)
- **AND** OS reports `prefers-color-scheme: dark`
- **THEN** the app SHALL default to dark mode

#### Scenario: First visit with light OS preference

- **WHEN** user visits for the first time (no localStorage value)
- **AND** OS reports `prefers-color-scheme: light` or no preference
- **THEN** the app SHALL default to light mode

---

### Requirement: Header theme toggle

The system SHALL display a compact theme toggle in the app header's top-right area.

#### Scenario: Toggle in header

- **WHEN** app header renders
- **THEN** a sun/moon icon toggle SHALL be visible next to the notification icon
- **AND** clicking it SHALL toggle between light and dark mode

#### Scenario: Icon reflects current mode

- **WHEN** theme is light mode
- **THEN** toggle SHALL display a moon icon (indicating "switch to dark")
- **WHEN** theme is dark mode
- **THEN** toggle SHALL display a sun icon (indicating "switch to light")

---

### Requirement: Settings page theme control

The system SHALL provide a theme toggle control in the Settings page with a descriptive label.

#### Scenario: Settings theme section

- **WHEN** user navigates to Settings
- **THEN** a "Theme" section SHALL display with a labeled toggle (e.g., "Dark Mode")
- **AND** the toggle state SHALL reflect the current theme mode

#### Scenario: Settings toggle syncs with header

- **WHEN** user changes theme from Settings
- **THEN** the header toggle SHALL immediately reflect the change
- **AND** vice versa

---

### Requirement: Sidebar adapts to theme mode

The system SHALL provide per-mode sidebar color tokens so the sidebar appearance adapts to the current theme.

#### Scenario: Light mode sidebar

- **WHEN** theme is light mode
- **THEN** sidebar SHALL use dark navy background with light text (current design)

#### Scenario: Dark mode sidebar

- **WHEN** theme is dark mode
- **THEN** sidebar SHALL use a darker background with adjusted text and active-state colors for appropriate contrast

---

### Requirement: FcThemeToggle component

The system SHALL provide an `FcThemeToggle` Fc wrapper component that encapsulates the toggle logic.

#### Scenario: Self-contained toggle

- **WHEN** developer uses `<FcThemeToggle />`
- **THEN** it SHALL render a clickable icon button that toggles the theme
- **AND** SHALL not require any props (uses context internally)
- **AND** SHALL be exported from `src/components/ui/index.ts`
