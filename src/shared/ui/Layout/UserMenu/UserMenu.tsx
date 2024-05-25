import { Link } from 'react-router-dom';

import { useLogout } from '@/entities/auth/api/hooks';
import { BaseErrorResponse, MeResponse } from '@/entities/auth/api/types';
import { Profile } from '@/shared/assets/icons/Profile/Profile';
import { SignOut } from '@/shared/assets/icons/SignOut/SignOut';
import { Routes } from '@/shared/constants/routes';
import { errorNotification } from '@/shared/lib/notifications';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Dropdown';
import { DropdownItem } from '@/shared/ui/Dropdown/DropdownItem';
import { DropdownItemDivider } from '@/shared/ui/Dropdown/DropdownItemDivider';
import { DropdownProfileInfo } from '@/shared/ui/Dropdown/DropdownProfileInfo';
import { Trigger } from '@/shared/ui/Layout/UserMenu/Trigger';
import { Typography } from '@/shared/ui/Typography';

import s from './UserMenu.module.scss';
import DropdownProfileInfoStyles from '@/shared/ui/Dropdown/DropdownProfileInfo/DropdownProfileInfo.module.scss';

type Props = {
  data: MeResponse;
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

  // const logoutHandler = async () => {
  //   await logout();
  //   try {
  //     if (isSuccess) {
  //       return <Navigate to={Routes.LOGIN} />;
  //     }
  //   } catch (e) {
  //     const error = e as BaseErrorResponse;
  //
  //     errorNotification(error.data.message || 'Some error occurred');
  //   }
  // };

  return (
    <Dropdown className={s.q} trigger={<Trigger img={data.avatar} name={data.name} />}>
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
