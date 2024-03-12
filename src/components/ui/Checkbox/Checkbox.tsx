import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Indicator, Root } from '@radix-ui/react-checkbox';
import clsx from 'clsx';

import s from './Checkbox.module.scss';

type Props = {
  icon?: ReactNode;
} & ComponentPropsWithoutRef<typeof Root>;
export const Checkbox = (props: Props) => {
  const { checked, className, disabled, icon, id } = props;
  const classNames = clsx(s.CheckboxRoot, className);

  return (
    <Root className={classNames} defaultChecked={checked} disabled={disabled} id={id}>
      <Indicator>{icon}</Indicator>
    </Root>
  );
};
