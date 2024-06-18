import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

export type Props = ComponentPropsWithoutRef<'tbody'>;
export const TableBody = forwardRef<ElementRef<'tbody'>, Props>((props: Props, ref) => {
  return <tbody ref={ref} {...props} />;
});
