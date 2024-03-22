import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react';

import { Item, ItemIndicator, ItemText } from '@radix-ui/react-select';
import clsx from 'clsx';

import s from './SelectItem.module.scss';

type Props = ComponentPropsWithoutRef<typeof Item>;

export const SelectItem = forwardRef(
  ({ children, className, ...props }: Props, forwardedRef: ForwardedRef<HTMLDivElement>) => {
    return (
      <Item className={clsx(s.selectItem, className)} {...props} ref={forwardedRef}>
        <ItemText>{children}</ItemText>
        <ItemIndicator className={s.selectItemIndicator}>✓</ItemIndicator>
      </Item>
    );
  }
);
