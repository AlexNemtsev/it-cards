import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import clsx from 'clsx';

export type Props = ComponentPropsWithoutRef<'tbody'>;
export const TableBody = forwardRef<ElementRef<'tbody'>, Props>((props: Props, ref) => {
  const { className, ...restProps } = props;

  const classNames = clsx(className);

  return <tbody className={classNames} ref={ref} {...restProps} />;
});
