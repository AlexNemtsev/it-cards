import { ComponentPropsWithoutRef, ReactNode, useState } from 'react';

import * as Checkbox from '@radix-ui/react-checkbox';

import s from './checkbox.module.scss';

export type Props = {
  children?: ReactNode;
  isChecked?: boolean;
  isDisabled?: boolean;
} & ComponentPropsWithoutRef<'form'>;
export const CheckboxRadix = (props: Props) => {
  const { children, isChecked = false, isDisabled = false } = props;

  const [checked, setChecked] = useState(isChecked);
  const onCheckedChangeHandler = () => {
    setChecked(!checked);
  };

  return (
    <form>
      <div className={s.CheckboxWrapper}>
        <Checkbox.Root
          className={`${s.CheckboxRoot} ${isDisabled && s.disabled} ${checked && s.checked}`}
          defaultChecked={isChecked}
          disabled={isDisabled}
          id="c1"
          onCheckedChange={onCheckedChangeHandler}
        >
          <Checkbox.Indicator>
            <svg height="18" viewBox="0 0 18 18" width="18">
              <path d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z" />
            </svg>
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className={`${s.Label} ${isDisabled && s.disabled}`} htmlFor="c1">
          {children}
        </label>
      </div>
    </form>
  );
};
