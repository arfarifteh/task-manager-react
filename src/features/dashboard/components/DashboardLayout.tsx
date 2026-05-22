import { getDashboardStats } from '@/services/dashboardService';
import { useTaskActions } from '../hooks/useTaskActions';
import { useTaskFilters } from '../hooks/useTaskFilters';
import { AddTask } from './AddTask';
import { StatsCardsRow } from './StatsCardsRow';
import { TaskList } from './TaskList';
import { FcBox } from '@/components/ui';

const gridSx = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: '1fr 320px' },
  gridTemplateRows: 'auto 1fr',
  gap: 3,
} as const;

export function DashboardLayout() {
  const {
    activeTab,
    priority,
    sortBy,
    filteredTasks,
    setActiveTab,
    setPriority,
    setSortBy,
    refresh,
  } = useTaskFilters();

  const { createTask, startTask, completeTask, removeTask } =
    useTaskActions(refresh);

  const stats = getDashboardStats();

  return (
    <FcBox sx={gridSx}>
      {/* A — Stats Cards Row (full width) */}
      <FcBox sx={{ gridColumn: '1 / -1' }}>
        <StatsCardsRow stats={stats} />
      </FcBox>

      {/* Left column: Quick Add + Task List + Activity Feed */}
      <FcBox sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <AddTask onAdd={createTask} />
        <TaskList
          tasks={filteredTasks}
          activeTab={activeTab}
          priority={priority}
          sortBy={sortBy}
          onTabChange={setActiveTab}
          onPriorityChange={setPriority}
          onSortChange={setSortBy}
          onStart={startTask}
          onComplete={completeTask}
          onDelete={removeTask}
          onEdit={id => console.log('Edit task:', id)}
        />
        {/* Placeholder for ActivityFeed (Phase 5) */}
      </FcBox>

      {/* Right column: Task Overview Chart + Upcoming Deadlines */}
      <FcBox sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Placeholder for TaskOverviewChart (Phase 4) */}
        {/* Placeholder for UpcomingDeadlines (Phase 5) */}
      </FcBox>
    </FcBox>
  );
}
