import { renderHook, act } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TaskPriority } from '../types';
import { useTaskActions } from './useTaskActions';

vi.mock('@/services/taskService', () => ({
  addTask: vi.fn(),
  updateTaskStatus: vi.fn(),
  deleteTask: vi.fn(),
}));

describe('useTaskActions', () => {
  it('calls onRefresh after createTask', () => {
    const onRefresh = vi.fn();

    const { result } = renderHook(() => useTaskActions(onRefresh));

    act(() => {
      result.current.createTask({
        title: 'Test',
        priority: TaskPriority.high,
        dueDate: '2026-06-01',
      });
    });

    expect(onRefresh).toHaveBeenCalledTimes(1);
  });

  it('calls onRefresh after startTask', () => {
    const onRefresh = vi.fn();

    const { result } = renderHook(() => useTaskActions(onRefresh));

    act(() => {
      result.current.startTask('t1');
    });

    expect(onRefresh).toHaveBeenCalledTimes(1);
  });

  it('calls onRefresh after completeTask', () => {
    const onRefresh = vi.fn();

    const { result } = renderHook(() => useTaskActions(onRefresh));

    act(() => {
      result.current.completeTask('t1');
    });

    expect(onRefresh).toHaveBeenCalledTimes(1);
  });

  it('calls onRefresh after removeTask', () => {
    const onRefresh = vi.fn();

    const { result } = renderHook(() => useTaskActions(onRefresh));

    act(() => {
      result.current.removeTask('t1');
    });

    expect(onRefresh).toHaveBeenCalledTimes(1);
  });
});
