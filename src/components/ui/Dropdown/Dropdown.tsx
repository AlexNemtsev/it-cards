import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Arrow, Content, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';

import s from './Dropdown.module.scss';

type Props = {
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
} & ComponentPropsWithoutRef<typeof Root>;

export const Dropdown = (props: Props) => {
  const { children, className, icon } = props;
  const classNames = {
    DropdownMenuArrow: s.DropdownMenuArrow,
    DropdownMenuContent: s.DropdownMenuContent,
    IconButton: clsx(s.IconButton, className),
    root: clsx(s.IconButton),
  };

  return (
    <Root>
      <Trigger asChild>
        <button aria-label="Customise options" className={classNames.IconButton}>
          {icon}
        </button>
      </Trigger>

      <Portal>
        <Content className={classNames.DropdownMenuContent} sideOffset={5}>
          {children}
          <Arrow className={classNames.DropdownMenuArrow} />
        </Content>
      </Portal>
    </Root>
  );
};
