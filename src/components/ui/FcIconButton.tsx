import IconButton from '@mui/material/IconButton';
import type { IconButtonProps } from '@mui/material/IconButton';
import { resolveBooleanProp } from './types';

export interface FcIconButtonProps extends Omit<
  IconButtonProps,
  'size' | 'color'
> {
  small?: boolean;
  primary?: boolean;
  size?: IconButtonProps['size'];
  color?: IconButtonProps['color'];
}

export function FcIconButton({
  small,
  primary,
  size: sizeProp,
  color: colorProp,
  ...rest
}: FcIconButtonProps) {
  const size =
    sizeProp ??
    resolveBooleanProp<IconButtonProps['size']>([[small, 'small']], 'medium');

  const color =
    colorProp ??
    resolveBooleanProp<IconButtonProps['color']>(
      [[primary, 'primary']],
      'default'
    );

  return <IconButton size={size} color={color} {...rest} />;
}
