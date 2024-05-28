import { Link } from 'react-router-dom';

import { Routes } from '@/shared/constants/routes';

export const MainPage = () => {
  return (
    <>
      <div>MainPage</div>
      <Link to={`${Routes.DECKS}/clr3b62x2051uzk2vxpvfbrbm`}>Колода</Link>
      {/*<Link to={`${Routes.DECKS}/cluilc8ul042tys2fu2ofqxay`}>Колода</Link>*/}
    </>
  );
};
