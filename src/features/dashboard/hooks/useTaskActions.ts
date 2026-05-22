import { useCallback } from 'react';
import { addTask, updateTaskStatus, deleteTask } from '@/services/taskService';
import { TaskStatus } from '../types';
import type { NewTaskInput } from '../types';

interface UseTaskActionsReturn {
  createTask: (input: NewTaskInput) => void;
  startTask: (id: string) => void;
  completeTask: (id: string) => void;
  removeTask: (id: string) => void;
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

  return { createTask, startTask, completeTask, removeTask };
}
