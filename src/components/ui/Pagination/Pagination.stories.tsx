import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

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
    itemsPerPage: 10,
    totalPages: 7,
  },
  render: ({ currentPage, itemsPerPage, totalPages }) => {
    const [displayValue, setDisplayValue] = useState(currentPage);
    const onValueChange = (currentPage: number) => {
      setDisplayValue(currentPage);
    };

    return (
      <>
        <p>currentPage is № {displayValue}</p>
        <Pagination
          currentPage={displayValue}
          itemsPerPage={itemsPerPage}
          onValueChange={onValueChange}
          totalPages={totalPages}
        />
      </>
    );
  },
};
export const Pagination12: Story = {
  args: {
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 12,
  },
  render: ({ currentPage, itemsPerPage, totalPages }) => {
    const [displayValue, setDisplayValue] = useState(currentPage);
    const onValueChange = (currentPage: number) => {
      setDisplayValue(currentPage);
    };

    return (
      <>
        <p>currentPage is № {displayValue}</p>
        <Pagination
          currentPage={displayValue}
          itemsPerPage={itemsPerPage}
          onValueChange={onValueChange}
          totalPages={totalPages}
        />
      </>
    );
  },
};
