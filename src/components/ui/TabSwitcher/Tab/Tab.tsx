import { ComponentPropsWithoutRef } from 'react';

import { Typography } from '@/components/ui/Typography';
import { Trigger } from '@radix-ui/react-tabs';

import s from './Tab.module.scss';

import { TabOption } from '../tabOption';

export type TabProps = TabOption & ComponentPropsWithoutRef<typeof Trigger>;

export const Tab = (props: TabProps) => {
  const { label, value, ...restProps } = props;

  return (
    <Trigger className={s.tab} value={value} {...restProps}>
      <Typography.Body1>{label}</Typography.Body1>
    </Trigger>
  );
};
