import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useTaskFilters } from './useTaskFilters';

describe('useTaskFilters', () => {
  it('returns initial state with all tasks', () => {
    const { result } = renderHook(() => useTaskFilters());

    expect(result.current.activeTab).toBe('all');
    expect(result.current.priority).toBe('all');
    expect(result.current.sortBy).toBe('dueDate');
    expect(result.current.filteredTasks.length).toBeGreaterThan(0);
  });

  it('filters by tab (status)', () => {
    const { result } = renderHook(() => useTaskFilters());

    act(() => {
      result.current.setActiveTab('completed');
    });

    expect(result.current.activeTab).toBe('completed');
    result.current.filteredTasks.forEach(task => {
      expect(task.status).toBe('completed');
    });
  });

  it('filters by priority', () => {
    const { result } = renderHook(() => useTaskFilters());

    act(() => {
      result.current.setPriority('high');
    });

    expect(result.current.priority).toBe('high');
    result.current.filteredTasks.forEach(task => {
      expect(task.priority).toBe('high');
    });
  });

  it('changes sort field', () => {
    const { result } = renderHook(() => useTaskFilters());

    act(() => {
      result.current.setSortBy('priority');
    });

    expect(result.current.sortBy).toBe('priority');
  });
});
