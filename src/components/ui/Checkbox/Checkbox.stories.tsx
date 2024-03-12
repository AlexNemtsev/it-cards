import type { Meta, StoryObj } from '@storybook/react';

import { CheckedMark } from '@/assets/icons/CheckedMark/CheckedMark';

import { CheckboxRadix } from './Checkbox';

const meta = {
  component: CheckboxRadix,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxRadix>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleCheckedMark: Story = {
  args: {
    checked: true,
    icon: <CheckedMark />,
  },
};
export const ExampleUnChecked: Story = {
  args: {
    icon: <CheckedMark />,
  },
};
export const ExampleDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    icon: <CheckedMark />,
  },
};
