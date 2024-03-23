import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './Pagination';

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const BaseExample: Story = {
  args: {},
};
