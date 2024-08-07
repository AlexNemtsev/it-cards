import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { InputWithController } from '@/shared/ui/InputWithController';
import { Typography } from '@/shared/ui/Typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './ForgotPasswordForm.module.scss';

const forgotPasswordFormScheme = z.object({
  email: z.string().email(),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordFormScheme>;

type Props = {
  onSubmit: (data: ForgotPasswordFormValues) => void;
};

export const ForgotPasswordForm = (props: Props) => {
  const { onSubmit } = props;

  const { control, handleSubmit } = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordFormScheme),
  });

  const onSubmitHandler = handleSubmit(data => {
    onSubmit(data);
  });

  return (
    <Card className={s.card}>
      <Typography.H1 className={s.title}>Forgot your password?</Typography.H1>

      <form onSubmit={onSubmitHandler}>
        <InputWithController
          containerClassName={s.input}
          control={control}
          label="Email"
          name="email"
        />
        <Typography.Body2 as="a" className={s.notice}>
          Enter your email address and we will send you further instructions
        </Typography.Body2>

        <Button className={s.send} fullWidth type="submit">
          Send Instructions
        </Button>
      </form>

      <Typography.Body2 className={s.remember} href="#">
        Did you remember your password?
      </Typography.Body2>

      <Typography.Subtitle1 as={Link} className={s.tryLogin} to={Routes.LOGIN}>
        Try logging in
      </Typography.Subtitle1>
    </Card>
  );
};
