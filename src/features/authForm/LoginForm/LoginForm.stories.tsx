import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from '@/features/authForm/LoginForm/LoginForm';
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
    return <LoginForm onSubmit={onSubmit} />;
  },
};
