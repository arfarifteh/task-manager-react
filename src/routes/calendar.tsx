import {
  FcBox,
  FcTypography,
  FcCard,
  CalendarMonthIcon,
} from '../components/ui';

export default function CalendarPage() {
  return (
    <FcBox>
      <FcTypography h2 sx={{ mb: 2 }}>
        Calendar
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
        <CalendarMonthIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
        <FcTypography h3 secondary>
          Task Calendar
        </FcTypography>
        <FcTypography body2 secondary>
          Calendar view for task deadlines coming soon.
        </FcTypography>
      </FcCard>
    </FcBox>
  );
}
