import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Burger } from '@/shared/assets/icons/Burger/Burger';
import { Avatar } from '@/shared/ui/Avatar';
import { Typography } from '@/shared/ui/Typography';
import { Arrow, Content, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';

import s from './Dropdown.module.scss';

type Props = {
  children?: ReactNode;
  className?: string;
  img?: string;
  name?: string;
} & ComponentPropsWithoutRef<typeof Root>;

export const Dropdown = (props: Props) => {
  const { children, className, img, name } = props;
  const classNames = {
    avatar: s.avatar,
    dropdownMenuArrow: s.dropdownMenuArrow,
    dropdownMenuContent: s.dropdownMenuContent,
    name: s.name,
    triggerButton: clsx(s.triggerButton, className),
  };

  return (
    <Root>
      <Trigger asChild>
        <button className={classNames.triggerButton}>
          {name && (
            <Typography.Subtitle2 className={classNames.name}> {name} </Typography.Subtitle2>
          )}
          {img ? <Avatar className={classNames.avatar} img={img} /> : <Burger />}
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
