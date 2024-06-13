import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import {
  ForgotPasswordForm,
  ForgotPasswordFormValues,
} from '@/features/authForm/ForgotPasswordForm';

const meta = {
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/ForgotPassword',
} satisfies Meta<typeof ForgotPasswordForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
  render: () => {
    const [data, setData] = useState<ForgotPasswordFormValues>({
      email: '',
    });

    const onSubmit = (data: ForgotPasswordFormValues) => setData(data);

    return (
      <>
        <ForgotPasswordForm onSubmit={onSubmit} />
        <p>email: {data?.email}</p>
      </>
    );
  },
};
