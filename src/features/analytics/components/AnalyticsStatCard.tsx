import { FcCard, FcTypography } from '@/components/ui';

interface AnalyticsStatCardProps {
  title: string;
  value: number;
  valueColor?: 'text.primary' | 'warning.main' | 'info.main' | 'success.main';
}

export function AnalyticsStatCard({
  title,
  value,
  valueColor = 'text.primary',
}: AnalyticsStatCardProps) {
  return (
    <FcCard sx={{ flex: 1, p: 2.5, minWidth: 0 }}>
      <FcTypography caption secondary sx={{ mb: 0.5 }}>
        {title}
      </FcTypography>
      <FcTypography h3 sx={{ fontWeight: 700, color: valueColor }}>
        {value}
      </FcTypography>
    </FcCard>
  );
}
