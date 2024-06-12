import { Navigate } from 'react-router-dom';

import { LoginForm, LoginFormValues } from '@/components/auth/LoginForm/LoginForm';
import { useLogin } from '@/entities/auth/api/hooks';
import { BaseErrorResponse } from '@/entities/auth/api/types';
import { useMeQuery } from '@/entities/user/api';
import { Routes } from '@/shared/constants/routes';
import { errorNotification } from '@/shared/lib/notifications';
import { PageContainer } from '@/shared/ui/PageContainer/PageContainer';

export const LoginPage = () => {
  const { data } = useMeQuery();
  const [login] = useLogin();

  if (data) {
    return <Navigate to={Routes.DECKS} />;
  }

  const onSubmitHandler = async (data: LoginFormValues) => {
    try {
      login(data);
    } catch (e) {
      const error = e as BaseErrorResponse;

      errorNotification(error.data.message || 'Some error occurred');
    }
  };

  return (
    <PageContainer>
      <LoginForm onSubmit={onSubmitHandler} />
    </PageContainer>
  );
};
