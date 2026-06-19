import { getTaskOverview } from '@/features/dashboard/services/dashboardService';
import {
  FcCard,
  FcDonutChart,
  FcTypography,
  type FcDonutSegment,
} from '@/components/ui';

const CHART_COLORS = {
  inProgress: '#1976d2',
  completed: '#2e7d32',
  pending: '#ed6c02',
} as const;

function buildSegments(): FcDonutSegment[] {
  const overview = getTaskOverview();

  return [
    {
      label: 'In Progress',
      value: overview.inProgressPercent,
      color: CHART_COLORS.inProgress,
    },
    {
      label: 'Completed',
      value: overview.completedPercent,
      color: CHART_COLORS.completed,
    },
    {
      label: 'Pending',
      value: overview.pendingPercent,
      color: CHART_COLORS.pending,
    },
  ];
}

export function TaskOverviewChart() {
  const segments = buildSegments();

  return (
    <FcCard sx={{ p: 2.5 }}>
      <FcTypography h6 sx={{ mb: 2 }}>
        Task Overview
      </FcTypography>
      <FcDonutChart data={segments} size={180} thickness={35} showLegend />
    </FcCard>
  );
}
