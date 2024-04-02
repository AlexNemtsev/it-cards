import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '.';

const meta = {
  component: Modal,
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseModal: Story = {
  args: {
    children: 'children',
    title: 'Modal',
  },
};

export const ModalOpen: Story = {
  args: {
    children: 'children',
    open: true,
    title: 'Modal',
  },
};
