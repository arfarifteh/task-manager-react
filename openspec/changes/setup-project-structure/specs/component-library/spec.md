## Fc (Fusion Core) UI Component Library

> All UI components live in `src/components/ui/`. Application code imports exclusively from this layer — zero direct MUI imports outside `src/components/ui/`.

---

### Requirement: Fc abstraction layer

The system SHALL provide an Fc (Fusion Core) component library that wraps Material UI. Application code SHALL NOT import directly from `@mui/material` or `@mui/icons-material`.

#### Scenario: Fc component naming

- **WHEN** developer creates an Fc component
- **THEN** it SHALL use the `Fc` prefix followed by the component name (e.g., `FcButton`, `FcCard`)
- **AND** SHALL be placed in `src/components/ui/Fc<Name>.tsx`
- **AND** SHALL be exported from `src/components/ui/index.ts`

#### Scenario: Fc component variant API

- **WHEN** developer uses an Fc component in application code
- **THEN** variants SHALL be expressed as boolean props (e.g., `<FcButton primary>`, `<FcChip high>`)
- **AND** boolean props SHALL map internally to MUI component props
- **AND** component SHALL accept additional props via spread for flexibility

#### Scenario: Import restriction enforcement

- **WHEN** developer writes application code (routes, features, pages)
- **THEN** they SHALL import only from `src/components/ui/`
- **AND** SHALL NOT import from `@mui/material` or `@mui/icons-material`
- **AND** only files inside `src/components/ui/` SHALL import from MUI packages

---

### Requirement: Fc component TypeScript interfaces

The system SHALL provide strict TypeScript interfaces for all Fc components with boolean variant props and pass-through support.

#### Scenario: Boolean variant props

- **WHEN** defining an Fc component interface
- **THEN** variant props SHALL be typed as optional booleans (e.g., `primary?: boolean`)
- **AND** a utility type SHALL resolve boolean props to the corresponding MUI prop values
- **AND** conflicting booleans SHALL have defined precedence (e.g., `primary` overrides `secondary`)

#### Scenario: Pass-through props

- **WHEN** Fc component needs to support additional MUI props
- **THEN** it SHALL extend or intersect with the underlying MUI component's props
- **AND** SHALL omit props that are controlled by boolean variants
- **AND** `sx` prop SHALL be forwarded to the underlying MUI component

#### Scenario: Generic component support

- **WHEN** an Fc component needs to work with different data types (e.g., `FcSelect`)
- **THEN** it SHALL use TypeScript generics with proper constraints

---

### Requirement: Fc layout primitives

The system SHALL wrap MUI layout components to maintain the zero-direct-import rule.

#### Scenario: FcBox usage

- **WHEN** developer needs a layout container
- **THEN** they SHALL use `FcBox` which wraps MUI Box
- **AND** SHALL support `sx`, `component`, and standard Box props

#### Scenario: FcStack usage

- **WHEN** developer needs a flex layout
- **THEN** they SHALL use `FcStack` which wraps MUI Stack
- **AND** SHALL support boolean shortcuts (e.g., `row`, `column`)

#### Scenario: FcGrid usage

- **WHEN** developer needs a responsive grid
- **THEN** they SHALL use `FcGrid` which wraps MUI Grid

---

### Requirement: Fc interactive components

The system SHALL wrap MUI interactive components with boolean variant APIs.

#### Scenario: FcButton variants

- **WHEN** developer renders a button
- **THEN** `<FcButton primary>` SHALL render MUI Button with `variant="contained"` and `color="primary"`
- **AND** `<FcButton secondary outlined>` SHALL render `variant="outlined"` and `color="secondary"`
- **AND** `<FcButton danger>` SHALL render `color="error"`
- **AND** `<FcButton small>` / `<FcButton large>` SHALL map to MUI `size` prop

#### Scenario: FcIconButton variants

- **WHEN** developer renders an icon button
- **THEN** `<FcIconButton>` SHALL wrap MUI IconButton
- **AND** SHALL support `small`, `primary` boolean props

#### Scenario: FcTextField usage

- **WHEN** developer renders a text input
- **THEN** `<FcTextField>` SHALL wrap MUI TextField
- **AND** SHALL support `fullWidth`, `error` boolean props

#### Scenario: FcSelect usage

- **WHEN** developer renders a select dropdown
- **THEN** `<FcSelect>` SHALL wrap MUI Select and MenuItem
- **AND** SHALL accept typed options array for rendering items

---

### Requirement: Fc data display components

The system SHALL wrap MUI data display components with simplified variant APIs.

#### Scenario: FcCard variants

- **WHEN** developer renders a card
- **THEN** `<FcCard elevated>` SHALL render with higher elevation/shadow
- **AND** `<FcCard outlined>` SHALL render with `variant="outlined"`
- **AND** `<FcCard noPadding>` SHALL skip CardContent padding wrapper

