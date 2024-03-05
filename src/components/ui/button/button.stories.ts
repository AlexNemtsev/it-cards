import type { Meta, StoryObj } from '@storybook/react';

import { Button, Img } from './';

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },

  component: Button,
  tags: ['autodocs'],
  // title: 'Components/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Primary Button Link that looks like a buttoLink that looks like a butto',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
};
export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary',
  },
};
export const Test: Story = {
  args: {
    children: Img,
    disabled: true,
    fullWidth: true,
    variant: 'primary',
  },
};

export const DisabledPrimary: Story = {
  args: {
    children: 'Disabled Primary',
    disabled: true,
    variant: 'primary',
  },
};
export const DisabledSecondary: Story = {
  args: {
    children: 'Disabled Secondary',
    disabled: true,
    variant: 'secondary',
  },
};
