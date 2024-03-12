import { ComponentPropsWithoutRef } from 'react';

import { Tab, TabProps } from '@/components/ui/TabSwitcher/Tab';
import * as Tabs from '@radix-ui/react-tabs';

type Props = {
  tabOptions: TabProps[];
} & ComponentPropsWithoutRef<typeof Tabs.Root>;

export const TabSwitcher = (props: Props) => {
  const { tabOptions, ...restProps } = props;

  return (
    <Tabs.Root {...restProps}>
      <Tabs.List>
        {tabOptions.map(option => {
          return <Tab {...option} key={option.value} />;
        })}
      </Tabs.List>
    </Tabs.Root>
  );
};
