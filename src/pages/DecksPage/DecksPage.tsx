import { useState } from 'react';

import { useGetDecksQuery } from '@/entities/deck/model/api';
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

import { useMeQuery } from '../../entities/auth/api/auth';

const TabSwitcherStates = {
  ALL: 'All Cards',
  MY: 'My Cards',
};

export const DecksPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [range, setRange] = useState([0, 10]);
  const [search, setSearch] = useState('');
  const [decksAuthor, setDecksAuthor] = useState('');

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
    maxCardsCount: range[1],
    minCardsCount: range[0],
    name: search,
  });

  function formatDate(date: string | undefined) {
    if (!date) {
      return '';
    }

    return new Date(date).toLocaleDateString('ru-RU');
  }

  const getNumberOfCards = (value: [number, number]) => {
    setRange(value);
  };

  const getDecksAuthor = (value: string) => {
    setDecksAuthor(value);
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
          onClearInput={() => setSearch('')}
          onValueChange={value => setSearch(value)}
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
          defaultValue={[0, 10]}
          max={10}
          min={0}
          onValueChange={getNumberOfCards}
          wrapperClassName={s.slider}
        />
        <Button className={s.button} variant="secondary">
          <Delete />
          Clear Filter
        </Button>
      </div>
      <div className="decks">
        <Table className={s.decks}>
          <TableHead>
            <TableRow>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Cards</TableHeadCell>
              <TableHeadCell>Last Updated</TableHeadCell>
              <TableHeadCell>Created by</TableHeadCell>
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
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={decks!.pagination.itemsPerPage}
        onValueChange={value => setCurrentPage(value)}
        totalPages={decks!.pagination.totalPages}
      />
    </section>
  );
};
