import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import clsx from 'clsx';

export type Props = ComponentPropsWithoutRef<'tr'>;
export const TableRow = forwardRef<ElementRef<'tr'>, Props>((props: Props, ref) => {
  const { className, ...restProps } = props;

  const classNames = clsx(className);

  return <tr className={classNames} ref={ref} {...restProps} />;
});
