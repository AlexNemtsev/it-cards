import { useGetMinMaxCardsQuery } from '@/entities/deck/api/api';
import { useMeQuery } from '@/entities/user/api';
import { Typography } from '@/shared/ui/Typography';
import { AddNewDeckModal } from '@/widgets/decks/AddNewDeckModal';
import { DecksFilters } from '@/widgets/decks/DecksFilters';
import { DecksTable } from '@/widgets/decks/DecksTable';

import s from './DecksPage.module.scss';

import { useDecksSearchParams } from './useDecksSearchParams';

const VARIANTS_ITEMS_PER_PAGE = ['10', '20', '30', '50', '100'];

export type TabSwitcherStatesType = {
  [key: string]: string;
};

const tabSwitcherStates: TabSwitcherStatesType = {
  ALL: 'All Cards',
  MY: 'My Cards',
};

export const DecksPage = () => {
  const { data: minMaxCards } = useGetMinMaxCardsQuery();
  const { data: me } = useMeQuery();
  const {
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
    orderDecksBy,
    searchByName,
  } = useDecksSearchParams();

  const minCards = minMaxCards?.min;
  const maxCards = minMaxCards?.max;

  const range: [number, number] = [
    decksNumberRange?.[0] || minCards || 0,
    decksNumberRange?.[1] || maxCards || 0,
  ];

  const currentUserId = me?.id;
  const authorId = decksAuthor === tabSwitcherStates.MY ? currentUserId : undefined;

  return (
    <section className={s.section}>
      <div className={s.header}>
        <Typography.H1>Decks List</Typography.H1>
        <AddNewDeckModal />
      </div>
      <DecksFilters
        clearFilters={clearFilters}
        clearValueSearch={clearSearchByName}
        decksAuthor={decksAuthor}
        getDecksAuthor={getDecksAuthor}
        getNumberOfCards={getDecksNumberRange}
        getValueSearch={getSearchByName}
        maxCards={maxCards}
        minCards={minCards}
        range={range}
        searchByName={searchByName}
        tabSwitcherStates={tabSwitcherStates}
      />
      <div className="decks">
        <DecksTable
          authorId={authorId}
          currentPage={currentPage || 1}
          getOrderDecksBy={getOrderDecksBy}
          itemsPerPageList={VARIANTS_ITEMS_PER_PAGE}
          onItemsPerPageChange={getItemsPerPage}
          onValueChange={getCurrentPage}
          range={range}
          sort={orderDecksBy}
          totalPages={0}
        />
      </div>
    </section>
  );
};
