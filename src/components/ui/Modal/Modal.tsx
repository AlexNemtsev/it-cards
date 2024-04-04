import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Cross } from '@/assets/icons/Cross';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { Close, Content, Overlay, Portal, Root, Title, Trigger } from '@radix-ui/react-dialog';

import s from './Modal.module.scss';

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
          <Typography.Subtitle2>{title}</Typography.Subtitle2>
        </Button>
      </Trigger>
      <Portal>
        <Overlay className={s.overlay} />
        <Content className={s.content}>
          <div className={s.header}>
            <Title className={s.title}>
              <Typography.H3>{title}</Typography.H3>
            </Title>
            <Close className={s.buttonClose}>
              <Cross height={25} width={25} />
            </Close>
          </div>
          <div className={s.main}>{children}</div>
        </Content>
      </Portal>
    </Root>
  );
};
