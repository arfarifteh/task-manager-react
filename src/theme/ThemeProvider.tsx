import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { themes } from './themes';
import type { ThemeMode } from './themes';

export interface ThemeProviderWrapperProps {
  children: React.ReactNode;
  theme?: ThemeMode;
}

export function ThemeProviderWrapper({
  children,
  theme = 'light',
}: ThemeProviderWrapperProps) {
  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
}
