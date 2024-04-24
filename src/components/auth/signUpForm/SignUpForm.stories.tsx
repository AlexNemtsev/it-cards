import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { SignUpForm } from '.';
import { SignUpFormValues } from './SignUpFormShema';

const meta = {
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'Auth/SignUpForm',
} satisfies Meta<typeof SignUpForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
  render: () => {
    const [data, setData] = useState<Omit<SignUpFormValues, 'passwordConfirmation'>>({
      email: '',
      password: '',
    });

    const onSubmit = (data: Omit<SignUpFormValues, 'passwordConfirmation'>) => setData(data);

    return (
      <>
        <SignUpForm onSubmit={onSubmit} />
        {(data?.email, data?.password)}
      </>
    );
  },
};
