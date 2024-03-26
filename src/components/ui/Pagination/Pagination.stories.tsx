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

export const Pagination305: Story = {
  args: {
    currentPage: 1,
    itemsPerPage: 15,
    totalItems: 305,
    totalPages: 7,
  },

  render: ({ currentPage, itemsPerPage, totalItems, totalPages }) => {
    const [displayValue, setDisplayValue] = useState(currentPage);

    const onChangeHandler = () => {
      // setDisplayValue(value);
      console.log(123);
    };

    return (
      <>
        <p>{currentPage}</p>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          // onClick={onChangeHandler}
          totalItems={totalItems}
          totalPages={totalPages}
        />
      </>
    );
  },
};

// export const Pagination7: Story = {
//   args: {
//     currentPage: 1,
//     itemsPerPage: 5,
//     totalItems: 7,
//     totalPages: 2,
//   },
// };
