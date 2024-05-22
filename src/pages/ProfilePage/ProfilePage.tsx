import { PersonalInformation } from '@/components/profile/PersonalInformation';
import { useLogoutMutation } from '@/entities/auth/api/auth';
import { BaseErrorResponse } from '@/entities/auth/api/types';
import { errorNotification } from '@/shared/lib/notifications';
import { PageContainer } from '@/shared/ui/PageContainer';

export const ProfilePage = () => {
  const [logout] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logout();
    } catch (e) {
      const error = e as BaseErrorResponse;

      errorNotification(error.data.message || 'Some error occurred');
    }
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
