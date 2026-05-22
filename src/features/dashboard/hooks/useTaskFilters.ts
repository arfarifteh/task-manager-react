import { useState, useMemo, useCallback } from 'react';
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
  refresh: () => void;
}

export function useTaskFilters(): UseTaskFiltersReturn {
  const [activeTab, setActiveTab] = useState<TabValue>('all');

  const [priority, setPriority] = useState<PriorityFilter>('all');

  const [sortBy, setSortBy] = useState<TaskSortField>('dueDate');

  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = useCallback(() => setRefreshKey(k => k + 1), []);

  const filteredTasks = useMemo(() => {
    return getTasks({
      status: activeTab === 'all' ? undefined : activeTab,
      priority: priority === 'all' ? undefined : priority,
      sortBy,
      sortOrder: 'asc',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, priority, sortBy, refreshKey]);

  return {
    activeTab,
    priority,
    sortBy,
    filteredTasks,
    setActiveTab,
    setPriority,
    setSortBy,
    refresh,
  };
}
