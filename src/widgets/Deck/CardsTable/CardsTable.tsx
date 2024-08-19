import { useParams } from 'react-router-dom';

import { breakpoints } from '@/app/styles/breakpoints';
import { useDeleteCardMutation, useGetCardsQuery } from '@/entities/card/api/cardApi';
import { useGetDeckQuery } from '@/entities/deck/api/deckApi';
import { useMeQuery } from '@/entities/user/api';
import { EditCardModal } from '@/features/EditCardModal';
import { ChevronDownIcon } from '@/shared/assets/icons/ChevronDownIcon';
import { ChevronUpIcon } from '@/shared/assets/icons/ChevronUpIcon';
import { Routes } from '@/shared/constants/routes';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { formatDate } from '@/shared/lib/formatDate';
import { isDateValid } from '@/shared/lib/isDateValid';
import { Pagination } from '@/shared/ui/Pagination';
import { Rating } from '@/shared/ui/Rating';
import { Select } from '@/shared/ui/Select';
import { SelectItem } from '@/shared/ui/Select/SelectItem';
import { Spinner } from '@/shared/ui/Spinner';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/shared/ui/Table';
import { Typography } from '@/shared/ui/Typography';
import { ITEMS_PER_PAGE_VARIANTS, orderVariants } from '@/widgets/Deck/CardsTable/model/constants';
import { DeleteCardButton } from '@/widgets/Deck/DeleteCardButton';

import s from './CardsTable.module.scss';

import { useDeck } from '../lib/useDeck';

export const CardsTable = () => {
  const { [Routes.DECK_ID]: deckId = '' } = useParams();
  const { data: deck } = useGetDeckQuery(deckId);
  const { data: meData } = useMeQuery();

  const [deleteCard] = useDeleteCardMutation();

  const currentUserDeck = meData?.id === deck?.userId;

  const {
    currentPage,
    itemsPerPage,
    onItemsPerPageChange,
    onOrderByChange,
    onPaginationChange,
    orderBy,
    question,
  } = useDeck();

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

  const sortBy = ['Question', 'Answer', 'Last Updated', 'Grade'];

  const onValueChange = (value: string) => {
    switch (value) {
      case 'Question': {
        sortByQuestion();
        break;
      }
      case 'Answer': {
        sortByAnswer();
        break;
      }
      case 'Last Updated': {
        sortByUpdated();
        break;
      }
      case 'Grade': {
        sortByGrade();
        break;
      }
    }
  };

  const isTablet = useMediaQuery(`(max-width: ${breakpoints.tablet})`);

  return (
    <>
      {isError && <div>Error...</div>}
      {isLoading ? (
        <Spinner />
      ) : (
        cards &&
        cards.items.length > 0 && (
          <>
            {isTablet ? (
              <>
                <Select
                  className={s.select}
                  onValueChange={onValueChange}
                  placeholder="no one knows why placeholder is needed here"
                  value="Sort by"
                >
                  {sortBy.map(el => (
                    <SelectItem key={el} value={el}>
                      {el}
                    </SelectItem>
                  ))}
                </Select>

                <div className={s.mobileCards}>
                  {cards.items.map(item => (
                    <div className={s.mobileCard} key={item.id}>
                      <Typography.Subtitle2>Question</Typography.Subtitle2>
                      {item.questionImg && (
                        <img alt="img" className={s.questionImg} src={item.questionImg} />
                      )}
                      <Typography.Body2>{item.question}</Typography.Body2>
                      <div className={s.divider}></div>

                      <Typography.Subtitle2>Answer</Typography.Subtitle2>
                      {item.answerImg && (
                        <img alt="img" className={s.questionImg} src={item.answerImg} />
                      )}
                      <Typography.Body2>{item.answer}</Typography.Body2>
                      <div className={s.divider}></div>

                      <Typography.Subtitle2>Grade</Typography.Subtitle2>
                      <Rating rating={item.grade} />
                      <div className={s.divider}></div>

                      <div className={s.buttons}>
                        <EditCardModal card={item} />
                        <DeleteCardButton
                          onDeleteCard={() => {
                            onDeleteCard(item.id);
                          }}
                        ></DeleteCardButton>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
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
                        <span className={s.arrowContainer}>
                          {setOrderIcon(orderVariants.answer)}
                        </span>
                      </Typography.Subtitle2>
                    </TableHeadCell>
                    <TableHeadCell
                      className={s.clickable}
                      onClick={sortByUpdated}
                      style={{ width: 150 }}
                    >
                      <Typography.Subtitle2>
                        Last Updated
                        <span className={s.arrowContainer}>
                          {setOrderIcon(orderVariants.updated)}
                        </span>
                      </Typography.Subtitle2>
                    </TableHeadCell>
                    <TableHeadCell
                      className={s.clickable}
                      onClick={sortByGrade}
                      style={{ width: 240 }}
                    >
                      <Typography.Subtitle2>
                        Grade
                        <span className={s.arrowContainer}>
                          {setOrderIcon(orderVariants.grade)}
                        </span>
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
                            {currentUserDeck && (
                              <div className={s.buttonsWrapper}>
                                <EditCardModal card={item} />
                                <DeleteCardButton
                                  onDeleteCard={() => {
                                    onDeleteCard(item.id);
                                  }}
                                ></DeleteCardButton>
                              </div>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
            <Pagination
              className={s.pagination}
              currentPage={pagination.currentPage}
              itemsPerPage={pagination.itemsPerPage.toString()}
              itemsPerPageList={ITEMS_PER_PAGE_VARIANTS}
              onItemsPerPageChange={onItemsPerPageChange}
              onValueChange={onPaginationChange}
              totalPages={pagination.totalPages}
            />
          </>
        )
      )}
      {!isLoading && cards?.items.length === 0 && (
        <div>This pack is empty.Add new card to fill this pack</div>
      )}
    </>
  );
};
