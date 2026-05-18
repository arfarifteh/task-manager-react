import { StatsCard } from './StatsCard';
import type { DashboardStats } from '../types';
import { FcBox } from '@/components/ui';

interface StatsCardsRowProps {
  stats: DashboardStats;
}

export function StatsCardsRow({ stats }: StatsCardsRowProps) {
  return (
    <FcBox sx={{ display: 'flex', gap: 3 }}>
      <StatsCard title="Tasks Today" stat={stats.tasksToday} />
      <StatsCard title="In Progress" stat={stats.inProgress} />
      <StatsCard title="Completed" stat={stats.completed} />
    </FcBox>
  );
}
