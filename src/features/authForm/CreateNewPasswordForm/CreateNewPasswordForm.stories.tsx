import type { Meta, StoryObj } from '@storybook/react';

import { CreateNewPasswordForm } from '@/features/authForm/CreateNewPasswordForm';
import { action } from '@storybook/addon-actions';

const meta = {
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/CreateNewPasswordForm',
} satisfies Meta<typeof CreateNewPasswordForm>;

export default meta;
type Story = StoryObj<typeof meta>;
export const BaseExample: Story = {
  args: {
    onSubmit: (password: string) => {
      action(password)();
    },
  },
};
