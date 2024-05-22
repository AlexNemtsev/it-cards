import { PersonalInformation } from '@/components/profile/PersonalInformation';
import { useLogoutMutation } from '@/entities/auth/api/auth';
import { PageContainer } from '@/shared/ui/PageContainer';

export const ProfilePage = () => {
  const [logout] = useLogoutMutation();

  const logoutHandler = () => {
    logout();
  };

  return (
    <PageContainer>
      <PersonalInformation
        logout={logoutHandler}
        name="asd"
        onSubmit={() => {}}
        setAvatar={() => {}}
      />
    </PageContainer>
  );
};
