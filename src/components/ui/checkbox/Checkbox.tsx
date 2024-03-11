import { ComponentPropsWithoutRef, ReactNode } from 'react';

import * as Checkbox from '@radix-ui/react-checkbox';

import s from './Checkbox.module.scss';

type Props = {
  icon?: ReactNode;
  id?: string;
} & ComponentPropsWithoutRef<typeof Checkbox.Root>;

// type Props = ComponentPropsWithoutRef<typeof Checkbox.Root>;
export const CheckboxRadix = (props: Props) => {
  const { checked, className, disabled, icon, id } = props;

  const rootClassName = `${s.CheckboxRoot} ${className}`;

  return (
    <>
      <Checkbox.Root className={rootClassName} defaultChecked={checked} disabled={disabled} id={id}>
        <Checkbox.Indicator>{icon}</Checkbox.Indicator>
      </Checkbox.Root>
    </>
  );
};
