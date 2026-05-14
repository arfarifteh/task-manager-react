import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ThemeProviderWrapper, sidebarColors } from '../theme';

const SIDEBAR_WIDTH = 220;

const navItems = [
  { path: '/', label: 'Dashboard', icon: DashboardIcon },
  { path: '/tasks', label: 'My Tasks', icon: AssignmentIcon },
  { path: '/analytics', label: 'Analytics', icon: BarChartIcon },
  { path: '/calendar', label: 'Calendar', icon: CalendarMonthIcon },
  { path: '/settings', label: 'Settings', icon: SettingsIcon },
];

export default function Root() {
  return (
    <ThemeProviderWrapper theme="light">
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <AppHeader />
          <Box
            component="main"
            sx={{
              flex: 1,
              p: 3,
              bgcolor: 'background.default',
              overflow: 'auto',
            }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </ThemeProviderWrapper>
  );
}

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      aria-label="Main navigation"
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: SIDEBAR_WIDTH,
          bgcolor: sidebarColors.bg,
          color: sidebarColors.text,
          borderRight: 'none',
          display: 'flex',
          flexDirection: 'column',
        },
      }}>
      {/* Logo */}
      <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <CheckCircleIcon sx={{ color: sidebarColors.logo, fontSize: 28 }} />
        <Typography
          variant="h6"
          sx={{ color: sidebarColors.textActive, fontWeight: 700 }}>
          TaskMaster
        </Typography>
      </Box>

      {/* Navigation */}
      <List component="nav" sx={{ px: 1.5, flex: 1 }}>
        {navItems.map(item => {
          const isActive =
            item.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.path);
          const Icon = item.icon;

          return (
            <ListItemButton
              key={item.path}
              selected={isActive}
              onClick={() => navigate(item.path)}
              aria-label={`Navigate to ${item.label}`}
              sx={{
                borderRadius: 1.5,
                mb: 0.5,
                color: isActive ? sidebarColors.textActive : sidebarColors.text,
                bgcolor: isActive ? sidebarColors.bgActive : 'transparent',
                '&:hover': {
                  bgcolor: isActive
                    ? sidebarColors.bgActive
                    : sidebarColors.bgHover,
                },
                '&.Mui-selected': {
                  bgcolor: sidebarColors.bgActive,
                  '&:hover': {
                    bgcolor: sidebarColors.bgActive,
                  },
                },
              }}>
              <ListItemIcon
                sx={{
                  color: 'inherit',
                  minWidth: 36,
                }}>
                <Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                slotProps={{ primary: { sx: { fontSize: '0.875rem' } } }}
              />
            </ListItemButton>
          );
        })}
      </List>

      {/* User avatar at bottom */}
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Avatar
          sx={{ width: 36, height: 36, bgcolor: 'primary.main' }}
          alt="Alireza">
          A
        </Avatar>
        <Box sx={{ overflow: 'hidden' }}>
          <Typography
            variant="body2"
            sx={{
              color: sidebarColors.textActive,
              fontWeight: 600,
              lineHeight: 1.2,
            }}>
            Alireza
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: sidebarColors.text,
              display: 'block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
            alireza@example.com
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}

function AppHeader() {
  return (
    <Box
      component="header"
      sx={{
        px: 3,
        py: 2,
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Box>
        <Typography variant="h1" sx={{ color: 'text.primary' }}>
          Welcome, Alireza!
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Manage your tasks efficiently.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton aria-label="Notifications">
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Button variant="outlined" size="small">
          Logout
        </Button>
      </Box>
    </Box>
  );
}
