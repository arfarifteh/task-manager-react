import { FcBox, FcTypography, FcCard, WidgetsIcon } from '../components/ui';

export default function ComponentLibraryPage() {
  return (
    <FcBox>
      <FcTypography h2 sx={{ mb: 2 }}>
        Component Library
      </FcTypography>
      <FcCard
        sx={{
          textAlign: 'center',
          py: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}>
        <WidgetsIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
        <FcTypography h3 secondary>
          Shared UI Components
        </FcTypography>
        <FcTypography body2 secondary>
          Components will be promoted here after 3+ uses across features (Rule
          5).
        </FcTypography>
      </FcCard>
    </FcBox>
  );
}
