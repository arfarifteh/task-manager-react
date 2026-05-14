import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function AnalyticsPage() {
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Analytics
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
          <BarChartIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
          <Typography variant="h3" color="text.secondary">
            Analytics Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Task analytics and insights coming soon.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
