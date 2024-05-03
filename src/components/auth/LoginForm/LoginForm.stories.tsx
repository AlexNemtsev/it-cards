import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';

import { LoginForm } from '@/components/auth/LoginForm/LoginForm';
import { action } from '@storybook/addon-actions';

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
      action(data.email)();
      action(data.password)();
      action(data.rememberMe.toString())();
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
