import type { Meta, StoryObj } from '@storybook/react';

import { LogOutIcon } from '@/assets/icons/LogOutIcon';

import { Button } from './';

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
    children: (
      <>
        <LogOutIcon /> Primary Button
      </>
    ),
    disabled: false,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: (
      <>
        <LogOutIcon /> Secondary Button
      </>
    ),
    disabled: false,
    variant: 'secondary',
  },
};

export const FullWidth: Story = {
  args: {
    children: (
      <>
        <LogOutIcon /> Full Width Primary Button
      </>
    ),
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
};
export const AsLink: Story = {
  args: {
    as: 'a',
    children: (
      <>
        <LogOutIcon /> Link that looks like a Button
      </>
    ),
    variant: 'primary',
  },
};
export const AsLinkFullWidth: Story = {
  args: {
    as: 'a',
    children: (
      <>
        <LogOutIcon /> Link that looks like a Button
      </>
    ),
    fullWidth: true,
    variant: 'primary',
  },
};

export const DisabledPrimary: Story = {
  args: {
    children: (
      <>
        <LogOutIcon /> Disabled Primary
      </>
    ),
    disabled: true,
    variant: 'primary',
  },
};
export const DisabledSecondary: Story = {
  args: {
    children: (
      <>
        <LogOutIcon /> Disabled Secondary
      </>
    ),
    disabled: true,
    variant: 'secondary',
  },
};
