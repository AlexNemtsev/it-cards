import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react';

import { Item, ItemText } from '@radix-ui/react-select';
import clsx from 'clsx';

import s from './SelectItem.module.scss';

import { TypographySelector } from '../TypographySelector';

type Props = { isSmall?: boolean } & ComponentPropsWithoutRef<typeof Item>;

export const SelectItem = forwardRef((props: Props, forwardedRef: ForwardedRef<HTMLDivElement>) => {
  const { children, className, isSmall, ...restProps } = props;

  return (
    <Item
      className={clsx(s.selectItem, isSmall && s.small, className)}
      {...restProps}
      ref={forwardedRef}
    >
      <ItemText>
        <TypographySelector isSmall={isSmall}>{children}</TypographySelector>
      </ItemText>
    </Item>
  );
});
