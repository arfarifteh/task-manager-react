import { mockActivities } from './mockData';
import type { ActivityItem } from '../types';

let activities = [...mockActivities];

export function getActivities(limit?: number): ActivityItem[] {
  const sorted = [...activities].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return limit ? sorted.slice(0, limit) : sorted;
}

export function addActivity(
  item: Omit<ActivityItem, 'id' | 'timestamp'>
): ActivityItem {
  const entry: ActivityItem = {
    ...item,
    id: `a${Date.now()}`,
    timestamp: new Date().toISOString(),
  };

  activities = [entry, ...activities];
  return entry;
}
