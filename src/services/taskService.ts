import { mockTasks } from './mockData';
import type { Task, TaskFilter, TaskStatus, NewTaskInput } from '../types';

let tasks = [...mockTasks];

function generateId(): string {
  return `t${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function getTasks(filter?: TaskFilter): Task[] {
  let result = [...tasks];

  if (filter?.status && filter.status !== 'all') {
    result = result.filter(t => t.status === filter.status);
  }

  if (filter?.priority && filter.priority !== 'all') {
    result = result.filter(t => t.priority === filter.priority);
  }

  const sortField = filter?.sortBy ?? 'dueDate';

  const sortOrder = filter?.sortOrder ?? 'asc';

  const dir = sortOrder === 'asc' ? 1 : -1;

  result.sort((a, b) => {
    if (sortField === 'priority') {
      const order = { high: 0, medium: 1, low: 2 };

      return (order[a.priority] - order[b.priority]) * dir;
    }
    const aVal = a[sortField] ?? '';

    const bVal = b[sortField] ?? '';

    return aVal < bVal ? -1 * dir : aVal > bVal ? 1 * dir : 0;
  });

  return result;
}

export function getTaskById(id: string): Task | undefined {
  return tasks.find(t => t.id === id);
}

export function addTask(input: NewTaskInput): Task {
  const now = new Date().toISOString();

  const task: Task = {
    id: generateId(),
    title: input.title,
    status: 'pending',
    priority: input.priority,
    dueDate: input.dueDate,
    createdAt: now,
    updatedAt: now,
  };

  tasks = [task, ...tasks];
  return task;
}

export function updateTaskStatus(
  id: string,
  status: TaskStatus
): Task | undefined {
  const idx = tasks.findIndex(t => t.id === id);

  if (idx === -1) return undefined;

  const now = new Date().toISOString();

  tasks[idx] = {
    ...tasks[idx],
    status,
    updatedAt: now,
    completedAt: status === 'completed' ? now : tasks[idx].completedAt,
  };
  return tasks[idx];
}

export function deleteTask(id: string): boolean {
  const len = tasks.length;

  tasks = tasks.filter(t => t.id !== id);
  return tasks.length < len;
}

export function getTaskCounts(): {
  total: number;
  pending: number;
  inProgress: number;
  completed: number;
} {
  return {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
  };
}
