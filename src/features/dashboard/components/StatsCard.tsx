import type { StatCard } from '../types';
import { FcBox, FcCard, FcTypography } from '@/components/ui';

interface StatsCardProps {
  title: string;
  stat: StatCard;
}

export function StatsCard({ title, stat }: StatsCardProps) {
  const colorMap = {
    success: 'success.main',
    primary: 'primary.main',
    warning: 'warning.main',
  } as const;

  return (
    <FcCard sx={{ flex: 1, p: 2.5 }}>
      <FcTypography caption secondary sx={{ mb: 0.5 }}>
        {title}
      </FcTypography>
      <FcTypography h3 sx={{ fontWeight: 700, mb: 1 }}>
        {stat.count}
      </FcTypography>
      <FcBox sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <FcBox
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: colorMap[stat.highlightColor],
          }}
        />
        <FcTypography caption secondary>
          {stat.highlightLabel}
        </FcTypography>
      </FcBox>
    </FcCard>
  );
}
