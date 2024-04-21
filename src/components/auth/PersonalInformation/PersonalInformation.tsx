import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { InputWithController } from '@/components/withControllers/InputWithController';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './PersonalInformation.module.scss';

const PersonalInformationScheme = z.object({
  nickname: z.string().min(1),
});

export type FormValues = z.infer<typeof PersonalInformationScheme>;
type Props = {
  onSubmit: (data: FormValues) => void;
};
export const PersonalInformation = (props: Props) => {
  const { onSubmit } = props;
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      nickname: '',
    },
    resolver: zodResolver(PersonalInformationScheme),
  });
  const onSubmitLogIn = (data: FormValues) => {
    onSubmit(data);
  };

  return (
    <Card className={s.card}>
      <Typography.H1>Personal Information</Typography.H1>

      <form onSubmit={handleSubmit(onSubmitLogIn)}>
        <InputWithController
          containerClassName={s.input}
          control={control}
          label="Nickname"
          name="nickname"
        />
        <Button fullWidth type="submit">
          Save Changes
        </Button>
      </form>
    </Card>
  );
};
