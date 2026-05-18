# Build Dashboard — Tasks

> Reference mockup: `docs/ux/mockups/task-manager-dashboard-mockup-design.png`
> Prerequisite: `setup-project-structure` change (complete)

---

## Phase 1: Shell & Static Layout

> Goal: Dashboard grid renders with stats cards displaying mock data.

### 1.1 Feature Structure

- [x] 1.1.1 Create `src/features/dashboard/` directory structure (`components/`, `hooks/`, `types.ts`, `index.ts`)
- [x] 1.1.2 Create `src/features/dashboard/types.ts` — re-export or extend shared types needed by dashboard components

### 1.2 Dashboard Layout

- [x] 1.2.1 Create `DashboardLayout.tsx` — CSS Grid container with zones: stats row, main content (left), right sidebar
- [x] 1.2.2 Update `src/routes/index.tsx` to render `DashboardLayout`

### 1.3 Stats Cards

- [x] 1.3.1 Create `StatsCard.tsx` — FcCard displaying count, label, colored dot + highlight task name
- [x] 1.3.2 Create `StatsCardsRow.tsx` — flex row rendering 3 StatsCards (Tasks Today, In Progress, Completed)
- [x] 1.3.3 Wire StatsCardsRow to `dashboardService.getDashboardStats()` mock data
- [x] 1.3.4 Add unit tests for StatsCard

### 1.4 Phase 1 Verification

- [x] 1.4.1 Visual check: dashboard grid renders with 3 stats cards
- [x] 1.4.2 `pnpm lint && pnpm type-check` passes

---

## Phase 2: Task List (Core Interaction)

> Goal: Tabbed task list with filter/sort, displaying task rows with status indicators.

### 2.1 Task Tabs

- [ ] 2.1.1 Create `TaskTabs.tsx` — FcTabs with "All Tasks", "In Progress", "Completed" tabs
- [ ] 2.1.2 Tab selection filters the displayed tasks by status

### 2.2 Task Filters

- [ ] 2.2.1 Create `TaskFilters.tsx` — Filter (All/High/Medium/Low) and Sort (Due Date/Priority/Title) dropdowns using FcSelect
- [ ] 2.2.2 Create `useTaskFilters.ts` hook — manages active tab, filter, sort state; returns filtered/sorted task list

### 2.3 Task Row

- [ ] 2.3.1 Create `TaskRow.tsx` — displays: checkbox area, title, priority chip (FcChip), due date, status indicator, action icons placeholder
- [ ] 2.3.2 Priority chip colors: High → error, Medium → warning, Low → success
- [ ] 2.3.3 Status indicators: pending → "Start" button, in-progress → no extra indicator, completed → green checkmark icon

### 2.4 Task List

- [ ] 2.4.1 Create `TaskList.tsx` — composes TaskTabs + TaskFilters + list of TaskRow
- [ ] 2.4.2 Wire to `taskService.getTasks()` mock data via `useTaskFilters` hook
- [ ] 2.4.3 Place TaskList in DashboardLayout main content zone (below Quick Add placeholder)

### 2.5 Phase 2 Verification

- [ ] 2.5.1 Tabs switch between All/In Progress/Completed
- [ ] 2.5.2 Filter and Sort dropdowns update the list
- [ ] 2.5.3 Add unit tests for TaskRow, TaskTabs, useTaskFilters
- [ ] 2.5.4 `pnpm lint && pnpm type-check` passes

---

## Phase 3: Task CRUD

> Goal: Users can create tasks via Quick Add form and perform row actions (start, complete, delete).

### 3.1 Quick Add Task Form

- [ ] 3.1.1 Create `QuickAddTask.tsx` — FcCard with: title FcTextField, "+ Add Task" FcButton, Priority FcSelect, Due Date input
- [ ] 3.1.2 Local form state: title, priority (default: "high"), dueDate
- [ ] 3.1.3 On submit: call `taskService.addTask()`, clear form, refresh task list
- [ ] 3.1.4 Basic validation: title required, dueDate required

### 3.2 Task Row Actions

- [ ] 3.2.1 Create `useTaskActions.ts` hook — wraps `taskService` methods: `startTask(id)`, `completeTask(id)`, `deleteTask(id)`
- [ ] 3.2.2 "Start" button on pending tasks → calls `updateTaskStatus(id, 'in-progress')`
- [ ] 3.2.3 Complete action on in-progress tasks → calls `updateTaskStatus(id, 'completed')`
- [ ] 3.2.4 Delete icon → calls `deleteTask(id)` with confirmation (simple)
- [ ] 3.2.5 Edit icon → placeholder (no-op or console.log for now)

