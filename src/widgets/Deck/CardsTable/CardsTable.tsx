import { useParams } from 'react-router-dom';

import { useDeleteCardMutation, useGetCardsQuery } from '@/entities/card/api/cardApi';
import { useGetDeckQuery } from '@/entities/deck/api/deckApi';
import { useMeQuery } from '@/entities/user/api';
import { ChevronDownIcon } from '@/shared/assets/icons/ChevronDownIcon';
import { ChevronUpIcon } from '@/shared/assets/icons/ChevronUpIcon';
import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { Edit } from '@/shared/assets/icons/Edit/Edit';
import { Routes } from '@/shared/constants/routes';
import { Pagination } from '@/shared/ui/Pagination';
import { Rating } from '@/shared/ui/Rating';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/shared/ui/Table';
import { Typography } from '@/shared/ui/Typography';

import s from './CardsTable.module.scss';

type Props = {
  currentPage: number;
  itemsPerPage: number;
  onItemsPerPageChange: (value: string) => void;
  onPaginationChange: (value: number) => void;
  orderBy: string;
  orderByCallBack: (sortBy: string) => void;
  orderByKey: string;
  question: string;
};

export const CardsTable = (props: Props) => {
  const {
    currentPage,
    itemsPerPage,
    onItemsPerPageChange,
    onPaginationChange,
    orderBy,
    orderByCallBack,
    orderByKey,
    question,
  } = props;
  const { [Routes.DECK_ID]: deckId = '' } = useParams();
  const { data: meData } = useMeQuery();
  const { data: deck } = useGetDeckQuery(deckId);

  const [deleteCard] = useDeleteCardMutation();

  const isYourDeck = meData?.id === deck?.userId;
  const isQuestionDesc = orderByKey === 'question-desc';
  const isQuestionAsc = orderByKey === 'question-asc';
  const isAnswerDesc = orderByKey === 'answer-desc';
  const isAnswerAsc = orderByKey === 'answer-asc';
  const isUpdatedDesc = orderByKey === 'updated-desc';
  const isUpdatedAsc = orderByKey === 'updated-asc';
  const isGradeDesc = orderByKey === 'grade-desc';
  const isGradeAsc = orderByKey === 'grade-asc';

  const { data: cards } = useGetCardsQuery({
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

  const sortByQuestion = () => {
    orderByCallBack(orderByKey === 'question-desc' ? 'question-asc' : 'question-desc');
  };

  const sortByAnswer = () => {
    orderByCallBack(orderByKey === 'answer-desc' ? 'answer-asc' : 'answer-desc');
  };

  const sortByUpdated = () => {
    orderByCallBack(isUpdatedDesc ? 'updated-asc' : 'updated-desc');
  };

  const sortByGrade = () => {
    orderByCallBack(orderByKey === 'grade-desc' ? 'grade-asc' : 'grade-desc');
  };

  const onDeleteCard = (id: string) => {
    deleteCard(id);
  };

  return (
    <>
      <Table className={s.table}>
        <TableHead>
          <TableRow>
            <TableHeadCell className={s.clickable} onClick={sortByQuestion}>
              <Typography.Subtitle2>
                Question
                <span className={s.arrowContainer}>
                  {isQuestionDesc && <ChevronDownIcon />}
                  {isQuestionAsc && <ChevronUpIcon />}
                </span>
              </Typography.Subtitle2>
            </TableHeadCell>
            <TableHeadCell className={s.clickable} onClick={sortByAnswer}>
              <Typography.Subtitle2>
                Answer
                <span className={s.arrowContainer}>
                  {isAnswerDesc && <ChevronDownIcon />}
                  {isAnswerAsc && <ChevronUpIcon />}
                </span>
              </Typography.Subtitle2>
            </TableHeadCell>
            <TableHeadCell className={s.clickable} onClick={sortByUpdated}>
              <Typography.Subtitle2>
                Last Updated
                <span className={s.arrowContainer}>
                  {isUpdatedDesc && <ChevronDownIcon />}
                  {isUpdatedAsc && <ChevronUpIcon />}
                </span>
              </Typography.Subtitle2>
            </TableHeadCell>
            <TableHeadCell className={s.clickable} onClick={sortByGrade}>
              <Typography.Subtitle2>
                Grade
                <span className={s.arrowContainer}>
                  {isGradeDesc && <ChevronDownIcon />}
                  {isGradeAsc && <ChevronUpIcon />}
                </span>
              </Typography.Subtitle2>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        {cards?.items && (
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
                      {new Date(item.updated).toLocaleDateString('ru-RU')}
                    </Typography.Body2>
                  </TableCell>
                  <TableCell>
                    <div className={s.gradeCell}>
                      <Rating rating={item.grade} />
                      {isYourDeck && (
                        <div className={s.buttonsWrapper}>
                          <button className={s.cardButton}>
                            <Edit />
                          </button>
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
        )}
      </Table>
      <Pagination
        className={s.pagination}
        currentPage={pagination.currentPage}
        itemsPerPage={pagination.itemsPerPage.toString()}
        itemsPerPageList={['10', '20', '30', '50', '100']}
        onItemsPerPageChange={onItemsPerPageChange}
        onValueChange={onPaginationChange}
        totalPages={pagination.totalPages}
      />
    </>
  );
};
