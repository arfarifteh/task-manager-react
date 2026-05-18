import { getDashboardStats } from '@/services/dashboardService';
import { StatsCardsRow } from './StatsCardsRow';
import { FcBox } from '@/components/ui';

export function DashboardLayout() {
  const stats = getDashboardStats();

  return (
    <FcBox
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 320px' },
        gridTemplateRows: 'auto 1fr',
        gap: 3,
      }}>
      {/* A — Stats Cards Row (full width) */}
      <FcBox sx={{ gridColumn: '1 / -1' }}>
        <StatsCardsRow stats={stats} />
      </FcBox>

      {/* Left column: Quick Add + Task List + Activity Feed */}
      <FcBox sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Placeholder for QuickAddTask (Phase 3) */}
        {/* Placeholder for TaskList (Phase 2) */}
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
