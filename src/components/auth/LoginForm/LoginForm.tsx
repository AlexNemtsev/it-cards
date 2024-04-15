import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { CheckboxWithController } from '@/components/withControllers/CheckboxWithController';
import { InputWithController } from '@/components/withControllers/InputWithController';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './LoginForm.module.scss';

const loginScheme = z.object({
  email: z.string().email(),
  password: z.string(),
  rememberMe: z.boolean().optional(),
});

type FormValues = z.infer<typeof loginScheme>;

export const LoginForm = () => {
  const {
    control,
    // formState: { errors },
    handleSubmit,
    // register,
  } = useForm<FormValues>({
    delayError: 2000,
    resolver: zodResolver(loginScheme),
  });
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Card className={s.card}>
      <Typography.H1>Sign In</Typography.H1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWithController control={control} label="Email" name="email" />
        <InputWithController control={control} label="Password" name="password" />
        {/*<Input*/}
        {/*  containerClassName={s.input}*/}
        {/*  {...register('email')}*/}
        {/*  error={errors.email?.message}*/}
        {/*  label="Email"*/}
        {/*/>*/}
        {/*<Input*/}
        {/*  containerClassName={s.input}*/}
        {/*  {...register('password')}*/}
        {/*  error={errors.password?.message}*/}
        {/*  label="Password"*/}
        {/*  type="password"*/}
        {/*/>*/}

        <CheckboxWithController
          className={s.checkbox}
          control={control}
          label="Remember me"
          name="rememberMe"
        />

        <Typography.Body2 as="a" className={s.forgot}>
          Forgot Password?
        </Typography.Body2>

        <Button className={s.signIn} fullWidth type="submit">
          Sign In
        </Button>

        <Typography.Body2 as="a" className={s.dontHaveAccount}>
          {`Don't have an account?`}
        </Typography.Body2>

        <Typography.Subtitle1 as="a" className={s.signUp}>
          Sign Up
        </Typography.Subtitle1>
      </form>
    </Card>
  );
};
