import type { Meta, StoryObj } from '@storybook/react';

import { CheckedMark } from '@/assets/icons/CheckedMark/CheckedMark';

import { CheckboxRadix } from './Checkbox';

const meta = {
  component: CheckboxRadix,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxRadix>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxChecked: Story = {
  args: {
    checked: true,
    icon: <CheckedMark />,
  },
};
export const CheckboxUnchecked: Story = {
  args: {
    icon: <CheckedMark />,
  },
};
export const CheckboxDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    icon: <CheckedMark />,
  },
};
