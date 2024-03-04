import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxRadix } from './';

const meta = {
  component: CheckboxRadix,
  tags: ['autodocs'],
  // title: 'Components/Button',
} satisfies Meta<typeof CheckboxRadix>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseCheckbox: Story = {
  args: {
    children: 'Some text',
    disabled: true,
    variant: 'primary',
  },
};
