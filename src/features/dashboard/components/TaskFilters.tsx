import { TaskPriority } from '../types';
import type { TaskSortField } from '../types';
import { FcBox, FcSelect, type FcSelectOption } from '@/components/ui';

type PriorityFilter = TaskPriority | 'all';

interface TaskFiltersProps {
  priority: PriorityFilter;
  sortBy: TaskSortField;
  onPriorityChange: (priority: PriorityFilter) => void;
  onSortChange: (sort: TaskSortField) => void;
}

const priorityOptions: FcSelectOption<PriorityFilter>[] = [
  { value: 'all', label: 'All Priorities' },
  { value: TaskPriority.high, label: 'High' },
  { value: TaskPriority.medium, label: 'Medium' },
  { value: TaskPriority.low, label: 'Low' },
];

const sortOptions: FcSelectOption<TaskSortField>[] = [
  { value: 'dueDate', label: 'Due Date' },
  { value: 'priority', label: 'Priority' },
  { value: 'title', label: 'Title' },
];

export function TaskFilters({
  priority,
  sortBy,
  onPriorityChange,
  onSortChange,
}: TaskFiltersProps) {
  return (
    <FcBox sx={{ display: 'flex', gap: 2, py: 1.5 }}>
      <FcSelect
        options={priorityOptions}
        value={priority}
        onChange={e => onPriorityChange(e.target.value as PriorityFilter)}
        size="small"
        label="Filter"
        sx={{ minWidth: 140 }}
      />
      <FcSelect
        options={sortOptions}
        value={sortBy}
        onChange={e => onSortChange(e.target.value as TaskSortField)}
        size="small"
        label="Sort"
        sx={{ minWidth: 140 }}
      />
    </FcBox>
  );
}
