import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '.';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { ModalButton } from './ModalButton';

const meta = {
  component: Modal,
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseModal: Story = {
  args: {
    children: <div>children</div>,
    title: <Typography.H3>Title</Typography.H3>,
    trigger: <Button>Trigger</Button>,
  },
};

export const BaseModalOpen: Story = {
  args: {
    children: <div>children</div>,
    open: true,
    title: <Typography.H3>Title</Typography.H3>,
    trigger: <Button>Trigger</Button>,
  },
};

const styles = { display: 'flex', gap: 20, justifyContent: 'space-between' };

const ChildrenModalButtons = () => {
  const addNewCard = () => {
    alert('add new Card');
  };
  const resetForm = () => {
    alert('reset Form');
  };

  return (
    <div style={styles}>
      <ModalButton onClick={resetForm} type="reset" variant="secondary">
        Cancel
      </ModalButton>
      <ModalButton onClick={addNewCard} type="submit">
        Add new Card
      </ModalButton>
    </div>
  );
};

export const ModalWithButtons: Story = {
  args: {
    children: <ChildrenModalButtons />,
    title: <Typography.H3>Title</Typography.H3>,
    trigger: <Button>Trigger</Button>,
  },
  render: ({ children, title, trigger }) => {
    return (
      <>
        <Modal title={title} trigger={trigger}>
          {children}
        </Modal>
      </>
    );
  },
};
