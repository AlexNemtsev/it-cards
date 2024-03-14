import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

const meta = {
  component: Input,
  title: 'Components/ui/Input',
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputTypeText: Story = {
  args: {
    labelValue: 'input',
    type: 'text',
  },
};

export const InputTypePassword: Story = {
  args: {
    labelValue: 'input',
    type: 'password',
  },
};

export const InputTypeSearch: Story = {
  args: {
    type: 'search',
  },
};

export const InputError: Story = {
  args: {
    error: 'Error!',
    labelValue: 'input',
    type: 'text',
  },
};

export const InputDisabled: Story = {
  args: {
    disabled: true,
    labelValue: 'input',
    type: 'text',
  },
};
