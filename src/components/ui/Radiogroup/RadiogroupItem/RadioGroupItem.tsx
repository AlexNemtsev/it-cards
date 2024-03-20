import { ComponentPropsWithoutRef } from 'react';

import { Typography } from '@/components/ui/Typography';
import { Indicator, Item, Root } from '@radix-ui/react-radio-group';
import { clsx } from 'clsx';

import s from './RagioGroupItem.module.scss';

export type RadioGroupItemProps = {
  label: string;
  value: string;
} & ComponentPropsWithoutRef<typeof Root>;
export const RadioGroupItem = (props: RadioGroupItemProps) => {
  const { className, disabled, label, value } = props;
  const classNames = {
    label: clsx(s.label, { [s.disabled]: disabled }, className),
    radioGroupIndicator: s.radioGroupIndicator,
    radioGroupItem: s.radioGroupItem,
  };

  return (
    <label className={classNames.label}>
      <Item className={classNames.radioGroupItem} disabled={disabled} value={value}>
        <Indicator className={classNames.radioGroupIndicator} />
      </Item>
      <Typography.Body2>{label}</Typography.Body2>
    </label>
  );
};
