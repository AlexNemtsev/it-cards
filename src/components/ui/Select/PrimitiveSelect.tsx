import React, { ComponentPropsWithoutRef, ForwardedRef } from 'react';

import { ChevronDownIcon } from '@/assets/icons/ChevronDownIcon';
import { ChevronUpIcon } from '@/assets/icons/ChevronUpIcon';
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

import { Typography } from '../Typography';
import { SelectItemValue } from './Types';

type Props = {
  ariaLabel: string;
  disabled?: boolean;
  labelValue: string;
  placeholder: string;
  selectItemValues: SelectItemValue[];
};

export const PrimitiveSelect = (props: Props) => {
  const { ariaLabel, disabled, labelValue, placeholder, selectItemValues } = props;

  const classNames = {
    label: clsx(s.label, disabled && s.labelDisabled),
  };

  return (
    <div className={s.SelectWrapper}>
      <label>
        <Typography.Caption className={classNames.label}>{labelValue}</Typography.Caption>
      </label>
      <Root disabled={disabled}>
        <Trigger aria-label={ariaLabel} className={s.SelectTrigger}>
          <Value placeholder={placeholder} />
          <Icon className={s.SelectIcon}>
            <ChevronDownIcon />
          </Icon>
        </Trigger>
        <Portal>
          <Content className={s.SelectContent}>
            <ScrollUpButton className={s.SelectScrollButton}>
              <ChevronUpIcon />
            </ScrollUpButton>
            <Viewport className={s.SelectViewport}>
              <Group>
                <Label className={s.SelectLabel}>
                  <Typography.Caption className={s.SelectLabelTypograpgy}>
                    {labelValue}
                  </Typography.Caption>
                  <ChevronUpIcon />
                </Label>
                {selectItemValues.map(item => (
                  <SelectItem key={item.id} value={item.value}>
                    {item.value}
                  </SelectItem>
                ))}
              </Group>
            </Viewport>
            <ScrollDownButton className={s.SelectScrollButton}>
              <ChevronDownIcon />
            </ScrollDownButton>
          </Content>
        </Portal>
      </Root>
    </div>
  );
};

type PropsSelectItem = {} & ComponentPropsWithoutRef<typeof Item>;

const SelectItem = React.forwardRef(
  (
    { children, className, ...props }: PropsSelectItem,
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Item className={clsx(s.SelectItem, className)} {...props} ref={forwardedRef}>
        <ItemText>{children}</ItemText>
        <ItemIndicator className={s.SelectItemIndicator}>✓</ItemIndicator>
      </Item>
    );
  }
);
