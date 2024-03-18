import { ComponentPropsWithoutRef } from 'react';

import { Typography } from '@/components/ui/Typography';
import { Indicator, Item, Root } from '@radix-ui/react-radio-group';
import { clsx } from 'clsx';

import s from './RagioGroupItem.module.scss';

type Props = {
  label: string;
  value: string;
} & ComponentPropsWithoutRef<typeof Root>;
export const RadioGroupItem = (props: Props) => {
  const { className, disabled, id, label, value } = props;

  const classNames = {
    body2: clsx(s.body2, { [s.disabled]: disabled }),
    label: clsx(s.label, { [s.disabled]: disabled }, className),
    radioGroupIndicator: s.radioGroupIndicator,
    radioGroupItem: s.radioGroupItem,
  };

  return (
    <label className={classNames.label} htmlFor={id} key={id}>
      <Item className={classNames.radioGroupItem} disabled={disabled} id={id} value={value}>
        <Indicator className={classNames.radioGroupIndicator} />
      </Item>
      <Typography.Body2 className={classNames.body2}>{label}</Typography.Body2>
    </label>
  );
};
