import { useSearchParams } from 'react-router-dom';

import { useMeQuery } from '@/entities/auth/api/auth';
import { useGetDecksQuery, useGetMinMaxCardsQuery } from '@/entities/deck/api/api';
import { ChevronDownIcon } from '@/shared/assets/icons/ChevronDownIcon';
import { ChevronUpIcon } from '@/shared/assets/icons/ChevronUpIcon';
import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Pagination } from '@/shared/ui/Pagination';
import { Slider } from '@/shared/ui/Slider';
import { TabSwitcher } from '@/shared/ui/TabSwitcher';
import { Table } from '@/shared/ui/Table';
import { TableBody } from '@/shared/ui/Table/TableBody';
import { TableCell } from '@/shared/ui/Table/TableCell';
import { TableHead } from '@/shared/ui/Table/TableHead';
import { TableHeadCell } from '@/shared/ui/Table/TableHead/TableHeadCell';
import { TableRow } from '@/shared/ui/Table/TableRow';
import { Typography } from '@/shared/ui/Typography';

import s from './DecksPage.module.scss';

const TabSwitcherStates = {
  ALL: 'All Cards',
  MY: 'My Cards',
};

function formatDate(date: string | undefined) {
  if (!date) {
    return '';
  }

  return new Date(date).toLocaleDateString('ru-RU');
}

export const DecksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = `${searchParams.get('key') || 'updated'}-${searchParams.get('direction') || 'asc'}`;
  const currentPage = Number(searchParams.get('currentPage')) || 1;
  const search = searchParams.get('search') || '';
  const decksAuthor = searchParams.get('decksAuthor') || TabSwitcherStates.ALL;
  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 10;

  const { data: minMaxCards } = useGetMinMaxCardsQuery();

  const range: [number, number] = searchParams.has('range')
    ? [
        searchParams.get('range')?.split(',').map(Number)[0] || minMaxCards?.min || 0,
        searchParams.get('range')?.split(',').map(Number)[1] || minMaxCards?.max || 0,
      ]
    : [minMaxCards?.min || 0, minMaxCards?.max || 0];

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
        <Button>Add new Deck</Button>
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
          max={minMaxCards?.max}
          min={minMaxCards?.min}
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
            <Table className={s.decks}>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Cards</TableHeadCell>
                  <TableHeadCell className={s.updated} onClick={getSortedLastedUpdated}>
                    Last Updated {sort ? <ChevronDownIcon /> : <ChevronUpIcon />}
                  </TableHeadCell>
                  <TableHeadCell>Created by</TableHeadCell>
                  <TableHeadCell></TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {decks?.items.map(item => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.cardsCount}</TableCell>
                    <TableCell>{formatDate(item.updated)}</TableCell>
                    <TableCell>{formatDate(item.created)}</TableCell>
                    <TableCell>tools</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination
              currentPage={currentPage || 1}
              itemsPerPage={String(itemsPerPage) || '10'}
              itemsPerPageList={['10', '20', '30', '50', '100']}
              onItemsPerPageChange={getItemsPerPage}
              onValueChange={getCurrentPage}
              totalPages={decks?.pagination.totalPages || 1}
            />
          </>
        ) : (
          <div>Пустэча... Шукай ў iншым месце</div>
        )}
      </div>
    </section>
  );
};
