import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxRadix } from './Checkbox';

const meta = {
  component: CheckboxRadix,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxRadix>;

const a = () => {
  return '123';
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleChecked: Story = {
  args: {
    checked: true,
    children: a(),
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
