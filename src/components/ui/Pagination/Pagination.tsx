import { ComponentPropsWithoutRef } from 'react';

import { ArrowButton } from '@/components/ui/Pagination/PagintionButtons/ArrowButton';
import { PagintionButtons } from '@/components/ui/Pagination/PagintionButtons/PagintionButtons';
import { Select } from '@/components/ui/Select';

import s from './Pagination.module.scss';

type Props = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
} & ComponentPropsWithoutRef<'div'>;

export const Pagination = (props: Props) => {
  const { currentPage, itemsPerPage, totalItems, totalPages } = props;

  const beforeCurrentPage = currentPage > 1 ? currentPage - 1 : null;

  return (
    <div className={s.pagination}>
      <ArrowButton disabled={currentPage == 1} isPrev />
      <PagintionButtons currentPage={currentPage} totalPages={totalPages} />
      <ArrowButton disabled={currentPage >= totalPages - 1} />
      <Select
        ariaLabel="SelectBox"
        labelValue=""
        placeholder="15"
        selectItemValues={[
          { id: 1, value: '5' },
          { id: 2, value: '7' },
          { id: 2, value: '10' },
          { id: 2, value: '15' },
        ]}
      />
    </div>
  );
};
