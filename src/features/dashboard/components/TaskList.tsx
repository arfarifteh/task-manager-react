import { TaskFilters } from './TaskFilters';
import { TaskRow } from './TaskRow';
import { TaskTabs } from './TaskTabs';
import type { Task, TaskPriority, TaskSortField, TaskStatus } from '../types';
import type { TabValue } from './TaskTabs';
import { FcBox, FcCard, FcTypography } from '@/components/ui';

interface TaskListProps {
  tasks: Task[];
  activeTab: TaskStatus | 'all';
  priority: TaskPriority | 'all';
  sortBy: TaskSortField;
  onTabChange: (tab: TabValue) => void;
  onPriorityChange: (priority: TaskPriority | 'all') => void;
  onSortChange: (sort: TaskSortField) => void;
  onStart?: (id: string) => void;
  onComplete?: (id: string) => void;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}

export function TaskList({
  tasks,
  activeTab,
  priority,
  sortBy,
  onTabChange,
  onPriorityChange,
  onSortChange,
  onStart,
  onComplete,
  onDelete,
  onEdit,
}: TaskListProps) {
  return (
    <FcCard sx={{ p: 0, overflow: 'hidden' }}>
      <TaskTabs value={activeTab} onChange={onTabChange} />
      <FcBox sx={{ px: 2 }}>
        <TaskFilters
          priority={priority}
          sortBy={sortBy}
          onPriorityChange={onPriorityChange}
          onSortChange={onSortChange}
        />
      </FcBox>
      <FcBox>
        {tasks.length === 0 ? (
          <FcTypography body2 secondary sx={{ p: 3, textAlign: 'center' }}>
            No tasks found.
          </FcTypography>
        ) : (
          tasks.map(task => (
            <TaskRow
              key={task.id}
              task={task}
              onStart={onStart}
              onComplete={onComplete}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        )}
      </FcBox>
    </FcCard>
  );
}
