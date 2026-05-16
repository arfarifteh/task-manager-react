import Card from '@mui/material/Card';
import type { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export interface FcCardProps extends Omit<CardProps, 'variant'> {
  /** Higher elevation shadow */
  elevated?: boolean;
  /** Outlined border instead of shadow */
  outlined?: boolean;
  /** Skip CardContent padding wrapper */
  noPadding?: boolean;
  variant?: CardProps['variant'];
}

export function FcCard({
  elevated,
  outlined,
  noPadding,
  variant: variantProp,
  children,
  ...rest
}: FcCardProps) {
  const variant = variantProp ?? (outlined ? 'outlined' : 'elevation');

  const elevation = elevated ? 4 : (rest.elevation ?? undefined);

  return (
    <Card variant={variant} elevation={elevation} {...rest}>
      {noPadding ? children : <CardContent>{children}</CardContent>}
    </Card>
  );
}
