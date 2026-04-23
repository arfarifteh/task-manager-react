import type { Theme } from '@mui/material/styles';

// Extend MUI theme with custom properties
export interface CustomTheme extends Theme {
  custom?: {
    borderRadius: {
      small: number;
      medium: number;
      large: number;
    };
    spacing: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
}

// Theme mode type
export type ThemeMode = 'light' | 'dark';

// Component prop types that will be used across the library
export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export interface TextFieldProps extends BaseComponentProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface CardProps extends BaseComponentProps {
  elevation?: number;
  variant?: 'elevation' | 'outlined';
  padding?: 'none' | 'small' | 'medium' | 'large';
}
