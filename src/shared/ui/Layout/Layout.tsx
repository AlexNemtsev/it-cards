import { Link, Outlet } from 'react-router-dom';

import { useMeQuery } from '@/entities/auth/api/auth';
import { useLogout } from '@/entities/auth/api/hooks';
import { BaseErrorResponse } from '@/entities/auth/api/types';
import { IncubatorLogo } from '@/shared/assets/icons/IncubatorLogo';
import { LogOutIcon } from '@/shared/assets/icons/LogOutIcon';
import { Routes } from '@/shared/constants/routes';
import { errorNotification } from '@/shared/lib/notifications';
import { Button } from '@/shared/ui/Button';
import { UserMenu } from '@/shared/ui/Layout/UserMenu/UserMenu';

import s from './Layout.module.scss';

export const Layout = () => {
  const { data, isSuccess } = useMeQuery();

  return (
    <>
      <header className={s.header}>
        <a href="https://it-incubator.io" rel="noreferrer" target="_blank">
          <IncubatorLogo />
        </a>
        {isSuccess ? (
          <UserMenu data={data} />
        ) : (
          <Button as={Link} to={Routes.MAIN} variant="secondary">
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
