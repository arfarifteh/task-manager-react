# Task CRUD

## Overview

Create, start, complete, and delete tasks. The Quick Add Task form handles creation. Row action buttons handle status transitions and deletion.

## Quick Add Task Form

### Layout (from mockup)

```
┌─────────────────────────────────────────────────────┐
│  Quick Add Task                                      │
│  ┌───────────────────────────────┐  ┌─────────────┐ │
│  │ Task Title                    │  │ + Add Task   │ │
│  └───────────────────────────────┘  └─────────────┘ │
│  Priority: [High ▼]    Due Date: [Select Date ▼]    │
└─────────────────────────────────────────────────────┘
```

### Requirements

- Title: FcTextField, required, placeholder "Task Title"
- Description: FcTextField, optional, placeholder "Description (optional)", multiline (2 rows)
- Priority: FcSelect with options High / Medium / Low, default "High"
- Due Date: date input (native HTML date picker or FcTextField type="date")
- "+ Add Task" button: FcButton primary, triggers creation
- On submit: calls `taskService.addTask({ title, description, priority, dueDate })`
- After submit: clear form fields, task list refreshes
- Validation: title and dueDate are required; show inline error if empty on submit

## Task Actions

| Action   | Trigger                       | Service Call                                      | Result                   |
| -------- | ----------------------------- | ------------------------------------------------- | ------------------------ |
| Start    | "Start" button on pending row | `taskService.updateTaskStatus(id, 'in-progress')` | Row shows as in-progress |
| Complete | Checkmark on in-progress row  | `taskService.updateTaskStatus(id, 'completed')`   | Row shows as completed   |
| Delete   | Delete icon on any row        | `taskService.deleteTask(id)`                      | Row removed from list    |
| Edit     | Edit icon on any row          | No-op (placeholder)                               | Console.log or no action |

## State Management

- `useTaskActions` hook encapsulates all CRUD operations
- Returns: `{ addTask, startTask, completeTask, deleteTask }`
- Each action calls the service then triggers a parent-level re-fetch
- DashboardLayout passes action callbacks down as props — children never call services directly
- This ensures coordinated refresh: stats, task list, chart all update after any CRUD action

## Fc Components Used

- FcCard — form container
- FcTextField — title input
- FcSelect — priority dropdown
- FcButton — "+ Add Task" submit button
- FcTypography — "Quick Add Task" heading, "Priority:" / "Due Date:" labels
- FcIconButton — edit/delete row actions
