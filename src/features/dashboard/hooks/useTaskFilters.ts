import { useState, useMemo } from 'react';
import { getTasks } from '@/services/taskService';
import type { Task, TaskPriority, TaskSortField, TaskStatus } from '../types';

export type TabValue = TaskStatus | 'all';
export type PriorityFilter = TaskPriority | 'all';

interface UseTaskFiltersReturn {
  activeTab: TabValue;
  priority: PriorityFilter;
  sortBy: TaskSortField;
  filteredTasks: Task[];
  setActiveTab: (tab: TabValue) => void;
  setPriority: (priority: PriorityFilter) => void;
  setSortBy: (sort: TaskSortField) => void;
}

export function useTaskFilters(): UseTaskFiltersReturn {
  const [activeTab, setActiveTab] = useState<TabValue>('all');

  const [priority, setPriority] = useState<PriorityFilter>('all');

  const [sortBy, setSortBy] = useState<TaskSortField>('dueDate');

  const filteredTasks = useMemo(() => {
    return getTasks({
      status: activeTab === 'all' ? undefined : activeTab,
      priority: priority === 'all' ? undefined : priority,
      sortBy,
      sortOrder: 'asc',
    });
  }, [activeTab, priority, sortBy]);

  return {
    activeTab,
    priority,
    sortBy,
    filteredTasks,
    setActiveTab,
    setPriority,
    setSortBy,
  };
}
