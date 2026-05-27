import { ActivityFeedItem } from './ActivityFeedItem';
import type { ActivityItem as ActivityItemType } from '@/types';
import { FcCard, FcTypography } from '@/components/ui';

interface ActivityFeedProps {
  activities: ActivityItemType[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <FcCard sx={{ p: 2.5 }}>
      <FcTypography h6 sx={{ mb: 2 }}>
        Activity Feed
      </FcTypography>
      {activities.length === 0 ? (
        <FcTypography body2 secondary>
          No recent activity
        </FcTypography>
      ) : (
        activities.map(a => <ActivityFeedItem key={a.id} item={a} />)
      )}
    </FcCard>
  );
}
