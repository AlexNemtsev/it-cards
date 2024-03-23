import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@/components/ui/Typography';

import { PaginationButton } from './PaginationButton';

const meta = {
  component: PaginationButton,
  tags: ['autodocs'],
  title: 'Components/Pagination/PaginationButton',
} satisfies Meta<typeof PaginationButton>;

export default meta;
type Story = StoryObj<typeof PaginationButton>;

export const Base: Story = {
  args: {
    children: <Typography.Body2>1</Typography.Body2>,
  },
};

export const Active: Story = {
  args: {
    children: <Typography.Body2>7</Typography.Body2>,

    isActive: true,
  },
};