#### Scenario: FcChip variants

- **WHEN** developer renders a status/priority chip
- **THEN** `<FcChip high>` SHALL render with error color
- **AND** `<FcChip medium>` SHALL render with warning color
- **AND** `<FcChip low>` SHALL render with success color
- **AND** `<FcChip success>`, `<FcChip warning>`, `<FcChip error>` SHALL map to MUI colors

#### Scenario: FcTypography variants

- **WHEN** developer renders text
- **THEN** `<FcTypography h1>` SHALL render with `variant="h1"`
- **AND** `<FcTypography body>` SHALL render with `variant="body1"`
- **AND** `<FcTypography caption>` SHALL render with `variant="caption"`
- **AND** `<FcTypography secondary>` SHALL apply `color="text.secondary"`

#### Scenario: FcAvatar and FcBadge

- **WHEN** developer renders a user avatar or notification badge
- **THEN** `<FcAvatar small>` / `<FcAvatar large>` SHALL map to size presets
- **AND** `<FcBadge error>` SHALL render with `color="error"`

---

### Requirement: Fc feedback components

The system SHALL wrap MUI feedback components for error states, loading, and alerts.

#### Scenario: FcAlert variants

- **WHEN** developer shows a user notification
- **THEN** `<FcAlert error>` SHALL render MUI Alert with `severity="error"`
- **AND** SHALL support `title` prop that renders MUI AlertTitle
- **AND** `<FcAlert success>`, `<FcAlert warning>`, `<FcAlert info>` SHALL map accordingly

#### Scenario: FcSkeleton variants

- **WHEN** developer shows a loading placeholder
- **THEN** `<FcSkeleton text>` SHALL render with `variant="text"`
- **AND** `<FcSkeleton rectangular>` SHALL render with `variant="rectangular"`
- **AND** `<FcSkeleton circular>` SHALL render with `variant="circular"`

#### Scenario: FcCircularProgress

- **WHEN** developer shows a loading spinner
- **THEN** `<FcCircularProgress>` SHALL wrap MUI CircularProgress

---

### Requirement: Fc navigation components

The system SHALL wrap MUI navigation components for sidebar and tabs.

#### Scenario: FcDrawer variants

- **WHEN** developer renders a sidebar
- **THEN** `<FcDrawer permanent>` SHALL render with `variant="permanent"`
- **AND** `<FcDrawer temporary>` SHALL render with `variant="temporary"`

#### Scenario: FcList and FcListItemButton

- **WHEN** developer renders a navigation list
- **THEN** `<FcList>` SHALL wrap MUI List
- **AND** `<FcListItemButton>` SHALL wrap MUI ListItemButton, ListItemIcon, and ListItemText
- **AND** `<FcListItemButton selected>` SHALL apply active styling

#### Scenario: FcTabs and FcTab

- **WHEN** developer renders tabbed content
- **THEN** `<FcTabs>` SHALL wrap MUI Tabs
- **AND** `<FcTab>` SHALL wrap MUI Tab

---

### Requirement: Fc higher-level composites

The system SHALL support creating higher-level Fc composites when UI patterns repeat across features.

#### Scenario: Composite identification

- **WHEN** a UI pattern (e.g., status chip, action button group, summary card) appears in 3+ places
- **THEN** a composite Fc component SHALL be created (e.g., `FcStatusChip`, `FcActionGroup`)
- **AND** SHALL be added to `src/components/ui/` and exported from barrel

---

### Requirement: Fc component documentation

The system SHALL document all Fc components with JSDoc, Storybook stories, and usage examples.

#### Scenario: JSDoc on Fc components

- **WHEN** developer creates an Fc component
- **THEN** it SHALL include JSDoc comments describing each boolean variant prop

#### Scenario: Storybook stories

- **WHEN** Fc component is created
- **THEN** it SHALL have a corresponding Storybook story
- **AND** story SHALL display all boolean variant combinations
- **AND** story SHALL include a Playground for interactive prop exploration

---

### Requirement: Fc component testing

The system SHALL provide test coverage for all Fc components.

#### Scenario: Rendering tests

- **WHEN** developer writes tests for an Fc component
- **THEN** tests SHALL verify boolean variant props map to correct MUI output
- **AND** SHALL test default rendering (no variant booleans)

#### Scenario: Interaction tests

- **WHEN** Fc component has user interactions (click, input, select)
- **THEN** tests SHALL cover event handler forwarding and state changes

#### Scenario: Accessibility tests

- **WHEN** Fc component is tested
- **THEN** tests SHALL verify ARIA attributes, keyboard navigation, and screen reader support
