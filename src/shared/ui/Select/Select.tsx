import { ComponentPropsWithoutRef } from 'react';

import { ChevronDownIcon } from '@/shared/assets/icons/ChevronDownIcon';
import { ChevronUpIcon } from '@/shared/assets/icons/ChevronUpIcon';
import {
  Content,
  Icon,
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
  placeholder: string;
  values: SelectItemValue[];
} & ComponentPropsWithoutRef<typeof Root>;

export const Select = (props: Props) => {
  const { disabled, placeholder, values, ...restProps } = props;

  return (
    <Root disabled={disabled} {...restProps}>
      <Trigger className={clsx(s.selectTrigger)}>
        <Value placeholder={<Typography.Body2>{placeholder}</Typography.Body2>} />
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
            {values.map(item => (
              <SelectItem key={item.id} value={item.value}>
                {item.value}
              </SelectItem>
            ))}
          </Viewport>
          <ScrollDownButton className={s.selectScrollButton}>
            <ChevronDownIcon />
          </ScrollDownButton>
        </Content>
      </Portal>
    </Root>
  );
};
