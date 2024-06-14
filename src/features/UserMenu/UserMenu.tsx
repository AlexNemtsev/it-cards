import { Link } from 'react-router-dom';

import { useLogout } from '@/entities/auth/api/hooks';
import { BaseErrorResponse, User } from '@/entities/auth/api/types';
import { Avatar } from '@/entities/user/ui/Avatar';
import { Profile } from '@/shared/assets/icons/Profile/Profile';
import { SignOut } from '@/shared/assets/icons/SignOut/SignOut';
import { Routes } from '@/shared/constants/routes';
import { errorNotification } from '@/shared/lib/notifications';
import { Dropdown } from '@/shared/ui/Dropdown';
import { DropdownItem } from '@/shared/ui/Dropdown/DropdownItem';
import { DropdownItemDivider } from '@/shared/ui/Dropdown/DropdownItemDivider';
import { DropdownProfileInfo } from '@/shared/ui/Dropdown/DropdownProfileInfo';
import { Typography } from '@/shared/ui/Typography';

import s from './UserMenu.module.scss';
import DropdownProfileInfoStyles from '@/shared/ui/Dropdown/DropdownProfileInfo/DropdownProfileInfo.module.scss';

import { DropdownTrigger } from './DropdownTrigger';

type Props = {
  data: User;
};

export const UserMenu = ({ data }: Props) => {
  const [logout] = useLogout();

  const logoutHandler = async () => {
    try {
      logout();
    } catch (e) {
      const error = e as BaseErrorResponse;

      errorNotification(error.data.message || 'Some error occurred');
    }
  };

  return (
    <Dropdown trigger={<DropdownTrigger name={data.name} />}>
      <DropdownProfileInfo>
        <Avatar />
        <div>
          <Typography.Subtitle2>{data.name}</Typography.Subtitle2>
          <Typography.Caption className={DropdownProfileInfoStyles.email}>
            {data.email}
          </Typography.Caption>
        </div>
      </DropdownProfileInfo>

      <DropdownItemDivider />

      <DropdownItem>
        <Link className={s.item} to={Routes.PROFILE}>
          <Profile />
          <Typography.Caption>My Profile</Typography.Caption>
        </Link>
      </DropdownItem>

      <DropdownItemDivider />

      <DropdownItem>
        <button className={s.item} onClick={logoutHandler}>
          <SignOut />
          <Typography.Caption>Sign Out</Typography.Caption>
        </button>
      </DropdownItem>
    </Dropdown>
  );
};
