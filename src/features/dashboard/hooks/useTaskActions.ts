import { useCallback } from 'react';
import {
  addTask,
  updateTask,
  updateTaskStatus,
  deleteTask,
} from '@/services/taskService';
import { TaskStatus } from '../types';
import type { EditTaskInput, NewTaskInput } from '../types';

interface UseTaskActionsReturn {
  createTask: (input: NewTaskInput) => void;
  startTask: (id: string) => void;
  completeTask: (id: string) => void;
  removeTask: (id: string) => void;
  editTask: (id: string, updates: EditTaskInput) => void;
}

export function useTaskActions(onRefresh: () => void): UseTaskActionsReturn {
  const createTask = useCallback(
    (input: NewTaskInput) => {
      addTask(input);
      onRefresh();
    },
    [onRefresh]
  );

  const startTask = useCallback(
    (id: string) => {
      updateTaskStatus(id, TaskStatus.inProgress);
      onRefresh();
    },
    [onRefresh]
  );

  const completeTask = useCallback(
    (id: string) => {
      updateTaskStatus(id, TaskStatus.completed);
      onRefresh();
    },
    [onRefresh]
  );

  const removeTask = useCallback(
    (id: string) => {
      deleteTask(id);
      onRefresh();
    },
    [onRefresh]
  );

  const editTask = useCallback(
    (id: string, updates: EditTaskInput) => {
      updateTask(id, updates);
      onRefresh();
    },
    [onRefresh]
  );

  return { createTask, startTask, completeTask, removeTask, editTask };
}
