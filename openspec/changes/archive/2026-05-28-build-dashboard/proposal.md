## Summary

Build the dashboard feature — the main landing page of the Task Manager application. The dashboard implements the full UX mockup (`docs/ux/mockups/task-manager-dashboard-mockup-design.png`) as a feature-based module under `src/features/dashboard/`.

## Motivation

The project foundation (architecture, Fc layer, types, mock data, routing, theme) is complete via the `setup-project-structure` change. The dashboard is the first real feature and the primary user-facing page. Building it validates the architecture and delivers the core user experience.

## Scope

### In Scope

- Dashboard grid layout matching mockup zones
- Stats cards row (Tasks Today, In Progress, Completed) with live mock data
- Task list with tabs (All / In Progress / Completed), filters, and sort
- Task CRUD: create via Quick Add form, start, complete, edit, delete
- Task Overview donut chart (Recharts)
- Upcoming Deadlines panel
- Activity Feed timeline
- All components use Fc layer exclusively (no direct MUI imports)
- Unit tests for presentational components and hooks

### Out of Scope

- Backend/API integration (uses existing mock services)
- Real-time updates or WebSocket
- Analytics page, Calendar page, My Tasks page (separate features)
- Drag-and-drop task reordering
- Advanced form validation (keep it simple for now)

## Capabilities

### New Capabilities

- `dashboard-layout`: Grid layout with stats, main content, and right sidebar zones
- `stats-cards`: Read-only stat cards displaying task counts from mock data
- `task-list`: Tabbed task list with filter/sort and per-row status actions
- `task-crud`: Create tasks via Quick Add form; start, complete, delete tasks
- `task-overview-chart`: Donut chart showing task status distribution (Recharts)
- `upcoming-deadlines`: List of tasks approaching their due date
- `activity-feed`: Timeline of recent task activities with colored indicators

### Modified Capabilities

- `app-shell`: Route `src/routes/index.tsx` updated to render DashboardLayout

## Implementation Strategy

**5 phases, each producing a visible, testable result:**

| Phase                            | Delivers                                             | Depends On          |
| -------------------------------- | ---------------------------------------------------- | ------------------- |
| 1 — Shell & Static Layout        | Dashboard grid + Stats Cards (read-only)             | Nothing (mock data) |
| 2 — Task List                    | Tabs, filters, task rows, status display             | Phase 1 layout      |
| 3 — Task CRUD                    | Quick Add form + row actions (start/complete/delete) | Phase 2 task list   |
| 4 — Task Overview Chart          | Donut chart panel (Recharts)                         | Phase 1 layout      |
| 5 — Deadlines, Activity & Polish | Upcoming Deadlines, Activity Feed, final styling     | Phases 2–3          |

## Dependencies

### Existing (from setup-project-structure)

- Fc UI component library (`src/components/ui/`)
- Domain types (`src/types/task.ts`, `dashboard.ts`, `activity.ts`)
- Mock services (`src/services/taskService.ts`, `dashboardService.ts`, `activityService.ts`)
- Theme system with light/dark mode
- React Router with co-located routes

### New

- **Recharts** — declarative React charting library (built on D3) for the donut chart

## Chart Library Decision

**Chosen: Recharts** over D3.js, Nivo, Chart.js.

- Declarative React components (`<PieChart>`, `<Pie>`, `<Cell>`)
- Built on D3 under the hood — can drop to D3 if needed later
- Lightest lift for a single donut chart (~15 lines vs ~60+ in raw D3)
- Easy to theme with MUI palette colors
- Most popular React chart library, well-maintained
