import { ComponentPropsWithoutRef } from 'react';

import { clsx } from 'clsx';

import s from './PaginationButton.module.scss';
type Props = { isActive?: boolean } & ComponentPropsWithoutRef<'button'>;

export const PaginationButton = (props: Props) => {
  const { children, className, isActive, ...restProps } = props;
  const classNames = clsx(s.button, isActive && s.active, className);

  return (
    <button className={classNames} {...restProps}>
      {children}
    </button>
  );
};
