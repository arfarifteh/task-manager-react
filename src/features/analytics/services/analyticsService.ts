import { getTaskCounts, getTasks } from '@/services/taskService';
import type { Task, TaskPriority as TaskPriorityType } from '@/types';
import { TaskPriority, TaskStatus } from '@/types';

export type AnalyticsCounts = ReturnType<typeof getTaskCounts>;

export interface PriorityBreakdownItem {
  priority: TaskPriorityType;
  label: string;
  count: number;
}

export interface OpenDeadlineRow {
  taskId: string;
  title: string;
  dueDate: string;
  priority: TaskPriorityType;
  priorityLabel: string;
  status: Task['status'];
  statusLabel: string;
  isOverdue: boolean;
}

const PRIORITY_LABELS: Record<TaskPriorityType, string> = {
  [TaskPriority.high]: 'High',
  [TaskPriority.medium]: 'Medium',
  [TaskPriority.low]: 'Low',
};

const STATUS_LABELS: Record<Task['status'], string> = {
  [TaskStatus.new]: 'New',
  [TaskStatus.pending]: 'Pending',
  [TaskStatus.inProgress]: 'In progress',
  [TaskStatus.completed]: 'Completed',
};

function startOfToday(): Date {
  const d = new Date();

  d.setHours(0, 0, 0, 0);
  return d;
}

export function getAnalyticsCounts(): AnalyticsCounts {
  return getTaskCounts();
}

export function getStatusCounts(): {
  pending: number;
  inProgress: number;
  completed: number;
} {
  const counts = getTaskCounts();

  return {
    pending: counts.pending,
    inProgress: counts.inProgress,
    completed: counts.completed,
  };
}

export function getPriorityBreakdown(): PriorityBreakdownItem[] {
  const tasks = getTasks();

  return (
    [TaskPriority.high, TaskPriority.medium, TaskPriority.low] as const
  ).map(priority => ({
    priority,
    label: PRIORITY_LABELS[priority],
    count: tasks.filter(t => t.priority === priority).length,
  }));
}

export function getCompletionPercent(): number {
  const { total, completed } = getTaskCounts();

  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

export function getOpenDeadlines(): OpenDeadlineRow[] {
  const today = startOfToday();

  return getTasks({ sortBy: 'dueDate', sortOrder: 'asc' })
    .filter(t => t.status !== TaskStatus.completed)
    .map(t => {
      const due = new Date(t.dueDate);

      return {
        taskId: t.id,
        title: t.title,
        dueDate: t.dueDate,
        priority: t.priority,
        priorityLabel: PRIORITY_LABELS[t.priority],
        status: t.status,
        statusLabel: STATUS_LABELS[t.status],
        isOverdue: due < today,
      };
    });
}

export function getOverdueOpenCount(): number {
  return getOpenDeadlines().filter(d => d.isOverdue).length;
}
