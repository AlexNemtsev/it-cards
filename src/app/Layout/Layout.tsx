import { Link, Outlet } from 'react-router-dom';

import { useMeQuery } from '@/entities/user/api';
import { UserMenu } from '@/features/UserMenu/UserMenu';
import { IncubatorLogo } from '@/shared/assets/icons/IncubatorLogo';
import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';

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
          <Button as={Link} to={Routes.DECKS} variant="secondary">
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
