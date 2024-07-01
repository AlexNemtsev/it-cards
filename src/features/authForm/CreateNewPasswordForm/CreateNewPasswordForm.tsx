import { useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { InputWithController } from '@/shared/ui/InputWithController';
import { Typography } from '@/shared/ui/Typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './CreateNewPasswordForm.module.scss';

const CreateNewPasswordFormScheme = z.object({
  password: z.string().min(3).max(30),
});

export type CreateNewPasswordFormValues = z.infer<typeof CreateNewPasswordFormScheme>;
type Props = {
  onSubmit: (password: string) => void;
};
export const CreateNewPasswordForm = (props: Props) => {
  const { onSubmit } = props;
  const { control, handleSubmit } = useForm<CreateNewPasswordFormValues>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(CreateNewPasswordFormScheme),
  });
  const onSubmitHandler = (data: CreateNewPasswordFormValues) => {
    onSubmit(data.password);
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
