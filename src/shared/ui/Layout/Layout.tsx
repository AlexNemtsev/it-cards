import { Link, Outlet } from 'react-router-dom';

import { useMeQuery } from '@/entities/auth/api/auth';
import { IncubatorLogo } from '@/shared/assets/icons/IncubatorLogo';
import { Profile } from '@/shared/assets/icons/Profile/Profile';
import { SignOut } from '@/shared/assets/icons/SignOut/SignOut';
import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { Dropdown } from '@/shared/ui/Dropdown';
import { DropdownItemDivider } from '@/shared/ui/Dropdown/DropdownItemDivider';
import { DropdownLink } from '@/shared/ui/Dropdown/DropdownLink';
import { DropdownProfileInfo } from '@/shared/ui/Dropdown/DropdownProfileInfo';
import { Typography } from '@/shared/ui/Typography';

import s from './Layout.module.scss';
import DropdownProfileInfoStyles from '@/shared/ui/Dropdown/DropdownProfileInfo/DropdownProfileInfo.module.scss';

export const Layout = () => {
  const { data, isSuccess } = useMeQuery();

  return (
    <>
      <header className={s.header}>
        <a href="https://it-incubator.io" rel="noreferrer" target="_blank">
          <IncubatorLogo />
        </a>
        {isSuccess ? (
          <Dropdown img={data && data.avatar} name={data.name} withAvatar>
            <DropdownProfileInfo>
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
        ) : (
          <Button as={Link} to={Routes.LOGIN} variant="secondary">
            Sign in
          </Button>
        )}
      </header>

      <main className={s.main}>
        <Outlet />
      </main>
    </>
  );
};
