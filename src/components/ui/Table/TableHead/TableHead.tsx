import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import clsx from 'clsx';

import s from './TableHead.module.scss';

export type Props = ComponentPropsWithoutRef<'thead'>;
export const TableHead = forwardRef<ElementRef<'thead'>, Props>((props: Props, ref) => {
  const { className, ...restProps } = props;

  const classNames = clsx(s.tableHead, className);

  return <thead className={classNames} ref={ref} {...restProps} />;
});
