import { useSearchParams } from 'react-router-dom';

export const useDeckPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const question = searchParams.get('question') || '';
  const currentPage = Number(searchParams.get('currentPage')) || 1;
  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 10;
  const orderBy = searchParams.get('orderBy') || 'updated-desc';

  const utilSetSearchParams = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  const changeSearchValue = (value: string) => {
    utilSetSearchParams('question', value);
    utilSetSearchParams('currentPage', '1');
  };

  const onInputClear = () => {
    utilSetSearchParams('question', '');
    utilSetSearchParams('currentPage', '1');
  };

  const onPaginationChange = (value: number) => {
    utilSetSearchParams('currentPage', value.toString());
  };

  const onItemsPerPageChange = (value: string) => {
    utilSetSearchParams('itemsPerPage', value);
    utilSetSearchParams('currentPage', '1');
  };

  const onOrderByChange = (orderBy: string) => {
    utilSetSearchParams('orderBy', orderBy);
  };

  return {
    changeSearchValue,
    currentPage,
    itemsPerPage,
    onInputClear,
    onItemsPerPageChange,
    onOrderByChange,
    onPaginationChange,
    orderBy,
    question,
    setSearchParams,
  };
};
