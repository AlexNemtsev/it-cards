import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import clsx from 'clsx';

import s from './TableCell.module.scss';

export type Props = ComponentPropsWithoutRef<'td'>;
export const TableCell = forwardRef<ElementRef<'td'>, Props>((props: Props, ref) => {
  const { className, ...restProps } = props;

  const classNames = clsx(s.tableCell, className);

  return <td className={classNames} ref={ref} {...restProps} />;
});
