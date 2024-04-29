import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import clsx from 'clsx';

import s from './TableHeadCell.module.scss';

export type Props = ComponentPropsWithoutRef<'th'>;
export const TableHeadCell = forwardRef<ElementRef<'th'>, Props>((props: Props, ref) => {
  const { className, ...restProps } = props;

  const classNames = clsx(s.tableHeadCell, className);

  return <th className={classNames} ref={ref} {...restProps} />;
});
