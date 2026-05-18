# Upcoming Deadlines & Activity Feed

## Upcoming Deadlines

### Layout (from mockup)

```
┌───────────────────────┐
│  Upcoming Deadlines    │
│                        │
│  Fix Mobile Resp.      │
│  Apr 27, 2026          │
│                        │
│  Code Review for Auth  │
│  Apr 22, 2026          │
└───────────────────────┘
```

### Requirements

- FcCard with "Upcoming Deadlines" heading
- List of tasks approaching their due date
- Each item: task title (styled as blue link text) + due date below
- Data from `dashboardService.getUpcomingDeadlines()`
- Shows tasks sorted by nearest due date first

## Activity Feed

### Layout (from mockup)

```
┌──────────────────────────────────────────────────┐
│  Activity Feed                                    │
│                                                    │
│  🔵  You completed "Write API Documentation" · 5h ago │
│  🔴  New task "Redux Refactoring" added · 1d ago      │
│  🟢  Code Review for Auth Module due soon! · 2d ago   │
└──────────────────────────────────────────────────┘
```

### Requirements

- FcCard with "Activity Feed" heading
- Vertical timeline with colored dots per activity type:
  - `completed` → blue dot
  - `created` → red/orange dot
  - `deadline` → green dot
- Each activity item shows: colored dot, message with **bold highlight text**, relative timestamp
- Data from `activityService.getActivities()`
- Relative time formatting: "5h ago", "1d ago", "2d ago" (utility function or simple logic)

### ActivityItem Component

Props: `{ type, message, highlightText, timestamp }`

- Colored dot: FcBox with `borderRadius: '50%'`, bgcolor based on type
- Message: FcTypography with highlightText rendered in bold
- Timestamp: FcTypography caption, secondary color

## Fc Components Used

- FcCard — containers
- FcTypography — headings, text, timestamps
- FcBox — layout, colored dots
