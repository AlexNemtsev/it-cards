import { ComponentPropsWithoutRef } from 'react';

import { ChevronDownIcon } from '@/shared/assets/icons/ChevronDownIcon';
import { ChevronUpIcon } from '@/shared/assets/icons/ChevronUpIcon';
import { Typography } from '@/shared/ui/Typography';
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

type Props = {
  className?: string;
  placeholder: string;
} & ComponentPropsWithoutRef<typeof Root>;

export const Select = (props: Props) => {
  const { children, className, disabled, placeholder, value, ...restProps } = props;

  return (
    <Root disabled={disabled} value={value} {...restProps}>
      <Trigger className={clsx(s.selectTrigger, className)}>
        <Value placeholder={<Typography.Body2>{placeholder}</Typography.Body2>}>
          <Typography.Body2>{value}</Typography.Body2>
        </Value>
        <Icon className={s.selectIcon}>
          <ChevronDownIcon />
        </Icon>
      </Trigger>
      <Portal>
        <Content className={s.selectContent}>
          <ScrollUpButton className={s.selectScrollButton}>
            <ChevronUpIcon />
          </ScrollUpButton>
          <Viewport className={s.selectViewport}>{children}</Viewport>
          <ScrollDownButton className={s.selectScrollButton}>
            <ChevronDownIcon />
          </ScrollDownButton>
        </Content>
      </Portal>
    </Root>
  );
};
