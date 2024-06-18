import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import clsx from 'clsx';

import s from './Table.module.scss';

export type Props = ComponentPropsWithoutRef<'table'>;
export const Table = forwardRef<ElementRef<'table'>, Props>((props: Props, ref) => {
  const { className, ...restProps } = props;

  const classNames = clsx(s.table, className);

  return <table className={classNames} ref={ref} {...restProps}></table>;
});
