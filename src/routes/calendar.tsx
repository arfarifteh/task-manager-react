import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function CalendarPage() {
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Calendar
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
          <CalendarMonthIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
          <Typography variant="h3" color="text.secondary">
            Task Calendar
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Calendar view for task deadlines coming soon.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
