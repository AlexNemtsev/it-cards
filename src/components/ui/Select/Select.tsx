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

type Props = {
  ariaLabel: string;
  isSmall?: boolean;
  label?: number | string;
  placeholder: string;
  selectItemValues: SelectItemValue[];
} & ComponentPropsWithoutRef<typeof Root>;

export const Select = (props: Props) => {
  const { ariaLabel, disabled, isSmall, label, placeholder, selectItemValues, ...restProps } =
    props;

  return (
    <div className={s.selectWrapper}>
      {label && (
        <label>
          <Typography.Caption className={clsx(s.label, disabled && s.disabled)}>
            {label}
          </Typography.Caption>
        </label>
      )}
      <Root disabled={disabled} {...restProps}>
        <Trigger aria-label={ariaLabel} className={clsx(s.selectTrigger, isSmall && s.small)}>
          {/* Добавить в placeholder Компонент типографики */}
          <Value placeholder={placeholder} />
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
                  <Typography.Caption className={s.selectLabelTypograpgy}>
                    {label}
                  </Typography.Caption>
                  <ChevronUpIcon />
                </Label>
                {selectItemValues.map(item => (
                  <SelectItem isSmall={!!isSmall} key={item.id} value={item.value}>
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
