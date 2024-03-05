import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import s from './checkbox.module.scss';
//import { ComponentPropsWithoutRef } from "react";

export type Props<T extends ElementType = 'form'> = {
  as?: T;
  children: ReactNode;
  fullWidth?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
} & ComponentPropsWithoutRef<T>;

// export const CheckboxRadix = () => (
export const CheckboxRadix = <T extends ElementType = 'form'>(props: Props<T>) => {
  const {
    as: Component = 'form',
    children,
    className,
    isChecked = false,
    isDisabled = false,
    ...rest
  } = props;

  return (
    <form {...rest}>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <Checkbox.Root
          className={`${s.CheckboxRoot} ${isDisabled && s.disabled}`}
          defaultChecked={isChecked}
          disabled={isDisabled}
          id="c1"
        >
          <Checkbox.Indicator className={s.CheckboxIndicator}>
            <CheckIcon />

            {/*<svg width="18" height="18" viewBox="0 0 18 18" fill="none">*/}
            {/*  <path*/}
            {/*    d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"*/}
            {/*  />*/}
            {/*</svg>*/}
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className={s.Label} htmlFor="c1">
          {children}
        </label>
      </div>
    </form>
  );
};
