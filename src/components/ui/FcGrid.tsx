import Grid from '@mui/material/Grid';
import type { GridProps } from '@mui/material/Grid';

export type FcGridProps = GridProps;

export function FcGrid(props: FcGridProps) {
  return <Grid {...props} />;
}
