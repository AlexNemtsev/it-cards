import { ComponentPropsWithoutRef, useState } from 'react';

import { ArrowButton } from '@/components/ui/Pagination/PagintionButtons/ArrowButton';
import { PagintionButtons } from '@/components/ui/Pagination/PagintionButtons/PagintionButtons';

import s from './Pagination.module.scss';

type Props = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
} & ComponentPropsWithoutRef<'div'>;

export const Pagination = (props: Props) => {
  const { currentPage, itemsPerPage, totalItems, totalPages, ...restProps } = props;
  const [localCurrentPage, setLocalCurrentPage] = useState(currentPage);

  const toPrevPageHandler = () => {
    setLocalCurrentPage(p => p - 1);
  };
  const toNextPageHandler = () => {
    setLocalCurrentPage(p => p + 1);
  };
  // const beforeCurrentPage = localCurrentPage > 1 ? localCurrentPage - 1 : null;

  return (
    <div className={s.pagination}>
      <ArrowButton disabled={localCurrentPage == 1} isPrev onClick={toPrevPageHandler} />
      <PagintionButtons
        {...restProps}
        currentPage={localCurrentPage}
        setLocalCurrentPage={setLocalCurrentPage}
        totalPages={totalPages}
      />
      <ArrowButton disabled={localCurrentPage >= totalPages} onClick={toNextPageHandler} />
      {/*<Select*/}
      {/*  ariaLabel="SelectBox"*/}
      {/*  labelValue=""*/}
      {/*  placeholder="15"*/}
      {/*  selectItemValues={[*/}
      {/*    { id: 1, value: '5' },*/}
      {/*    { id: 2, value: '7' },*/}
      {/*    { id: 3, value: '10' },*/}
      {/*    { id: 4, value: '15' },*/}
      {/*  ]}*/}
      {/*/>*/}
    </div>
  );
};
