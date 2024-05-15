import type { Meta, StoryObj } from '@storybook/react';

import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { Edit } from '@/shared/assets/icons/Edit/Edit';
import { Learn } from '@/shared/assets/icons/Learn/Learn';
import { Profile } from '@/shared/assets/icons/Profile/Profile';
import { SignOut } from '@/shared/assets/icons/SignOut/SignOut';
import avatar from '@/shared/assets/img/avatar-for-dropmenu.png';
import { Avatar } from '@/shared/ui/Avatar';
import { DropdownItem } from '@/shared/ui/Dropdown/DropdownItem';
import { DropdownItemDivider } from '@/shared/ui/Dropdown/DropdownItemDivider';
import { DropdownLink } from '@/shared/ui/Dropdown/DropdownLink';
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
          <DropdownLink>
            <Learn />
            <Typography.Caption>Learn</Typography.Caption>
          </DropdownLink>
        </DropdownItem>
        <DropdownItemDivider />
        <DropdownItem>
          <DropdownLink>
            <Edit />
            <Typography.Caption>Edit</Typography.Caption>
          </DropdownLink>
        </DropdownItem>
        <DropdownItemDivider />
        <DropdownItem>
          <DropdownLink>
            <Delete />
            <Typography.Caption>Delete</Typography.Caption>
          </DropdownLink>
        </DropdownItem>
      </>
    ),
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
          <DropdownLink>
            <Profile />
            <Typography.Caption>My Profile</Typography.Caption>
          </DropdownLink>
        </DropdownItem>
        <DropdownItemDivider />
        <DropdownItem>
          <DropdownLink>
            <SignOut />
            <Typography.Caption>Sign Out</Typography.Caption>
          </DropdownLink>
        </DropdownItem>
      </>
    ),
    img: avatar,
    name: 'Ivan',
  },
};
