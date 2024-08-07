import { Link } from 'react-router-dom';

import img404 from '@/shared/assets/img/404.png';
import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { PageContainer } from '@/shared/ui/PageContainer';
import { Typography } from '@/shared/ui/Typography';

import s from './Page404.module.scss';

export const Page404 = () => {
  return (
    <PageContainer className={s.page404} mt={126}>
      <img alt="404" className={s.img} src={img404} />
      <Typography.Body1 className={s.text}>Sorry! Page not found!</Typography.Body1>
      <Button as={Link} to={Routes.DECKS}>
        Back to home page
      </Button>
    </PageContainer>
  );
};
