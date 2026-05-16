import React from 'react';
import { ThemeModeProvider } from './ThemeContext';

export interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

export function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {
  return <ThemeModeProvider>{children}</ThemeModeProvider>;
}
