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

import s from './Modal.module.scss';
// import { Cross2Icon } from '@radix-ui/react-icons';

export const Modal = () => (
  <Root>
    <Trigger asChild>
      <button className="Button violet">Edit profile</button>
    </Trigger>
    <Portal>
      <Overlay className={s.DialogOverlay} />
      <Content className={s.DialogContent}>
        <Title className={s.DialogTitle}>Edit profile</Title>
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
            <button className="Button green">Save changes</button>
          </Close>
        </div>
        <Close asChild>
          <button aria-label="Close" className="IconButton">
            {/* <Cross2Icon /> */}
          </button>
        </Close>
      </Content>
    </Portal>
  </Root>
);

export default Modal;
