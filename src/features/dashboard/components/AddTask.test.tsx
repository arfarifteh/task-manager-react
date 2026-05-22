import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TaskPriority } from '../types';
import { AddTask } from './AddTask';

describe('AddTask - rendering', () => {
  it('renders form fields', () => {
    render(<AddTask onAdd={vi.fn()} />);
    expect(screen.getByPlaceholderText('Task Title')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Description (optional)')
    ).toBeInTheDocument();
    expect(screen.getByText('+ Add Task')).toBeInTheDocument();
  });

  it('shows validation errors when submitting empty form', () => {
    render(<AddTask onAdd={vi.fn()} />);
    fireEvent.click(screen.getByText('+ Add Task'));
    expect(screen.getByText('Title is required')).toBeInTheDocument();
    expect(screen.getByText('Due date is required')).toBeInTheDocument();
  });
});

describe('AddTask - submission', () => {
  it('calls onAdd with form data and clears form', () => {
    const onAdd = vi.fn();

    render(<AddTask onAdd={onAdd} />);
    fireEvent.change(screen.getByPlaceholderText('Task Title'), {
      target: { value: 'New Task' },
    });
    fireEvent.change(screen.getByPlaceholderText('Description (optional)'), {
      target: { value: 'Some description' },
    });
    fireEvent.change(screen.getByLabelText('Due Date'), {
      target: { value: '2026-06-01' },
    });
    fireEvent.click(screen.getByText('+ Add Task'));
    expect(onAdd).toHaveBeenCalledWith({
      title: 'New Task',
      description: 'Some description',
      priority: TaskPriority.high,
      dueDate: '2026-06-01',
    });
    expect(screen.getByPlaceholderText('Task Title')).toHaveValue('');
    expect(screen.getByPlaceholderText('Description (optional)')).toHaveValue(
      ''
    );
  });

  it('does not include description when empty', () => {
    const onAdd = vi.fn();

    render(<AddTask onAdd={onAdd} />);
    fireEvent.change(screen.getByPlaceholderText('Task Title'), {
      target: { value: 'Title Only' },
    });
    fireEvent.change(screen.getByLabelText('Due Date'), {
      target: { value: '2026-06-01' },
    });
    fireEvent.click(screen.getByText('+ Add Task'));
    expect(onAdd).toHaveBeenCalledWith({
      title: 'Title Only',
      description: undefined,
      priority: TaskPriority.high,
      dueDate: '2026-06-01',
    });
  });
});
