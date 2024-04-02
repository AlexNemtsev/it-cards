import { PaginationButton } from '@/components/ui/Pagination/PagintionButtons/PaginationButton';
import { Typography } from '@/components/ui/Typography';

type Props = {
  currentPage: number;
  onValueChange: (value: number) => void;
  totalPages: number;
};
export const PagintionButtons = (props: Props) => {
  const { currentPage, onValueChange, totalPages, ...restProps } = props;

  let arrayOfButtonsValues: Array<'...' | number>;

  if (totalPages <= 7) {
    arrayOfButtonsValues = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    arrayOfButtonsValues = [1, 2, 3, 4, 5, '...', totalPages];
    if (currentPage > 3 && totalPages - currentPage > 3) {
      arrayOfButtonsValues = [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages,
      ];
    } else {
      if (currentPage > 3) {
        arrayOfButtonsValues = [
          1,
          '...',
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      }
    }
  }

  return (
    <>
      {arrayOfButtonsValues.map((el, index) =>
        el === '...' ? (
          <Typography.Body2 as="div" key={index}>
            {el}
          </Typography.Body2>
        ) : (
          <PaginationButton
            isActive={el == currentPage}
            key={index}
            onValueChange={onValueChange}
            {...restProps}
          >
            {el}
          </PaginationButton>
        )
      )}
    </>
  );
};
