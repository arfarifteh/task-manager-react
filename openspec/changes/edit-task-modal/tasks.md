## 1. Service Layer

- [ ] 1.1 Add `updateTask(id, updates)` function to `taskService.ts` — accepts partial editable fields (title, description, priority, dueDate), updates the task in the store, sets `updatedAt`
- [ ] 1.2 Add `EditTaskInput` type to `src/types/task.ts` — `Partial<Pick<Task, 'title' | 'description' | 'priority' | 'dueDate'>>`

## 2. Fc Dialog Wrapper

- [ ] 2.1 Check if `FcDialog` exists in `src/components/ui/`; if not, create a minimal wrapper around MUI `Dialog` with props: `open`, `onClose`, `title`, `children`, `maxWidth`
- [ ] 2.2 Export `FcDialog` from `src/components/ui/index.ts`

## 3. EditTaskModal Component

- [ ] 3.1 Create `EditTaskModal.tsx` in `src/features/dashboard/components/` — FcDialog with form fields: title (FcTextField, required), description (FcTextField, multiline, optional), priority (FcSelect), due date (FcTextField type=date, required)
- [ ] 3.2 Initialize local form state from the passed `task` prop on open
- [ ] 3.3 Implement validation: title required, dueDate required — show inline errors
- [ ] 3.4 Save button calls `onSave(id, updates)` with changed fields, then closes
- [ ] 3.5 Cancel button and backdrop click close the modal without saving

## 4. Wire Edit Flow

- [ ] 4.1 Add `editTask(id, updates)` to `useTaskActions` hook — calls `updateTask` service + refresh
- [ ] 4.2 Add `editingTask: Task | null` state to manage modal open/close (in `DashboardLayout` or extract `useEditModal` hook)
- [ ] 4.3 Change `TaskRow` `onEdit` prop from `(id: string)` to `(task: Task)` — passes full task object
- [ ] 4.4 Render `EditTaskModal` in `DashboardLayout`, pass `editingTask` and `onSave`/`onClose` handlers

## 5. Tests & Verification

- [ ] 5.1 Unit test `updateTask` service function — verifies fields update correctly and `updatedAt` changes
- [ ] 5.2 Unit test `EditTaskModal` — renders pre-filled fields, validates required fields, calls onSave with correct data, closes on cancel
- [ ] 5.3 Unit test `useTaskActions.editTask` — calls service and triggers refresh
- [ ] 5.4 Verify `pnpm lint && pnpm type-check && pnpm test` all pass
