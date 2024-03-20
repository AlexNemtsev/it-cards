import type { Meta, StoryObj } from '@storybook/react';

import { CheckedMark } from '@/assets/icons/CheckedMark/CheckedMark';

import { Checkbox } from './Checkbox';

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>;

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
