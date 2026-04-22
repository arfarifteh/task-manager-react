import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { themes, ThemeMode } from './themes';

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
  theme?: ThemeMode;
}

export function ThemeProviderWrapper({ 
  children, 
  theme = 'light' 
}: ThemeProviderWrapperProps): JSX.Element {
  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
    </ThemeProvider>
  );
}
