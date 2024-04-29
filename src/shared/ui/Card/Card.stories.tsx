import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardExample: Story = {
  args: {
    style: {
      height: '598px',
      width: '420px',
    },
  },
};
