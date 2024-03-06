import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxWithText } from './CheckboxWithText';

const meta = {
  component: CheckboxWithText,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxWithText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleChecked: Story = {
  args: {
    checked: true,
    text: 'Some text',
  },
};
export const ExampleEmpty: Story = {
  args: {},
};
export const ExampleCheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    text: 'Some text',
  },
};
