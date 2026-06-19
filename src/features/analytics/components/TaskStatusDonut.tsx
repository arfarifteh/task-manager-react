import {
  FcCard,
  FcDonutChart,
  FcTypography,
  type FcDonutSegment,
} from '@/components/ui';

const STATUS_COLORS = {
  pending: '#ed6c02',
  inProgress: '#1976d2',
  completed: '#2e7d32',
} as const;

interface TaskStatusDonutProps {
  counts: { pending: number; inProgress: number; completed: number };
}

export function TaskStatusDonut({ counts }: TaskStatusDonutProps) {
  const segments: FcDonutSegment[] = [
    { label: 'Pending', value: counts.pending, color: STATUS_COLORS.pending },
    {
      label: 'In Progress',
      value: counts.inProgress,
      color: STATUS_COLORS.inProgress,
    },
    {
      label: 'Completed',
      value: counts.completed,
      color: STATUS_COLORS.completed,
    },
  ];

  return (
    <FcCard sx={{ p: 2.5 }}>
      <FcTypography h6 sx={{ mb: 2 }}>
        Task Status
      </FcTypography>
      <FcDonutChart data={segments} size={180} thickness={30} showLegend />
    </FcCard>
  );
}
