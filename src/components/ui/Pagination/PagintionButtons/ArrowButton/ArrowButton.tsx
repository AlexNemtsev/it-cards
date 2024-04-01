import { ComponentPropsWithoutRef } from 'react';

import { Arrow } from '@/assets/icons/Arrow/Arrow';
import { clsx } from 'clsx';

import s from './ArrowButton.module.scss';
type Props = { isPrev?: boolean } & ComponentPropsWithoutRef<'button'>;

export const ArrowButton = (props: Props) => {
  const { children, className, disabled, isPrev, ...restProps } = props;
  const classNames = clsx(s.button, disabled && s.disabled, isPrev && s.prev, className);

  return (
    <button className={classNames} {...restProps}>
      <Arrow />
    </button>
  );
};
