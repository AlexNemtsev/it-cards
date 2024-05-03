import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';

import { LoginForm } from '@/components/auth/LoginForm/LoginForm';

const meta = {
  component: LoginForm,
  tags: ['autodocs'],
  title: 'Auth/LoginForm',
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    onSubmit: data => {
      console.log(data);
    },
  },
  render: ({ onSubmit }) => {
    return (
      <BrowserRouter>
        <LoginForm onSubmit={onSubmit} />;
      </BrowserRouter>
    );
  },
};
