import type { Meta, StoryObj } from '@storybook/react';

import { CreateNewPassword, FormValues } from '@/components/auth/CreateNewPassword';
import { action } from '@storybook/addon-actions';

const meta = {
  component: CreateNewPassword,
  tags: ['autodocs'],
  title: 'Auth/CreateNewPassword',
} satisfies Meta<typeof CreateNewPassword>;

export default meta;
type Story = StoryObj<typeof meta>;
export const BaseExample: Story = {
  args: {
    onSubmit: (data: FormValues) => {
      action(data.password)();
    },
  },
};
