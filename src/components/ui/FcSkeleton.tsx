import Skeleton from '@mui/material/Skeleton';
import type { SkeletonProps } from '@mui/material/Skeleton';
import { resolveBooleanProp } from './types';

export interface FcSkeletonProps extends Omit<SkeletonProps, 'variant'> {
  text?: boolean;
  rectangular?: boolean;
  circular?: boolean;
  variant?: SkeletonProps['variant'];
}

export function FcSkeleton({
  text,
  rectangular,
  circular,
  variant: variantProp,
  ...rest
}: FcSkeletonProps) {
  const variant =
    variantProp ??
    resolveBooleanProp<SkeletonProps['variant']>(
      [
        [text, 'text'],
        [rectangular, 'rectangular'],
        [circular, 'circular'],
      ],
      'text'
    );

  return <Skeleton variant={variant} {...rest} />;
}
