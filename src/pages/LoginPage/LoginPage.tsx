import { Navigate } from 'react-router-dom';

import { useLogin } from '@/entities/auth/api/hooks';
import { useMeQuery } from '@/entities/user/api';
import { LoginForm, LoginFormValues } from '@/features/authForm/LoginForm/LoginForm';
import { Routes } from '@/shared/constants/routes';
import { PageContainer } from '@/shared/ui/PageContainer/PageContainer';

export const LoginPage = () => {
  const { data } = useMeQuery();
  const [login] = useLogin();

  if (data) {
    return <Navigate to={Routes.DECKS} />;
  }
  const onSubmitHandler = async (data: LoginFormValues) => {
    login(data);
  };

  return (
    <PageContainer>
      <LoginForm onSubmit={onSubmitHandler} />
    </PageContainer>
  );
};
