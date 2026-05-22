## Context

The dashboard currently supports task CRUD (create, start, complete, delete) but the edit action is a placeholder (`console.log`). Users cannot modify task fields after creation. The existing architecture uses:

- `taskService.ts` for data operations (in-memory mock store)
- `useTaskActions` hook for wiring service calls with refresh
- `TaskRow` component with an edit icon button already rendered
- MUI-based Fc component layer (`FcDialog`, `FcTextField`, `FcSelect`, `FcButton`)
- Const object pattern for `TaskStatus` and `TaskPriority` (no hardcoded strings)

## Goals / Non-Goals

**Goals:**

- Provide a modal dialog to edit any mutable task field (title, description, priority, due date)
- Reuse existing Fc UI components and validation patterns from AddTask
- Integrate with the existing refresh mechanism so the task list updates after save
- Maintain the no-hardcoded-strings rule using `TaskPriority` and `TaskStatus` constants

**Non-Goals:**

- Inline editing (editing directly in the task row) — future enhancement
- Editing task status via the modal (status transitions use existing Start/Complete actions)
- Undo/redo or edit history tracking
- Optimistic updates or server-side persistence (mock service is synchronous)

## Decisions

### 1. MUI Dialog via FcDialog wrapper

**Choice**: Use `FcDialog` (MUI Dialog wrapper) for the modal.
**Rationale**: Consistent with Fc layer architecture. Provides built-in backdrop, focus trapping, ESC-to-close, and accessibility. Alternative (custom modal with portal) would require reimplementing these.

### 2. Controlled component with local form state

**Choice**: The modal manages its own `useState` form state, initialized from the task being edited.
**Rationale**: Same pattern as `AddTask`. Keeps the modal self-contained and avoids global state. The parent only needs to pass the task and an `onSave` callback.

### 3. State management: parent holds `editingTask`

**Choice**: `DashboardLayout` (or `TaskList`) holds `editingTask: Task | null` state. When non-null, the modal renders.
**Rationale**: Keeps modal open/close logic co-located with the data flow. TaskRow triggers `onEdit(task)` which sets the state. After save, state resets to null and refresh fires.

### 4. Service layer: `updateTask(id, updates)` with partial fields

**Choice**: Add `updateTask(id: string, updates: Partial<Pick<Task, 'title' | 'description' | 'priority' | 'dueDate'>>)` to `taskService`.
**Rationale**: Partial updates avoid sending unchanged fields. Restricting to editable fields prevents accidental status/id mutation.

### 5. Validation: same rules as AddTask

**Choice**: Title required, due date required. Description optional.
**Rationale**: Consistent with create flow. No new validation rules needed.

## Risks / Trade-offs

- **Modal stale data** → Low risk since mock service is synchronous. If async API added later, will need to re-fetch or pass fresh task on open.
- **FcDialog may not exist yet** → If not, create a minimal wrapper. Mitigation: check Fc layer first; fall back to direct MUI Dialog import within the component temporarily.
- **File length in DashboardLayout** → Adding modal state could push it over lint limit. Mitigation: extract modal state management into the existing `useTaskActions` hook or a small `useEditModal` hook.
