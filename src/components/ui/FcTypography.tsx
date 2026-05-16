import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';
import { resolveBooleanProp } from './types';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'subtitle1'
  | 'subtitle2';

export interface FcTypographyProps extends Omit<
  TypographyProps,
  'variant' | 'color'
> {
  /** Variant shortcuts */
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  body?: boolean;
  body2?: boolean;
  caption?: boolean;
  subtitle?: boolean;
  /** Color shortcuts */
  secondary?: boolean;
  /** Pass-through for non-boolean usage */
  variant?: TypographyVariant;
  color?: TypographyProps['color'];
}

export function FcTypography({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  body,
  body2,
  caption,
  subtitle,
  secondary,
  variant: variantProp,
  color: colorProp,
  ...rest
}: FcTypographyProps) {
  const variant =
    variantProp ??
    resolveBooleanProp<TypographyVariant>(
      [
        [h1, 'h1'],
        [h2, 'h2'],
        [h3, 'h3'],
        [h4, 'h4'],
        [h5, 'h5'],
        [h6, 'h6'],
        [body, 'body1'],
        [body2, 'body2'],
        [caption, 'caption'],
        [subtitle, 'subtitle1'],
      ],
      'body1'
    );

  const color = colorProp ?? (secondary ? 'text.secondary' : undefined);

  return <Typography variant={variant} color={color} {...rest} />;
}
