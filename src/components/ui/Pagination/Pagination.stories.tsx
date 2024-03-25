import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './Pagination';

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Pagination7: Story = {
  args: {
    currentPage: 1,
    itemsPerPage: 5,
    totalItems: 7,
    totalPages: 2,
  },
};
export const Pagination305: Story = {
  args: {
    currentPage: 1,
    itemsPerPage: 15,
    totalItems: 305,
    totalPages: 21,
  },
};
