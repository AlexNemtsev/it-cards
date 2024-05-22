import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { Pagination } from './Pagination';

const VALUES: string[] = ['10', '20', '30', '50', '100'];

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
    itemsPerPage: '10',
    totalPages: 7,
  },
  render: ({ currentPage, itemsPerPage, totalPages }) => {
    const [displayValue, setDisplayValue] = useState(currentPage);
    const [itemsPerPageState, setItemsPerPageState] = useState<string>(itemsPerPage);
    const onValueChange = (currentPage: number) => {
      setDisplayValue(currentPage);
    };

    const getItemsPerPage = (count: string) => {
      setItemsPerPageState(count);
    };

    return (
      <>
        <p>currentPage is № {displayValue}</p>
        <p>itemsPerPage:{itemsPerPageState}</p>
        <Pagination
          currentPage={displayValue}
          itemsPerPage={itemsPerPageState}
          onItemsPerPageChange={getItemsPerPage}
          onValueChange={onValueChange}
          totalPages={totalPages}
          values={VALUES}
        />
      </>
    );
  },
};
export const Pagination12: Story = {
  args: {
    currentPage: 1,
    itemsPerPage: '10',
    totalPages: 12,
  },
  render: ({ currentPage, itemsPerPage, totalPages }) => {
    const [displayValue, setDisplayValue] = useState(currentPage);
    const [itemsPerPageState, setItemsPerPageState] = useState(itemsPerPage);
    const onValueChange = (currentPage: number) => {
      setDisplayValue(currentPage);
    };

    const getItemsPerPage = (count: string) => {
      setItemsPerPageState(count);
    };

    return (
      <>
        <p>currentPage is № {displayValue}</p>
        <p>itemsPerPage:{itemsPerPageState}</p>
        <Pagination
          currentPage={displayValue}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={getItemsPerPage}
          onValueChange={onValueChange}
          totalPages={totalPages}
          values={VALUES}
        />
      </>
    );
  },
};
