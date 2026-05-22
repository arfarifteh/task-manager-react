import { TaskPriority, TaskStatus } from '../types';
import type { Task } from '../types';
import {
  FcBox,
  FcTypography,
  FcChip,
  FcIconButton,
  FcButton,
  CheckCircleIcon,
  DeleteIcon,
  EditIcon,
  PlayArrowIcon,
} from '@/components/ui';

const rowSx = {
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  py: 1.5,
  px: 2,
  borderBottom: 1,
  borderColor: 'divider',
  '&:last-child': { borderBottom: 0 },
} as const;

const statusColors: Record<TaskStatus, string> = {
  [TaskStatus.new]: 'grey.400',
  [TaskStatus.pending]: 'primary.dark',
  [TaskStatus.inProgress]: 'warning.main',
  [TaskStatus.completed]: 'success.main',
};

const statusDotSx = (status: TaskStatus) => ({
  width: 24,
  height: 24,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bgcolor: statusColors[status],
});

const titleSx = (status: TaskStatus) => ({
  textDecoration: status === TaskStatus.completed ? 'line-through' : 'none',
  color: status === TaskStatus.completed ? 'text.secondary' : 'text.primary',
});

interface TaskRowProps {
  task: Task;
  onStart?: (id: string) => void;
  onComplete?: (id: string) => void;
  onDelete?: (id: string) => void;
  onEdit?: (task: Task) => void;
}

function TaskRowActions({
  task,
  onStart,
  onComplete,
  onEdit,
  onDelete,
}: TaskRowProps) {
  return (
    <>
      {task.status === TaskStatus.pending && onStart && (
        <FcButton
          small
          outlined
          onClick={() => onStart(task.id)}
          aria-label={`Start task: ${task.title}`}>
          <PlayArrowIcon sx={{ fontSize: 16, mr: 0.5 }} />
          Start
        </FcButton>
      )}
      {task.status === TaskStatus.inProgress && onComplete && (
        <FcIconButton
          size="small"
          onClick={() => onComplete(task.id)}
          aria-label={`Complete task: ${task.title}`}
          sx={{ color: 'status.inProgress' }}>
          <CheckCircleIcon fontSize="small" />
        </FcIconButton>
      )}
      <FcBox sx={{ display: 'flex', gap: 0.5 }}>
        {onEdit && (
          <FcIconButton
            size="small"
            onClick={() => onEdit(task)}
            aria-label={`Edit task: ${task.title}`}>
            <EditIcon fontSize="small" />
          </FcIconButton>
        )}
        {onDelete && (
          <FcIconButton
            size="small"
            onClick={() => onDelete(task.id)}
            aria-label={`Delete task: ${task.title}`}>
            <DeleteIcon fontSize="small" />
          </FcIconButton>
        )}
      </FcBox>
    </>
  );
}

export function TaskRow({
  task,
  onStart,
  onComplete,
  onDelete,
  onEdit,
}: TaskRowProps) {
  const formattedDate = new Date(task.dueDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const statusIcon =
    task.status === TaskStatus.completed ? (
      <CheckCircleIcon sx={{ fontSize: 24, color: 'success.main' }} />
    ) : null;

  return (
    <FcBox sx={rowSx}>
      <FcBox sx={statusDotSx(task.status)}>{statusIcon}</FcBox>
      <FcBox sx={{ flex: 1 }}>
        <FcTypography sx={titleSx(task.status)}>{task.title}</FcTypography>
        {task.description && (
          <FcTypography caption secondary sx={{ mt: 0.25 }}>
            {task.description}
          </FcTypography>
        )}
      </FcBox>
      <FcChip
        label={task.priority}
        high={task.priority === TaskPriority.high}
        medium={task.priority === TaskPriority.medium}
        low={task.priority === TaskPriority.low}
      />
      <FcTypography caption secondary sx={{ minWidth: 100 }}>
        Due: {formattedDate}
      </FcTypography>
      <TaskRowActions
        task={task}
        onStart={onStart}
        onComplete={onComplete}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </FcBox>
  );
}
