import { ComponentPropsWithoutRef, ReactNode } from 'react';

import clsx from 'clsx';

import s from './InputButton.module.scss';

type Props = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export const InputButton = (props: Props) => {
  const { children, className, ...restProps } = props;

  return (
    <button {...restProps} className={clsx(s.button, className && s[className])} type="button">
      {children}
    </button>
  );
};
