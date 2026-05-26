// Fc (Fusion Core) UI Component Library — Barrel Export
// All application code imports from this file. No direct MUI imports outside src/components/ui/.

// Layout
export { FcBox } from './FcBox';
export type { FcBoxProps } from './FcBox';
export { FcStack } from './FcStack';
export type { FcStackProps } from './FcStack';
export { FcGrid } from './FcGrid';
export type { FcGridProps } from './FcGrid';

// Typography
export { FcTypography } from './FcTypography';
export type { FcTypographyProps } from './FcTypography';

// Interactive
export { FcButton } from './FcButton';
export type { FcButtonProps } from './FcButton';
export { FcIconButton } from './FcIconButton';
export type { FcIconButtonProps } from './FcIconButton';
export { FcTextField } from './FcTextField';
export type { FcTextFieldProps } from './FcTextField';
export { FcSelect } from './FcSelect';
export type { FcSelectProps, FcSelectOption } from './FcSelect';

// Data Display
export { FcCard } from './FcCard';
export type { FcCardProps } from './FcCard';
export { FcChip } from './FcChip';
export type { FcChipProps } from './FcChip';
export { FcBadge } from './FcBadge';
export type { FcBadgeProps } from './FcBadge';
export { FcAvatar } from './FcAvatar';
export type { FcAvatarProps } from './FcAvatar';
export { FcTabs, FcTab } from './FcTabs';
export type { FcTabsProps, FcTabProps } from './FcTabs';

// Charts
export { FcDonutChart } from './FcDonutChart';
export type { FcDonutChartProps, FcDonutSegment } from './FcDonutChart';

// Overlay
export { FcDialog } from './FcDialog';
export type { FcDialogProps } from './FcDialog';

// Feedback
export { FcAlert } from './FcAlert';
export type { FcAlertProps } from './FcAlert';
export { FcSkeleton } from './FcSkeleton';
export type { FcSkeletonProps } from './FcSkeleton';
export { FcCircularProgress } from './FcCircularProgress';
export type { FcCircularProgressProps } from './FcCircularProgress';

// Navigation
export { FcDrawer } from './FcDrawer';
export type { FcDrawerProps } from './FcDrawer';
export { FcList, FcListItemButton } from './FcList';
export type { FcListProps, FcListItemButtonProps } from './FcList';

// Shared types
export type {
  FcBaseProps,
  FcSizeProps,
  FcStatusColorProps,
  FcPriorityProps,
} from './types';

// Toggle
export { FcToggle } from './FcToggle';

// Icons (re-exported from @mui/icons-material — only place allowed)
export {
  DashboardIcon,
  AssignmentIcon,
  BarChartIcon,
  CalendarMonthIcon,
  SettingsIcon,
  NotificationsIcon,
  CheckCircleIcon,
  WidgetsIcon,
  LightModeIcon,
  DarkModeIcon,
  DeleteIcon,
  EditIcon,
  PlayArrowIcon,
  CheckIcon,
} from './icons';

// Existing components (will be refactored to use Fc internals)
export { ErrorBoundary, RouteErrorBoundary } from './ErrorBoundary';
