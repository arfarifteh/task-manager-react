## Why

Users can currently create, start, complete, and delete tasks, but cannot edit task details after creation. If a user makes a typo in the title, sets the wrong priority, or needs to change a due date, they must delete and re-create the task — losing status and history. An edit capability is essential for a functional task manager.

## What Changes

- Add an Edit Task modal/dialog that opens when the user clicks the edit icon on a task row
- The modal allows editing all mutable task fields: title, description, priority, and due date
- Add `updateTask` service method to persist field changes
- Wire the edit action through the existing `useTaskActions` hook
- Replace the current placeholder `console.log` edit handler with the real modal flow

## Capabilities

### New Capabilities

- `task-editing`: Modal dialog for editing existing task fields (title, description, priority, due date) with validation and save/cancel actions

### Modified Capabilities

## Impact

- `src/features/dashboard/components/` — new `EditTaskModal.tsx` component
- `src/services/taskService.ts` — new `updateTask()` function
- `src/features/dashboard/hooks/useTaskActions.ts` — add `editTask` action
- `src/features/dashboard/components/TaskRow.tsx` — wire edit icon to open modal
- `src/features/dashboard/components/DashboardLayout.tsx` — manage modal open/close state
