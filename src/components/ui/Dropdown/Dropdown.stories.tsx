import type { Meta, StoryObj } from '@storybook/react';

import { Burger } from '@/assets/icons/Burger/Burger';
import { Delete } from '@/assets/icons/Delete/Delete';
import { DropdownMenuAvatar } from '@/assets/icons/DropdownMenuAvatar';
import { Edit } from '@/assets/icons/Edit/Edit';
import { Learn } from '@/assets/icons/Learn/Learn';
import { Profile } from '@/assets/icons/Profile/Profile';
import { SignOut } from '@/assets/icons/SignOut/SignOut';
import { DropdownItem } from '@/components/ui/Dropdown/DropdownItem';
import { DropdownItemDivider } from '@/components/ui/Dropdown/DropdownItemDivider';
import { DropdownProfileInfo } from '@/components/ui/Dropdown/DropdownProfileInfo';
import { Typography } from '@/components/ui/Typography';

import DropdownProfileInfoStyles from './DropdownProfileInfo/DropdownProfileInfo.module.scss';

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
        <DropdownItem>
          <Learn />
          <Typography.Caption>Learn</Typography.Caption>
        </DropdownItem>
        <DropdownItemDivider />
        <DropdownItem>
          <Edit />
          <Typography.Caption>Edit</Typography.Caption>
        </DropdownItem>
        <DropdownItemDivider />
        <DropdownItem>
          <Delete />
          <Typography.Caption>Delete</Typography.Caption>
        </DropdownItem>
      </>
    ),
    icon: <Burger />,
  },
};
export const DropdownWithAvatar: Story = {
  args: {
    children: (
      <>
        <DropdownProfileInfo>
          <DropdownMenuAvatar />
          <div>
            <Typography.Subtitle2>Ivan</Typography.Subtitle2>
            <Typography.Caption className={DropdownProfileInfoStyles.email}>
              j&johnson@gmail.com
            </Typography.Caption>
          </div>
        </DropdownProfileInfo>
        <DropdownItemDivider />
        <DropdownItem>
          <Profile />
          <Typography.Caption>My Profile</Typography.Caption>
        </DropdownItem>
        <DropdownItemDivider />
        <DropdownItem>
          <SignOut />
          <Typography.Caption>Sign Out</Typography.Caption>
        </DropdownItem>
      </>
    ),
    icon: <DropdownMenuAvatar />,
  },
};
