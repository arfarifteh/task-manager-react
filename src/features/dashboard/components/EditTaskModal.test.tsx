import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TaskPriority, TaskStatus } from '../types';
import { EditTaskModal } from './EditTaskModal';
import type { Task } from '../types';

const mockTask: Task = {
  id: 't1',
  title: 'Build Dashboard',
  description: 'Create the main dashboard layout.',
  status: TaskStatus.pending,
  priority: TaskPriority.high,
  dueDate: '2026-04-25',
  createdAt: '2026-04-15T10:00:00Z',
  updatedAt: '2026-04-15T10:00:00Z',
};

describe('EditTaskModal', () => {
  it('renders nothing when task is null', () => {
    const { container } = render(
      <EditTaskModal task={null} onSave={vi.fn()} onClose={vi.fn()} />
    );

    expect(container.innerHTML).toBe('');
  });

  it('renders pre-filled fields when task is provided', () => {
    render(
      <EditTaskModal task={mockTask} onSave={vi.fn()} onClose={vi.fn()} />
    );

    expect(screen.getByDisplayValue('Build Dashboard')).toBeInTheDocument();
    expect(
      screen.getByDisplayValue('Create the main dashboard layout.')
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue('2026-04-25')).toBeInTheDocument();
  });

  it('shows validation error when title is cleared', () => {
    render(
      <EditTaskModal task={mockTask} onSave={vi.fn()} onClose={vi.fn()} />
    );

    fireEvent.change(screen.getByDisplayValue('Build Dashboard'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByText('Save'));

    expect(screen.getByText('Title is required')).toBeInTheDocument();
  });

  it('shows validation error when due date is cleared', () => {
    render(
      <EditTaskModal task={mockTask} onSave={vi.fn()} onClose={vi.fn()} />
    );

    fireEvent.change(screen.getByDisplayValue('2026-04-25'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByText('Save'));

    expect(screen.getByText('Due date is required')).toBeInTheDocument();
  });

  it('calls onSave with updated fields', () => {
    const onSave = vi.fn();

    render(<EditTaskModal task={mockTask} onSave={onSave} onClose={vi.fn()} />);

    fireEvent.change(screen.getByDisplayValue('Build Dashboard'), {
      target: { value: 'Updated Title' },
    });
    fireEvent.click(screen.getByText('Save'));

    expect(onSave).toHaveBeenCalledWith(
      't1',
      expect.objectContaining({ title: 'Updated Title' })
    );
  });

  it('calls onClose when Cancel is clicked', () => {
    const onClose = vi.fn();

    render(
      <EditTaskModal task={mockTask} onSave={vi.fn()} onClose={onClose} />
    );
    fireEvent.click(screen.getByText('Cancel'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
