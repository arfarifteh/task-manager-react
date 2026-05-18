import type { TaskStatus } from '../types';
import { FcBox, FcTabs, FcTab } from '@/components/ui';

export type TabValue = TaskStatus | 'all';

interface TaskTabsProps {
  value: TabValue;
  onChange: (tab: TabValue) => void;
}

const tabs: { label: string; value: TabValue }[] = [
  { label: 'All Tasks', value: 'all' },
  { label: 'In Progress', value: 'in-progress' },
  { label: 'Completed', value: 'completed' },
];

export function TaskTabs({ value, onChange }: TaskTabsProps) {
  const handleChange = (_: React.SyntheticEvent, newValue: TabValue) => {
    onChange(newValue);
  };

  return (
    <FcBox sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <FcTabs value={value} onChange={handleChange}>
        {tabs.map(tab => (
          <FcTab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </FcTabs>
    </FcBox>
  );
}
