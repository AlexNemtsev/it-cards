import { ComponentPropsWithoutRef } from 'react';

import { PaginationButton } from '@/components/ui/Pagination/PagintionButtons/PaginationButton/PaginationButton';

type Props = {
  currentPage: number;
  totalPages: number;
} & ComponentPropsWithoutRef<React.FC>;

export const PagintionButtons = (props: Props) => {
  const { currentPage, totalPages } = props;

  const arrayOfButtonsValues = [1, 2, 3, 4, 5, 6, totalPages];

  return (
    <>
      {arrayOfButtonsValues.map((el, index) => (
        <PaginationButton isActive={el == currentPage} key={index}>
          {el}
        </PaginationButton>
      ))}
    </>
  );
};
