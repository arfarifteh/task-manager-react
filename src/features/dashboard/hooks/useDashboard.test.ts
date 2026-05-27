import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useDashboard } from './useDashboard';

describe('useDashboard', () => {
  it('returns stats with numeric counts', () => {
    const { result } = renderHook(() => useDashboard());

    expect(typeof result.current.stats.tasksToday.count).toBe('number');
    expect(typeof result.current.stats.inProgress.count).toBe('number');
    expect(typeof result.current.stats.completed.count).toBe('number');
  });

  it('returns deadlines array', () => {
    const { result } = renderHook(() => useDashboard());

    expect(Array.isArray(result.current.deadlines)).toBe(true);
  });

  it('returns activities array', () => {
    const { result } = renderHook(() => useDashboard());

    expect(Array.isArray(result.current.activities)).toBe(true);
  });

  it('exposes filter state from useTaskFilters', () => {
    const { result } = renderHook(() => useDashboard());

    expect(result.current.activeTab).toBe('all');
    expect(result.current.filteredTasks.length).toBeGreaterThan(0);
    expect(typeof result.current.refresh).toBe('function');
  });
});
