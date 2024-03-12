import { ComponentPropsWithoutRef, ElementType } from 'react';

import { clsx } from 'clsx';

import s from './Button.module.scss';

type Props<T extends ElementType = 'button'> = {
  as?: T;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    disabled,
    fullWidth,
    href,
    variant = 'primary',
    ...rest
  } = props;

  const classNames = clsx(
    s.button,
    s[variant],
    { [s.disabled]: disabled, [s.fullWidth]: fullWidth },
    className
  );

  return (
    <Component className={classNames} href={href} {...rest}>
      {children}
    </Component>
  );
};
