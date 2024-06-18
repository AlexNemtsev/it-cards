import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Arrow, Content, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';

import s from './Dropdown.module.scss';

type Props = {
  children?: ReactNode;
  className?: string;
  trigger?: ReactNode;
} & ComponentPropsWithoutRef<typeof Root>;

export const Dropdown = (props: Props) => {
  const { children, className, trigger } = props;
  const classNames = {
    dropdownMenuArrow: s.dropdownMenuArrow,
    dropdownMenuContent: s.dropdownMenuContent,
    triggerButton: clsx(s.triggerButton, className),
  };

  return (
    <Root>
      <Trigger className={classNames.triggerButton}>{trigger}</Trigger>
      <Portal>
        <Content className={classNames.dropdownMenuContent} sideOffset={5}>
          {children}
          <Arrow className={classNames.dropdownMenuArrow} />
        </Content>
      </Portal>
    </Root>
  );
};
