import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { LogUpForm } from '.';
import { LogUpFormValues } from './LogUpFormValues';

const meta = {
  component: LogUpForm,
  tags: ['autodocs'],
  title: 'Auth/LogUpForm',
} satisfies Meta<typeof LogUpForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SignUp: Story = {
  args: {
    onSubmit: () => {},
  },
  render: () => {
    const [data, setData] = useState<Omit<LogUpFormValues, 'passwordConfirmation'>>({
      email: '',
      password: '',
    });

    const onSubmit = (data: Omit<LogUpFormValues, 'passwordConfirmation'>) => setData(data);

    return (
      <>
        <LogUpForm onSubmit={onSubmit} />
        {(data?.email, data?.password)}
      </>
    );
  },
};
