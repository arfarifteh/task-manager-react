import React, { useState, useMemo, useCallback } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeModeContext } from './themeModeContext';
import { themes } from './themes';
import type { ThemeMode } from './themes';

const STORAGE_KEY = 'theme-mode';

function getInitialMode(): ThemeMode {
  // 1. Check localStorage
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored === 'light' || stored === 'dark') return stored;

  // 2. Check OS preference
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches)
    return 'dark';

  // 3. Default
  return 'light';
}

export function ThemeModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  const setTheme = useCallback((newMode: ThemeMode) => {
    setMode(newMode);
    localStorage.setItem(STORAGE_KEY, newMode);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(mode === 'light' ? 'dark' : 'light');
  }, [mode, setTheme]);

  const value = useMemo(
    () => ({ mode, toggleTheme, setTheme }),
    [mode, toggleTheme, setTheme]
  );

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={themes[mode]}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
