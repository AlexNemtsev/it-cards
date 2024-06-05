import { Link } from 'react-router-dom';

import { Routes } from '@/shared/constants/routes';

export const MainPage = () => {
  return (
    <>
      <div>MainPage</div>
      <Link to={`${Routes.DECKS}/clr3b62x2051uzk2vxpvfbrbm`}>Колода</Link>

      {/*for qw@qw.qw*/}
      {/*<Link to={`${Routes.DECKS}/clx0bf4ar02hao501h8t541th`}>Колода</Link>*/}
    </>
  );
};
