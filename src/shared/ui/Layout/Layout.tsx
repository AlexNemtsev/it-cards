import { Link, Outlet } from 'react-router-dom';

import { useMeQuery } from '@/entities/auth/api/auth';
import { IncubatorLogo } from '@/shared/assets/icons/IncubatorLogo';
import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { UserMenu } from '@/shared/ui/Layout/UserMenu';

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
