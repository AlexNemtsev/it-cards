import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Close, Content, Overlay, Portal, Root, Title, Trigger } from '@radix-ui/react-dialog';

import s from './Modal.module.scss';

import { Cross } from '../../../assets/icons/Cross';
import { Button } from '../Button';
import { Typography } from '../Typography';

type Props = {
  children: ReactNode;
  title: string;
} & ComponentPropsWithoutRef<typeof Root>;

export const Modal = (props: Props) => {
  const { children, title, ...restProps } = props;

  return (
    <Root {...restProps}>
      <Trigger asChild>
        <Button>
          <Typography.H3>{title}</Typography.H3>
        </Button>
      </Trigger>
      <Portal>
        <Overlay className={s.overlay} />
        <Content className={s.content}>
          <div className={s.header}>
            <Title className={s.title}>
              <Typography.H3>{title}</Typography.H3>
            </Title>
            <Close asChild>
              <button className={s.iconButton}>
                <Cross />
              </button>
            </Close>
          </div>
          <div className={s.main}>{children}</div>
        </Content>
      </Portal>
    </Root>
  );
};
