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
    typeInput: 'text',
  },
};

export const InputTypeTextError: Story = {
  args: {
    error: 'Error!',
    labelValue: 'input',
    typeInput: 'text',
  },
};

export const InputTypeTextDisabled: Story = {
  args: {
    disabled: true,
    labelValue: 'input',
    typeInput: 'text',
  },
};

export const InputTypePassword: Story = {
  args: {
    labelValue: 'input',
    typeInput: 'password',
  },
};

export const InputTypePasswordError: Story = {
  args: {
    error: 'Error!',
    labelValue: 'input',
    typeInput: 'password',
  },
};
export const InputTypePasswordDisabled: Story = {
  args: {
    disabled: true,
    labelValue: 'input',
    typeInput: 'password',
  },
};

export const InputTypeSearch: Story = {
  args: {
    typeInput: 'search',
  },
};

export const InputTypeSearchError: Story = {
  args: {
    error: 'Error!',
    typeInput: 'search',
  },
};

export const InputTypeSearchDisabled: Story = {
  args: {
    disabled: true,
    typeInput: 'search',
  },
};
