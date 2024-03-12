import type { Meta, StoryObj } from '@storybook/react';

import { ReactNode } from 'react';

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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
const createStory = (
  Component: typeof Button,
  children?: ReactNode,
  disabled?: boolean,
  fullWidth?: boolean,
  href?: string,
  variant?: 'primary' | 'secondary'
): Story => {
  return {
    args: {
      children,
      disabled,
      fullWidth,
      href,
      variant,
    },
    render: ({ ...args }) => (
      <Component fullWidth={args.fullWidth} variant={args.variant}>
        {args.children}
      </Component>
    ),
  };
};

export const Primary = createStory(
  Button,
  <>
    <LogOutIcon />
    Primary Button
  </>
);
// const args = {
//   children: (
//     <>
//       <LogOutIcon />
//       Secondary Button
//     </>
//   ),
//   fullWidth: false,
//   variant: 'secondary',
// };

export const Secondary = createStory(Button, { variant: 'secondary' });

export const SecondaryOld: Story = {
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
        <LogOutIcon /> Full Width Primary Button
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
        <LogOutIcon /> Link that looks like a Button
      </>
    ),
    href: 'https://www.google.com/',
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
