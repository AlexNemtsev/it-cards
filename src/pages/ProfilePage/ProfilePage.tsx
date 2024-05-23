import { Navigate } from 'react-router-dom';

import { PersonalInformation } from '@/components/profile/PersonalInformation';
import { useLogoutMutation, useMeQuery } from '@/entities/auth/api/auth';
import { BaseErrorResponse } from '@/entities/auth/api/types';
import { Routes } from '@/shared/constants/routes';
import { errorNotification } from '@/shared/lib/notifications';
import { PageContainer } from '@/shared/ui/PageContainer';

export const ProfilePage = () => {
  const [logout, { isSuccess }] = useLogoutMutation();
  const { data } = useMeQuery();

  const logoutHandler = async () => {
    await logout();
    try {
      if (isSuccess) {
        return <Navigate to={Routes.LOGIN} />;
      }
    } catch (e) {
      const error = e as BaseErrorResponse;

      errorNotification(error.data.message || 'Some error occurred');
    }
  };

  return (
    <PageContainer>
      <PersonalInformation
        logout={logoutHandler}
        name={data?.name ?? ''}
        onSubmit={() => {}}
        setAvatar={() => {}}
      />
    </PageContainer>
  );
};
