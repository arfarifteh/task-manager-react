import type { Task, TaskStatus } from '../types';
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

const statusDotSx = (status: TaskStatus) => ({
  width: 24,
  height: 24,
  borderRadius: '50%',
  border: status === 'completed' ? 'none' : 2,
  borderColor: 'divider',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bgcolor: status === 'completed' ? 'success.main' : 'transparent',
});

const titleSx = (status: TaskStatus) => ({
  textDecoration: status === 'completed' ? 'line-through' : 'none',
  color: status === 'completed' ? 'text.secondary' : 'text.primary',
});

interface TaskRowProps {
  task: Task;
  onStart?: (id: string) => void;
  onComplete?: (id: string) => void;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
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
      {task.status === 'pending' && onStart && (
        <FcButton
          small
          outlined
          onClick={() => onStart(task.id)}
          aria-label={`Start task: ${task.title}`}>
          <PlayArrowIcon sx={{ fontSize: 16, mr: 0.5 }} />
          Start
        </FcButton>
      )}
      {task.status === 'in-progress' && onComplete && (
        <FcIconButton
          size="small"
          onClick={() => onComplete(task.id)}
          aria-label={`Complete task: ${task.title}`}
          sx={{ color: 'success.main' }}>
          <CheckCircleIcon fontSize="small" />
        </FcIconButton>
      )}
      <FcBox sx={{ display: 'flex', gap: 0.5 }}>
        {onEdit && (
          <FcIconButton
            size="small"
            onClick={() => onEdit(task.id)}
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
    task.status === 'completed' ? (
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
        high={task.priority === 'high'}
        medium={task.priority === 'medium'}
        low={task.priority === 'low'}
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
