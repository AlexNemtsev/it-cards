import { PaginatedCardsWithGrade } from '@/entities/card/types';
import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { Edit } from '@/shared/assets/icons/Edit/Edit';
import { Rating } from '@/shared/ui/Rating';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/shared/ui/Table';
import { Typography } from '@/shared/ui/Typography';

import s from './CardsTable.module.scss';

type Props = {
  data?: PaginatedCardsWithGrade['items'];
};

export const CardsTable = (props: Props) => {
  const { data } = props;
  // сравнение userId колоды и userId из Me позволяет определить, создана ли колода пользователем
  // надо решить, передача пропсами или Me-запрос в компоненте
  const isYourDeck = true;

  return (
    <Table className={s.table}>
      <TableHead>
        <TableRow>
          <TableHeadCell>
            <Typography.Subtitle2>Question</Typography.Subtitle2>
          </TableHeadCell>
          <TableHeadCell>
            <Typography.Subtitle2>Answer</Typography.Subtitle2>
          </TableHeadCell>
          <TableHeadCell>
            <Typography.Subtitle2>Last Updated</Typography.Subtitle2>
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
                    {item.questionImg && (
                      <img alt="img" className={s.questionImg} src={item.questionImg} />
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
                  <Typography.Body2 className={s.gradeCell}>
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
                  </Typography.Body2>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      )}
    </Table>
  );
};
