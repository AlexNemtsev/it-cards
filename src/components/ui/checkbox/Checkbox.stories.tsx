import type { Meta, StoryObj } from '@storybook/react';

import { CheckedCross } from '@/components/ui/checkbox/CheckedCross';
import { CheckedMark } from '@/components/ui/checkbox/CheckedMark';

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
export const ExampleCheckedCross: Story = {
  args: {
    checked: true,
    icon: <CheckedCross />,
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
