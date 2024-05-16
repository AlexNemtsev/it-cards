import s from './Pagination.module.scss';

import { Select } from '../Select';
import { PagintionButtons } from './PagintionButtons';
import { ArrowButton } from './PagintionButtons/ArrowButton';

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
          values={[
            { id: 1, value: '10' },
            { id: 2, value: '20' },
            { id: 3, value: '30' },
            { id: 4, value: '40' },
            { id: 5, value: '50' },
            { id: 6, value: '60' },
            { id: 7, value: '70' },
            { id: 8, value: '80' },
            { id: 9, value: '90' },
            { id: 10, value: '100' },
          ]}
        />{' '}
        on page
      </>
    </div>
  );
};
