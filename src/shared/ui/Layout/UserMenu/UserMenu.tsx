import { MeResponse } from '@/entities/auth/api/types';
import { Profile } from '@/shared/assets/icons/Profile/Profile';
import { SignOut } from '@/shared/assets/icons/SignOut/SignOut';
import { Routes } from '@/shared/constants/routes';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Dropdown';
import { DropdownItemDivider } from '@/shared/ui/Dropdown/DropdownItemDivider';
import { DropdownLink } from '@/shared/ui/Dropdown/DropdownLink';
import { DropdownProfileInfo } from '@/shared/ui/Dropdown/DropdownProfileInfo';
import { Typography } from '@/shared/ui/Typography';

import DropdownProfileInfoStyles from '@/shared/ui/Dropdown/DropdownProfileInfo/DropdownProfileInfo.module.scss';

type Props = {
  data: MeResponse;
};
export const UserMenu = ({ data }: Props) => {
  return (
    <Dropdown img={data && data.avatar} name={data.name}>
      <DropdownProfileInfo>
        <Avatar img={data && data.avatar} />
        <div>
          <Typography.Subtitle2>{data.name}</Typography.Subtitle2>
          <Typography.Caption className={DropdownProfileInfoStyles.email}>
            {data.email}
          </Typography.Caption>
        </div>
      </DropdownProfileInfo>
      <DropdownItemDivider />

      <DropdownLink to={Routes.PROFILE}>
        <Profile />
        <Typography.Caption>My Profile</Typography.Caption>
      </DropdownLink>
      <DropdownItemDivider />

      <DropdownLink>
        <SignOut />
        <Typography.Caption>Sign Out</Typography.Caption>
      </DropdownLink>
    </Dropdown>
  );
};
