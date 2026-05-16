export interface DashboardStats {
  tasksToday: StatCard;
  inProgress: StatCard;
  completed: StatCard;
}

export interface StatCard {
  count: number;
  /** Highlight item label shown below the count */
  highlightLabel: string;
  /** Color indicator for the highlight dot */
  highlightColor: 'success' | 'primary' | 'warning';
}

export interface TaskOverview {
  inProgressPercent: number;
  completedPercent: number;
  pendingPercent: number;
}

export interface UpcomingDeadline {
  taskId: string;
  title: string;
  dueDate: string;
}
