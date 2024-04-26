import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { InputWithController } from '@/components/withControllers/InputWithController';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './ForgotPassword.module.scss';

const forgotPasswordScheme = z.object({
  email: z.string().email(),
});

export type FormValues = z.infer<typeof forgotPasswordScheme>;
type Props = {
  onSubmit: (data: FormValues) => void;
};
export const ForgotPassword = (props: Props) => {
  const { onSubmit } = props;
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordScheme),
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

        <Typography.Body2 className={s.remember} href="#">
          Did you remember your password?
        </Typography.Body2>
        <Typography.Subtitle1 as="a" className={s.tryLogin} href="#">
          Try logging in
        </Typography.Subtitle1>
      </form>
    </Card>
  );
};
