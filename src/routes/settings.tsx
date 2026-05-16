import { FcBox, FcTypography, FcCard, SettingsIcon } from '../components/ui';
import { useThemeMode } from '../theme';

export default function SettingsPage() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <FcBox>
      <FcTypography h2 sx={{ mb: 2 }}>
        Settings
      </FcTypography>

      {/* Theme */}
      <FcCard sx={{ mb: 3, p: 3 }}>
        <FcTypography h3 sx={{ mb: 2 }}>
          Appearance
        </FcTypography>
        <FcBox
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <FcBox>
            <FcTypography body2>Dark Mode</FcTypography>
            <FcTypography caption secondary>
              {mode === 'dark'
                ? 'Switch to light theme'
                : 'Switch to dark theme'}
            </FcTypography>
          </FcBox>
          <FcBox
            component="label"
            sx={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}>
            <input
              type="checkbox"
              checked={mode === 'dark'}
              onChange={toggleTheme}
              style={{
                width: 44,
                height: 24,
                appearance: 'none',
                backgroundColor: mode === 'dark' ? '#3a7bd5' : '#ccc',
                borderRadius: 12,
                position: 'relative',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                outline: 'none',
              }}
            />
            <FcBox
              sx={{
                position: 'absolute',
                left: mode === 'dark' ? 22 : 2,
                width: 20,
                height: 20,
                borderRadius: '50%',
                bgcolor: 'white',
                transition: 'left 0.2s',
                pointerEvents: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
              }}
            />
          </FcBox>
        </FcBox>
      </FcCard>

      {/* Placeholder for other settings */}
      <FcCard
        sx={{
          textAlign: 'center',
          py: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}>
        <SettingsIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
        <FcTypography h3 secondary>
          More Settings
        </FcTypography>
        <FcTypography body2 secondary>
          Notifications, profile, and preferences coming soon.
        </FcTypography>
      </FcCard>
    </FcBox>
  );
}
