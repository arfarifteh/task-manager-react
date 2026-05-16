import Drawer from '@mui/material/Drawer';
import type { DrawerProps } from '@mui/material/Drawer';

export interface FcDrawerProps extends Omit<DrawerProps, 'variant'> {
  permanent?: boolean;
  temporary?: boolean;
  variant?: DrawerProps['variant'];
}

export function FcDrawer({
  permanent,
  temporary,
  variant: variantProp,
  ...rest
}: FcDrawerProps) {
  const variant =
    variantProp ??
    (temporary ? 'temporary' : permanent ? 'permanent' : 'permanent');

  return <Drawer variant={variant} {...rest} />;
}
