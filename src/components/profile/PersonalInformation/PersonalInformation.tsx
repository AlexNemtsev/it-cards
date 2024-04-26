import { ChangeEvent, useState } from 'react';

import { Edit } from '@/assets/icons/Edit/Edit';
import { LogOutIcon } from '@/assets/icons/LogOutIcon';
import unknownAvatar from '@/assets/img/unknown-avatar.png';
import {
  EditNickNameForm,
  FormValues,
} from '@/components/profile/PersonalInformation/EditNickNameForm/EditNickNameForm';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';

import s from './PersonalInformation.module.scss';

type Props = {
  avatar?: string;
  logout: () => void;
  name: string;
  onSubmit: (data: FormValues) => void;
  setAvatar: (file: string) => void;
};
export const PersonalInformation = (props: Props) => {
  const { avatar = unknownAvatar, logout, name, onSubmit, setAvatar } = props;

  const [isEditMode, setIsEditMode] = useState(false);

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
      <Typography.H1 className={s.title}>Personal Information</Typography.H1>
      <div className={s.avatarWrapper}>
        <img alt="avatar" className={s.avatar} src={avatar} />

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

          <Typography.Body2 className={s.email}> j&johnson@gmail.com</Typography.Body2>

          <Button onClick={logout} variant="secondary">
            <LogOutIcon />
            Logout
          </Button>
        </div>
      )}
    </Card>
  );
};
