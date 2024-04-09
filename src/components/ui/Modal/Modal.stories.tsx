import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '.';
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
    title: 'Modal',
  },
};

export const BaseModalOpen: Story = {
  args: {
    children: <div>children</div>,
    open: true,
    title: 'Modal',
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
    title: 'Modal',
  },
  render: ({ children, title }) => {
    return (
      <>
        <Modal title={title}>{children}</Modal>
      </>
    );
  },
};
