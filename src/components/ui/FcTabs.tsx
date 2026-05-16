import Tab from '@mui/material/Tab';
import type { TabProps } from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import type { TabsProps } from '@mui/material/Tabs';

export type FcTabsProps = TabsProps;

export function FcTabs(props: FcTabsProps) {
  return <Tabs {...props} />;
}

export type FcTabProps = TabProps;

export function FcTab(props: FcTabProps) {
  return <Tab {...props} />;
}
