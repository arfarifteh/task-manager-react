import { describe, expect, it } from 'vitest';
import {
  getAnalyticsCounts,
  getOpenDeadlines,
  getOverdueOpenCount,
  getPriorityBreakdown,
} from './analyticsService';

describe('analyticsService', () => {
  it('returns task counts from the mock store', () => {
    expect(getAnalyticsCounts()).toEqual({
      total: 8,
      pending: 3,
      inProgress: 3,
      completed: 2,
    });
  });

  it('returns priority breakdown for all tasks', () => {
    expect(getPriorityBreakdown().map(p => p.count)).toEqual([3, 3, 2]);
  });

  it('lists only non-completed deadlines sorted by due date', () => {
    const titles = getOpenDeadlines().map(d => d.title);

    expect(titles).toHaveLength(6);
    expect(titles[0]).toBe('Code Review for Auth Module');
  });

  it('flags overdue open tasks', () => {
    expect(getOverdueOpenCount()).toBeGreaterThan(0);
    expect(getOpenDeadlines().every(d => d.isOverdue)).toBe(true);
  });
});
