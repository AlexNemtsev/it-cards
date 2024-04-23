import type { Meta, StoryObj } from '@storybook/react';

import { CreateNewPassword, FormValues } from '@/components/auth/CreateNewPassword';

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
      console.log(data.password);
    },
  },
  render: ({ onSubmit }) => {
    return <CreateNewPassword onSubmit={onSubmit} />;
  },
};
