import { Link } from 'react-router-dom';

import { useGetDecksQuery, useGetMinMaxCardsQuery } from '@/entities/deck/api/deckApi';
import { useMeQuery } from '@/entities/user/api';
import { useDecksSearchParams } from '@/pages/DecksPage/useDecksSearchParams';
import { ChevronDownIcon } from '@/shared/assets/icons/ChevronDownIcon';
import { ChevronUpIcon } from '@/shared/assets/icons/ChevronUpIcon';
import { Routes } from '@/shared/constants/routes';
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
import { Typography } from '@/shared/ui/Typography';
import { tabSwitcherStates } from '@/widgets/decks/DecksFilters/model/constants';
import { DeleteDeckModal } from '@/widgets/decks/DeleteDeckModal';
import { EditDeckModal } from '@/widgets/decks/EditDeckModal';

import s from './DecksTable.module.scss';

import { VARIANTS_ITEMS_PER_PAGE, orderVariants } from './model/constants';

export const DecksTable = () => {
  const { data: minMaxCards } = useGetMinMaxCardsQuery();
  const { data: currentUser } = useMeQuery();

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

  const authorId = decksAuthor === tabSwitcherStates.MY ? currentUser?.id : undefined;

  const range: [number, number] = [
    decksNumberRange?.[0] || minMaxCards?.min || 0,
    decksNumberRange?.[1] || minMaxCards?.max || 0,
  ];

  const {
    data: decks,
    isError,
    isLoading,
  } = useGetDecksQuery(
    {
      authorId,
      currentPage,
      itemsPerPage,
      maxCardsCount: range[1],
      minCardsCount: range[0],
      name: searchByName,
      orderBy: orderDecksBy,
    },
    { skip: !minMaxCards?.max }
  );

  const setOrderIcon = (value: string) => {
    if (orderDecksBy?.split('-')[0] === value) {
      return orderDecksBy === `${value}-asc` ? <ChevronDownIcon /> : <ChevronUpIcon />;
    }
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
                  <TableHeadCell className={s.head} onClick={sortByName}>
                    <span className={s.headName}>Name</span> {setOrderIcon(orderVariants.name)}
                  </TableHeadCell>
                  <TableHeadCell className={s.head} onClick={sortByCardsCount}>
                    <span className={s.headName}>Cards</span>{' '}
                    {setOrderIcon(orderVariants.cardsCount)}
                  </TableHeadCell>
                  <TableHeadCell className={s.head} onClick={sortByUpdated}>
                    <span className={s.headName}>Last Updated</span>{' '}
                    {setOrderIcon(orderVariants.updated)}
                  </TableHeadCell>
                  <TableHeadCell className={s.head} onClick={sortByCreated}>
                    <span className={s.headName}>Created by</span>{' '}
                    {setOrderIcon(orderVariants.created)}
                  </TableHeadCell>
                  <TableHeadCell className={s.head}></TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {decks.items.map(item => (
                  <TableRow key={item.id}>
                    <TableCell className={s.tableCell}>
                      <Link className={s.linkToDeck} to={`${Routes.DECKS}/${item.id}`}>
                        {item.cover && <img alt="cover" className={s.cover} src={item.cover} />}
                        <Typography.Body2 className={s.name}>{item.name}</Typography.Body2>
                      </Link>
                    </TableCell>
                    <TableCell className={s.tableCell}>{item.cardsCount}</TableCell>
                    <TableCell className={s.tableCell}>
                      {isDateValid(item.updated) && formatDate(item.updated)}
                    </TableCell>
                    <TableCell className={s.tableCell}>
                      {isDateValid(item.created) && formatDate(item.created)}
                    </TableCell>
                    <TableCell className={s.tableCell}>
                      {authorId && (
                        <>
                          <DeleteDeckModal id={item.id} />
                          <EditDeckModal
                            cover={item.cover}
                            id={item.id}
                            isPrivate={item.isPrivate}
                            name={item.name}
                          />
                        </>
                      )}
                    </TableCell>
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
              totalPages={decks.pagination.totalPages || 1}
            />
          </div>
        )
      )}
      {!isLoading && decks?.items.length === 0 && <div>Empty</div>}
    </>
  );
};
