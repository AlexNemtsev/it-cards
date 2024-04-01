import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '.';

const meta = {
  component: Modal,
  title: 'Components/ui/Input',
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalExample: Story = {
  args: {
    children: 'text',
    title: 'Modal>',
  },
};
