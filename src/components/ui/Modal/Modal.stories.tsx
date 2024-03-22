import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
