import { useState } from 'react';

import { useMeQuery, useUpdateUserDataMutation } from '@/entities/user/api';
import { Avatar } from '@/entities/user/ui/Avatar';
import { Edit } from '@/shared/assets/icons/Edit/Edit';
import { Card } from '@/shared/ui/Card';
import { Typography } from '@/shared/ui/Typography';

import s from './PersonalInformation.module.scss';

import { EditNickNameForm, FormValues } from './EditNickNameForm/EditNickNameForm';
import { LogoutButton } from './ui/LogoutButton';
import { UploadAvatarButton } from './ui/UploadAvatarButton';

export const PersonalInformation = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const { data } = useMeQuery();
  const [updateUserData] = useUpdateUserDataMutation();

  const onSubmitPersonalInformation = (data: FormValues) => {
    setIsEditMode(false);
    updateUserData(data);
  };

  return (
    <Card className={s.card}>
      <Typography.H1 className={s.title}>Personal Information</Typography.H1>
      <div className={s.avatarWrapper}>
        <Avatar size={96} />
        <UploadAvatarButton />
      </div>
      {isEditMode ? (
        <EditNickNameForm name={data?.name || ''} onSubmit={onSubmitPersonalInformation} />
      ) : (
        <div className={s.notEditModeWrapper}>
          <Typography.H2 className={s.name}>
            {data?.name}
            <button className={s.editName} onClick={() => setIsEditMode(true)}>
              <Edit />
            </button>
          </Typography.H2>
          <Typography.Body2 className={s.email}>{data?.email}</Typography.Body2>
          <LogoutButton />
        </div>
      )}
    </Card>
  );
};
