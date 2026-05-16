import { FcBox, FcTypography, FcCard, BarChartIcon } from '../components/ui';

export default function AnalyticsPage() {
  return (
    <FcBox>
      <FcTypography h2 sx={{ mb: 2 }}>
        Analytics
      </FcTypography>
      <FcCard
        sx={{
          textAlign: 'center',
          py: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}>
        <BarChartIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
        <FcTypography h3 secondary>
          Analytics Dashboard
        </FcTypography>
        <FcTypography body2 secondary>
          Task analytics and insights coming soon.
        </FcTypography>
      </FcCard>
    </FcBox>
  );
}
