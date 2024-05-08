import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Burger } from '@/shared/assets/icons/Burger/Burger';
import { Avatar } from '@/shared/ui/Avatar';
import { Arrow, Content, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';

import s from './Dropdown.module.scss';

type Props = {
  children?: ReactNode;
  className?: string;
  img?: string;
  withAvatar?: boolean;
} & ComponentPropsWithoutRef<typeof Root>;

export const Dropdown = (props: Props) => {
  const { children, className, img, withAvatar } = props;
  const classNames = {
    dropdownMenuArrow: s.dropdownMenuArrow,
    dropdownMenuContent: s.dropdownMenuContent,
    iconButton: clsx(s.iconButton, className),
    root: clsx(s.iconButton),
  };

  return (
    <Root>
      <Trigger asChild>
        <button className={classNames.iconButton}>
          {withAvatar ? <Avatar img={img} /> : <Burger />}
        </button>
      </Trigger>
      <Portal>
        <Content className={classNames.dropdownMenuContent} sideOffset={5}>
          {children}
          <Arrow className={classNames.dropdownMenuArrow} />
        </Content>
      </Portal>
    </Root>
  );
};
