import { ComponentPropsWithoutRef, ReactNode, useId } from 'react';

import { CheckedMark } from '@/components/ui/checkbox/CheckedMark';
import * as Checkbox from '@radix-ui/react-checkbox';

import s from './Checkbox.module.scss';

export type Props = {
  children?: ReactNode;
  isChecked?: boolean;
  isDisabled?: boolean;
} & ComponentPropsWithoutRef<'form'>;
export const CheckboxRadix = (props: Props) => {
  const { children, isChecked = false, isDisabled = false } = props;

  const id = useId();

  return (
    <form>
      <div className={s.CheckboxWrapper}>
        <Checkbox.Root
          className={`${s.CheckboxRoot} ${isDisabled && s.disabled} `}
          defaultChecked={isChecked}
          disabled={isDisabled}
          id={id}
        >
          <Checkbox.Indicator>
            <CheckedMark />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className={`${s.Label} ${isDisabled && s.disabled}`} htmlFor={id}>
          {children}
        </label>
      </div>
    </form>
  );
};
