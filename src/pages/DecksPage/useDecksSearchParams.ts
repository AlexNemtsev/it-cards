import { useSearchParams } from 'react-router-dom';

export type TabSwitcherStatesType = {
  [key: string]: string;
};

const tabSwitcherStates: TabSwitcherStatesType = {
  ALL: 'All Cards',
  MY: 'My Cards',
};

export const useDecksSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const utilSetSearchParams = (key: string, value: string) => {
    if (value === '' || value === null || value === undefined) {
      searchParams.delete(key);
      setSearchParams(searchParams);
    } else {
      searchParams.set(key, value);
      setSearchParams(searchParams);
      if (key !== 'currentPage') {
        searchParams.set('currentPage', '1');
        setSearchParams(searchParams);
      }
    }
  };

  const currentPage = Number(searchParams.get('currentPage')) || 1;

  const getCurrentPage = (value: number) => {
    utilSetSearchParams('currentPage', value.toString());
  };

  const searchByName = searchParams.get('search') || '';

  const getSearchByName = (value: string) => {
    utilSetSearchParams('search', value);
  };

  const clearSearchByName = () => {
    searchParams.delete('search');
    setSearchParams(searchParams);
  };

  const decksAuthor = searchParams.get('decksAuthor') || tabSwitcherStates.ALL;

  const getDecksAuthor = (value: string) => {
    utilSetSearchParams('decksAuthor', value);
  };

  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 10;

  const getItemsPerPage = (value: string) => {
    utilSetSearchParams('itemsPerPage', value);
  };

  const decksNumberRange = searchParams.get('decksNumberRange')?.split(',').map(Number);

  const getDecksNumberRange = (value: [number, number]) => {
    utilSetSearchParams('decksNumberRange', value.toString());
  };

  const orderDecksBy = `${searchParams.get('key') || 'updated'}-${
    searchParams.get('direction') || 'asc'
  }`;

  const getOrderDecksBy = () => {
    searchParams.set('direction', searchParams.get('direction') === 'desc' ? 'asc' : 'desc');
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  // const changeSearchValue = (value: string) => {
  //   utilSetSearchParams('question', value);
  //   utilSetSearchParams('currentPage', '1');
  // };

  // const onInputClear = () => {
  //   utilSetSearchParams('question', '');
  //   utilSetSearchParams('currentPage', '1');
  // };

  // const onItemsPerPageChange = (value: string) => {
  //   utilSetSearchParams('itemsPerPage', value);
  //   utilSetSearchParams('currentPage', '1');
  // };

  // const onOrderByChange = (orderBy: string) => {
  //   utilSetSearchParams('orderBy', orderBy);
  // };

  return {
    clearFilters,
    clearSearchByName,
    currentPage,
    decksAuthor,
    decksNumberRange,
    getCurrentPage,
    getDecksAuthor,
    getDecksNumberRange,
    getItemsPerPage,
    getOrderDecksBy,
    getSearchByName,
    itemsPerPage,
    orderDecksBy,
    searchByName,
    // changeSearchValue,
    // itemsPerPage,
    // onInputClear,
    // onItemsPerPageChange,
    // onOrderByChange,
    // orderBy,
    // question,
    // setSearchParams,
  };
};
