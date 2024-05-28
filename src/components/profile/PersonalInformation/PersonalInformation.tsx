import { ChangeEvent, useState } from 'react';

import {
  EditNickNameForm,
  FormValues,
} from '@/components/profile/PersonalInformation/EditNickNameForm/EditNickNameForm';
import { Edit } from '@/shared/assets/icons/Edit/Edit';
import { LogOutIcon } from '@/shared/assets/icons/LogOutIcon';
import unknownAvatar from '@/shared/assets/img/unknown-avatar.png';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Typography } from '@/shared/ui/Typography';

import s from './PersonalInformation.module.scss';

type Props = {
  avatar?: string;
  email: string;
  logout: () => void;
  name: string;
  onSubmit: (data: FormValues) => void;
  setAvatar: (avatar: any) => void;
};
export const PersonalInformation = (props: Props) => {
  const { avatar = unknownAvatar, email, logout, name = '', onSubmit, setAvatar } = props;

  const [isEditMode, setIsEditMode] = useState(false);

  const onSubmitPersonalInformation = (data: FormValues) => {
    setIsEditMode(false);
    onSubmit(data);
  };

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const formData = new FormData();

      formData.append('avatar', e.target.files[0]);
      setAvatar(formData);

      console.log(formData);
    }
  };

  return (
    <Card className={s.card}>
      <Typography.H1 className={s.title}>Personal Information</Typography.H1>
      <div className={s.avatarWrapper}>
        <Avatar img={avatar} size={96} />

        <label className={s.uploadButton}>
          <input
            accept="image/jpeg, image/png, image/gif"
            className={s.uploadInput}
            onChange={uploadHandler}
            type="file"
          />
          <span className={s.file}>
            <Edit />
          </span>
        </label>
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

          <Typography.Body2 className={s.email}> {email}</Typography.Body2>

          <Button onClick={logout} variant="secondary">
            <LogOutIcon />
            Logout
          </Button>
        </div>
      )}
    </Card>
  );
};
