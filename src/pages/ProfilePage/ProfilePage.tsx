import { PersonalInformation } from '@/components/profile/PersonalInformation';
import { useLogout } from '@/entities/auth/api/hooks';

export const ProfilePage = () => {
  const [logout] = useLogout();

  const logoutHandler = async () => {
    await logout();
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
