import { useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { InputWithController } from '@/shared/ui/InputWithController';
import { Typography } from '@/shared/ui/Typography';
import { zodResolver } from '@hookform/resolvers/zod';

import s from './NewPasswordForm.module.scss';

import { NewPasswordFormSchema } from './NewPasswordFormShema';
import { NewPasswordFormValues } from './NewPasswordFormValues';

type Props = {
  onSubmit: (data: NewPasswordFormValues) => void;
};

export const NewPasswordForm = (props: Props) => {
  const { onSubmit } = props;
  const { control, handleSubmit } = useForm<NewPasswordFormValues>({
    defaultValues: {
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(NewPasswordFormSchema),
  });

  const onSubmitNewPassword = (data: NewPasswordFormValues) => {
    onSubmit(data);
  };

  return (
    <Card className={s.newPassword}>
      <Typography.H1 className={s.title}>Create new password</Typography.H1>
      <form onSubmit={handleSubmit(onSubmitNewPassword)}>
        <InputWithController
          containerClassName={s.input}
          control={control}
          label="Password"
          name="password"
          type="password"
        />
        <Typography.Body2 className={s.description}>
          Create new password and we will send you further instructions to email
        </Typography.Body2>

        <Button fullWidth type="submit" variant="primary">
          Create New Password
        </Button>
      </form>
    </Card>
  );
};
