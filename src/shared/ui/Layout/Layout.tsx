import { Link, Outlet, useNavigate } from 'react-router-dom';

import { useLogoutMutation, useMeQuery } from '@/entities/auth/api/auth';
import { BaseErrorResponse } from '@/entities/auth/api/types';
import { IncubatorLogo } from '@/shared/assets/icons/IncubatorLogo';
import { LogOutIcon } from '@/shared/assets/icons/LogOutIcon';
import { Routes } from '@/shared/constants/routes';
import { errorNotification } from '@/shared/lib/notifications';
import { Button } from '@/shared/ui/Button';

import s from './Layout.module.scss';

export const Layout = () => {
  const [logout] = useLogoutMutation();
  const { isSuccess } = useMeQuery();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logout();
      localStorage.removeItem('accessToken');
      navigate(0);
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
