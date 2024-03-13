import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Arrow, Content, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';

import s from './Dropdown.module.scss';

type Props = {
  className?: string;
  icon?: ReactNode;
} & ComponentPropsWithoutRef<typeof Root>;

export const Dropdown = (props: Props) => {
  const { className, icon } = props;
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
          <p>10000000000</p>
          <p>20000000000</p>
          <p>30000000000</p>
          <p>40000000000</p>
          <Arrow className={classNames.DropdownMenuArrow} />
        </Content>
      </Portal>
    </Root>
  );
};
