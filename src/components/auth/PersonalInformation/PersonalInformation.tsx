import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Edit } from '@/assets/icons/Edit/Edit';
import unknownAvatar from '@/assets/img/unknown-avatar.png';
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
  avatar?: string;
  name: string;
  onSubmit: (data: FormValues) => void;
  setAvatar: (file: any) => void;
};
export const PersonalInformation = (props: Props) => {
  const { avatar = unknownAvatar, name, onSubmit, setAvatar } = props;

  const [isEditMode, setIsEditMode] = useState(false);

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      nickname: '',
    },
    resolver: zodResolver(PersonalInformationScheme),
  });
  const onSubmitPersonalInformation = (data: FormValues) => {
    setIsEditMode(false);
    onSubmit(data);
  };

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const reader = new FileReader();

      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
    }
  };

  return (
    <Card className={s.card}>
      <Typography.H1>Personal Information</Typography.H1>
      <div className={s.avatarWrapper}>
        <label className={s.editAvatar}>
          <input accept="image/jpeg, image/png, image/gif" onChange={uploadHandler} type="file" />

          <span>
            <Edit />
          </span>
        </label>

        <img alt="avatar" className={s.avatar} src={avatar} />

        {!isEditMode && (
          <Typography.H2 className={s.name}>
            {name}

            <button className={s.editName} onClick={() => setIsEditMode(true)}>
              <Edit />
            </button>
          </Typography.H2>
        )}
      </div>

      {isEditMode && (
        <form onSubmit={handleSubmit(onSubmitPersonalInformation)}>
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
      )}
    </Card>
  );
};
