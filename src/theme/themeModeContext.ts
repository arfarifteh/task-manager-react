import { createContext } from 'react';
import type { ThemeMode } from './themes';

export interface ThemeModeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

export const ThemeModeContext = createContext<
  ThemeModeContextValue | undefined
>(undefined);
