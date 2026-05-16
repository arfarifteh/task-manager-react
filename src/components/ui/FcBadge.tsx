import Badge from '@mui/material/Badge';
import type { BadgeProps } from '@mui/material/Badge';
import { resolveBooleanProp } from './types';

export interface FcBadgeProps extends Omit<BadgeProps, 'color'> {
  error?: boolean;
  primary?: boolean;
  color?: BadgeProps['color'];
}

export function FcBadge({
  error: errorProp,
  primary,
  color: colorProp,
  ...rest
}: FcBadgeProps) {
  const color =
    colorProp ??
    resolveBooleanProp<BadgeProps['color']>(
      [
        [errorProp, 'error'],
        [primary, 'primary'],
      ],
      'default'
    );

  return <Badge color={color} {...rest} />;
}
