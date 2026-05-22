import { useState } from 'react';
import { TaskPriority } from '../types';
import {
  FcBox,
  FcCard,
  FcTextField,
  FcButton,
  FcSelect,
  FcTypography,
  type FcSelectOption,
} from '@/components/ui';

const priorityOptions: FcSelectOption<TaskPriority>[] = [
  { value: TaskPriority.high, label: 'High' },
  { value: TaskPriority.medium, label: 'Medium' },
  { value: TaskPriority.low, label: 'Low' },
];

interface FormState {
  title: string;
  description: string;
  priority: TaskPriority;
  dueDate: string;
  errors: { title?: string; dueDate?: string };
}

type FieldChange = (
  field: keyof Omit<FormState, 'errors'>,
  value: string
) => void;
type AddTaskInput = {
  title: string;
  description?: string;
  priority: TaskPriority;
  dueDate: string;
};

function AddTaskMetaRow({
  state,
  onChange,
}: {
  state: FormState;
  onChange: FieldChange;
}) {
  return (
    <FcBox sx={{ display: 'flex', gap: 2, mt: 1.5, alignItems: 'flex-start' }}>
      <FcSelect
        options={priorityOptions}
        value={state.priority}
        onChange={e => onChange('priority', e.target.value)}
        size="small"
        label="Priority"
        sx={{ minWidth: 120 }}
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
        sx={{ minWidth: 160 }}
      />
    </FcBox>
  );
}

function AddTaskFields({
  state,
  onChange,
  onSubmit,
}: {
  state: FormState;
  onChange: FieldChange;
  onSubmit: () => void;
}) {
  return (
    <FcCard sx={{ p: 2.5 }}>
      <FcTypography h6 sx={{ mb: 2 }}>
        Add Task
      </FcTypography>
      <FcBox sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
        <FcTextField
          placeholder="Task Title"
          value={state.title}
          onChange={e => onChange('title', e.target.value)}
          size="small"
          error={!!state.errors.title}
          helperText={state.errors.title}
          sx={{ flex: 1 }}
        />
        <FcButton primary onClick={onSubmit}>
          + Add Task
        </FcButton>
      </FcBox>
      <FcBox sx={{ display: 'flex', gap: 2, mt: 1.5 }}>
        <FcTextField
          placeholder="Description (optional)"
          value={state.description}
          onChange={e => onChange('description', e.target.value)}
          size="small"
          multiline
          rows={2}
          sx={{ flex: 1 }}
        />
      </FcBox>
      <AddTaskMetaRow state={state} onChange={onChange} />
    </FcCard>
  );
}

const emptyState: FormState = {
  title: '',
  description: '',
  priority: TaskPriority.high,
  dueDate: '',
  errors: {},
};

export function AddTask({ onAdd }: { onAdd: (input: AddTaskInput) => void }) {
  const [state, setState] = useState<FormState>(emptyState);

  const handleChange: FieldChange = (field, value) => {
    setState(prev => ({ ...prev, [field]: value, errors: {} }));
  };

  const handleSubmit = () => {
    const errors: FormState['errors'] = {};

    if (!state.title.trim()) errors.title = 'Title is required';
    if (!state.dueDate) errors.dueDate = 'Due date is required';
    if (Object.keys(errors).length > 0) {
      setState(prev => ({ ...prev, errors }));
      return;
    }
    onAdd({
      title: state.title.trim(),
      description: state.description.trim() || undefined,
      priority: state.priority,
      dueDate: state.dueDate,
    });
    setState(emptyState);
  };

  return (
    <AddTaskFields
      state={state}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
