import type { Meta, StoryObj } from '@storybook/react';

import { CheckEmail } from '@/entities/auth/ui/CheckEmail';

const meta = {
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Auth/CheckEmail',
} satisfies Meta<typeof CheckEmail>;

export default meta;
type Story = StoryObj<typeof meta>;
export const BaseExample: Story = {
  args: {
    email: 'example@mail.com',
  },
};
