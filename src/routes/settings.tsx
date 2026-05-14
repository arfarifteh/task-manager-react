import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SettingsIcon from '@mui/icons-material/Settings';

export default function SettingsPage() {
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Settings
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
          <SettingsIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
          <Typography variant="h3" color="text.secondary">
            Application Settings
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Theme, notifications, and preferences coming soon.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
