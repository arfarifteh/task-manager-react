import { TaskStatus } from '../types';
import { getTasks, getTaskCounts } from './taskService';
import type { DashboardStats, TaskOverview, UpcomingDeadline } from '../types';

export function getDashboardStats(): DashboardStats {
  const counts = getTaskCounts();

  const tasks = getTasks();

  const todayTasks = tasks.filter(t => t.status === TaskStatus.pending);

  const inProgressTasks = tasks.filter(t => t.status === TaskStatus.inProgress);

  const completedTasks = tasks.filter(t => t.status === TaskStatus.completed);

  return {
    tasksToday: {
      count: counts.pending,
      highlightLabel: todayTasks[0]?.title ?? 'No tasks',
      highlightColor: 'success',
    },
    inProgress: {
      count: counts.inProgress,
      highlightLabel: inProgressTasks[0]?.title ?? 'No tasks',
      highlightColor: 'primary',
    },
    completed: {
      count: counts.completed,
      highlightLabel: completedTasks[0]?.title ?? 'No tasks',
      highlightColor: 'warning',
    },
  };
}

export function getTaskOverview(): TaskOverview {
  const counts = getTaskCounts();

  const total = counts.total || 1; // avoid division by zero

  return {
    inProgressPercent: Math.round((counts.inProgress / total) * 100),
    completedPercent: Math.round((counts.completed / total) * 100),
    pendingPercent: Math.round((counts.pending / total) * 100),
  };
}

export function getUpcomingDeadlines(limit = 3): UpcomingDeadline[] {
  const tasks = getTasks({ sortBy: 'dueDate', sortOrder: 'asc' });

  return tasks
    .filter(t => t.status !== TaskStatus.completed)
    .slice(0, limit)
    .map(t => ({
      taskId: t.id,
      title: t.title,
      dueDate: t.dueDate,
    }));
}
