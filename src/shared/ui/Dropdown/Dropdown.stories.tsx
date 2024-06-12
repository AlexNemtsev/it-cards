import type { Meta, StoryObj } from '@storybook/react';

import { Trigger } from '@/app/Layout/UserMenu/Trigger';
import { Avatar } from '@/entities/user/ui/Avatar';
import { Burger } from '@/shared/assets/icons/Burger/Burger';
import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { Edit } from '@/shared/assets/icons/Edit/Edit';
import { Learn } from '@/shared/assets/icons/Learn/Learn';
import { Profile } from '@/shared/assets/icons/Profile/Profile';
import { SignOut } from '@/shared/assets/icons/SignOut/SignOut';
import { DropdownItem } from '@/shared/ui/Dropdown/DropdownItem';
import { DropdownItemDivider } from '@/shared/ui/Dropdown/DropdownItemDivider';
import { DropdownProfileInfo } from '@/shared/ui/Dropdown/DropdownProfileInfo';
import { Typography } from '@/shared/ui/Typography';

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
    trigger: <Burger />,
  },
};
export const DropdownWithAvatar: Story = {
  args: {
    children: (
      <>
        <DropdownProfileInfo>
          <Avatar />
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
    trigger: <Trigger name="Ivan" />,
  },
};
