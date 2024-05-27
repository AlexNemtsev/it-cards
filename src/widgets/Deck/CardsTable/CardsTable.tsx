import { PaginatedCardsWithGrade } from '@/entities/card/types';
import { Rating } from '@/shared/ui/Rating';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/shared/ui/Table';
import { Typography } from '@/shared/ui/Typography';

import s from './CardsTable.module.scss';

type Props = {
  data?: PaginatedCardsWithGrade['items'];
};

export const CardsTable = (props: Props) => {
  const { data } = props;

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
                  <Typography.Body2>{item.question}</Typography.Body2>
                </TableCell>
                <TableCell>
                  <Typography.Body2>{item.answer}</Typography.Body2>
                </TableCell>
                <TableCell>
                  <Typography.Body2>
                    {new Date(item.updated).toLocaleDateString('ru-RU')}
                  </Typography.Body2>
                </TableCell>
                <TableCell>
                  <Typography.Body2>
                    <Rating rating={item.grade} />
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
