import Dialog from '@mui/material/Dialog';
import type { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export interface FcDialogProps extends Omit<DialogProps, 'title'> {
  title?: string;
  actions?: React.ReactNode;
}

export function FcDialog({ title, actions, children, ...rest }: FcDialogProps) {
  return (
    <Dialog {...rest}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
}
