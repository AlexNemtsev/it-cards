import { ComponentPropsWithoutRef } from 'react';

import { PaginationButton } from '@/components/ui/Pagination/PagintionButtons/PaginationButton/PaginationButton';

type Props = {
  currentPage: number;
  setLocalCurrentPage: (value: number) => void;
  totalPages: number;
} & ComponentPropsWithoutRef<React.FC>;

export const PagintionButtons = (props: Props) => {
  const { currentPage, setLocalCurrentPage, totalPages, ...restProps } = props;

  const arrayOfButtonsValues = [1, 2, 3, 4, 5, 6, totalPages];

  return (
    <>
      {arrayOfButtonsValues.map((el, index) => (
        <PaginationButton
          isActive={el == currentPage}
          key={index}
          setLocalCurrentPage={setLocalCurrentPage}
          {...restProps}
        >
          {el}
        </PaginationButton>
      ))}
    </>
  );
};
