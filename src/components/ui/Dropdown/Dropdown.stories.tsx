import type { Meta, StoryObj } from '@storybook/react';

import { Burger } from '@/assets/icons/Burger/Burger';
import { Delete } from '@/assets/icons/Delete/Delete';
import { Edit } from '@/assets/icons/Edit/Edit';
import { Learn } from '@/assets/icons/Learn/Learn';
import { DropdownItem } from '@/components/ui/Dropdown/DropdownItem';
import { Typography } from '@/components/ui/Typography';

import { Dropdown } from './Dropdown';

const meta = {
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DropdownWithBurger: Story = {
  args: {
    children: (
      <>
        <DropdownItem href="google.com">
          <Learn />
          <Typography.Caption>Learn</Typography.Caption>
        </DropdownItem>
        <DropdownItem>
          <Edit />
          <Typography.Caption>Edit</Typography.Caption>
        </DropdownItem>
        <DropdownItem>
          <Delete />
          <Typography.Caption>Delete</Typography.Caption>
        </DropdownItem>
      </>
    ),
    icon: <Burger />,
  },
};
