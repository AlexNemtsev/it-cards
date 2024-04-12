import { useForm } from 'react-hook-form';

import { FormCheckbox } from '@/components/FormCheckbox/FormCheckbox';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Typography } from '@/components/ui/Typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './LoginForm.module.scss';

const loginScheme = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
});

type FormValues = z.infer<typeof loginScheme>;

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    delayError: 2000,
    resolver: zodResolver(loginScheme),
  });
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Typography.H1>SIgn In</Typography.H1>

      <div className={s.wrapper}>
        <Input {...register('email')} error={errors.email?.message} label="Email" />
        <Input
          {...register('password')}
          error={errors.password?.message}
          label="Password"
          type="password"
        />

        <FormCheckbox control={control} label="Remember me" name="rememberMe" />
      </div>

      <Typography.Body2 as="a" className={s.forgot}>
        Forgot Password?
      </Typography.Body2>
      <Button className={s.signIn} fullWidth type="submit">
        Sign In
      </Button>

      <Typography.Body2 as="a" className={s.dontHaveAccount}>
        Don&apos;t have an account?
      </Typography.Body2>

      <Typography.Subtitle1 as="a" className={s.signUp}>
        Sign Up
      </Typography.Subtitle1>
    </form>
  );
};
