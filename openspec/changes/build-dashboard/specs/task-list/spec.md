# Task List

## Overview

Tabbed, filterable, sortable list of tasks. Core interaction surface of the dashboard. Each task row displays title, priority chip, due date, status indicator, and action buttons.

## Requirements

### Tabs

- 3 tabs: "All Tasks" (default), "In Progress", "Completed"
- Tab selection filters tasks by status
- "All Tasks" shows all statuses

### Filters & Sort

- Filter dropdown: All / High / Medium / Low (by priority)
- Sort dropdown: Due Date (default) / Priority / Title
- Positioned right-aligned above the task list, inline with "My Tasks" heading

### Task Row

Each row displays:

| Element       | Component            | Details                                                        |
| ------------- | -------------------- | -------------------------------------------------------------- |
| Checkbox area | FcBox                | Visual indicator only (not interactive checkbox for now)       |
| Title         | FcTypography         | Task title text                                                |
| Priority chip | FcChip               | High (error/red), Medium (warning/orange), Low (success/green) |
| Due date      | FcTypography caption | "Due: Apr 25, 2026" format                                     |
| Status action | FcButton / Icon      | Pending → "Start" button, Completed → green checkmark          |
| Action icons  | FcIconButton × 3     | Edit (placeholder), Delete (functional)                        |

### Task Row States

```
pending:      ☐ Title [High] Due: date  [Start]  📝 🗑️
in-progress:  ☐ Title [Med]  Due: date           📝 🗑️
completed:    ☑ Title [Low]  Due: date  ✓        📝 🗑️
```

## Data Source

- `taskService.getTasks()` → filtered by `useTaskFilters` hook
- Actions via `useTaskActions` hook

## Fc Components Used

- FcTabs, FcTab — tab navigation
- FcSelect — filter and sort dropdowns
- FcBox — row container, list container
- FcTypography — title, due date, heading
- FcChip — priority indicator
- FcIconButton — edit, delete actions
- FcButton — "Start" action
