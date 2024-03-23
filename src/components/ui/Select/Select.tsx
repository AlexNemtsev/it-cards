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
  disabled?: boolean;
  labelValue: string;
  placeholder: string;
  selectItemValues: SelectItemValue[];
};

export const Select = (props: Props) => {
  const { ariaLabel, disabled, labelValue, placeholder, selectItemValues } = props;

  return (
    <div className={s.selectWrapper}>
      <label>
        <Typography.Caption className={clsx(s.label, disabled && s.disabled)}>
          {labelValue}
        </Typography.Caption>
      </label>
      <Root disabled={disabled}>
        <Trigger aria-label={ariaLabel} className={s.selectTrigger}>
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
                <Label className={s.selectLabel}>
                  <Typography.Caption className={s.selectLabelTypograpgy}>
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
            <ScrollDownButton className={s.selectScrollButton}>
              <ChevronDownIcon />
            </ScrollDownButton>
          </Content>
        </Portal>
      </Root>
    </div>
  );
};
