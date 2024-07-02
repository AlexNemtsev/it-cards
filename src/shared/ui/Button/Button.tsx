import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  ReactElement,
  forwardRef,
} from 'react';

import { clsx } from 'clsx';

import s from './Button.module.scss';

type Variant = 'primary' | 'secondary';

type AsProp<T extends ElementType> = {
  as?: T;
};

type PropsToOmit<T extends ElementType, P> = keyof (AsProp<T> & P);

type PolymorphicComponentProp<T extends ElementType, Props = {}> = Omit<
  ComponentPropsWithoutRef<T>,
  PropsToOmit<T, Props>
> &
  PropsWithChildren<AsProp<T> & Props>;

type PolymorphicComponentPropWithRef<T extends ElementType, Props = {}> = {
  ref?: PolymorphicRef<T>;
} & PolymorphicComponentProp<T, Props>;

type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];

type ButtonProps<T extends ElementType> = PolymorphicComponentPropWithRef<
  T,
  {
    fullWidth?: boolean;
    variant?: Variant;
  }
>;

type ButtonComponent = <T extends ElementType = 'button'>(
  props: ButtonProps<T>
) => ReactElement | null;

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref?: PolymorphicRef<T>) => {
    const { as, children, className, disabled, fullWidth, variant = 'primary', ...rest } = props;

    const Component = as ?? 'button';

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
  }
) as ButtonComponent;
