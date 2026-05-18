import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  FcBox,
  FcDrawer,
  FcList,
  FcListItemButton,
  FcTypography,
  FcAvatar,
  FcBadge,
  FcIconButton,
  FcButton,
  FcToggle,
  DashboardIcon,
  AssignmentIcon,
  BarChartIcon,
  CalendarMonthIcon,
  SettingsIcon,
  NotificationsIcon,
  CheckCircleIcon,
} from '../components/ui';
import { ThemeProviderWrapper, useThemeMode, getSidebarColors } from '../theme';

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
    <ThemeProviderWrapper>
      <FcBox sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <FcBox sx={{ flex: 1, display: 'flex', p: 2, flexDirection: 'column' }}>
          <AppHeader />
          <FcBox
            component="main"
            sx={{
              flex: 1,
              p: 3,
              bgcolor: 'background.default',
              overflow: 'auto',
            }}>
            <Outlet />
          </FcBox>
        </FcBox>
      </FcBox>
    </ThemeProviderWrapper>
  );
}

function Sidebar() {
  const location = useLocation();

  const navigate = useNavigate();

  const { mode } = useThemeMode();

  const sidebarColors = getSidebarColors(mode);

  return (
    <FcDrawer
      permanent
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
      <FcBox sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <CheckCircleIcon sx={{ color: sidebarColors.logo, fontSize: 28 }} />
        <FcTypography
          h6
          sx={{ color: sidebarColors.textActive, fontWeight: 700 }}>
          TaskMaster
        </FcTypography>
      </FcBox>

      {/* Navigation */}
      <FcList component="nav" sx={{ px: 1.5, flex: 1 }}>
        {navItems.map(item => {
          const isActive =
            item.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.path);

          const Icon = item.icon;

          return (
            <FcListItemButton
              key={item.path}
              selected={isActive}
              onClick={() => navigate(item.path)}
              aria-label={`Navigate to ${item.label}`}
              icon={<Icon fontSize="small" />}
              iconSx={{ color: 'inherit', minWidth: 36 }}
              primary={item.label}
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
              }}
            />
          );
        })}
      </FcList>

      {/* User avatar at bottom */}
      <FcBox sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <FcAvatar sx={{ bgcolor: 'primary.main' }} alt="Alireza">
          A
        </FcAvatar>
        <FcBox sx={{ overflow: 'hidden' }}>
          <FcTypography
            body2
            sx={{
              color: sidebarColors.textActive,
              fontWeight: 600,
              lineHeight: 1.2,
            }}>
            Alireza
          </FcTypography>
          <FcTypography
            caption
            sx={{
              color: sidebarColors.text,
              display: 'block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
            alireza@example.com
          </FcTypography>
        </FcBox>
      </FcBox>
    </FcDrawer>
  );
}

function AppHeader() {
  return (
    <FcBox
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
      <FcBox>
        <FcTypography h1 sx={{ color: 'text.primary' }}>
          Welcome, Alireza!
        </FcTypography>
        <FcTypography body2 secondary>
          Manage your tasks efficiently.
        </FcTypography>
      </FcBox>

      <FcBox sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <FcToggle />
        <FcIconButton aria-label="Notifications">
          <FcBadge error badgeContent={2}>
            <NotificationsIcon />
          </FcBadge>
        </FcIconButton>
        <FcButton outlined small>
          Logout
        </FcButton>
      </FcBox>
    </FcBox>
  );
}
