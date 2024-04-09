import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

export type Props = ComponentPropsWithoutRef<'tr'>;
export const TableRow = forwardRef<ElementRef<'tr'>, Props>((props: Props, ref) => {
  return <tr ref={ref} {...props} />;
});
