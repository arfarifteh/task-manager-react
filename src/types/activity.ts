export type ActivityType = 'completed' | 'created' | 'deadline';

export interface ActivityItem {
  id: string;
  type: ActivityType;
  message: string;
  /** Bolded entity name shown in the message (e.g., task title) */
  highlightText?: string;
  timestamp: string; // ISO date string
}
