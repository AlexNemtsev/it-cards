import { useController, useForm } from 'react-hook-form';

import { Card } from '@/components/ui//Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Typography } from '@/components/ui/Typography';
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
  const { control, handleSubmit, register } = useForm<FormValues>({
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

  const {
    field: { onChange: onEmailChange, value: emailValue },
  } = useController({
    control,
    name: 'email',
  });

  return (
    <Card className={s.logUp}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography.H1>Sign Up</Typography.H1>
        <Input onChange={onEmailChange} value={emailValue} />
        <Input {...register('password')} label="password" type="password" />
        <Input {...register('passwordConfirmation')} label="Confirm Password" type="password" />
        <Button fullWidth type="submit" variant="primary">
          Sign Up
        </Button>
        <Typography.Body2 variant="body2">Already have an account?</Typography.Body2>
        <Typography.Link1 to="/sign-up">Sign In</Typography.Link1>
      </form>
    </Card>
  );
};
