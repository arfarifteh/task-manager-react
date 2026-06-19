import type { AnalyticsCounts } from '@/features/analytics/services/analyticsService';
import { FcBox, FcCard, FcTypography } from '@/components/ui';

const SEGMENT_COLORS = {
  completed: '#2e7d32',
  inProgress: '#1976d2',
  pending: '#ed6c02',
} as const;

const headerSx = {
  display: 'flex',
  justifyContent: 'space-between',
  mb: 1,
} as const;

const barSx = {
  display: 'flex',
  height: 12,
  borderRadius: 1,
  overflow: 'hidden',
} as const;

const legendRowSx = { display: 'flex', gap: 2, mt: 1.5 } as const;

const legendItemSx = {
  display: 'flex',
  alignItems: 'center',
  gap: 0.5,
} as const;

interface CompletionMixBarProps {
  counts: AnalyticsCounts;
  completionPercent: number;
}

export function CompletionMixBar({
  counts,
  completionPercent,
}: CompletionMixBarProps) {
  const total = counts.total || 1;

  const segments = [
    {
      key: 'completed',
      width: (counts.completed / total) * 100,
      color: SEGMENT_COLORS.completed,
    },
    {
      key: 'inProgress',
      width: (counts.inProgress / total) * 100,
      color: SEGMENT_COLORS.inProgress,
    },
    {
      key: 'pending',
      width: (counts.pending / total) * 100,
      color: SEGMENT_COLORS.pending,
    },
  ];

  return (
    <FcCard sx={{ p: 2.5 }}>
      <FcBox sx={headerSx}>
        <FcTypography h6>Completion Rate</FcTypography>
        <FcTypography h6>{completionPercent}%</FcTypography>
      </FcBox>
      <FcBox sx={barSx}>
        {segments.map(s => (
          <FcBox key={s.key} sx={{ width: `${s.width}%`, bgcolor: s.color }} />
        ))}
      </FcBox>
      <FcBox sx={legendRowSx}>
        <Legend color={SEGMENT_COLORS.completed} label="Completed" />
        <Legend color={SEGMENT_COLORS.inProgress} label="In Progress" />
        <Legend color={SEGMENT_COLORS.pending} label="Pending" />
      </FcBox>
    </FcCard>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <FcBox sx={legendItemSx}>
      <FcBox
        sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: color }}
      />
      <FcTypography caption secondary>
        {label}
      </FcTypography>
    </FcBox>
  );
}
