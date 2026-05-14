import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function TasksPage() {
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        My Tasks
      </Typography>
      <Card>
        <CardContent
          sx={{
            textAlign: 'center',
            py: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}>
          <AssignmentIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
          <Typography variant="h3" color="text.secondary">
            Task List
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Full task management with filters, tabs, and actions coming in
            Section 6.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
