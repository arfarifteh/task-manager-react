# Dashboard Layout

## Overview

CSS Grid–based layout container that organizes the dashboard into distinct zones matching the UX mockup. Rendered as the index route (`/`) inside the existing app shell (sidebar + header from `root.tsx`).

## Layout Zones

```
┌────────────────────────────────────────────────────────┐
│  A ─ Stats Cards Row (full width)                       │
├──────────────────────────────┬─────────────────────────┤
│  B ─ Quick Add Task          │  D ─ Task Overview Chart │
├──────────────────────────────┤                         │
│  C ─ Task List               ├─────────────────────────┤
│  (Tabs + Filters + Rows)     │  E ─ Upcoming Deadlines  │
├──────────────────────────────┤                         │
│  F ─ Activity Feed           │                         │
└──────────────────────────────┴─────────────────────────┘
```

## Requirements

- Grid container using CSS Grid via FcBox `sx` prop
- Left column (~65-70%) holds: Quick Add, Task List, Activity Feed
- Right column (~30-35%) holds: Task Overview Chart, Upcoming Deadlines
- Stats Cards Row spans full width above the two-column layout
- Responsive: on smaller screens, right sidebar stacks below main content
- Padding: none on DashboardLayout itself (outer padding is handled by `root.tsx` main area)
- Gap between zones: `gap: 3` (24px)

## Data Flow

DashboardLayout owns all data fetching and passes props down to presentational children.
This enables coordinated refreshes — when a task is added/updated, all panels update together.

```
DashboardLayout (data owner)
│   calls: dashboardService, taskService, activityService
│
├── StatsCardsRow        ← props: stats (DashboardStats)
├── QuickAddTask         ← props: onAdd callback → triggers parent re-fetch
├── TaskList             ← props: tasks, filters, onAction callbacks
├── ActivityFeed         ← props: activities (ActivityItem[])
├── TaskOverviewChart    ← props: overview (TaskOverview)
└── UpcomingDeadlines    ← props: deadlines (UpcomingDeadline[])
```

## Fc Components Used

- FcBox (grid container, zone wrappers)
