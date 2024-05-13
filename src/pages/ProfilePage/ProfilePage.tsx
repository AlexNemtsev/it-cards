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

    // try {
    //   // await logout().unwrap();
    //   await logout().unwrap();
    //   navigate(Routes.LOGIN);
    // } catch (e) {
    //   const error = e as BaseErrorResponse;
    //
    //   infoNotification(error.data.message || 'Some error occurred');
    // }
  };

  return (
    <>
      <PersonalInformation
        logout={logoutHandler}
        name="asd"
        onSubmit={() => {}}
        setAvatar={() => {}}
      />
    </>
  );
};
