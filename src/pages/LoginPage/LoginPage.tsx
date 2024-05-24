import { useNavigate } from 'react-router-dom';

import { LoginForm, LoginFormValues } from '@/components/auth/LoginForm/LoginForm';
import { useLoginMutation, useMeQuery } from '@/entities/auth/api/auth';
import { BaseErrorResponse } from '@/entities/auth/api/types';
import { Routes } from '@/shared/constants/routes';
import { errorNotification } from '@/shared/lib/notifications';
import { PageContainer } from '@/shared/ui/PageContainer/PageContainer';

export const LoginPage = () => {
  const { data } = useMeQuery();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  if (data) {
    return navigate(Routes.MAIN);
  }

  const onSubmitHandler = async (data: LoginFormValues) => {
    try {
      const { accessToken } = await login(data).unwrap();

      localStorage.setItem('accessToken', accessToken);
      navigate(0);
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
