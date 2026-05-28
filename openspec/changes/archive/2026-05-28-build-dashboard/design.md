## Context

The project foundation is complete: Fc UI layer, domain types, mock data services, routing, and theme are all in place. This change builds the dashboard — the main landing page — as the first feature module under `src/features/dashboard/`.

> Reference mockup: `docs/ux/mockups/task-manager-dashboard-mockup-design.png`

## Goals / Non-Goals

**Goals:**

- Implement the full dashboard mockup as a feature module
- Follow feature-based architecture (co-located components, hooks, types)
- Use Fc layer exclusively — no direct MUI imports
- Deliver in 5 incremental phases, each producing a testable result
- Keep task actions simple (Start → in-progress, Complete → completed, Delete → remove)

**Non-Goals:**

- Backend API integration (mock services are sufficient)
- Advanced form validation or multi-step workflows
- Detailed task editing UI (edit button is a placeholder for now)
- Real-time updates or notifications
- Other pages (Analytics, Calendar, My Tasks — separate changes)

## Decisions

**Feature Structure: Co-located under `src/features/dashboard/`**

- Components, hooks, and types live together in the feature directory
- Only shared types from `src/types/` and Fc components from `src/components/ui/` are imported
- Rationale: Follows ARCHITECTURE.md Rule 1 (feature-based structure)

**Charting: D3.js (d3-shape + d3-scale) with React DOM pattern**

- Uses D3 for math (pie layout, arc generator) and React JSX for SVG rendering — no `useEffect`/`useRef` DOM manipulation
- `FcDonutChart` created in `src/components/ui/` as a reusable Fc wrapper — consistent with the Fc layer convention and reusable elsewhere in the app
- `FcDonutSegment` and `FcDonutChartProps` exported from the ui barrel
- `showLegend` boolean prop (default `false`) encapsulates chart + legend + hover state inside `FcDonutChart` — consumer passes data only, no lifted state needed
- Hover interactions: segment expand (+8px outerRadius) + center label tooltip on chart hover; legend hover fades non-active rows — all internal to `FcDonutChart`

**Task Actions: Simplest possible for now**

- "Start" button: sets status from `pending` → `in-progress`
- Green checkmark: sets status to `completed`
- Delete icon: removes task from list
- Edit icon: placeholder (no edit form yet)
- Rationale: Deliver core interaction first, refine scenarios later

**State Management: Parent-provides-props + custom hooks**

- DashboardLayout is the data owner — calls services and passes data as props to presentational children
- `useTaskFilters` — manages filter/sort/tab state locally
- `useTaskActions` — wraps taskService CRUD calls, triggers parent re-fetch
- `useDashboard` — aggregates all service calls into a single hook for DashboardLayout
- Children are pure presentational components (easy to test, no service coupling)
- Coordinated refreshes: CRUD action → parent re-fetches → all panels update
- Rationale: Follows ARCHITECTURE.md Rule 3 (progressive state escalation) + React best practice of lifting state up

## Mockup Decomposition

```
┌──────────────────────────────────────────────────────────────────────────┐
│ SIDEBAR (root.tsx)    │  HEADER (root.tsx)                               │
│ ✓ Already implemented │  ✓ Already implemented                           │
│                       │──────────────────────────────────────────────────│
│                       │  A ─ STATS CARDS ROW (Phase 1)                   │
│                       │  ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│                       │  │Tasks Today│ │In Progress│ │Completed │        │
│                       │  │  count    │ │  count    │ │  count   │        │
│                       │  │🟢 label  │ │🔵 label  │ │🟡 label  │        │
│                       │  └──────────┘ └──────────┘ └──────────┘        │
│                       │──────────────────────────────────┬───────────────│
│                       │  B ─ QUICK ADD TASK (Phase 3)    │ D ─ TASK      │
│                       │  [Title________] [+ Add Task]    │ OVERVIEW      │
│                       │  Priority: [▼]   Due Date: [▼]   │ (Phase 4)     │
│                       │──────────────────────────────────│ Donut Chart   │
│                       │  C ─ TASK LIST (Phase 2)         │───────────────│
│                       │  Filter: [▼]  Sort: [▼]          │ E ─ UPCOMING  │
│                       │  [All Tasks] [In Progress] [Done]│ DEADLINES     │
│                       │  ☐ Task 1  High   Due: date      │ (Phase 5)     │
│                       │  ☐ Task 2  Medium Due: date      │               │
│                       │  ☑ Task 3  Low    Due: date  ✓   │               │
│                       │──────────────────────────────────│               │
│                       │  F ─ ACTIVITY FEED (Phase 5)     │               │
│                       │  🔵 Completed "task" · 5h ago    │               │
│                       │  🔴 New task "task" · 1d ago     │               │
│                       │  🟢 Task due soon! · 2d ago      │               │
└───────────────────────┴──────────────────────────────────┴───────────────┘
```

