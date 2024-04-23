import type { Meta, StoryObj } from '@storybook/react';

import { ForgotPassword, FormValues } from '@/components/auth/ForgotPassword';

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
      console.log(data.email);
    },
  },
  render: ({ onSubmit }) => {
    return <ForgotPassword onSubmit={onSubmit} />;
  },
};
