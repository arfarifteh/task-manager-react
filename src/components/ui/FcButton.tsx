import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';
import { resolveBooleanProp } from './types';

export interface FcButtonProps extends Omit<
  ButtonProps,
  'variant' | 'color' | 'size'
> {
  /** Color variants */
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  /** Style variants */
  outlined?: boolean;
  text?: boolean;
  /** Size variants */
  small?: boolean;
  large?: boolean;
  /** Pass-through overrides */
  variant?: ButtonProps['variant'];
  color?: ButtonProps['color'];
  size?: ButtonProps['size'];
}

export function FcButton({
  primary,
  secondary,
  danger,
  outlined,
  text,
  small,
  large,
  variant: variantProp,
  color: colorProp,
  size: sizeProp,
  ...rest
}: FcButtonProps) {
  const color =
    colorProp ??
    resolveBooleanProp<ButtonProps['color']>(
      [
        [primary, 'primary'],
        [secondary, 'secondary'],
        [danger, 'error'],
      ],
      'primary'
    );

  const variant =
    variantProp ??
    resolveBooleanProp<ButtonProps['variant']>(
      [
        [outlined, 'outlined'],
        [text, 'text'],
      ],
      'contained'
    );

  const size =
    sizeProp ??
    resolveBooleanProp<ButtonProps['size']>(
      [
        [small, 'small'],
        [large, 'large'],
      ],
      'medium'
    );

  return <Button variant={variant} color={color} size={size} {...rest} />;
}
