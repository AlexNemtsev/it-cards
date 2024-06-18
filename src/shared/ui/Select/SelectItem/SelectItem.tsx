import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react';

import { Typography } from '@/shared/ui/Typography';
import { Item, ItemText } from '@radix-ui/react-select';
import clsx from 'clsx';

import s from './SelectItem.module.scss';

type Props = ComponentPropsWithoutRef<typeof Item>;

export const SelectItem = forwardRef((props: Props, forwardedRef: ForwardedRef<HTMLDivElement>) => {
  const { children, className, ...restProps } = props;

  return (
    <Item className={clsx(s.selectItem, className)} {...restProps} ref={forwardedRef}>
      <ItemText>
        <Typography.Body2>{children}</Typography.Body2>
      </ItemText>
    </Item>
  );
});
