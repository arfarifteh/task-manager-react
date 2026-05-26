import { useCallback, useState } from 'react';
import { getDashboardStats } from '@/services/dashboardService';
import { useTaskActions } from '../hooks/useTaskActions';
import { useTaskFilters } from '../hooks/useTaskFilters';
import { AddTask } from './AddTask';
import { EditTaskModal } from './EditTaskModal';
import { StatsCardsRow } from './StatsCardsRow';
import { TaskList } from './TaskList';
import { TaskOverviewChart } from './TaskOverviewChart';
import type { EditTaskInput, Task } from '../types';
import { FcBox } from '@/components/ui';

const gridSx = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: '1fr 320px' },
  gridTemplateRows: 'auto 1fr',
  gap: 3,
} as const;

function DashboardGrid({ children }: { children: React.ReactNode }) {
  return <FcBox sx={gridSx}>{children}</FcBox>;
}

export function DashboardLayout() {
  const filters = useTaskFilters();

  const actions = useTaskActions(filters.refresh);

  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const stats = getDashboardStats();

  const handleSaveEdit = useCallback(
    (id: string, updates: EditTaskInput) => {
      actions.editTask(id, updates);
      setEditingTask(null);
    },
    [actions]
  );

  return (
    <>
      <DashboardGrid>
        <FcBox sx={{ gridColumn: '1 / -1' }}>
          <StatsCardsRow stats={stats} />
        </FcBox>
        <FcBox sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <AddTask onAdd={actions.createTask} />
          <TaskList
            tasks={filters.filteredTasks}
            activeTab={filters.activeTab}
            priority={filters.priority}
            sortBy={filters.sortBy}
            onTabChange={filters.setActiveTab}
            onPriorityChange={filters.setPriority}
            onSortChange={filters.setSortBy}
            onStart={actions.startTask}
            onComplete={actions.completeTask}
            onDelete={actions.removeTask}
            onEdit={setEditingTask}
          />
        </FcBox>
        <FcBox sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TaskOverviewChart />
        </FcBox>
      </DashboardGrid>
      <EditTaskModal
        task={editingTask}
        onSave={handleSaveEdit}
        onClose={() => setEditingTask(null)}
      />
    </>
  );
}
