import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '.';
import { Typography } from '../Typography';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHead } from './TableHead';
import { TableHeadCell } from './TableHead/TableHeadCell';
import { TableRow } from './TableRow';

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseTable: Story = {
  args: {},
  render: () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>
              <Typography.Subtitle2>Name</Typography.Subtitle2>
            </TableHeadCell>
            <TableHeadCell>
              <Typography.Subtitle2>Cards</Typography.Subtitle2>
            </TableHeadCell>
            <TableHeadCell>
              <Typography.Subtitle2>Last Updated</Typography.Subtitle2>
            </TableHeadCell>
            <TableHeadCell>
              <Typography.Subtitle2>Created By</Typography.Subtitle2>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography.Body2>Pack Name</Typography.Body2>
            </TableCell>
            <TableCell>
              <Typography.Body2>4</Typography.Body2>
            </TableCell>
            <TableCell>
              <Typography.Body2>18.03.2001</Typography.Body2>
            </TableCell>
            <TableCell>
              <Typography.Body2>Ivan Ivanov</Typography.Body2>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};
