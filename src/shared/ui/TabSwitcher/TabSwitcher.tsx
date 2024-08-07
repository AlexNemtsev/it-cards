import { ComponentPropsWithoutRef } from 'react';

import { Tab } from '@/shared/ui/TabSwitcher/Tab';
import { TabOption } from '@/shared/ui/TabSwitcher/tabOption';
import { List, Root } from '@radix-ui/react-tabs';

type Props = {
  tabOptions: TabOption[];
} & ComponentPropsWithoutRef<typeof Root>;

export const TabSwitcher = (props: Props) => {
  const { tabOptions, ...restProps } = props;

  return (
    <Root {...restProps}>
      <List>
        {tabOptions.map(option => {
          return <Tab {...option} key={option.value} />;
        })}
      </List>
    </Root>
  );
};
