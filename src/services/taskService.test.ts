import { describe, expect, it, beforeEach } from 'vitest';
import { TaskPriority } from '../types';
import { addTask, getTaskById, updateTask } from './taskService';

describe('updateTask', () => {
  let taskId: string;

  beforeEach(() => {
    const task = addTask({
      title: 'Original Title',
      description: 'Original description',
      priority: TaskPriority.high,
      dueDate: '2026-06-01',
    });

    taskId = task.id;
  });

  it('updates title and sets updatedAt', () => {
    const before = getTaskById(taskId)!;

    const previousUpdatedAt = before.updatedAt;

    const result = updateTask(taskId, { title: 'Updated Title' });

    expect(result).toBeDefined();
    expect(result!.title).toBe('Updated Title');
    expect(result!.description).toBe(before.description);
    expect(result!.updatedAt).not.toBe(previousUpdatedAt);
  });

  it('updates priority', () => {
    const result = updateTask(taskId, { priority: TaskPriority.low });

    expect(result!.priority).toBe(TaskPriority.low);
  });

  it('updates dueDate', () => {
    const result = updateTask(taskId, { dueDate: '2026-12-31' });

    expect(result!.dueDate).toBe('2026-12-31');
  });

  it('updates multiple fields at once', () => {
    const result = updateTask(taskId, {
      title: 'New Title',
      priority: TaskPriority.medium,
      dueDate: '2026-07-15',
    });

    expect(result!.title).toBe('New Title');
    expect(result!.priority).toBe(TaskPriority.medium);
    expect(result!.dueDate).toBe('2026-07-15');
  });

  it('does not change status', () => {
    const previousStatus = getTaskById(taskId)!.status;

    const result = updateTask(taskId, { title: 'Changed' });

    expect(result!.status).toBe(previousStatus);
  });

  it('returns undefined for non-existent id', () => {
    const result = updateTask('nonexistent', { title: 'Nope' });

    expect(result).toBeUndefined();
  });
});
