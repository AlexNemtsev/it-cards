import { ComponentPropsWithoutRef } from 'react';

import { Typography } from '@/components/ui/Typography';
import { Indicator, Item, Root } from '@radix-ui/react-radio-group';

import s from './RagioGroupItem.module.scss';
type Props = {
  label: string;
  value: string;
} & ComponentPropsWithoutRef<typeof Root>;
export const RadioGroupItem = (props: Props) => {
  const { id, label, value } = props;

  return (
    <label className={s.Label} htmlFor={id} key={id}>
      <Item className={s.RadioGroupItem} id={id} value={value}>
        <Indicator className={s.RadioGroupIndicator} />
      </Item>
      <Typography.Body2>{label}</Typography.Body2>
    </label>
  );
};
