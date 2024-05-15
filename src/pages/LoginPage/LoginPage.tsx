import { Navigate } from 'react-router-dom';

import { LoginForm, LoginFormValues } from '@/components/auth/LoginForm/LoginForm';
import { useLoginMutation, useMeQuery } from '@/entities/auth/api/auth';
import { BaseErrorResponse } from '@/entities/auth/api/types';
import { Routes } from '@/shared/constants/routes';
import { errorNotification } from '@/shared/lib/notifications';
import { Page } from '@/shared/ui/Page/Page';

export const LoginPage = () => {
  const { data } = useMeQuery();
  const [login] = useLoginMutation();

  if (data) {
    return <Navigate to={Routes.MAIN} />;
  }

  const onSubmitHandler = async (data: LoginFormValues) => {
    try {
      await login(data).unwrap();
    } catch (e) {
      const error = e as BaseErrorResponse;

      errorNotification(error.data.message || 'Some error occurred');
    }
  };

  return (
    <Page>
      <LoginForm onSubmit={onSubmitHandler} />
    </Page>
  );
};
