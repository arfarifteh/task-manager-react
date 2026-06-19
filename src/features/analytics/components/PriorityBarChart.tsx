import type { PriorityBreakdownItem } from '@/features/analytics/services/analyticsService';
import { FcBox, FcCard, FcTypography } from '@/components/ui';

const BAR_COLORS = ['#1976d2', '#7b1fa2', '#00838f'] as const;

interface PriorityBarChartProps {
  breakdown: PriorityBreakdownItem[];
}

export function PriorityBarChart({ breakdown }: PriorityBarChartProps) {
  const max = Math.max(...breakdown.map(b => b.count), 1);

  return (
    <FcCard sx={{ p: 2.5 }}>
      <FcTypography h6 sx={{ mb: 2 }}>
        Priority Breakdown
      </FcTypography>
      <FcBox sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {breakdown.map((item, i) => (
          <FcBox key={item.priority}>
            <FcBox
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 0.5,
              }}>
              <FcTypography body2>{item.label}</FcTypography>
              <FcTypography body2 secondary>
                {item.count}
              </FcTypography>
            </FcBox>
            <FcBox
              sx={{
                height: 8,
                borderRadius: 1,
                bgcolor: 'action.hover',
                overflow: 'hidden',
              }}>
              <FcBox
                sx={{
                  height: '100%',
                  width: `${(item.count / max) * 100}%`,
                  bgcolor: BAR_COLORS[i % BAR_COLORS.length],
                  borderRadius: 1,
                }}
              />
            </FcBox>
          </FcBox>
        ))}
      </FcBox>
    </FcCard>
  );
}
