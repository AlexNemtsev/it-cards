import { ComponentPropsWithoutRef } from 'react';

import { RadioGroupItem, RadioGroupItemProps } from '@/shared/ui/Radiogroup/RadiogroupItem';
import { Root } from '@radix-ui/react-radio-group';
import { clsx } from 'clsx';

import s from './RadioGroup.module.scss';

type Props = {
  options: RadioGroupItemProps[];
} & ComponentPropsWithoutRef<typeof Root>;

export const RadioGroup = (props: Props) => {
  const { className, options, ...restProps } = props;

  const classNames = clsx(s.radioGroupRoot, className);

  return (
    <Root {...restProps} className={classNames}>
      {options.map(el => (
        <RadioGroupItem {...el} key={el.value} />
      ))}
    </Root>
  );
};
