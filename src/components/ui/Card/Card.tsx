import { ComponentPropsWithoutRef } from 'react';

import { clsx } from 'clsx';

import s from './Card.module.scss';

type Props = ComponentPropsWithoutRef<'div'>;

export const Card = (props: Props) => {
  const { children, className } = props;

  const classNames = clsx(s.card, className);

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};
