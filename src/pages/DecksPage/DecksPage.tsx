import { useGetDecksQuery } from '@/entities/deck/model/api';

import s from './DecksPage.module.scss';

import { Delete } from '../../shared/assets/icons/Delete/Delete';
import { Button } from '../../shared/ui/Button';
import { Input } from '../../shared/ui/Input';
import { Pagination } from '../../shared/ui/Pagination';
import { Slider } from '../../shared/ui/Slider';
import { TabSwitcher } from '../../shared/ui/TabSwitcher';
import { Table } from '../../shared/ui/Table';
import { TableBody } from '../../shared/ui/Table/TableBody';
import { TableCell } from '../../shared/ui/Table/TableCell';
import { TableHead } from '../../shared/ui/Table/TableHead';
import { TableHeadCell } from '../../shared/ui/Table/TableHead/TableHeadCell';
import { TableRow } from '../../shared/ui/Table/TableRow';
import { Typography } from '../../shared/ui/Typography';

// const TabSwitcherStates = {
//   ACTIVE: 'Active',
//   DISABLED: 'Disabled',
//   INACTIVE: 'Inactive',
// };

export const DecksPage = () => {
  const { data, isError, isLoading } = useGetDecksQuery();

  function formatDate(date: string | undefined) {
    if (!date) {
      return '';
    }

    return new Date(date).toLocaleDateString('ru-RU');
  }

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
        <Input containerClassName={s.input} placeholder="Input search" type="search" />
        <TabSwitcher
          className={s.tabs}
          tabOptions={[
            {
              label: 'My Cards',
              value: 'My Cards',
            },
            {
              label: 'All Cards',
              value: 'All Cards',
            },
          ]}
        />
        <Slider defaultValue={[1, 100]} max={100} min={1} wrapperClassName={s.slider} />
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
            {data?.items.map(item => (
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
        currentPage={data!.pagination.currentPage}
        itemsPerPage={data!.pagination.itemsPerPage}
        onValueChange={value => console.log(value)}
        totalPages={data!.pagination.totalPages}
      />
    </section>
  );
};
