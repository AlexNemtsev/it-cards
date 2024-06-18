import { ComponentPropsWithoutRef, ElementType } from 'react';

import { clsx } from 'clsx';

import s from './Card.module.scss';

export type CardProps<T extends ElementType = 'div'> = {
  as?: ElementType;
} & ComponentPropsWithoutRef<T>;

export const Card = <T extends ElementType = 'div'>(props: CardProps<T>) => {
  const { children, className, ...restProps } = props;

  const classNames = clsx(s.card, className);

  return (
    <div className={classNames} {...restProps}>
      {children}
    </div>
  );
};
