import { useSearchParams } from 'react-router-dom';

import { useMeQuery } from '@/entities/auth/api/auth';
import { useGetDecksQuery, useGetMinMaxCardsQuery } from '@/entities/deck/api/api';
import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Pagination } from '@/shared/ui/Pagination';
import { Slider } from '@/shared/ui/Slider';
import { TabSwitcher } from '@/shared/ui/TabSwitcher';
import { Typography } from '@/shared/ui/Typography';

import s from './DecksPage.module.scss';

import { Modal } from '../../shared/ui/Modal';
import { DecksTable } from '../../widgets/decks/DecksTable';
import { NewDeckForm } from './NewDeckForm';
import { NewDeckTitle } from './ui/NewDeckTitle';
import { OpenNewDeckModalButton } from './ui/OpenNewDeckModalButton';

const VALUES = ['10', '20', '30', '50', '100'];

const TabSwitcherStates = {
  ALL: 'All Cards',
  MY: 'My Cards',
};

export const DecksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = `${searchParams.get('key') || 'updated'}-${searchParams.get('direction') || 'asc'}`;
  const currentPage = Number(searchParams.get('currentPage')) || 1;
  const search = searchParams.get('search') || '';
  const decksAuthor = searchParams.get('decksAuthor') || TabSwitcherStates.ALL;
  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 10;

  const { data: minMaxCards } = useGetMinMaxCardsQuery();

  const minCards = minMaxCards?.min;
  const maxCards = minMaxCards?.max;

  const rangeSelect = searchParams.get('range')?.split(',').map(Number);

  const range: [number, number] = [
    rangeSelect?.[0] || minCards || 0,
    rangeSelect?.[1] || maxCards || 0,
  ];

  const { data: me } = useMeQuery();

  const currentUserId = me?.id;
  const authorId = decksAuthor === TabSwitcherStates.MY ? currentUserId : undefined;

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

  if (isError) {
    return <div>Error...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={s.section}>
      <div className={s.header}>
        <Typography.H1>Decks List</Typography.H1>
        <Modal title={<NewDeckTitle />} trigger={<OpenNewDeckModalButton />}>
          <NewDeckForm onSubmit={data => alert(data)} />
        </Modal>
      </div>
      <div className={s.filters}>
        <Input
          containerClassName={s.input}
          onClearInput={clearValueSearch}
          onValueChange={getValueSearch}
          placeholder="Input search"
          type="search"
          value={search}
        />
        <TabSwitcher
          className={s.tabs}
          defaultValue={TabSwitcherStates.ALL}
          onValueChange={getDecksAuthor}
          tabOptions={[
            {
              label: TabSwitcherStates.MY,
              value: TabSwitcherStates.MY,
            },
            {
              label: TabSwitcherStates.ALL,
              value: TabSwitcherStates.ALL,
            },
          ]}
        />
        <Slider
          max={maxCards}
          min={minCards}
          onValueChange={getNumberOfCards}
          value={range}
          wrapperClassName={s.slider}
        />
        <Button className={s.button} onClick={clearFilters} variant="secondary">
          <Delete />
          Clear Filter
        </Button>
      </div>
      <div className="decks">
        {decks?.items.length ? (
          <>
            <DecksTable decks={decks} getSortedLastedUpdated={getSortedLastedUpdated} sort={sort} />
            <Pagination
              currentPage={currentPage || 1}
              itemsPerPage={String(itemsPerPage) || '10'}
              itemsPerPageList={VALUES}
              onItemsPerPageChange={getItemsPerPage}
              onValueChange={getCurrentPage}
              totalPages={decks?.pagination.totalPages || 1}
            />
          </>
        ) : (
          <div>Empty</div>
        )}
      </div>
    </section>
  );
};
