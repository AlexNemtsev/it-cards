import { ComponentPropsWithoutRef } from 'react';

import { Close as CloseIcon } from '@/assets/icons/Close';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';
import clsx from 'clsx';

import s from './Modal.module.scss';

import { Button } from '../Button';
// import { Cross2Icon } from '@radix-ui/react-icons';

type Props = {
  title: string;
} & ComponentPropsWithoutRef<typeof Root>;

export const Modal = (props: Props) => {
  const { title } = props;

  return (
    <Root>
      <Trigger asChild>
        <Button className={clsx(s.Button, s.violet)}>Edit profile</Button>
      </Trigger>
      <Portal>
        <Overlay className={s.DialogOverlay} />
        <Content className={s.DialogContent}>
          <Title className={s.DialogTitle}>{title}</Title>
          <Description className={s.DialogDescription}>
            Make changes to your profile here. Click save when you are done.
          </Description>
          <fieldset className={s.Fieldset}>
            <label className={s.Label} htmlFor="name">
              Name
            </label>
            <input className={s.Input} defaultValue="Pedro Duarte" id="name" />
          </fieldset>
          <fieldset className={s.Fieldset}>
            <label className={s.Label} htmlFor="username">
              Username
            </label>
            <input className={s.Input} defaultValue="@peduarte" id="username" />
          </fieldset>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 25 }}>
            <Close asChild>
              <Button className="Button green" variant="primary">
                Save changes
              </Button>
            </Close>
          </div>
          <Close asChild>
            <button aria-label="Close" className={s.IconButton}>
              {/* <CloseIcon /> */}x
            </button>
          </Close>
        </Content>
      </Portal>
    </Root>
  );
};
