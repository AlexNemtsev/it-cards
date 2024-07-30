import { ComponentPropsWithoutRef } from 'react';

import { Tab } from '@/shared/ui/TabSwitcher/Tab';
import { TabOption } from '@/shared/ui/TabSwitcher/tabOption';
import { List, Root } from '@radix-ui/react-tabs';
import clsx from 'clsx';

import s from './TabSwitcher.module.scss';

type Props = {
  tabOptions: TabOption[];
} & ComponentPropsWithoutRef<typeof Root>;

export const TabSwitcher = (props: Props) => {
  const { className, tabOptions, ...restProps } = props;

  return (
    <Root {...restProps} className={clsx(s.tabsRoot, className)}>
      <List className={s.tabsList}>
        {tabOptions.map(option => {
          return <Tab {...option} key={option.value} />;
        })}
      </List>
    </Root>
  );
};
