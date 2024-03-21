import React, { ComponentPropsWithoutRef, ForwardedRef } from 'react';

import {
  Content,
  Group,
  Icon,
  Item,
  ItemIndicator,
  ItemText,
  Label,
  Portal,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  Trigger,
  Value,
  Viewport,
} from '@radix-ui/react-select';
import clsx from 'clsx';

import s from './PrimitiveSelect.module.scss';

const SelectDemo = () => (
  <Root>
    <Trigger aria-label="Select-box" className={s.SelectTrigger}>
      <Value placeholder="Select-box…" />
      <Icon className={s.SelectIcon}>▼</Icon>
    </Trigger>
    <Portal>
      <Content className={s.SelectContent}>
        <ScrollUpButton className={s.SelectScrollButton}>▲</ScrollUpButton>
        <Viewport className="SelectViewport">
          <Group>
            <Label className={s.SelectLabel}>Select-box</Label>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </Group>
        </Viewport>
        <ScrollDownButton className={s.SelectScrollButton}>▼</ScrollDownButton>
      </Content>
    </Portal>
  </Root>
);

type Props = {} & ComponentPropsWithoutRef<typeof Item>;

const SelectItem = React.forwardRef(
  ({ children, className, ...props }: Props, forwardedRef: ForwardedRef<HTMLDivElement>) => {
    return (
      <Item className={clsx(s.SelectItem, className)} {...props} ref={forwardedRef}>
        <ItemText>{children}</ItemText>
        <ItemIndicator className={s.SelectItemIndicator}>✓</ItemIndicator>
      </Item>
    );
  }
);

export default SelectDemo;
