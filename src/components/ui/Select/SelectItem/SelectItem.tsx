import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react';

import { Item, ItemIndicator, ItemText } from '@radix-ui/react-select';
import clsx from 'clsx';

import s from './SelectItem.module.scss';

type Props = {} & ComponentPropsWithoutRef<typeof Item>;

export const SelectItem = forwardRef((props: Props, forwardedRef: ForwardedRef<HTMLDivElement>) => {
  const { children, className, ...restProps } = props;

  const cl = {
    selectItem: clsx(s.selectIem, className && s[className]),
  };

  return (
    <Item className={cl.selectItem} {...restProps} ref={forwardedRef}>
      <ItemText>{children}</ItemText>
      {/* <ItemIndicator className={s.selectItemIndicator}>+</ItemIndicator> */}
    </Item>
  );
});
