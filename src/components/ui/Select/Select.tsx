import React, { ComponentPropsWithoutRef, ForwardedRef } from 'react';

// import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
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
import { clsx } from 'clsx';

export const SelectDemo = () => (
  <Root>
    <Trigger aria-label="Food" className="SelectTrigger">
      <Value placeholder="Select a fruit…" />
      <Icon className="SelectIcon">{/* <ChevronDownIcon /> */} ChevronDownIcon</Icon>
    </Trigger>
    <Portal>
      <Content className="SelectContent">
        <ScrollUpButton className="SelectScrollButton">
          {/* <ChevronUpIcon /> ChevronUpIcon */}
        </ScrollUpButton>
        <Viewport className="SelectViewport">
          <Group>
            <Label className="SelectLabel">Fruits</Label>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </Group>
        </Viewport>
        <ScrollDownButton className="SelectScrollButton">
          {/* <ChevronDownIcon /> */} ChevronDownIcon
        </ScrollDownButton>
      </Content>
    </Portal>
  </Root>
);

type Props = {} & ComponentPropsWithoutRef<typeof Item>;

const SelectItem = React.forwardRef((props: Props, forwardedRef) => {
  const { children, className, ...restProps } = props;

  return (
    <Item className={clsx('SelectItem', className)} {...restProps} ref={forwardedRef}>
      <ItemText>{children}</ItemText>
      <ItemIndicator className="SelectItemIndicator">{/* <CheckIcon /> */} CheckIcon</ItemIndicator>
    </Item>
  );
});
