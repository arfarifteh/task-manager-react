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
- Padding: consistent `p: 3` on the layout container
- Gap between zones: `gap: 3` (24px)

## Data Flow

```
DashboardLayout
├── StatsCardsRow ← dashboardService.getDashboardStats()
├── QuickAddTask ← local form state → taskService.addTask()
├── TaskList ← taskService.getTasks() + useTaskFilters
├── ActivityFeed ← activityService.getActivities()
├── TaskOverviewChart ← dashboardService.getTaskOverview()
└── UpcomingDeadlines ← dashboardService.getUpcomingDeadlines()
```

## Fc Components Used

- FcBox (grid container, zone wrappers)
