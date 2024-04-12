import { useController, useForm } from 'react-hook-form';

import { Card } from '@/components/ui//Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Typography } from '@/components/ui/Typography';

import s from './LogUp.module.scss';

type FormValues = {
  confirmPassword: string;
  email: string;
  password: string;
};

export const LogUp = () => {
  const { control, handleSubmit, register } = useForm<FormValues>();

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
        <Input onChange={onEmailChange} value={emailValue} />
        <Input {...register('password')} label="password" type="password" />
        <Input {...register('confirmPassword')} label="Confirm Password" type="password" />
        <Button fullWidth type="submit" variant="primary">
          Sign Up
        </Button>
        <Typography.Body2 variant="body2">Already have an account?</Typography.Body2>
        <Typography.Link1 to="/sign-up">Sign In</Typography.Link1>
      </form>
    </Card>
  );
};
