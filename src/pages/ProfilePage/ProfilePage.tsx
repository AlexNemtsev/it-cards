import { useNavigate } from 'react-router-dom';

import { PersonalInformation } from '@/components/profile/PersonalInformation';
import { useLogoutMutation } from '@/entities/auth/api/auth';
import { Routes } from '@/shared/constants/routes';

export const ProfilePage = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await logout();
    await navigate(Routes.LOGIN);
  };

  return (
    <PersonalInformation
      logout={logoutHandler}
      name="asd"
      onSubmit={() => {}}
      setAvatar={() => {}}
    />
  );
};
