import type { ReactNode } from 'react';
import List from '@mui/material/List';
import type { ListProps } from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import type { ListItemButtonProps } from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import type { SxProps, Theme } from '@mui/material/styles';

export type FcListProps = ListProps;

export function FcList(props: FcListProps) {
  return <List {...props} />;
}

export interface FcListItemButtonProps extends ListItemButtonProps {
  /** Icon element rendered on the left */
  icon?: ReactNode;
  /** Primary text */
  primary?: string;
  /** Secondary text */
  secondary?: string;
  /** Sx for the icon wrapper */
  iconSx?: SxProps<Theme>;
}

export function FcListItemButton({
  icon,
  primary,
  secondary,
  iconSx,
  children,
  ...rest
}: FcListItemButtonProps) {
  return (
    <ListItemButton {...rest}>
      {icon && <ListItemIcon sx={iconSx}>{icon}</ListItemIcon>}
      {primary ? (
        <ListItemText primary={primary} secondary={secondary} />
      ) : (
        children
      )}
    </ListItemButton>
  );
}
