import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TaskPriority, TaskStatus } from '../types';
import { TaskRow } from './TaskRow';
import type { Task } from '../types';

const pendingTask: Task = {
  id: 't1',
  title: 'Write tests',
  description: 'Add unit tests for all dashboard components.',
  status: TaskStatus.pending,
  priority: TaskPriority.high,
  dueDate: '2026-05-20T00:00:00.000Z',
  createdAt: '2026-05-15T00:00:00.000Z',
  updatedAt: '2026-05-15T00:00:00.000Z',
};

const inProgressTask: Task = {
  ...pendingTask,
  id: 't2',
  title: 'Review PR',
  status: TaskStatus.inProgress,
  priority: TaskPriority.medium,
};

const completedTask: Task = {
  ...pendingTask,
  id: 't3',
  title: 'Deploy app',
  status: TaskStatus.completed,
  priority: TaskPriority.low,
};

describe('TaskRow', () => {
  it('renders task title and priority chip', () => {
    render(<TaskRow task={pendingTask} />);

    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText(TaskPriority.high)).toBeInTheDocument();
  });

  it('renders due date', () => {
    render(<TaskRow task={pendingTask} />);

    expect(screen.getByText(/Due:/)).toBeInTheDocument();
  });

  it('shows Start button for pending tasks', () => {
    const onStart = vi.fn();

    render(<TaskRow task={pendingTask} onStart={onStart} />);

    const btn = screen.getByRole('button', { name: /start task/i });

    fireEvent.click(btn);
    expect(onStart).toHaveBeenCalledWith('t1');
  });

  it('shows complete action for in-progress tasks', () => {
    const onComplete = vi.fn();

    render(<TaskRow task={inProgressTask} onComplete={onComplete} />);

    const btn = screen.getByRole('button', { name: /complete task/i });

    fireEvent.click(btn);
    expect(onComplete).toHaveBeenCalledWith('t2');
  });

  it('shows strikethrough for completed tasks', () => {
    render(<TaskRow task={completedTask} />);

    const title = screen.getByText('Deploy app');

    expect(title).toHaveStyle({ textDecoration: 'line-through' });
  });

  it('calls onDelete when delete icon clicked', () => {
    const onDelete = vi.fn();

    render(<TaskRow task={pendingTask} onDelete={onDelete} />);

    const btn = screen.getByRole('button', { name: /delete task/i });

    fireEvent.click(btn);
    expect(onDelete).toHaveBeenCalledWith('t1');
  });
});
