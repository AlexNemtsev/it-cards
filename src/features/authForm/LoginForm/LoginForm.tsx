import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { CheckboxWithController } from '@/shared/ui/CheckboxWithController';
import { InputWithController } from '@/shared/ui/InputWithController';
import { Typography } from '@/shared/ui/Typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './LoginForm.module.scss';

const loginScheme = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(30),
  rememberMe: z.boolean(),
});

export type LoginFormValues = z.infer<typeof loginScheme>;
type Props = {
  onSubmit: (data: LoginFormValues) => void;
};
export const LoginForm = (props: Props) => {
  const { onSubmit } = props;
  const { control, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    delayError: 2000,
    resolver: zodResolver(loginScheme),
  });
  const onSubmitLogIn = handleSubmit(data => {
    onSubmit(data);
  });

  return (
    <Card className={s.card}>
      <Typography.H1>Sign In</Typography.H1>
      <form onSubmit={onSubmitLogIn}>
        <InputWithController
          containerClassName={s.input}
          control={control}
          label="Email"
          name="email"
        />
        <InputWithController
          containerClassName={s.input}
          control={control}
          label="Password"
          name="password"
          type="password"
        />
        <CheckboxWithController
          className={s.checkbox}
          control={control}
          label="Remember me"
          name="rememberMe"
        />

        <Typography.Body2 as={Link} className={s.forgot} to={Routes.FORGOT_PASSWORD}>
          Forgot Password?
        </Typography.Body2>

        <Button className={s.signIn} fullWidth type="submit">
          Sign In
        </Button>

        <Typography.Body2 className={s.dontHaveAccount}>
          {`Don't have an account?`}
        </Typography.Body2>

        <Typography.Subtitle1 as={Link} className={s.signUp} to={Routes.SIGN_UP}>
          Sign Up
        </Typography.Subtitle1>
      </form>
    </Card>
  );
};
