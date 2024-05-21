import { PersonalInformation } from '@/components/profile/PersonalInformation';
import { useLogoutMutation } from '@/entities/auth/api/auth';

export const ProfilePage = () => {
  const [logout] = useLogoutMutation();

  const logoutHandler = () => {
    logout();
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
