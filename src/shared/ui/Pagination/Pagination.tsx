import s from './Pagination.module.scss';

import { Select } from '../Select';
import { SelectItem } from '../Select/SelectItem';
import { PagintionButtons } from './PagintionButtons';
import { ArrowButton } from './PagintionButtons/ArrowButton';

type Props = {
  currentPage: number;
  itemsPerPage: string;
  itemsPerPageList: string[];
  onItemsPerPageChange: (count: string) => void;
  onValueChange: (currentPage: number) => void;
  totalPages: number;
};

export const Pagination = (props: Props) => {
  const {
    currentPage,
    itemsPerPage,
    itemsPerPageList,
    onItemsPerPageChange,
    onValueChange,
    totalPages,
  } = props;

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
      show
      <Select onValueChange={onItemsPerPageChange} placeholder={itemsPerPage} value={itemsPerPage}>
        {itemsPerPageList.map(value => (
          <SelectItem key={value} value={value}>
            {value}
          </SelectItem>
        ))}
      </Select>
      on page
    </div>
  );
};
