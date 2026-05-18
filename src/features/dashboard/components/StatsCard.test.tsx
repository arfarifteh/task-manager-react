import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { StatsCard } from './StatsCard';
import type { StatCard } from '../types';

const mockStat: StatCard = {
  count: 5,
  highlightLabel: 'Ember Integration',
  highlightColor: 'success',
};

describe('StatsCard', () => {
  it('renders title and count', () => {
    render(<StatsCard title="Tasks Today" stat={mockStat} />);

    expect(screen.getByText('Tasks Today')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('renders highlight label', () => {
    render(<StatsCard title="Tasks Today" stat={mockStat} />);

    expect(screen.getByText('Ember Integration')).toBeInTheDocument();
  });

  it('renders colored dot', () => {
    const { container } = render(
      <StatsCard title="Tasks Today" stat={mockStat} />
    );

    const dot = container.querySelector('[class*="MuiBox"]');

    expect(dot).toBeInTheDocument();
  });

  it('renders different stat values', () => {
    const inProgressStat: StatCard = {
      count: 8,
      highlightLabel: 'Redux Refactoring',
      highlightColor: 'primary',
    };

    render(<StatsCard title="In Progress" stat={inProgressStat} />);

    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('Redux Refactoring')).toBeInTheDocument();
  });
});
