import { useParams } from 'react-router-dom';

import { useMeQuery } from '@/entities/auth/api/auth';
import { PaginatedCardsWithGrade } from '@/entities/card/types';
import { useGetDeckQuery } from '@/entities/deck/api/deckApi';
import { ChevronDownIcon } from '@/shared/assets/icons/ChevronDownIcon';
import { ChevronUpIcon } from '@/shared/assets/icons/ChevronUpIcon';
import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { Edit } from '@/shared/assets/icons/Edit/Edit';
import { Routes } from '@/shared/constants/routes';
import { Rating } from '@/shared/ui/Rating';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/shared/ui/Table';
import { Typography } from '@/shared/ui/Typography';

import s from './CardsTable.module.scss';

type Props = {
  data?: PaginatedCardsWithGrade['items'];
  orderByCallBack: (sortBy: string) => void;
  orderByKey: string;
};

export const CardsTable = (props: Props) => {
  const { data, orderByCallBack, orderByKey } = props;
  const { [Routes.DECK_ID]: deckId = '' } = useParams();
  const { data: meData } = useMeQuery();
  const { data: deck } = useGetDeckQuery(deckId);
  const isYourDeck = meData?.id === deck?.userId;
  const isQuestionDesc = orderByKey === 'question-desc';
  const isQuestionAsc = orderByKey === 'question-asc';
  const isAnswerDesc = orderByKey === 'answer-desc';
  const isAnswerAsc = orderByKey === 'answer-asc';
  const isUpdatedDesc = orderByKey === 'updated-desc';
  const isUpdatedAsc = orderByKey === 'updated-asc';
  const sortByQuestion = () => {
    orderByCallBack(orderByKey === 'question-desc' ? 'question-asc' : 'question-desc');
  };
  const sortByAnswer = () => {
    orderByCallBack(orderByKey === 'answer-desc' ? 'answer-asc' : 'answer-desc');
  };
  const sortByUpdated = () => {
    orderByCallBack(isUpdatedDesc ? 'updated-asc' : 'updated-desc');
  };

  return (
    <Table className={s.table}>
      <TableHead>
        <TableRow>
          <TableHeadCell className={s.clickable} onClick={sortByQuestion}>
            <Typography.Subtitle2>
              Question
              {isQuestionDesc && <ChevronDownIcon />}
              {isQuestionAsc && <ChevronUpIcon />}
            </Typography.Subtitle2>
          </TableHeadCell>
          <TableHeadCell className={s.clickable} onClick={sortByAnswer}>
            <Typography.Subtitle2>
              Answer
              {isAnswerDesc && <ChevronDownIcon />}
              {isAnswerAsc && <ChevronUpIcon />}
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
          <TableHeadCell>
            <Typography.Subtitle2>Grade</Typography.Subtitle2>
          </TableHeadCell>
        </TableRow>
      </TableHead>
      {data && (
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow key={index}>
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
                        <button className={s.cardButton}>
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
  );
};
