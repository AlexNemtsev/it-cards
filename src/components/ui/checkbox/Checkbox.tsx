import { ReactNode } from 'react';

import * as Checkbox from '@radix-ui/react-checkbox';

import s from './Checkbox.module.scss';

type Props = {
  icon?: ReactNode;
  id?: string;
} & Parameters<typeof Checkbox.Root>[0];
export const CheckboxRadix = (props: Props) => {
  const { checked, children, className, disabled, icon, id } = props;

  const rootClassName = `${s.CheckboxRoot} ${className}`;

  return (
    <>
      <Checkbox.Root className={rootClassName} defaultChecked={checked} disabled={disabled} id={id}>
        <Checkbox.Indicator>{icon}</Checkbox.Indicator>
      </Checkbox.Root>
      {children}
    </>
  );
};

export const bla = () => <p>888</p>;