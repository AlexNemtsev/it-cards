import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { InputWithController } from '@/components/withControllers/InputWithController';
import { useRecoverPasswordMutation } from '@/entities/auth/api/auth';
import { BaseErrorResponse } from '@/entities/auth/api/types';
import { CheckEmail } from '@/entities/auth/ui/CheckEmail';
import { Routes } from '@/shared/constants/routes';
import { errorNotification } from '@/shared/lib/notifications';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Typography } from '@/shared/ui/Typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './ForgotPassword.module.scss';

const forgotPasswordScheme = z.object({
  email: z.string().email(),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordScheme>;

export const ForgotPassword = () => {
  const { control, handleSubmit } = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordScheme),
  });
  const [recoverPasswordMutation] = useRecoverPasswordMutation();
  const [email, setEmail] = useState('');
  const postRecoverPassword = async (data: ForgotPasswordFormValues) => {
    try {
      await recoverPasswordMutation(data).unwrap();
      setEmail(data.email);
    } catch (e) {
      const error = e as BaseErrorResponse;

      errorNotification(error.data.message || 'Some error occurred');
    }
  };

  const onSubmitHandler = handleSubmit(data => {
    postRecoverPassword(data);
  });

  return (
    <>
      {email ? (
        <CheckEmail email={email} />
      ) : (
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

            <Typography.Body2 className={s.remember} href="#">
              Did you remember your password?
            </Typography.Body2>

            <Typography.Subtitle1 as={Link} className={s.tryLogin} to={Routes.LOGIN}>
              Try logging in
            </Typography.Subtitle1>
          </form>
        </Card>
      )}
    </>
  );
};
