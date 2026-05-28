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

- Donut chart built with D3 (`d3-shape` `pie` + `arc` generators) rendered as React SVG — no `useEffect`/DOM manipulation
- Three segments: In Progress (blue `#1976d2`), Completed (green `#2e7d32`), Pending (amber `#ed6c02`)
- **Chart hover**: hovered segment expands outward (+8px); center of donut shows segment label + `value%` in the segment color
- Legend below the chart with colored dots + label + percentage — enabled via `showLegend` boolean prop
- **Legend hover**: hovering a legend row highlights its chart segment; non-hovered rows fade to `opacity: 0.4` — all managed internally by `FcDonutChart`
- Chart re-renders when task data changes (after CRUD operations)

## Data Source

- `dashboardService.getTaskOverview()` → returns `TaskOverview { inProgressPercent, completedPercent, pendingPercent }`

## Technical Notes

- `FcDonutChart` in `src/components/ui/` — accepts `data: FcDonutSegment[]`, `size`, `thickness`, `showLegend` props
- `showLegend` boolean (default `false`) — when true, renders `DonutLegend` below the SVG; follows Fc boolean-prop convention
- Hover state is **fully encapsulated** — `hovered: string | null` lives inside `FcDonutChart`, shared between chart paths and legend rows via callbacks
- `DonutLegend` sub-component handles legend rendering + mouse events
- `DonutCenter` sub-component renders SVG `<text>` elements in the donut hole when a segment is active
- `viewBox` padded by `HOVER_EXPAND (8)` on all sides to prevent expand clipping
- `TaskOverviewChart` is a thin wrapper — no local state, passes `showLegend` and data only

## Fc Components Used

- FcDonutChart — D3-powered donut chart with optional legend (`src/components/ui/FcDonutChart.tsx`); uses MUI `Box` + `Typography` internally for legend layout
- FcCard — container
- FcTypography — "Task Overview" heading
