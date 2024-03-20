import type { Meta, StoryObj } from '@storybook/react';

import { LogOutIcon } from '@/assets/icons/LogOutIcon';

import { Select } from './Select';

const meta = {
  argTypes: {},

  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <LogOutIcon />
        Primary Select
      </>
    ),
  },
};
