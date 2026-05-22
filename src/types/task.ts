export const TaskStatus = {
  new: 'new',
  pending: 'pending',
  inProgress: 'in-progress',
  completed: 'completed',
} as const;

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

export const TaskPriority = {
  high: 'high',
  medium: 'medium',
  low: 'low',
} as const;

export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority];

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string; // ISO date string
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
}

export interface TaskFilter {
  status?: TaskStatus | 'all';
  priority?: TaskPriority | 'all';
  sortBy?: TaskSortField;
  sortOrder?: 'asc' | 'desc';
}

export type TaskSortField = 'dueDate' | 'priority' | 'title' | 'createdAt';

export interface NewTaskInput {
  title: string;
  description?: string;
  priority: TaskPriority;
  dueDate: string;
}
