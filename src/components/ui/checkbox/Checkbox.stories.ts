import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxRadix } from './';

const meta = {
  component: CheckboxRadix,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxRadix>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleChecked: Story = {
  args: {
    checked: true,
  },
};
export const ExampleUnChecked: Story = {
  args: {},
};
export const ExampleDisabled: Story = {
  args: {
    disabled: true,
  },
};
