import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

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

export const ModalWithButtons: Story = {
  args: {
    children: null,
    title: 'Modal',
  },
  render: ({ title }) => {
    const [value, setValue] = useState('');

    const addNewCard = () => {
      setValue('add new Card');
    };
    const resetForm = () => {
      setValue('reset Form');
    };

    return (
      <>
        <Modal title={title}>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'space-between' }}>
            <ModalButton onClick={resetForm} type="reset" variant="secondary">
              Cancel
            </ModalButton>
            <ModalButton onClick={addNewCard} type="submit">
              Add new Card
            </ModalButton>
          </div>
        </Modal>
        <div>{value}</div>
      </>
    );
  },
};
