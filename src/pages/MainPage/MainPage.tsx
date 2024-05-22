import { Link } from 'react-router-dom';

import { Routes } from '@/shared/constants/routes';

export const MainPage = () => {
  return (
    <>
      <div>MainPage</div>
      <Link to={`${Routes.DECKS}/cluilc8ul042tys2fu2ofqxay`}>Колода</Link>
    </>
  );
};
