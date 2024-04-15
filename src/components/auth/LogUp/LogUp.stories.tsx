import type { Meta, StoryObj } from '@storybook/react';

import { LogUp } from './LogUp';

const meta = {
  component: LogUp,
  tags: ['autodocs'],
  title: 'auth/LogUp',
} satisfies Meta<typeof LogUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryBaseSignIn: Story = {};
