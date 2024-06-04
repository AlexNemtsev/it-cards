import { useSearchParams } from 'react-router-dom';

import { useMeQuery } from '@/entities/auth/api/auth';
import { useGetDecksQuery, useGetMinMaxCardsQuery } from '@/entities/deck/api/api';
import { Pagination } from '@/shared/ui/Pagination';
import { Typography } from '@/shared/ui/Typography';
import { DecksFilters } from '@/widgets/decks/DecksFilters';
import { DecksModal } from '@/widgets/decks/DecksModal';
import { DecksTable } from '@/widgets/decks/DecksTable';

import s from './DecksPage.module.scss';

const VARIANTS_ITEMS_PER_PAGE = ['10', '20', '30', '50', '100'];

export type TabSwitcherStatesType = {
  [key: string]: string;
};

const tabSwitcherStates: TabSwitcherStatesType = {
  ALL: 'All Cards',
  MY: 'My Cards',
};

export const DecksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: minMaxCards } = useGetMinMaxCardsQuery();
  const { data: me } = useMeQuery();

  const sort = `${searchParams.get('key') || 'updated'}-${searchParams.get('direction') || 'asc'}`;
  const currentPage = Number(searchParams.get('currentPage')) || 1;
  const search = searchParams.get('search') || '';
  const decksAuthor = searchParams.get('decksAuthor') || tabSwitcherStates.ALL;
  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 10;

  const minCards = minMaxCards?.min;
  const maxCards = minMaxCards?.max;

  const rangeSelect = searchParams.get('range')?.split(',').map(Number);

  const range: [number, number] = [
    rangeSelect?.[0] || minCards || 0,
    rangeSelect?.[1] || maxCards || 0,
  ];

  const currentUserId = me?.id;
  const authorId = decksAuthor === tabSwitcherStates.MY ? currentUserId : undefined;

  const {
    data: decks,
    isError,
    isLoading,
  } = useGetDecksQuery({
    authorId,
    currentPage,
    itemsPerPage,
    maxCardsCount: range[1],
    minCardsCount: range[0],
    name: search,
    orderBy: sort,
  });

  const clearFilters = () => {
    setSearchParams({});
  };

  const getValueSearch = (value: string) => {
    searchParams.set('search', value);
    setSearchParams(searchParams);
    if (!value) {
      searchParams.delete('search');
      setSearchParams(searchParams);
    }
  };

  const clearValueSearch = () => {
    searchParams.delete('search');
    setSearchParams(searchParams);
  };

  const getNumberOfCards = (value: [number, number]) => {
    searchParams.set('range', value.toString());
    setSearchParams(searchParams);
  };

  const getDecksAuthor = (value: string) => {
    searchParams.set('decksAuthor', value);
    setSearchParams(searchParams);
  };

  const getSortedLastedUpdated = () => {
    searchParams.set('direction', searchParams.get('direction') === 'desc' ? 'asc' : 'desc');
    setSearchParams(searchParams);
  };

  const getCurrentPage = (value: number) => {
    if (!value) {
      searchParams.delete('currentPage');
      setSearchParams(searchParams);
    }
    searchParams.set('currentPage', String(value));
    setSearchParams(searchParams);
  };

  const getItemsPerPage = (count: string) => {
    searchParams.set('itemsPerPage', count);
    setSearchParams(searchParams);
  };

  return (
    <section className={s.section}>
      <div className={s.header}>
        <Typography.H1>Decks List</Typography.H1>
        <DecksModal />
      </div>
      <DecksFilters
        clearFilters={clearFilters}
        clearValueSearch={clearValueSearch}
        getDecksAuthor={getDecksAuthor}
        getNumberOfCards={getNumberOfCards}
        getValueSearch={getValueSearch}
        maxCards={maxCards}
        minCards={minCards}
        range={range}
        tabSwitcherStates={tabSwitcherStates}
      />
      <div className="decks">
        {isError && <div>Error...</div>}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          decks &&
          decks.items.length > 0 && (
            <>
              <DecksTable
                decks={decks}
                getSortedLastedUpdated={getSortedLastedUpdated}
                sort={sort}
              />
              <Pagination
                currentPage={currentPage || 1}
                itemsPerPage={String(itemsPerPage) || '10'}
                itemsPerPageList={VARIANTS_ITEMS_PER_PAGE}
                onItemsPerPageChange={getItemsPerPage}
                onValueChange={getCurrentPage}
                totalPages={decks?.pagination.totalPages || 1}
              />
            </>
          )
        )}
        {!isLoading && decks?.items.length === 0 && <div>Empty</div>}
      </div>
    </section>
  );
};
