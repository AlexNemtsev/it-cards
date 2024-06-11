import { Link } from 'react-router-dom';

import { getDecksResponse } from '@/entities/deck/api/types';
import { ChevronDownIcon } from '@/shared/assets/icons/ChevronDownIcon';
import { ChevronUpIcon } from '@/shared/assets/icons/ChevronUpIcon';
import { Routes } from '@/shared/constants/routes';
import { formatDate } from '@/shared/lib/formatDate';
import { isDateValid } from '@/shared/lib/isDateValid';
import { Table } from '@/shared/ui/Table';
import { TableBody } from '@/shared/ui/Table/TableBody';
import { TableCell } from '@/shared/ui/Table/TableCell';
import { TableHead } from '@/shared/ui/Table/TableHead';
import { TableHeadCell } from '@/shared/ui/Table/TableHead/TableHeadCell';
import { TableRow } from '@/shared/ui/Table/TableRow';

import s from './DecksTable.module.scss';

type Props = {
  decks: getDecksResponse;
  getSortedLastedUpdated: () => void;
  sort: string;
};

export const DecksTable = (props: Props) => {
  const { decks, getSortedLastedUpdated, sort } = props;

  return (
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
        {decks.items.map(item => (
          <TableRow key={item.id}>
            <TableCell>
              <Link className={s.linkToDeck} to={`${Routes.DECKS}/${item.id}`}>
                {' '}
                {item.name}
              </Link>
            </TableCell>
            <TableCell>{item.cardsCount}</TableCell>
            <TableCell>{isDateValid(item.updated) && formatDate(item.updated)}</TableCell>
            <TableCell>{isDateValid(item.created) && formatDate(item.created)}</TableCell>
            <TableCell>tools</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
