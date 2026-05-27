import type { UpcomingDeadline } from '@/types';
import { FcBox, FcCard, FcTypography } from '@/components/ui';

interface DeadlineItemProps {
  item: UpcomingDeadline;
}

function DeadlineItem({ item }: DeadlineItemProps) {
  const formatted = item.dueDate
    ? new Date(item.dueDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'No due date';

  return (
    <FcBox sx={{ mb: 2 }}>
      <FcTypography body2 sx={{ color: 'primary.main', fontWeight: 500 }}>
        {item.title}
      </FcTypography>
      <FcTypography caption secondary>
        {formatted}
      </FcTypography>
    </FcBox>
  );
}

interface UpcomingDeadlinesProps {
  deadlines: UpcomingDeadline[];
}

export function UpcomingDeadlines({ deadlines }: UpcomingDeadlinesProps) {
  return (
    <FcCard sx={{ p: 2.5 }}>
      <FcTypography h6 sx={{ mb: 2 }}>
        Upcoming Deadlines
      </FcTypography>
      {deadlines.length === 0 ? (
        <FcTypography body2 secondary>
          No upcoming deadlines
        </FcTypography>
      ) : (
        deadlines.map(d => <DeadlineItem key={d.taskId} item={d} />)
      )}
    </FcCard>
  );
}
