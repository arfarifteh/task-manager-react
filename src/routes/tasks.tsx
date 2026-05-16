import { FcBox, FcTypography, FcCard, AssignmentIcon } from '../components/ui';

export default function TasksPage() {
  return (
    <FcBox>
      <FcTypography h2 sx={{ mb: 2 }}>
        My Tasks
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
        <AssignmentIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
        <FcTypography h3 secondary>
          Task List
        </FcTypography>
        <FcTypography body2 secondary>
          Full task management with filters, tabs, and actions coming in Section
          6.
        </FcTypography>
      </FcCard>
    </FcBox>
  );
}
