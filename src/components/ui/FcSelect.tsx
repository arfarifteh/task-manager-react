import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';

export interface FcSelectOption<T extends string | number = string> {
  value: T;
  label: string;
}

export interface FcSelectProps<T extends string | number = string> extends Omit<
  TextFieldProps,
  'select' | 'children'
> {
  options: FcSelectOption<T>[];
}

export function FcSelect<T extends string | number = string>({
  options,
  ...rest
}: FcSelectProps<T>) {
  return (
    <TextField select {...rest}>
      {options.map(opt => (
        <MenuItem key={String(opt.value)} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
