import { ActivityFeed } from '@/features/dashboard/components/ActivityFeed';
import { useAnalytics } from '../hooks/useAnalytics';
import { AnalyticsStatCard } from './AnalyticsStatCard';
import { CompletionMixBar } from './CompletionMixBar';
import { OpenDeadlinesList } from './OpenDeadlinesList';
import { PriorityBarChart } from './PriorityBarChart';
import { TaskStatusDonut } from './TaskStatusDonut';
import { FcAlert, FcBox, FcTypography } from '@/components/ui';

const containerSx = {
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
} as const;

const statsGridSx = {
  display: 'grid',
  gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
  gap: 3,
} as const;

const chartsGridSx = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
  gap: 3,
} as const;

const bottomGridSx = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', lg: '1.4fr 1fr' },
  gap: 3,
} as const;

function OverdueAlert({ count }: { count: number }) {
  if (count === 0) return null;

  return (
    <FcAlert severity="warning">
      {count} open {count === 1 ? 'task has' : 'tasks have'} a due date before
      today. Review or reschedule them in the task list.
    </FcAlert>
  );
}

export function AnalyticsLayout() {
  const {
    counts,
    statusCounts,
    priorityBreakdown,
    completionPercent,
    openDeadlines,
    overdueCount,
    activities,
  } = useAnalytics();

  return (
    <FcBox sx={containerSx}>
      <FcTypography h2>Task analytics</FcTypography>

      <FcBox sx={statsGridSx}>
        <AnalyticsStatCard title="Total tasks" value={counts.total} />
        <AnalyticsStatCard
          title="Pending"
          value={counts.pending}
          valueColor="warning.main"
        />
        <AnalyticsStatCard
          title="In progress"
          value={counts.inProgress}
          valueColor="info.main"
        />
        <AnalyticsStatCard
          title="Completed"
          value={counts.completed}
          valueColor="success.main"
        />
      </FcBox>

      <OverdueAlert count={overdueCount} />

      <FcBox sx={chartsGridSx}>
        <TaskStatusDonut counts={statusCounts} />
        <PriorityBarChart breakdown={priorityBreakdown} />
      </FcBox>

      <CompletionMixBar counts={counts} completionPercent={completionPercent} />

      <FcBox sx={bottomGridSx}>
        <OpenDeadlinesList deadlines={openDeadlines} />
        <ActivityFeed activities={activities} />
      </FcBox>
    </FcBox>
  );
}
