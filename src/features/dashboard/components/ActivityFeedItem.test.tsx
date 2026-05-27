import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ActivityFeedItem } from './ActivityFeedItem';
import type { ActivityItem as ActivityItemType } from '@/types';

const baseItem: ActivityItemType = {
  id: 'a1',
  type: 'completed',
  message: 'You completed "Write API Documentation"',
  highlightText: 'Write API Documentation',
  timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
};

describe('ActivityFeedItem', () => {
  it('renders the message', () => {
    render(<ActivityFeedItem item={baseItem} />);

    expect(screen.getByText('Write API Documentation')).toBeInTheDocument();
  });

  it('renders highlight text in bold', () => {
    const { container } = render(<ActivityFeedItem item={baseItem} />);

    const bold = container.querySelector('strong');

    expect(bold?.textContent).toBe('Write API Documentation');
  });

  it('renders relative timestamp', () => {
    render(<ActivityFeedItem item={baseItem} />);

    expect(screen.getByText('5h ago')).toBeInTheDocument();
  });

  it('renders message without highlight when highlightText absent', () => {
    const item: ActivityItemType = { ...baseItem, highlightText: undefined };

    render(<ActivityFeedItem item={item} />);

    expect(
      screen.getByText('You completed "Write API Documentation"')
    ).toBeInTheDocument();
  });

  it('renders a colored dot', () => {
    const { container } = render(<ActivityFeedItem item={baseItem} />);

    const dot = container.querySelector('[class*="MuiBox"]');

    expect(dot).toBeInTheDocument();
  });
});
