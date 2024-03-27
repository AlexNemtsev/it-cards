import { ComponentPropsWithoutRef } from 'react';

import { ArrowButton } from '@/components/ui/Pagination/PagintionButtons/ArrowButton';
import { PagintionButtons } from '@/components/ui/Pagination/PagintionButtons/PagintionButtons';

import s from './Pagination.module.scss';

type Props = {
  currentPage: number;
  itemsPerPage: number;
  onValueChange: (currentPage: number) => void;
  totalPages: number;
} & ComponentPropsWithoutRef<'div'>;

export const Pagination = (props: Props) => {
  const { currentPage, onValueChange, totalPages } = props;

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
