import { useParams } from 'react-router-dom';

import { useDeleteCardMutation, useGetCardsQuery } from '@/entities/card/api/cardApi';
import { useGetDeckQuery } from '@/entities/deck/api/deckApi';
import { useMeQuery } from '@/entities/user/api';
import { EditCardModal } from '@/features/EditCardModal';
import { useDeckPage } from '@/pages/DeckPage/useDeckPage';
import { ChevronDownIcon } from '@/shared/assets/icons/ChevronDownIcon';
import { ChevronUpIcon } from '@/shared/assets/icons/ChevronUpIcon';
import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { Routes } from '@/shared/constants/routes';
import { formatDate } from '@/shared/lib/formatDate';
import { isDateValid } from '@/shared/lib/isDateValid';
import { Pagination } from '@/shared/ui/Pagination';
import { Rating } from '@/shared/ui/Rating';
import { Spinner } from '@/shared/ui/Spinner';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/shared/ui/Table';
import { Typography } from '@/shared/ui/Typography';
import { VARIANTS_ITEMS_PER_PAGE, orderVariants } from '@/widgets/Deck/CardsTable/model/constants';

import s from './CardsTable.module.scss';

export const CardsTable = () => {
  const { [Routes.DECK_ID]: deckId = '' } = useParams();
  const { data: deck } = useGetDeckQuery(deckId);
  const { data: meData } = useMeQuery();

  const [deleteCard] = useDeleteCardMutation();

  const isYourDeck = meData?.id === deck?.userId;

  const {
    currentPage,
    itemsPerPage,
    onItemsPerPageChange,
    onOrderByChange,
    onPaginationChange,
    orderBy,
    question,
  } = useDeckPage();

  const {
    data: cards,
    isError,
    isLoading,
  } = useGetCardsQuery({
    currentPage,
    deckId,
    itemsPerPage,
    orderBy,
    question,
  });

  const pagination = cards?.pagination ?? {
    currentPage,
    itemsPerPage,
    totalPages: 1,
  };

  const setOrderIcon = (value: string) => {
    if (orderBy?.split('-')[0] === value) {
      return orderBy === `${value}-asc` ? <ChevronDownIcon /> : <ChevronUpIcon />;
    }
  };

  const sortByQuestion = () => {
    onOrderByChange(orderVariants.question);
  };

  const sortByAnswer = () => {
    onOrderByChange(orderVariants.answer);
  };

  const sortByUpdated = () => {
    onOrderByChange(orderVariants.updated);
  };

  const sortByGrade = () => {
    onOrderByChange(orderVariants.grade);
  };

  const onDeleteCard = (id: string) => {
    deleteCard(id);
  };

  return (
    <>
      {isError && <div>Error...</div>}
      {isLoading ? (
        <Spinner />
      ) : (
        cards &&
        cards.items.length > 0 && (
          <>
            <Table className={s.table}>
              <TableHead>
                <TableRow>
                  <TableHeadCell className={s.clickable} onClick={sortByQuestion}>
                    <Typography.Subtitle2>
                      Question
                      <span className={s.arrowContainer}>
                        {setOrderIcon(orderVariants.question)}
                      </span>
                    </Typography.Subtitle2>
                  </TableHeadCell>
                  <TableHeadCell className={s.clickable} onClick={sortByAnswer}>
                    <Typography.Subtitle2>
                      Answer
                      <span className={s.arrowContainer}>{setOrderIcon(orderVariants.answer)}</span>
                    </Typography.Subtitle2>
                  </TableHeadCell>
                  <TableHeadCell className={s.clickable} onClick={sortByUpdated}>
                    <Typography.Subtitle2>
                      Last Updated
                      <span className={s.arrowContainer}>
                        {setOrderIcon(orderVariants.updated)}
                      </span>
                    </Typography.Subtitle2>
                  </TableHeadCell>
                  <TableHeadCell className={s.clickable} onClick={sortByGrade}>
                    <Typography.Subtitle2>
                      Grade
                      <span className={s.arrowContainer}>{setOrderIcon(orderVariants.grade)}</span>
                    </Typography.Subtitle2>
                  </TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cards.items.map(item => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className={s.questionCell}>
                          {item.questionImg && (
                            <img alt="img" className={s.questionImg} src={item.questionImg} />
                          )}
                          <Typography.Body2>{item.question}</Typography.Body2>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className={s.questionCell}>
                          {item.answerImg && (
                            <img alt="img" className={s.questionImg} src={item.answerImg} />
                          )}
                          <Typography.Body2>{item.answer}</Typography.Body2>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Typography.Body2>
                          {isDateValid(item.updated) && formatDate(item.updated)}
                        </Typography.Body2>
                      </TableCell>
                      <TableCell>
                        <div className={s.gradeCell}>
                          <Rating rating={item.grade} />
                          {isYourDeck && (
                            <div className={s.buttonsWrapper}>
                              <EditCardModal card={item} />
                              <button
                                className={s.cardButton}
                                onClick={() => {
                                  onDeleteCard(item.id);
                                }}
                              >
                                <Delete />
                              </button>
                            </div>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <Pagination
              className={s.pagination}
              currentPage={pagination.currentPage}
              itemsPerPage={pagination.itemsPerPage.toString()}
              itemsPerPageList={VARIANTS_ITEMS_PER_PAGE}
              onItemsPerPageChange={onItemsPerPageChange}
              onValueChange={onPaginationChange}
              totalPages={pagination.totalPages}
            />
          </>
        )
      )}
      {!isLoading && cards?.items.length === 0 && <div>Empty</div>}
    </>
  );
};
