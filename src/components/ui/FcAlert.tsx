import Alert from '@mui/material/Alert';
import type { AlertProps } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { resolveBooleanProp } from './types';

export interface FcAlertProps extends Omit<AlertProps, 'severity'> {
  error?: boolean;
  warning?: boolean;
  success?: boolean;
  info?: boolean;
  /** Renders MUI AlertTitle above children */
  title?: string;
  severity?: AlertProps['severity'];
}

export function FcAlert({
  error: errorProp,
  warning,
  success,
  info,
  title,
  severity: severityProp,
  children,
  ...rest
}: FcAlertProps) {
  const severity =
    severityProp ??
    resolveBooleanProp<AlertProps['severity']>(
      [
        [errorProp, 'error'],
        [warning, 'warning'],
        [success, 'success'],
        [info, 'info'],
      ],
      'info'
    );

  return (
    <Alert severity={severity} {...rest}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </Alert>
  );
}
