import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { InputWithController } from '@/components/withControllers/InputWithController';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './CreateNewPassword.module.scss';

const CreateNewPasswordScheme = z.object({
  password: z.string().min(3).max(30),
});

export type FormValues = z.infer<typeof CreateNewPasswordScheme>;
type Props = {
  onSubmit: (data: FormValues) => void;
};
export const CreateNewPassword = (props: Props) => {
  const { onSubmit } = props;
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(CreateNewPasswordScheme),
  });
  const onSubmitHandler = (data: FormValues) => {
    onSubmit(data);
  };

  return (
    <Card className={s.card}>
      <Typography.H1 className={s.title}>Create new password</Typography.H1>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <InputWithController
          containerClassName={s.input}
          control={control}
          label="Password"
          name="password"
          type="password"
        />
        <Typography.Body2 className={s.notice}>
          Create new password and we will send you further instructions to email
        </Typography.Body2>

        <Button className={s.send} fullWidth type="submit">
          Create New Password
        </Button>
      </form>
    </Card>
  );
};
