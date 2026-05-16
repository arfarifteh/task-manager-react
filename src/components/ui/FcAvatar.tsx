import Avatar from '@mui/material/Avatar';
import type { AvatarProps } from '@mui/material/Avatar';
import { resolveBooleanProp } from './types';

const SIZES = { small: 28, medium: 36, large: 48 } as const;

export interface FcAvatarProps extends AvatarProps {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

export function FcAvatar({ small, medium, large, sx, ...rest }: FcAvatarProps) {
  const dim = resolveBooleanProp(
    [
      [small, SIZES.small],
      [large, SIZES.large],
      [medium, SIZES.medium],
    ],
    SIZES.medium
  );

  return (
    <Avatar
      sx={{ width: dim, height: dim, ...((sx ?? {}) as object) }}
      {...rest}
    />
  );
}
