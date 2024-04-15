import { useForm } from 'react-hook-form';

import { Card } from '@/components/ui//Card';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { InputWithController } from '@/components/withController/InputWithController';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './LogUp.module.scss';

const schema = z
  .object({
    email: z.string().email('Invalid email address').nonempty('Enter email'),
    password: z.string().nonempty('Enter password'),
    passwordConfirmation: z.string().nonempty('Confirm your password'),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirmation) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['passwordConfirmation'],
      });
    }

    return data;
  });

type FormValues = z.infer<typeof schema>;

export const LogUp = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Card className={s.logUp}>
      <Typography.H1 className={s.title}>Sign Up</Typography.H1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <InputWithController
          containerClassName={s.input}
          control={control}
          label="Confirm password"
          name="passwordConfirmation"
          type="password"
        />
        <Button className={s.singUp} fullWidth type="submit" variant="primary">
          Sign Up
        </Button>
      </form>
      <Typography.Body2 className={s.haveAccount}>Already have an account?</Typography.Body2>
      <Typography.Subtitle1 className={s.signIn}>Sign In</Typography.Subtitle1>
    </Card>
  );
};
