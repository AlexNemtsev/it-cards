import { useState } from 'react';

import s from './Pagination.module.scss';

import { PagintionButtons } from './PagintionButtons';
import { ArrowButton } from './PagintionButtons/ArrowButton';

type Props = {
  currentPage: number;
  itemsPerPage: number;
  onValueChange: (currentPage: number) => void;
  totalPages: number;
};

export const Pagination = (props: Props) => {
  const { currentPage, onValueChange, totalPages } = props;

  const [localCurrentPage, setLocalCurrentPage] = useState(currentPage);

  const toPrevPageHandler = () => {
    onValueChange(currentPage - 1);
    setLocalCurrentPage(localCurrentPage - 1);
  };
  const toNextPageHandler = () => {
    onValueChange(currentPage + 1);
    setLocalCurrentPage(localCurrentPage + 1);
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
    </div>
  );
};
