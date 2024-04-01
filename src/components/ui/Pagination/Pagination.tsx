import { Select } from '@/components/ui/Select';
import { Typography } from '@/components/ui/Typography';

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

      <Typography.Body2>Показать</Typography.Body2>

      <Select
        isSmall
        label="label"
        placeholder="10"
        values={[
          { id: 1, value: '10' },
          { id: 2, value: '20' },
          { id: 3, value: '30' },
          { id: 4, value: '40' },
          { id: 5, value: '50' },
        ]}
      />
      <Typography.Body2>на странице</Typography.Body2>
    </div>
  );
};
