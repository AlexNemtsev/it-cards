import type { Meta, StoryObj } from '@storybook/react';

import { ForgotPassword, FormValues } from '@/components/auth/ForgotPassword';
import { action } from '@storybook/addon-actions';

const meta = {
  component: ForgotPassword,
  tags: ['autodocs'],
  title: 'Auth/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>;

export default meta;
type Story = StoryObj<typeof meta>;
export const BaseExample: Story = {
  args: {
    onSubmit: (data: FormValues) => {
      action(data.email)();
    },
  },
};
