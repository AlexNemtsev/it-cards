import { useState } from 'react';

import { Edit } from '@/shared/assets/icons/Edit/Edit';
import { Avatar } from '@/shared/ui/Avatar';
import { Card } from '@/shared/ui/Card';
import { Typography } from '@/shared/ui/Typography';

import s from './PersonalInformation.module.scss';

import { EditNickNameForm, FormValues } from './EditNickNameForm/EditNickNameForm';
import { LogoutButton } from './ui/LogoutButton';
import { UploadAvatarButton } from './ui/UploadAvatarButton';

type Props = {
  avatar?: string;
  email: string;
  name: string;
  onSubmit: (data: FormValues) => void;
};
export const PersonalInformation = (props: Props) => {
  const { avatar, email, name, onSubmit } = props;

  const [isEditMode, setIsEditMode] = useState(false);

  const onSubmitPersonalInformation = (data: FormValues) => {
    setIsEditMode(false);
    onSubmit(data);
  };

  return (
    <Card className={s.card}>
      <Typography.H1 className={s.title}>Personal Information</Typography.H1>
      <div className={s.avatarWrapper}>
        <Avatar img={avatar} size={96} />

        <UploadAvatarButton />
      </div>

      {isEditMode ? (
        <EditNickNameForm onSubmit={onSubmitPersonalInformation} />
      ) : (
        <div className={s.notEditModeWrapper}>
          <Typography.H2 className={s.name}>
            {name}
            <button className={s.editName} onClick={() => setIsEditMode(true)}>
              <Edit />
            </button>
          </Typography.H2>
          <Typography.Body2 className={s.email}>{email}</Typography.Body2>
          <LogoutButton />
        </div>
      )}
    </Card>
  );
};
