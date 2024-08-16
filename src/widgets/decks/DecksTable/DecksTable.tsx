import { Link } from 'react-router-dom';

import { breakpoints } from '@/app/styles/breakpoints';
import { useGetDecksQuery, useGetMinMaxCardsQuery } from '@/entities/deck/api/deckApi';
import { useMeQuery } from '@/entities/user/api';
import { useDecksSearchParams } from '@/pages/DecksPage/lib/useDecksSearchParams';
import { ChevronDownIcon } from '@/shared/assets/icons/ChevronDownIcon';
import { ChevronUpIcon } from '@/shared/assets/icons/ChevronUpIcon';
import { Routes } from '@/shared/constants/routes';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { formatDate } from '@/shared/lib/formatDate';
import { isDateValid } from '@/shared/lib/isDateValid';
import { Pagination } from '@/shared/ui/Pagination';
import { Select } from '@/shared/ui/Select/Select';
import { SelectItem } from '@/shared/ui/Select/SelectItem/SelectItem';
import { Spinner } from '@/shared/ui/Spinner';
import { Table } from '@/shared/ui/Table';
import { TableBody } from '@/shared/ui/Table/TableBody';
import { TableCell } from '@/shared/ui/Table/TableCell';
import { TableHead } from '@/shared/ui/Table/TableHead';
import { TableHeadCell } from '@/shared/ui/Table/TableHead/TableHeadCell';
import { TableRow } from '@/shared/ui/Table/TableRow';
import { Typography } from '@/shared/ui/Typography';
import { tabSwitcherStates } from '@/widgets/Decks/DecksFilters/model/decksFiltersConstants';
import { DeleteDeckModal } from '@/widgets/Decks/DeleteDeckModal';
import { EditDeckModal } from '@/widgets/Decks/EditDeckModal';

import s from './DecksTable.module.scss';

import { ITEMS_PER_PAGE_VARIANTS, orderVariants } from './model/decksTableConstants';

export const DecksTable = () => {
  const { data: minMaxCards } = useGetMinMaxCardsQuery();
  const { data: currentUser } = useMeQuery();
  const isTablet = useMediaQuery(`(max-width: ${breakpoints.tablet})`);

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
    setSortDecksBy,
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

  const sortBy: { [key: string]: () => void } = {
    cardsCount: () =>
      isTablet
        ? setSortDecksBy(orderVariants.cardsCount)
        : getOrderDecksBy(orderVariants.cardsCount),
    created: () =>
      isTablet ? setSortDecksBy(orderVariants.created) : getOrderDecksBy(orderVariants.created),
    name: () =>
      isTablet ? setSortDecksBy(orderVariants.name) : getOrderDecksBy(orderVariants.name),
    updated: () =>
      isTablet ? setSortDecksBy(orderVariants.updated) : getOrderDecksBy(orderVariants.updated),
  };

  const setOrderDecksBy = (value: string) => {
    sortBy[value?.split('-')[0]]();
  };

  return (
    <>
      {isError && <div>Error...</div>}
      {isLoading ? (
        <Spinner />
      ) : (
        decks &&
        decks.items.length > 0 && (
          <>
            {isTablet ? (
              <>
                <Select
                  className={s.select}
                  onValueChange={setOrderDecksBy}
                  placeholder="Sort by"
                  value={orderDecksBy?.split('-')[0] || undefined}
                >
                  {Object.keys(orderVariants).map(sort => (
                    <SelectItem key={sort} value={sort}>
                      {sort}
                    </SelectItem>
                  ))}
                </Select>
                <div className={s.mobileDecks}>
                  {decks.items.map(item => (
                    <div className={s.mobileDeck} key={item.id}>
                      <Link className={s.mobileLinkToDeck} to={`${Routes.DECKS}/${item.id}`}>
                        <div className={s.row}>
                          <div className={s.name}>
                            {item.cover && <img alt="cover" className={s.cover} src={item.cover} />}
                            <Typography.Body2 className={s.name}>{item.name}</Typography.Body2>
                          </div>
                          <div className={s.packName}>{item.name}</div>
                        </div>
                        <div className={s.row}>
                          <div className={s.cards}>Cards</div>
                          <div className={s.cardsCount}>{item.cardsCount}</div>
                        </div>
                        <div className={s.row}>
                          <div className={s.lastUpdated}>Last Updated</div>
                          <div className={s.lastUpdatedDate}>
                            {isDateValid(item.updated) && formatDate(item.updated)}
                          </div>
                        </div>
                        <div className={s.row}>
                          <div className={s.createdBy}>Created</div>
                          <div className={s.createdByName}>
                            {isDateValid(item.created) && formatDate(item.created)}
                          </div>
                        </div>
                      </Link>
                      {authorId && (
                        <div className={s.mobileDecksTools}>
                          <div className={s.decksTool}>
                            <DeleteDeckModal id={item.id} />
                          </div>
                          <div className={s.decksTool}>
                            <EditDeckModal
                              cover={item.cover}
                              id={item.id}
                              isPrivate={item.isPrivate}
                              name={item.name}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <Pagination
                    currentPage={currentPage || 1}
                    itemsPerPage={String(itemsPerPage) || '10'}
                    itemsPerPageList={ITEMS_PER_PAGE_VARIANTS}
                    onItemsPerPageChange={getItemsPerPage}
                    onValueChange={getCurrentPage}
                    totalPages={decks.pagination.totalPages || 1}
                  />
                </div>
              </>
            ) : (
              <div className="decks">
                <Table className={s.decks}>
                  <TableHead>
                    <TableRow>
                      <TableHeadCell className={s.head} onClick={sortBy.name}>
                        <span className={s.headName}>Name</span> {setOrderIcon(orderVariants.name)}
                      </TableHeadCell>
                      <TableHeadCell className={s.head} onClick={sortBy.cardsCount}>
                        <span className={s.headName}>Cards</span>{' '}
                        {setOrderIcon(orderVariants.cardsCount)}
                      </TableHeadCell>
                      <TableHeadCell className={s.head} onClick={sortBy.updated}>
                        <span className={s.headName}>Last Updated</span>{' '}
                        {setOrderIcon(orderVariants.updated)}
                      </TableHeadCell>
                      <TableHeadCell className={s.head} onClick={sortBy.created}>
                        <span className={s.headName}>Created by</span>{' '}
                        {setOrderIcon(orderVariants.created)}
                      </TableHeadCell>
                      <TableHeadCell className={s.head}></TableHeadCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {decks.items.map(item => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Link className={s.linkToDeck} to={`${Routes.DECKS}/${item.id}`}>
                            {item.cover && <img alt="cover" className={s.cover} src={item.cover} />}
                            <Typography.Body2 className={s.name}>{item.name}</Typography.Body2>
                          </Link>
                        </TableCell>
                        <TableCell>{item.cardsCount}</TableCell>
                        <TableCell>
                          {isDateValid(item.updated) && formatDate(item.updated)}
                        </TableCell>
                        <TableCell>
                          {isDateValid(item.created) && formatDate(item.created)}
                        </TableCell>
                        <TableCell>
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
              </div>
            )}
          </>
        )
      )}
      {!isLoading && decks?.items.length === 0 && <div>Empty</div>}
    </>
  );
};
