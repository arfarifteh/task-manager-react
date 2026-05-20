export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export type TaskPriority = 'high' | 'medium' | 'low';

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
