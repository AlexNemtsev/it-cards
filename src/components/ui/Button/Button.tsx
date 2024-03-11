import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { clsx } from 'clsx';

import s from './Button.module.scss';

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
  children: ReactNode;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    disabled = false,
    fullWidth,
    variant = 'primary',
    ...rest
  } = props;

  const classNames = clsx(
    `${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${disabled ? s.disabled : ''}`,
    className
  );

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  );
};
