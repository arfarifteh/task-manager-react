import { useThemeMode } from '../../theme';
import { FcIconButton } from './FcIconButton';
import { LightModeIcon, DarkModeIcon } from './icons';

export function FcToggle() {
  const { mode, toggleTheme } = useThemeMode();

  const isDark = mode === 'dark';

  return (
    <FcIconButton
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}>
      {isDark ? <LightModeIcon /> : <DarkModeIcon />}
    </FcIconButton>
  );
}
