import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { NewPasswordForm } from '.';
import { NewPasswordFormValues } from './NewPasswordFormValues';

const meta = {
  component: NewPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/NewPasswordForm',
} satisfies Meta<typeof NewPasswordForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NewPassword: Story = {
  args: {
    onSubmit: () => {},
  },
  render: () => {
    const [data, setData] = useState<NewPasswordFormValues>({
      password: '',
    });

    const onSubmit = (data: NewPasswordFormValues) => setData(data);

    return (
      <>
        <NewPasswordForm onSubmit={onSubmit} />
        {data?.password}
      </>
    );
  },
};
