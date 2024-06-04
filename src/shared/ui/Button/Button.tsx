import { ComponentPropsWithRef, ElementType, forwardRef } from 'react';

import { clsx } from 'clsx';

import s from './Button.module.scss';

type Props<T extends ElementType = 'button'> = {
  as?: T;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
} & ComponentPropsWithRef<T>;

export const Button = forwardRef<HTMLButtonElement, Props>((props: Props, ref) => {
  const {
    as: Component = 'button',
    children,
    className,
    disabled,
    fullWidth,
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
    <Component className={classNames} ref={ref} {...rest}>
      {children}
    </Component>
  );
});
