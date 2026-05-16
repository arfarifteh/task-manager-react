import CircularProgress from '@mui/material/CircularProgress';
import type { CircularProgressProps } from '@mui/material/CircularProgress';

export type FcCircularProgressProps = CircularProgressProps;

export function FcCircularProgress(props: FcCircularProgressProps) {
  return <CircularProgress {...props} />;
}