### Zone → Phase Mapping

| Zone | Component                                | Phase |
| ---- | ---------------------------------------- | ----- |
| A    | StatsCard, StatsCardsRow                 | 1     |
| B    | QuickAddTask                             | 3     |
| C    | TaskTabs, TaskFilters, TaskRow, TaskList | 2     |
| D    | TaskOverviewChart                        | 4     |
| E    | UpcomingDeadlines                        | 5     |
| F    | ActivityFeed, ActivityItem               | 5     |

## Feature Structure

```
src/features/dashboard/
├── components/
│   ├── DashboardLayout.tsx       # CSS Grid container (Phase 1)
│   ├── StatsCard.tsx             # Single stat card (Phase 1)
│   ├── StatsCardsRow.tsx         # 3-card row (Phase 1)
│   ├── TaskTabs.tsx              # All/In Progress/Completed tabs (Phase 2)
│   ├── TaskFilters.tsx           # Filter + Sort dropdowns (Phase 2)
│   ├── TaskRow.tsx               # Single task row with actions (Phase 2)
│   ├── TaskList.tsx              # Composes tabs + filters + rows (Phase 2)
│   ├── QuickAddTask.tsx          # Add task form (Phase 3)
│   ├── TaskOverviewChart.tsx     # Donut chart (Phase 4)
│   ├── UpcomingDeadlines.tsx     # Deadline list (Phase 5)
│   ├── ActivityFeed.tsx          # Activity timeline (Phase 5)
│   └── ActivityItem.tsx          # Single activity entry (Phase 5)
├── hooks/
│   ├── useTaskFilters.ts         # Filter/sort state (Phase 2)
│   ├── useTaskActions.ts         # CRUD operations (Phase 3)
│   └── useDashboard.ts           # Aggregate dashboard data (Phase 5)
├── types.ts                       # Dashboard-specific types (Phase 1)
└── index.ts                       # Feature barrel export
```

## Component → Fc Mapping

| Component         | Fc Components Used                                    |
| ----------------- | ----------------------------------------------------- |
| DashboardLayout   | FcBox (CSS Grid container)                            |
| StatsCard         | FcCard, FcTypography, FcBox                           |
| StatsCardsRow     | FcBox (flex row)                                      |
| TaskTabs          | FcTabs, FcTab                                         |
| TaskFilters       | FcSelect, FcBox                                       |
| TaskRow           | FcBox, FcTypography, FcChip, FcIconButton             |
| TaskList          | FcBox, FcTypography                                   |
| QuickAddTask      | FcCard, FcTextField, FcSelect, FcButton, FcTypography |
| TaskOverviewChart | FcCard, FcTypography, FcDonutChart                    |
| UpcomingDeadlines | FcCard, FcTypography, FcBox                           |
| ActivityFeed      | FcCard, FcTypography, FcBox                           |
| ActivityItem      | FcBox, FcTypography                                   |

## Risks / Trade-offs

**[D3 tree-shaking]** Only `d3-shape` and `d3-scale` are installed (~30KB gzipped combined), not the full `d3` package.

- Mitigation: Importing submodules directly keeps bundle overhead minimal.

**[Mock data limitations]** Task actions mutate in-memory arrays — state resets on page refresh.

- Mitigation: Acceptable for MVP. Real persistence comes with API integration (separate change).

**[Component size]** DashboardLayout and TaskList may approach the 150-line ESLint warning.

- Mitigation: Keep layout thin (grid container only), delegate all logic to hooks and child components.
