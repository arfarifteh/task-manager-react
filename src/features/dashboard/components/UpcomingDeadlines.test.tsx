import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { UpcomingDeadlines } from './UpcomingDeadlines';
import type { UpcomingDeadline } from '@/types';

const mockDeadlines: UpcomingDeadline[] = [
  {
    taskId: '1',
    title: 'Fix Mobile Responsiveness',
    dueDate: '2026-04-27T00:00:00.000Z',
  },
  {
    taskId: '2',
    title: 'Code Review for Auth',
    dueDate: '2026-04-22T00:00:00.000Z',
  },
];

describe('UpcomingDeadlines', () => {
  it('renders heading', () => {
    render(<UpcomingDeadlines deadlines={mockDeadlines} />);

    expect(screen.getByText('Upcoming Deadlines')).toBeInTheDocument();
  });

  it('renders each deadline title', () => {
    render(<UpcomingDeadlines deadlines={mockDeadlines} />);

    expect(screen.getByText('Fix Mobile Responsiveness')).toBeInTheDocument();
    expect(screen.getByText('Code Review for Auth')).toBeInTheDocument();
  });

  it('renders formatted due date', () => {
    render(<UpcomingDeadlines deadlines={[mockDeadlines[1]]} />);

    expect(screen.getByText(/Apr 21, 2026/)).toBeInTheDocument();
  });

  it('renders empty state when no deadlines', () => {
    render(<UpcomingDeadlines deadlines={[]} />);

    expect(screen.getByText('No upcoming deadlines')).toBeInTheDocument();
  });
});
