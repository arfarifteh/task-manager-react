import { useState } from 'react';
import { TaskPriority } from '../types';
import type {
  EditTaskInput,
  Task,
  TaskPriority as TaskPriorityType,
} from '../types';
import {
  FcBox,
  FcButton,
  FcDialog,
  FcSelect,
  FcTextField,
  type FcSelectOption,
} from '@/components/ui';

const priorityOptions: FcSelectOption<TaskPriorityType>[] = [
  { value: TaskPriority.high, label: 'High' },
  { value: TaskPriority.medium, label: 'Medium' },
  { value: TaskPriority.low, label: 'Low' },
];

interface FormState {
  title: string;
  description: string;
  priority: TaskPriorityType;
  dueDate: string;
  errors: { title?: string; dueDate?: string };
}

interface EditTaskModalProps {
  task: Task | null;
  onSave: (id: string, updates: EditTaskInput) => void;
  onClose: () => void;
}

function EditTaskForm({
  state,
  onChange,
}: {
  state: FormState;
  onChange: (field: keyof Omit<FormState, 'errors'>, value: string) => void;
}) {
  return (
    <FcBox sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
      <FcTextField
        label="Title"
        value={state.title}
        onChange={e => onChange('title', e.target.value)}
        size="small"
        error={!!state.errors.title}
        helperText={state.errors.title}
        autoFocus
      />
      <FcTextField
        label="Description (optional)"
        value={state.description}
        onChange={e => onChange('description', e.target.value)}
        size="small"
        multiline
        rows={3}
      />
      <FcBox sx={{ display: 'flex', gap: 2 }}>
        <FcSelect
          options={priorityOptions}
          value={state.priority}
          onChange={e => onChange('priority', e.target.value)}
          size="small"
          label="Priority"
          sx={{ flex: 1 }}
        />
        <FcTextField
          type="date"
          value={state.dueDate}
          onChange={e => onChange('dueDate', e.target.value)}
          size="small"
          label="Due Date"
          error={!!state.errors.dueDate}
          helperText={state.errors.dueDate}
          slotProps={{ inputLabel: { shrink: true } }}
          sx={{ flex: 1 }}
        />
      </FcBox>
    </FcBox>
  );
}

function buildInitialState(task: Task | null): FormState {
  return {
    title: task?.title ?? '',
    description: task?.description ?? '',
    priority: task?.priority ?? TaskPriority.high,
    dueDate: task?.dueDate ?? '',
    errors: {},
  };
}

function EditTaskModalInner({
  task,
  onSave,
  onClose,
}: EditTaskModalProps & { task: Task }) {
  const [state, setState] = useState<FormState>(() => buildInitialState(task));

  const handleChange = (
    field: keyof Omit<FormState, 'errors'>,
    value: string
  ) => {
    setState(prev => ({ ...prev, [field]: value, errors: {} }));
  };

  const handleSave = () => {
    const errors: FormState['errors'] = {};

    if (!state.title.trim()) errors.title = 'Title is required';
    if (!state.dueDate) errors.dueDate = 'Due date is required';
    if (Object.keys(errors).length > 0) {
      setState(prev => ({ ...prev, errors }));
      return;
    }
    onSave(task.id, {
      title: state.title.trim(),
      description: state.description.trim() || undefined,
      priority: state.priority as TaskPriorityType,
      dueDate: state.dueDate,
    });
  };

  return (
    <FcDialog
      open
      onClose={onClose}
      title="Edit Task"
      maxWidth="sm"
      fullWidth
      actions={
        <>
          <FcButton onClick={onClose}>Cancel</FcButton>
          <FcButton primary onClick={handleSave}>
            Save
          </FcButton>
        </>
      }>
      <EditTaskForm state={state} onChange={handleChange} />
    </FcDialog>
  );
}

export function EditTaskModal({ task, onSave, onClose }: EditTaskModalProps) {
  if (!task) return null;
  return (
    <EditTaskModalInner
      key={task.id}
      task={task}
      onSave={onSave}
      onClose={onClose}
    />
  );
}
