import { ChangeEvent } from 'react';

import { useUpdateUserDataMutation } from '@/entities/user/api';
import { Edit } from '@/shared/assets/icons/Edit';

import s from './UploadAvatarButton.module.scss';

export const UploadAvatarButton = () => {
  const [updateUserData] = useUpdateUserDataMutation();

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const formData = new FormData();

      formData.append('avatar', e.target.files[0]);
      updateUserData(formData);
    }
  };

  return (
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
  );
};