### 3.3 Wire CRUD to Task List

- [ ] 3.3.1 Pass action callbacks from useTaskActions to TaskRow
- [ ] 3.3.2 Task list refreshes after any CRUD operation
- [ ] 3.3.3 Place QuickAddTask in DashboardLayout above TaskList

### 3.4 Phase 3 Verification

- [ ] 3.4.1 Can add a task via Quick Add form; it appears in the list
- [ ] 3.4.2 Can start, complete, and delete tasks via row actions
- [ ] 3.4.3 Stats cards update after CRUD operations
- [ ] 3.4.4 Add unit tests for QuickAddTask, useTaskActions
- [ ] 3.4.5 `pnpm lint && pnpm type-check` passes

---

## Phase 4: Task Overview Chart

> Goal: Donut chart showing task status distribution in the right sidebar.

### 4.1 Recharts Setup

- [ ] 4.1.1 Install Recharts: `pnpm add recharts`
- [ ] 4.1.2 Create `FcPieChart` Fc wrapper (optional — or use Recharts directly in feature since it's not MUI)

### 4.2 Task Overview Chart

- [ ] 4.2.1 Create `TaskOverviewChart.tsx` — FcCard with Recharts `<PieChart>` donut showing In Progress / Completed / Pending percentages
- [ ] 4.2.2 Chart colors match mockup: blue (In Progress), green (Completed), yellow (Pending)
- [ ] 4.2.3 Display percentage labels on chart segments + legend below
- [ ] 4.2.4 Wire to `dashboardService.getTaskOverview()` data

### 4.3 Place in Layout

- [ ] 4.3.1 Place TaskOverviewChart in DashboardLayout right sidebar zone (top)

### 4.4 Phase 4 Verification

- [ ] 4.4.1 Donut chart renders with correct percentages from mock data
- [ ] 4.4.2 Chart updates when tasks are created/started/completed/deleted
- [ ] 4.4.3 `pnpm lint && pnpm type-check` passes

---

## Phase 5: Upcoming Deadlines, Activity Feed & Polish

> Goal: Complete the remaining panels and finalize the dashboard.

### 5.1 Upcoming Deadlines

- [ ] 5.1.1 Create `UpcomingDeadlines.tsx` — FcCard with list of tasks approaching due date (title as blue link + date)
- [ ] 5.1.2 Wire to `dashboardService.getUpcomingDeadlines()` data
- [ ] 5.1.3 Place in DashboardLayout right sidebar zone (below chart)

### 5.2 Activity Feed

- [ ] 5.2.1 Create `ActivityItem.tsx` — colored dot (blue/red/green by type) + message with bold highlight text + relative timestamp
- [ ] 5.2.2 Create `ActivityFeed.tsx` — FcCard with "Activity Feed" title + list of ActivityItems
- [ ] 5.2.3 Wire to `activityService.getActivities()` data
- [ ] 5.2.4 Place in DashboardLayout main content zone (below TaskList)

### 5.3 Dashboard Hook

- [ ] 5.3.1 Create `useDashboard.ts` — aggregates stats, overview, deadlines, activities; provides a single data source for DashboardLayout
- [ ] 5.3.2 Refactor DashboardLayout to use `useDashboard` as primary data hook

### 5.4 Polish & Verification

- [ ] 5.4.1 Visual comparison against mockup — spacing, colors, typography
- [ ] 5.4.2 Theme consistency: verify light/dark mode renders correctly
- [ ] 5.4.3 Add unit tests for UpcomingDeadlines, ActivityItem, useDashboard
- [ ] 5.4.4 `pnpm lint && pnpm type-check && pnpm test && pnpm build` all pass
- [ ] 5.4.5 Accessibility check: ARIA labels, keyboard navigation, screen reader

---

## Post-Implementation (Optional)

### Fc Layer Expansion

- [ ] P.1 Identify composite UI patterns from dashboard build (e.g., StatusChip, ActionIconGroup)
- [ ] P.2 Promote repeated patterns to Fc composites if used 3+ times
- [ ] P.3 Validate no direct MUI imports exist outside `src/components/ui/`

### Storybook Documentation

- [ ] P.4 Create dashboard component stories in `src/stories/Dashboard/`
- [ ] P.5 Add promoted shared component stories to `src/stories/UI/`
