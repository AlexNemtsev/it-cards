import { Link, useLocation } from 'react-router-dom';

import { CheckEmailIcon } from '@/shared/assets/icons/CheckEmail/CheckEmailIcon';
import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Typography } from '@/shared/ui/Typography';

import s from './CheckEmail.module.scss';

type Props = {
  email?: string;
};
export const CheckEmail = (props: Props) => {
  const { email } = props;

  const location = useLocation();
  const finallyEmail = email ?? location.state;

  return (
    <Card className={s.card}>
      <Typography.H1 className={s.title}>Check Email</Typography.H1>
      <CheckEmailIcon />
      <Typography.Body2 className={s.notice}>
        We’ve sent an Email with instructions to {finallyEmail}
      </Typography.Body2>

      <Button as={Link} className={s.send} fullWidth to={Routes.LOGIN}>
        Back to Sign In
      </Button>
    </Card>
  );
};
