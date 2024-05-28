import { PersonalInformation } from '@/components/profile/PersonalInformation';
import { useMeQuery, useUpdateUserDataMutation } from '@/entities/auth/api/auth';
import { useLogout } from '@/entities/auth/api/hooks';
import { PageContainer } from '@/shared/ui/PageContainer';

export const ProfilePage = () => {
  const [logout] = useLogout();
  const [updateUserData] = useUpdateUserDataMutation();
  const { data } = useMeQuery();

  const logoutHandler = async () => {
    await logout();
  };

  return (
    <PageContainer>
      <PersonalInformation
        logout={logoutHandler}
        name={data?.name ?? ''}
        onSubmit={updateUserData}
        setAvatar={() => {}}
      />
    </PageContainer>
  );
};
