import { getActivities } from '@/services/activityService';
import {
  getDashboardStats,
  getUpcomingDeadlines,
} from '@/services/dashboardService';
import { useTaskFilters } from './useTaskFilters';

export function useDashboard() {
  const filters = useTaskFilters();

  const stats = getDashboardStats();

  const deadlines = getUpcomingDeadlines(3);

  const activities = getActivities(5);

  return {
    ...filters,
    stats,
    deadlines,
    activities,
  };
}
