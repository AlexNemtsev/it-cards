import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Cross } from '@/shared/assets/icons/Cross';
import { Close, Content, Overlay, Portal, Root, Title, Trigger } from '@radix-ui/react-dialog';
import { clsx } from 'clsx';

import s from './Modal.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
  title: ReactNode;
  trigger: ReactNode;
} & ComponentPropsWithoutRef<typeof Root>;

export const Modal = (props: Props) => {
  const { children, className = '', title, trigger, ...restProps } = props;

  return (
    <Root {...restProps}>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>
        <Overlay className={s.overlay} />
        <Content className={clsx(s.content, className)}>
          <div className={s.header}>
            <Title asChild className={s.title}>
              {title}
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
