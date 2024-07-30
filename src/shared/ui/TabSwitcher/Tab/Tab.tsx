import { ComponentPropsWithoutRef } from 'react';

import { Typography } from '@/shared/ui/Typography';
import { Trigger } from '@radix-ui/react-tabs';
import clsx from 'clsx';

import s from './Tab.module.scss';

import { TabOption } from '../tabOption';

export type TabProps = ComponentPropsWithoutRef<typeof Trigger> & TabOption;

export const Tab = (props: TabProps) => {
  const { className, label, value, ...restProps } = props;

  const classNames = clsx(s.tab, className);

  return (
    <Trigger className={classNames} value={value} {...restProps}>
      <Typography.Body1>{label}</Typography.Body1>
    </Trigger>
  );
};
