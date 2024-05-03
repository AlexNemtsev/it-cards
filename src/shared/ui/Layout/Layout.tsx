import { Link, Outlet } from 'react-router-dom';

import { IncubatorLogo } from '@/shared/assets/icons/IncubatorLogo';
import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';

import s from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <header className={s.header}>
        <a href="https://it-incubator.io" rel="noreferrer" target="_blank">
          <IncubatorLogo />
        </a>
        <Button as={Link} to={Routes.LOGIN} variant="secondary">
          Sign in
        </Button>
      </header>
      <main className={s.main}>
        <Outlet />
      </main>
    </>
  );
};
