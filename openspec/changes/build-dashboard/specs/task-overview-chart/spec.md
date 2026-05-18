# Task Overview Chart

## Overview

Donut (ring) chart displaying task status distribution as percentages. Rendered in a FcCard in the right sidebar of the dashboard.

## Layout (from mockup)

```
┌───────────────────────┐
│  Task Overview         │
│                        │
│       ┌─────┐          │
│      ╱  10%  ╲         │
│     │  40%  50% │      │
│      ╲       ╱         │
│       └─────┘          │
│                        │
│  🔵 In Progress  40%   │
│  🟢 Completed    50%   │
│  🟡 Pending      10%   │
└───────────────────────┘
```

## Requirements

- Donut chart (PieChart with innerRadius) using Recharts
- Three segments: In Progress (blue), Completed (green), Pending (yellow/amber)
- Percentage labels displayed on/near chart segments
- Legend below the chart with colored dots + label + percentage
- Colors should reference MUI theme palette where possible
- Chart re-renders when task data changes (after CRUD operations)

## Data Source

- `dashboardService.getTaskOverview()` → returns `TaskOverview { inProgressPercent, completedPercent, pendingPercent }`

## Technical Notes

- Recharts `<PieChart>` with `<Pie innerRadius={60} outerRadius={90}>`
- `<Cell>` components for segment colors
- Recharts is NOT an MUI library, so it can be used directly in the feature (not wrapped in Fc)

## Fc Components Used

- FcCard — container
- FcTypography — "Task Overview" heading, legend text
- FcBox — layout wrappers
