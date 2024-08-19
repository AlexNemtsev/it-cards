import { useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/Button';
import { InputWithController } from '@/shared/ui/InputWithController';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './EditNickNameForm.module.scss';

const PersonalInformationScheme = z.object({
  name: z.string().min(1),
});

export type FormValues = z.infer<typeof PersonalInformationScheme>;

type Props = {
  name: string;
  onSubmit: (data: FormValues) => void;
};
export const EditNickNameForm = (props: Props) => {
  const { name, onSubmit } = props;
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name,
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
        name="name"
      />
      <Button fullWidth type="submit">
        Save Changes
      </Button>
    </form>
  );
};
