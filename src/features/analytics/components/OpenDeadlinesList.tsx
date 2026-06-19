import type { OpenDeadlineRow } from '@/features/analytics/services/analyticsService';
import type { TaskPriority } from '@/types';
import { FcBox, FcCard, FcChip, FcTypography } from '@/components/ui';

function formatDueDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function chipColor(priority: TaskPriority): 'error' | 'warning' | 'success' {
  if (priority === 'high') return 'error';
  if (priority === 'medium') return 'warning';
  return 'success';
}

const rowSx = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  py: 1,
  borderBottom: '1px solid',
  borderColor: 'divider',
  '&:last-child': { borderBottom: 'none' },
} as const;

interface OpenDeadlinesListProps {
  deadlines: OpenDeadlineRow[];
}

export function OpenDeadlinesList({ deadlines }: OpenDeadlinesListProps) {
  if (deadlines.length === 0) {
    return (
      <FcCard sx={{ p: 2.5 }}>
        <FcTypography h6 sx={{ mb: 2 }}>
          Open Deadlines
        </FcTypography>
        <FcTypography body2 secondary>
          No open deadlines
        </FcTypography>
      </FcCard>
    );
  }

  return (
    <FcCard sx={{ p: 2.5 }}>
      <FcTypography h6 sx={{ mb: 2 }}>
        Open Deadlines
      </FcTypography>
      {deadlines.map(d => (
        <DeadlineRow key={d.taskId} deadline={d} />
      ))}
    </FcCard>
  );
}

function DeadlineRow({ deadline }: { deadline: OpenDeadlineRow }) {
  return (
    <FcBox sx={rowSx}>
      <FcBox sx={{ minWidth: 0, flex: 1 }}>
        <FcTypography body2 sx={{ fontWeight: deadline.isOverdue ? 600 : 400 }}>
          {deadline.title}
        </FcTypography>
        <FcTypography caption secondary>
          {formatDueDate(deadline.dueDate)}
          {deadline.isOverdue && ' — overdue'}
        </FcTypography>
      </FcBox>
      <FcChip
        label={deadline.priorityLabel}
        size="small"
        color={chipColor(deadline.priority)}
        sx={{ ml: 1 }}
      />
    </FcBox>
  );
}
