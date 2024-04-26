import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import { InputWithController } from '@/components/withControllers/InputWithController';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './EditNickNameForm.module.scss';

const PersonalInformationScheme = z.object({
  nickname: z.string().min(1),
});

export type FormValues = z.infer<typeof PersonalInformationScheme>;
type Props = {
  onSubmit: (data: FormValues) => void;
};
export const EditNickNameForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      nickname: '',
    },
    resolver: zodResolver(PersonalInformationScheme),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWithController
        autoFocus
        containerClassName={s.input}
        control={control}
        label="Nickname"
        name="nickname"
      />
      <Button fullWidth type="submit">
        Save Changes
      </Button>
    </form>
  );
};
