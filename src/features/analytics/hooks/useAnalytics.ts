import {
  getAnalyticsCounts,
  getCompletionPercent,
  getOpenDeadlines,
  getOverdueOpenCount,
  getPriorityBreakdown,
  getStatusCounts,
} from '@/features/analytics/services/analyticsService';
import { getActivities } from '@/features/dashboard/services/activityService';

export function useAnalytics() {
  return {
    counts: getAnalyticsCounts(),
    statusCounts: getStatusCounts(),
    priorityBreakdown: getPriorityBreakdown(),
    completionPercent: getCompletionPercent(),
    openDeadlines: getOpenDeadlines(),
    overdueCount: getOverdueOpenCount(),
    activities: getActivities(3),
  };
}
