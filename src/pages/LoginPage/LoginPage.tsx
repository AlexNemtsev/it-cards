import { Navigate } from 'react-router-dom';

import { LoginForm, LoginFormValues } from '@/components/auth/LoginForm/LoginForm';
import { useLoginMutation, useMeQuery } from '@/entities/auth/api/auth';
import { LoginErrorResponse } from '@/entities/auth/api/types';
import { Routes } from '@/shared/constants/routes';
import { errorNotification } from '@/shared/lib/errorNotification';

export const LoginPage = () => {
  const { data } = useMeQuery();
  const [login] = useLoginMutation();

  if (data) {
    return <Navigate to={Routes.MAIN} />;
  }

  const onSubmitHandler = async (data: LoginFormValues) => {
    try {
      await login(data).unwrap();
    } catch (error) {
      const loginError = error as LoginErrorResponse;

      errorNotification(loginError.data.message);
    }
  };

  return (
    <>
      <LoginForm onSubmit={onSubmitHandler} />
    </>
  );
};
