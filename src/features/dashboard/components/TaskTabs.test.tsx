import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TaskStatus } from '../types';
import { TaskTabs } from './TaskTabs';

describe('TaskTabs', () => {
  it('renders all tab labels', () => {
    render(<TaskTabs value="all" onChange={vi.fn()} />);

    expect(screen.getByText('All Tasks')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('calls onChange when a tab is clicked', () => {
    const onChange = vi.fn();

    render(<TaskTabs value="all" onChange={onChange} />);
    fireEvent.click(screen.getByText('In Progress'));

    expect(onChange).toHaveBeenCalledWith(TaskStatus.inProgress);
  });

  it('highlights the active tab', () => {
    render(<TaskTabs value={TaskStatus.inProgress} onChange={vi.fn()} />);

    const tab = screen.getByText('In Progress');

    expect(tab.closest('[aria-selected="true"]')).toBeInTheDocument();
  });
});
