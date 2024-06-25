import { Link } from 'react-router-dom';

import { useGetDecksQuery } from '@/entities/deck/api/api';
import { useMeQuery } from '@/entities/user/api';
import {
  VARIANTS_ITEMS_PER_PAGE,
  orderVariants,
  tabSwitcherStates,
} from '@/pages/DecksPage/consts';
import { useDecksSearchParams } from '@/pages/DecksPage/useDecksSearchParams';
import { ChevronDownIcon } from '@/shared/assets/icons/ChevronDownIcon';
import { ChevronUpIcon } from '@/shared/assets/icons/ChevronUpIcon';
import { Routes } from '@/shared/constants/routes';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { formatDate } from '@/shared/lib/formatDate';
import { isDateValid } from '@/shared/lib/isDateValid';
import { Pagination } from '@/shared/ui/Pagination';
import { Spinner } from '@/shared/ui/Spinner';
import { Table } from '@/shared/ui/Table';
import { TableBody } from '@/shared/ui/Table/TableBody';
import { TableCell } from '@/shared/ui/Table/TableCell';
import { TableHead } from '@/shared/ui/Table/TableHead';
import { TableHeadCell } from '@/shared/ui/Table/TableHead/TableHeadCell';
import { TableRow } from '@/shared/ui/Table/TableRow';

import s from './DecksTable.module.scss';

type Props = {
  maxCards?: number;
  minCards?: number;
};

export const DecksTable = (props: Props) => {
  const { maxCards, minCards } = props;

  const { data: me } = useMeQuery();

  const {
    currentPage,
    decksAuthor,
    decksNumberRange,
    getCurrentPage,
    getItemsPerPage,
    getOrderDecksBy,
    itemsPerPage,
    orderDecksBy,
    searchByName,
  } = useDecksSearchParams();

  const currentUserId = me?.id;
  const authorId = decksAuthor === tabSwitcherStates.MY ? currentUserId : undefined;

  const range: [number, number] = [
    decksNumberRange?.[0] || minCards || 0,
    decksNumberRange?.[1] || maxCards || 0,
  ];

  const {
    data: decks,
    isError,
    isLoading,
  } = useGetDecksQuery({
    authorId,
    currentPage,
    itemsPerPage,
    maxCardsCount: useDebounce(range[1], 800),
    minCardsCount: useDebounce(range[0], 800),
    name: useDebounce(searchByName, 800),
    orderBy: orderDecksBy,
  });

  const setOrderIcon = (value: string) => {
    return orderDecksBy === `${value}-asc` ? <ChevronDownIcon /> : <ChevronUpIcon />;
  };

  const sortByName = () => {
    getOrderDecksBy(orderVariants.name);
  };

  const sortByCardsCount = () => {
    getOrderDecksBy(orderVariants.cardsCount);
  };

  const sortByUpdated = () => {
    getOrderDecksBy(orderVariants.updated);
  };

  const sortByCreated = () => {
    getOrderDecksBy(orderVariants.created);
  };

  return (
    <>
      {isError && <div>Error...</div>}
      {isLoading ? (
        <Spinner />
      ) : (
        decks &&
        decks.items.length > 0 && (
          <div className="decks">
            <Table className={s.decks}>
              <TableHead>
                <TableRow>
                  <TableHeadCell onClick={sortByName}>
                    Name {setOrderIcon(orderVariants.name)}
                  </TableHeadCell>
                  <TableHeadCell onClick={sortByCardsCount}>
                    Cards {setOrderIcon(orderVariants.cardsCount)}
                  </TableHeadCell>
                  <TableHeadCell onClick={sortByUpdated}>
                    Last Updated {setOrderIcon(orderVariants.updated)}
                  </TableHeadCell>
                  <TableHeadCell onClick={sortByCreated}>
                    Created by {setOrderIcon(orderVariants.created)}
                  </TableHeadCell>
                  <TableHeadCell></TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {decks.items.map(item => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Link className={s.linkToDeck} to={`${Routes.DECKS}/${item.id}`}>
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
            <Pagination
              currentPage={currentPage || 1}
              itemsPerPage={String(itemsPerPage) || '10'}
              itemsPerPageList={VARIANTS_ITEMS_PER_PAGE}
              onItemsPerPageChange={getItemsPerPage}
              onValueChange={getCurrentPage}
              totalPages={decks.pagination.totalPages}
            />
            {!isLoading && decks?.items.length === 0 && <div>Empty</div>}
          </div>
        )
      )}
    </>
  );
};
