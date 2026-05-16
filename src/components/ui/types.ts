import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material/styles';

/** Base props shared by all Fc components */
export interface FcBaseProps {
  children?: ReactNode;
  sx?: SxProps<Theme>;
  className?: string;
}

/** Size boolean shortcuts */
export interface FcSizeProps {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

/** Color boolean shortcuts for semantic status */
export interface FcStatusColorProps {
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  info?: boolean;
}

/** Priority boolean shortcuts */
export interface FcPriorityProps {
  high?: boolean;
  medium?: boolean;
  low?: boolean;
}

/** Resolve the first truthy boolean from a record to its mapped value, else fallback */
export function resolveBooleanProp<T>(
  map: [boolean | undefined, T][],
  fallback: T
): T {
  for (const [flag, value] of map) {
    if (flag) return value;
  }
  return fallback;
}
