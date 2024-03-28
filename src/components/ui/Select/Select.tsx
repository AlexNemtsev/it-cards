import { ComponentPropsWithoutRef } from 'react';

import { ChevronDownIcon } from '@/assets/icons/ChevronDownIcon';
import { ChevronUpIcon } from '@/assets/icons/ChevronUpIcon';
import {
  Content,
  Group,
  Icon,
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

import s from './Select.module.scss';

import { Typography } from '../Typography';
import { SelectItem } from './SelectItem';
import { SelectItemValue } from './SelectItemValue';
import { TypographySelector } from './TypographySelector';

type Props = {
  isSmall?: boolean;
  label: number | string;
  placeholder: string;
  values: SelectItemValue[];
} & ComponentPropsWithoutRef<typeof Root>;

export const Select = (props: Props) => {
  const { disabled, isSmall, label, placeholder, values, ...restProps } = props;

  return (
    <div className={s.selectWrapper}>
      {label && !isSmall && (
        <Typography.Body2 as="label" className={clsx(s.label, disabled && s.disabled)}>
          {label}
        </Typography.Body2>
      )}
      <Root disabled={disabled} {...restProps}>
        <Trigger className={clsx(s.selectTrigger, isSmall && s.small)}>
          <Value
            placeholder={<TypographySelector isSmall={isSmall}>{placeholder}</TypographySelector>}
          />
          <Icon className={s.selectIcon}>
            <ChevronDownIcon />
          </Icon>
        </Trigger>
        <Portal>
          <Content className={s.selectContent}>
            <ScrollUpButton className={s.selectScrollButton}>
              <ChevronUpIcon />
            </ScrollUpButton>
            <Viewport className={s.selectViewport}>
              <Group>
                <Label className={clsx(s.selectLabel, isSmall && s.small)}>
                  <TypographySelector isSmall={isSmall}>{label}</TypographySelector>
                  <ChevronUpIcon />
                </Label>
                {values.map(item => (
                  <SelectItem isSmall={isSmall} key={item.id} value={item.value}>
                    {item.value}
                  </SelectItem>
                ))}
              </Group>
            </Viewport>
            <ScrollDownButton className={s.selectScrollButton}>
              <ChevronDownIcon />
            </ScrollDownButton>
          </Content>
        </Portal>
      </Root>
    </div>
  );
};
