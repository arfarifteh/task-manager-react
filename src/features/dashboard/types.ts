/**
 * Dashboard feature types
 *
 * Re-exports shared types used by dashboard components
 * and defines dashboard-specific types.
 */

export type {
  Task,
  TaskStatus,
  TaskPriority,
  TaskFilter,
  TaskSortField,
  NewTaskInput,
} from '../../types';

export type {
  DashboardStats,
  StatCard,
  TaskOverview,
  UpcomingDeadline,
} from '../../types';

export type { ActivityItem, ActivityType } from '../../types';
