import { CheckEmailIcon } from '@/assets/icons/CheckEmail/CheckEmailIcon';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';

import s from './CreateNewPassword.module.scss';

type Props = {
  email: string;
  onClick: () => void;
};
export const CheckEmail = (props: Props) => {
  const { email, ...restProps } = props;

  return (
    <Card className={s.card}>
      <Typography.H1>Check Email</Typography.H1>
      <CheckEmailIcon />
      <Typography.Body2 className={s.notice}>
        We’ve sent an Email with instructions to {email}
      </Typography.Body2>

      <Button className={s.send} fullWidth {...restProps}>
        Back to Sign In
      </Button>
    </Card>
  );
};
