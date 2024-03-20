import type { Meta, StoryObj } from '@storybook/react';

import { LogOutIcon } from '@/assets/icons/LogOutIcon';

import { Button } from './Button';

const meta = {
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <LogOutIcon />
        Primary Button
      </>
    ),
  },
};

export const Secondary: Story = {
  args: {
    children: (
      <>
        <LogOutIcon />
        Secondary Button
      </>
    ),
    variant: 'secondary',
  },
};

export const FullWidth: Story = {
  args: {
    children: (
      <>
        <LogOutIcon />
        Full Width Primary Button
      </>
    ),
    fullWidth: true,
  },
};
export const AsLink: Story = {
  args: {
    as: 'a',
    children: (
      <>
        <LogOutIcon />
        Link that looks like a Button
      </>
    ),
    href: 'https://www.google.com/',
  },
};
export const AsLinkSecondary: Story = {
  args: {
    as: 'a',
    children: (
      <>
        <LogOutIcon />
        Link that looks like a Button
      </>
    ),
    href: 'https://www.google.com/',
    variant: 'secondary',
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
    href: 'https://www.google.com/',
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
export const AsLinkDisabled: Story = {
  args: {
    as: 'a',
    children: (
      <>
        <LogOutIcon />
        Link that looks like a Button
      </>
    ),
    disabled: true,
    href: 'https://www.google.com/',
  },
};
