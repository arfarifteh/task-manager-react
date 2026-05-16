import Chip from '@mui/material/Chip';
import type { ChipProps } from '@mui/material/Chip';
import { resolveBooleanProp } from './types';

export interface FcChipProps extends Omit<ChipProps, 'color'> {
  /** Priority shortcuts */
  high?: boolean;
  medium?: boolean;
  low?: boolean;
  /** Status color shortcuts */
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  info?: boolean;
  primary?: boolean;
  color?: ChipProps['color'];
}

export function FcChip({
  high,
  medium,
  low,
  success,
  warning,
  error: errorProp,
  info,
  primary,
  color: colorProp,
  size = 'small',
  ...rest
}: FcChipProps) {
  const color =
    colorProp ??
    resolveBooleanProp<ChipProps['color']>(
      [
        [high, 'error'],
        [errorProp, 'error'],
        [medium, 'warning'],
        [warning, 'warning'],
        [low, 'success'],
        [success, 'success'],
        [info, 'info'],
        [primary, 'primary'],
      ],
      'default'
    );

  return <Chip color={color} size={size} {...rest} />;
}
