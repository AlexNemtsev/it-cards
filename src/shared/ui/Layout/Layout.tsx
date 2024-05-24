import { Link, Outlet } from 'react-router-dom';

import { useMeQuery } from '@/entities/auth/api/auth';
import { useLogout } from '@/entities/auth/api/hooks';
import { BaseErrorResponse } from '@/entities/auth/api/types';
import { IncubatorLogo } from '@/shared/assets/icons/IncubatorLogo';
import { LogOutIcon } from '@/shared/assets/icons/LogOutIcon';
import { Routes } from '@/shared/constants/routes';
import { errorNotification } from '@/shared/lib/notifications';
import { Button } from '@/shared/ui/Button';

import s from './Layout.module.scss';

export const Layout = () => {
  const [logout] = useLogout();
  const { isSuccess } = useMeQuery();

  const logoutHandler = async () => {
    try {
      logout();
    } catch (e) {
      const error = e as BaseErrorResponse;

      errorNotification(error.data.message || 'Some error occurred');
    }
  };

  return (
    <>
      <header className={s.header}>
        <a href="https://it-incubator.io" rel="noreferrer" target="_blank">
          <IncubatorLogo />
        </a>
        {isSuccess ? (
          <Button onClick={logoutHandler} variant="secondary">
            <LogOutIcon />
            Logout
          </Button>
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
