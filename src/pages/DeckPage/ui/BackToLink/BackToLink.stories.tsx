import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { BackToLink } from './BackToLink';

const meta = {
  component: BackToLink,
  tags: ['autodocs'],
  title: 'Components/BackToLink',
} satisfies Meta<typeof BackToLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'Back To Link',
    onClick: fn,
    to: '/',
  },
};
