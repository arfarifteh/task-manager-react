import Stack from '@mui/material/Stack';
import type { StackProps } from '@mui/material/Stack';

export interface FcStackProps extends Omit<StackProps, 'direction'> {
  /** Shortcut for direction="row" */
  row?: boolean;
  /** Shortcut for direction="column" (default) */
  column?: boolean;
}

export function FcStack({ row, column, ...rest }: FcStackProps) {
  void column;
  const direction = row ? 'row' : 'column';

  return <Stack direction={direction} {...rest} />;
}
