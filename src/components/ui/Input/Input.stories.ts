import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

const meta = {
  args: {
    placeholder: 'Input',
  },
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

export const InputTypeTextError: Story = {
  args: {
    error: 'Error!',
    labelValue: 'input',
    type: 'text',
  },
};

export const InputTypeTextDisabled: Story = {
  args: {
    disabled: true,
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

export const InputTypePasswordError: Story = {
  args: {
    error: 'Error!',
    labelValue: 'input',
    type: 'password',
  },
};
export const InputTypePasswordDisabled: Story = {
  args: {
    disabled: true,
    labelValue: 'input',
    type: 'password',
  },
};

export const InputTypeSearch: Story = {
  args: {
    type: 'search',
  },
};

export const InputTypeSearchError: Story = {
  args: {
    error: 'Error!',
    type: 'search',
  },
};

export const InputTypeSearchDisabled: Story = {
  args: {
    disabled: true,
    type: 'search',
  },
};
