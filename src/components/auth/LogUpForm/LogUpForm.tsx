import { useForm } from 'react-hook-form';

import { Card } from '@/components/ui//Card';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { InputWithController } from '@/components/withControllers/InputWithController';
import { zodResolver } from '@hookform/resolvers/zod';

import s from './LogUpForm.module.scss';

import { logUpFormSchema } from './LogUpFormShema';
import { LogUpFormValues } from './LogUpFormValues';

type Props = {
  onSubmit: (data: Omit<LogUpFormValues, 'passwordConfirmation'>) => void;
};

export const LogUpForm = (props: Props) => {
  const { onSubmit } = props;
  const { control, handleSubmit } = useForm<LogUpFormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(logUpFormSchema),
  });

  const onSubmitLogUp = (data: LogUpFormValues) => {
    const { passwordConfirmation, ...dataLogUpForm } = data;

    onSubmit(dataLogUpForm);
  };

  return (
    <Card className={s.logUp}>
      <Typography.H1 className={s.title}>Sign Up</Typography.H1>
      <form onSubmit={handleSubmit(onSubmitLogUp)}>
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
