// import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
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
// import { clsx } from 'clsx';

import { ComponentPropsWithoutRef } from 'react';

import s from './Select.module.scss';

import { Typography } from '../Typography';
import { SelectItem } from './SelectItem/SelectItem';
import { SelectItemValue } from './Types';

type Props = {
  ariaLabel: string;
  labelValue: string;
  placeholder: string;
  selectItemValues: SelectItemValue[];
} & ComponentPropsWithoutRef<typeof Root>;

export const Select = (props: Props) => {
  const { ariaLabel, labelValue, placeholder, selectItemValues } = props;

  return (
    <div className={s.selectWrapper}>
      <label>
        <Typography.Caption className={s.label}>{labelValue}</Typography.Caption>
      </label>
      <Root>
        <Trigger aria-label={ariaLabel} className={s.selectTrigger}>
          <Value placeholder={placeholder} />
          <Icon className={s.selectIcon}>{/* <ChevronDownIcon /> */} ▼</Icon>
        </Trigger>
        <Portal>
          <Content className={s.selectContent}>
            <ScrollUpButton className={s.selectScrollButton}>
              {/* <ChevronUpIcon /> ChevronUpIcon */} ▲
            </ScrollUpButton>
            <Viewport className={s.selectViewport}>
              <Group>
                <Label className={s.selectLabel}>Fruits</Label>
                {selectItemValues.map(item => (
                  <SelectItem key={item.id} value={item.value}>
                    {item.value}
                  </SelectItem>
                ))}
              </Group>
            </Viewport>
            <ScrollDownButton className={s.selectScrollButton}>
              {/* <ChevronDownIcon /> */} ▼
            </ScrollDownButton>
          </Content>
        </Portal>
      </Root>
    </div>
  );
};
