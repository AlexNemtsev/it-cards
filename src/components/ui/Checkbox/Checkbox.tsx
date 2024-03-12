import { ComponentPropsWithoutRef, ReactNode } from 'react';

import * as Checkbox from '@radix-ui/react-checkbox';
import clsx from 'clsx';

import s from './Checkbox.module.scss';

type Props = {
  icon?: ReactNode;
} & ComponentPropsWithoutRef<typeof Checkbox.Root>;
export const CheckboxRadix = (props: Props) => {
  const { checked, className, disabled, icon, id } = props;
  const classNames = clsx(s.CheckboxRoot, className);

  return (
    <Checkbox.Root className={classNames} defaultChecked={checked} disabled={disabled} id={id}>
      <Checkbox.Indicator>{icon}</Checkbox.Indicator>
    </Checkbox.Root>
  );
};
