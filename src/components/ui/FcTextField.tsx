import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';

export interface FcTextFieldProps extends Omit<
  TextFieldProps,
  'fullWidth' | 'error'
> {
  fullWidth?: boolean;
  error?: boolean;
}

export function FcTextField({
  fullWidth = false,
  error = false,
  ...rest
}: FcTextFieldProps) {
  return <TextField fullWidth={fullWidth} error={error} {...rest} />;
}
