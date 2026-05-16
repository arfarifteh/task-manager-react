import Box from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';

export type FcBoxProps = BoxProps;

export function FcBox(props: FcBoxProps) {
  return <Box {...props} />;
}
