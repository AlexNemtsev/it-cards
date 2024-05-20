import s from './Pagination.module.scss';

import { Select } from '../Select';
import { PagintionButtons } from './PagintionButtons';
import { ArrowButton } from './PagintionButtons/ArrowButton';

const COUNTS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const VARIANTS_ITEMS_PER_PAGE = Array.from(COUNTS, value => ({ id: value, value: String(value) }));

type Props = {
  currentPage: number;
  itemsPerPage: number;
  onItemsPerPageChange: (count: string) => void;
  onValueChange: (currentPage: number) => void;
  totalPages: number;
};

export const Pagination = (props: Props) => {
  const { currentPage, itemsPerPage, onItemsPerPageChange, onValueChange, totalPages } = props;

  const toPrevPageHandler = () => {
    onValueChange(currentPage - 1);
  };
  const toNextPageHandler = () => {
    onValueChange(currentPage + 1);
  };

  return (
    <div className={s.pagination}>
      <ArrowButton disabled={currentPage == 1} isPrev onClick={toPrevPageHandler} />
      <PagintionButtons
        currentPage={currentPage}
        onValueChange={onValueChange}
        totalPages={totalPages}
      />
      <ArrowButton disabled={currentPage >= totalPages} onClick={toNextPageHandler} />
      <>
        show
        <Select
          isSmall
          label={itemsPerPage}
          onValueChange={onItemsPerPageChange}
          placeholder={String(itemsPerPage)}
          values={VARIANTS_ITEMS_PER_PAGE}
        />{' '}
        on page
      </>
    </div>
  );
};
