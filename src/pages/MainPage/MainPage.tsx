import { Link } from 'react-router-dom';

import { Routes } from '@/shared/constants/routes';

export const MainPage = () => {
  return (
    <>
      <div>MainPage</div>
      <Link to={`${Routes.DECKS}/clr3b62x2051uzk2vxpvfbrbm`}>Колода</Link>

      {/*for qw@qw.qw*/}
      {/*<Link to={`${Routes.DECKS}/clx34f5fp03puo501nv25lbzc`}>Колода</Link>*/}
    </>
  );
};
