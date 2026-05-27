import { useCallback, useState } from 'react';
import { useDashboard } from '../hooks/useDashboard';
import { useTaskActions } from '../hooks/useTaskActions';
import { ActivityFeed } from './ActivityFeed';
import { AddTask } from './AddTask';
import { EditTaskModal } from './EditTaskModal';
import { StatsCardsRow } from './StatsCardsRow';
import { TaskList } from './TaskList';
import { TaskOverviewChart } from './TaskOverviewChart';
import { UpcomingDeadlines } from './UpcomingDeadlines';
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
  const dashboard = useDashboard();

  const actions = useTaskActions(dashboard.refresh);

  const [editingTask, setEditingTask] = useState<Task | null>(null);

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
          <StatsCardsRow stats={dashboard.stats} />
        </FcBox>
        <FcBox sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <AddTask onAdd={actions.createTask} />
          <TaskList
            tasks={dashboard.filteredTasks}
            activeTab={dashboard.activeTab}
            priority={dashboard.priority}
            sortBy={dashboard.sortBy}
            onTabChange={dashboard.setActiveTab}
            onPriorityChange={dashboard.setPriority}
            onSortChange={dashboard.setSortBy}
            onStart={actions.startTask}
            onComplete={actions.completeTask}
            onDelete={actions.removeTask}
            onEdit={setEditingTask}
          />
          <ActivityFeed activities={dashboard.activities} />
        </FcBox>
        <FcBox sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TaskOverviewChart />
          <UpcomingDeadlines deadlines={dashboard.deadlines} />
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
