import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { CheckboxWithController } from '@/components/withControllers/CheckboxWithController';
import { InputWithController } from '@/components/withControllers/InputWithController';
import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Typography } from '@/shared/ui/Typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './LoginForm.module.scss';

const loginScheme = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(30),
  rememberMe: z.boolean(),
});

export type FormValues = z.infer<typeof loginScheme>;
type Props = {
  onSubmit: (data: FormValues) => void;
};
export const LoginForm = (props: Props) => {
  const { onSubmit } = props;
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    delayError: 2000,
    resolver: zodResolver(loginScheme),
  });
  const onSubmitLogIn = (data: FormValues) => {
    onSubmit(data);
  };

  return (
    <Card className={s.card}>
      <Typography.H1>Sign In</Typography.H1>

      <form onSubmit={handleSubmit(onSubmitLogIn)}>
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

        <Typography.Body2 as={Link} className={s.forgot} to={Routes.FORGOTPASSWORD}>
          Forgot Password?
        </Typography.Body2>

        <Button className={s.signIn} fullWidth type="submit">
          Sign In
        </Button>

        <Typography.Body2 className={s.dontHaveAccount}>
          {`Don't have an account?`}
        </Typography.Body2>

        <Typography.Subtitle1 as={Link} className={s.signUp} to={Routes.SIGNUP}>
          Sign Up
        </Typography.Subtitle1>
      </form>
    </Card>
  );
};
