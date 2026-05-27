import type { ActivityItem as ActivityItemType } from '@/types';
import { FcBox, FcTypography } from '@/components/ui';

const DOT_COLORS: Record<ActivityItemType['type'], string> = {
  completed: '#1976d2',
  created: '#ed6c02',
  deadline: '#2e7d32',
};

function formatRelativeTime(timestamp: string): string {
  const diffMs = Date.now() - new Date(timestamp).getTime();

  const diffH = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffH < 24) return `${diffH}h ago`;

  const diffD = Math.floor(diffH / 24);

  if (diffD < 7) return `${diffD}d ago`;

  return `${Math.floor(diffD / 7)}w ago`;
}

function MessageText({
  message,
  highlightText,
}: {
  message: string;
  highlightText?: string;
}) {
  if (!highlightText || !message.includes(highlightText)) {
    return <>{message}</>;
  }

  const [before, after] = message.split(highlightText);

  return (
    <>
      {before}
      <strong>{highlightText}</strong>
      {after}
    </>
  );
}

interface ActivityItemProps {
  item: ActivityItemType;
}

export function ActivityFeedItem({ item }: ActivityItemProps) {
  const dotColor = DOT_COLORS[item.type];

  const relTime = formatRelativeTime(item.timestamp);

  return (
    <FcBox sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
      <FcBox
        sx={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          bgcolor: dotColor,
          mt: '5px',
          flexShrink: 0,
        }}
      />
      <FcBox sx={{ flex: 1, minWidth: 0 }}>
        <FcTypography body2>
          <MessageText
            message={item.message}
            highlightText={item.highlightText}
          />
        </FcTypography>
        <FcTypography caption secondary>
          {relTime}
        </FcTypography>
      </FcBox>
    </FcBox>
  );
}
