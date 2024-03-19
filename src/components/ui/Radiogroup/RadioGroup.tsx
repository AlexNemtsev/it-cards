import { ComponentPropsWithoutRef } from 'react';

import { RadioGroupItem, RadioGroupItemProps } from '@/components/ui/Radiogroup/RadiogroupItem';
import { Root } from '@radix-ui/react-radio-group';

import s from './RadioGroup.module.scss';

type Props = {
  options: RadioGroupItemProps[];
} & ComponentPropsWithoutRef<typeof Root>;

export const RadioGroup = (props: Props) => {
  const { options, ...restProps } = props;

  return (
    <Root {...restProps} className={s.radioGroupRoot}>
      {options.map(el => (
        <RadioGroupItem {...el} key={el.value} />
      ))}
    </Root>
  );
};
