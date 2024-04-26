import { CheckEmailIcon } from '@/assets/icons/CheckEmail/CheckEmailIcon';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';

import s from './CheckEmail.module.scss';

type Props = {
  backToSignIn: () => void;
  email: string;
};
export const CheckEmail = (props: Props) => {
  const { backToSignIn, email } = props;

  return (
    <Card className={s.card}>
      <Typography.H1 className={s.title}>Check Email</Typography.H1>
      <CheckEmailIcon />
      <Typography.Body2 className={s.notice}>
        We’ve sent an Email with instructions to {email}
      </Typography.Body2>

      <Button className={s.send} fullWidth onClick={backToSignIn}>
        Back to Sign In
      </Button>
    </Card>
  );
};
